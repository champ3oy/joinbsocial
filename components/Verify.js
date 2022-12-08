import React, { useState, useEffect } from "react";
import styles from "../styles/Verify.module.css";
import { useMutation } from "@apollo/client";
import { VERIFY_USER } from "../GraphQL/mutations";
import Link from "next/link";

export default function Verify(props) {
  const [message, setmessage] = useState("Loading");
  const [isloading, setisloading] = useState(true);

  const [VerifyWaitListUserEmail, { data, loading, error }] =
    useMutation(VERIFY_USER);

  useEffect(() => {
    if (props.token) {
      // console.log(props.token);
      try {
        VerifyWaitListUserEmail({
          variables: {
            verifyToken: props.token,
          },
        });
      } catch {
        (e) => {
          console.log("error");
        };
      }
      setmessage(data?.VerifyWaitListUserEmail?.message);
      // console.log(data?.VerifyWaitListUserEmail?.message);
    }

    if (data) {
      setmessage(data?.VerifyWaitListUserEmail?.message);
      setisloading(false);
    }
  }, []);

  return (
    <main className={styles.header}>
      {data?.VerifyWaitListUserEmail?.message ==
      "Email verified successfully" ? (
        <>
          Successfully <br />
          Verified
        </>
      ) : (
        data?.VerifyWaitListUserEmail?.message
      )}

      <Link href="/leaderboard">
        <a className={styles.joinBtnl2}>Leaderboard</a>
      </Link>
    </main>
  );
}
