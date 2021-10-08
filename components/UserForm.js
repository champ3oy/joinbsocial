import React, { useState } from "react";
import styles from "../styles/Home.module.css";
import { gql, useMutation } from "@apollo/client";

const REGISTER_USER = gql`
  mutation (
    $registerWaitListUserName: String!
    $registerWaitListUserEmail: String!
    $registerWaitListUserPhone: String!
  ) {
    RegisterWaitListUser(
      name: $registerWaitListUserName
      email: $registerWaitListUserEmail
      phone: $registerWaitListUserPhone
    ) {
      _id
      name
    }
  }
`;

export default function UserForm(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [RegisterWaitListUser, { data, loading, error }] =
    useMutation(REGISTER_USER);

  return (
    <div className={styles.modalright}>
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
        onClick={() => {
          console.log(fullName, email, phoneNumber);
          RegisterWaitListUser({
            variables: {
              name: fullName,
              email: email,
              phone: phoneNumber,
            },
          });
          if (error) {
            console.log(error);
          } else {
            console.log(data);
            props.onDone();
          }
        }}
        className={styles.btn}
      >
        Done
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
