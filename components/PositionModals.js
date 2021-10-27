import React, { useState, useEffect } from "react";
import styles from "../styles/Leader.module.css";
import modal from "../styles/Modal.module.css";
import { useQuery } from "@apollo/client";
import { GET_POSTION } from "../GraphQL/queries";

export default function PositionModals(props) {
  const [email, setEmail] = useState("");
  const [position, setposition] = useState("");
  const [referral, setreferral] = useState("");
  const [showmodal, setmodal] = useState(false);
  const [err, seterr] = useState("");

  const { loading, error, data } = useQuery(GET_POSTION, {
    variables: {
      id: email.toLocaleLowerCase(),
    },
  });

  useEffect(() => {
    if (data) {
      setposition(data.getMyRankNumberforWaitList.message);
      setreferral(data.getMyRankNumberforWaitList.json.referralCode);
    }
  }, [data]);

  return (
    <>
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
        className={styles.rankinput}
        type="text"
        placeholder="Enter your email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <button
        onClick={() => {
          if (data && position) {
            props.onDone(position, referral);
          } else if (error) {
            seterr(error.message);
            setmodal(true);
          }
        }}
        className={styles.btn}
      >
        {loading ? "Loading" : "Done"}
      </button>
    </>
  );
}
