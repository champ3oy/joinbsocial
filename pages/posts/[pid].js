import Head from "next/head";
import { useEffect } from "react";
import styles from "../../styles/Content.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { request, gql } from "graphql-request";
import Headd from "../../components/Head2";

const MyItem = ({ data }) => (
  <div className={styles.video}>
    <div className={styles.overlay} />
    <video
      width={100}
      height={100}
      className={styles.media}
      autoPlay={true}
      poster={data?.media_thumbnail}
      preload="auto"
    >
      <source src={data?.media_url} type="video/mp4" />
      <source src={data?.media_url} type="video/ogg" />
      <source src={data?.media_url} type="video/webm" />
      Your browser does not support the video tag.
    </video>

    <div className={styles.bottom}>
      <div className={styles.left}>
        <div className={styles.user}>
          <img src={data?.creator?.avatar} />
          <div className={styles.names}>
            <text className={styles.name}>{data?.creator?.name}</text>
            <text className={styles.username}>@{data?.creator?.username}</text>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.btnscon}>
          <div className={styles.btns}>
            <img className={styles.btn} src="/heart.png" />
          </div>
          <text className={styles.user2}>{data?.likeCount}</text>
        </div>

        <div className={styles.btnscon}>
          <div className={styles.btns}>
            <img className={styles.msgs} src="/messagw.png" />
          </div>
          <text className={styles.user2}>{data?.commentCount}</text>
        </div>

        <div className={styles.btnscon}>
          <div className={styles.btns}>
            <img className={styles.shr} src="/share.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Posts({ data }) {
  console.log(data);

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
    <div className={styles.container}>
      <Headd
        title={data?.GetLol.hashtag + " by @" + data?.GetLol.creator.username}
        image={data?.GetLol.media_thumbnail}
      />

      {/* <div className={styles.list}> */}
      <MyItem data={data?.GetLol} />
      {/* </div> */}

      <div className={styles.openapp}>
        <text className={styles.name}>
          BeSocial pays you to connect <br />
          and entertain the world with your creativity
        </text>

        <div className={styles.open}>Download BeSocial</div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const pid = context.params.pid;

  console.log(pid);
  const query = gql`
    query GetLol($getLolId: String) {
      GetLol(id: $getLolId) {
        _id
        hashtag
        media_type
        media_url
        media_thumbnail
        audio_text
        audio_url
        likeCount
        commentCount
        creator {
          name
          username
          avatar
        }
      }
    }
  `;

  const variables = {
    getLolId: pid,
  };

  const res = await request(
    "https://testing.joinb.social/graphql",
    query,
    variables
  );

  // console.log()
  const data = res;

  return { props: { data: data ? data : {} } };
}
