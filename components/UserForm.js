import React, { useState, useEffect, useMemo } from "react";
import styles from "../styles/Home.module.scss";
import modal from "../styles/Modal.module.css";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../GraphQL/mutations";
import CountryList from "../components/Country";

export default function UserForm(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setcode] = useState("+1");
  const [showmodal, setmodal] = useState(false);
  const [err, seterr] = useState("");

  const [RegisterWaitListUser, { data, loading, error }] =
    useMutation(REGISTER_USER);

  useEffect(() => {
    if (data) {
      props.onDone(data);
    }
    if (error) {
      seterr(error?.message);
      setmodal(true);
    } else {
      setmodal(false);
    }
  }, [data, error]);

  return (
    <div className={styles.modalright}>
      {showmodal ? (
        <div className={modal.con}>
          <div className={modal.modal}>
            <text className={modal.title}>Error</text>
            <text className={modal.subtitle}>{err}</text>
            <text
              onClick={() => {
                setmodal(false);
              }}
              className={modal.close}
            >
              close
            </text>
          </div>
        </div>
      ) : null}
      <input
        type="text"
        className={styles.input}
        placeholder="Full Name"
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />

      <input
        type="text"
        className={styles.input}
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <div className={`${styles.phonelistcon}`}>
        <div className={styles.phonelist}>
          {code ? <span>{code}</span> : null}
          <select
            onChange={(e) => {
              setcode(e.target.value);
            }}
            className={styles.phonelistx}
          >
            {CountryList.map((item) => {
              return (
                <option key={item.name} value={item.code}>
                  {item.code + " - " + item.name}
                </option>
              );
            })}
          </select>
          </div>
          <input
            type="text"
            className={styles.inputx}
            placeholder="Phone Number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        
      </div>
      <button
        onClick={() => {
          try {
            RegisterWaitListUser({
              variables: {
                name: fullName,
                email: email,
                phone: code + phoneNumber,
                referredByCode: props.refs ? props.refs : null,
              },
            }).catch(() => {
              if (error) {
                seterr(error?.message);
                setmodal(true);
              } else {
                setmodal(false);
              }
            });
          } catch {
            (e) => {
              console.log("error");
            };
          }
        }}
        className={styles.btn}
      >
        {loading ? "Loading" : "Done"}
      </button>
      <text
        onClick={() => {
          props.onClose();
        }}
        className={styles.close}
      >
        close
      </text>
    </div>
  );
}
