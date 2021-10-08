import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import modal from "../styles/Modal.module.css";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../GraphQL/mutations";

export default function UserForm(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showmodal, setmodal] = useState(false);
  const [err, seterr] = useState("");

  const [RegisterWaitListUser, { data, loading, error }] =
    useMutation(REGISTER_USER);

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
      <input
        type="text"
        className={styles.input}
        placeholder="Phone Number"
        onChange={(e) => {
          setPhoneNumber(e.target.value);
        }}
      />
      <button
        onClick={async () => {
          console.log(fullName, email, phoneNumber);

          try {
            await RegisterWaitListUser({
              variables: {
                name: fullName,
                email: email,
                phone: phoneNumber,
              },
            }).catch(() => {
              seterr(error.message);
              setmodal(true);
              console.log(error.message);
            });

            console.log(data);
            if (data) {
              props.onDone(data);
            }
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
