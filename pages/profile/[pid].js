import Head from "next/head";
import { useEffect } from "react";
import styles from "../../styles/Content.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { request, gql } from "graphql-request";
import Headd from "../../components/Head2";

export default function Posts({}) {
  // console.log(data);

  useEffect(() => {
    const resizeOps = () => {
      document.documentElement.style.setProperty(
        "--vh",
        window.innerHeight * 0.01 + "px"
      );
    };

    resizeOps();
    window.addEventListener("resize", resizeOps);
  }, []);

  return (
    <div style={{ backgroundColor: "white" }} className={styles.container}>
      <Headd
        title={"Download BeSocil: Endless Entertainment"}
        // image={data?.GetLol.media_thumbnail}
      />

      <div className={styles.sqr}></div>
      <text className={styles.namex}>
        BeSocial pays you to connect and <br />
        entertain the world with your creativity
      </text>

      <div className={styles.openapp2}>
        <img src="/playstore.png" />
        <img src="/appstore.png" />
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const pid = context.params.pid;

//   console.log(pid);
//   const query = gql`
//     query GetLol($getLolId: String) {
//       GetLol(id: $getLolId) {
//         _id
//         hashtag
//         media_type
//         media_url
//         media_thumbnail
//         audio_text
//         audio_url
//         likeCount
//         commentCount
//         creator {
//           name
//           username
//           avatar
//         }
//       }
//     }
//   `;

//   const variables = {
//     getLolId: pid,
//   };

//   const res = await request(
//     "https://testing.joinb.social/graphql",
//     query,
//     variables
//   );

//   // console.log()
//   const data = res;

//   return { props: { data: data ? data : {} } };
// }
