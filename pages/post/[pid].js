import Head from "next/head";
import { useEffect } from "react";
import styles from "../../styles/Content.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
// import { gql } from "@apollo/client";
// import { GET_POST } from "../../GraphQL/queries";
import { request, gql } from "graphql-request";
import Headd from "../../components/Head2";

const MyItem = ({ data }) => (
  <div className={styles.video}>
    {data?.media_type == "video" ? (
      <video
        className={styles.media}
        autoPlay
        onPlaying={() => {
          setTimeout(() => {
            window.open(
              "https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443",
              "_self"
            );
          }, 5000);
        }}
      >
        <source src={data?.media_url} type="video/mp4" />
      </video>
    ) : (
      <img className={styles.media} src={data?.media_url} />
    )}
    <Link href="https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443">
      <div className={styles.hashtag}>
        <text>#{data?.hashtag}</text>

        <img src={data?.creator.avatar} className={styles.profile} />
        <img className={styles.icon} src="/galleryy.png" />
      </div>
    </Link>
    <div className={styles.bottom}>
      <div className={styles.left}>
        <div className={styles.det}>
          <text className={styles.at}>@</text>
          <text className={styles.user2}>{data?.creator?.username}</text>
        </div>
        <div className={styles.musiccon}>
          {data?.audio_text ? (
            <>
              <img className={styles.music} src="/music.png" />
              <text className={styles.musictext}>{data?.audio_text}</text>
            </>
          ) : (
            <text className={styles.musictext}>
              Original by {data?.creator?.username}
            </text>
          )}
        </div>
      </div>
      <div className={styles.right}>
        <Link href="https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443">
          <img src={data?.creator?.avatar} className={styles.ppic} />
        </Link>
        <Link href="https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443">
          <div className={styles.btnscon}>
            <div className={styles.btns}>
              <img className={styles.btn} src="/heart.png" />
            </div>
            <text className={styles.user2}>{data?.likeCount}</text>
          </div>
        </Link>
        <Link href="https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443">
          <div className={styles.btnscon}>
            <div className={styles.btns}>
              <img className={styles.msgs} src="/messagw.png" />
            </div>
            <text className={styles.user2}>{data?.commentCount}</text>
          </div>
        </Link>
        <Link href="https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443">
          <div className={styles.btnscon}>
            <div className={styles.btns}>
              <img className={styles.shr} src="/share.png" />
            </div>
          </div>
        </Link>
        <Link href="https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443">
          <div className={styles.btnscon}>
            <div className={styles.btns}>
              <img className={styles.more} src="/more.png" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  </div>
);

export default function Posts({ data }) {
  const [index, setIndex] = useState(1);
  const router = useRouter();
  const { pid } = router.query;

  console.log(pid);

  // const { loading, error, data, refetch } = datas;

  useEffect(() => {
    const resizeOps = () => {
      document.documentElement.style.setProperty(
        "--vh",
        window.innerHeight * 0.01 + "px"
      );
    };

    resizeOps();
    window.addEventListener("resize", resizeOps);
    // if (data) {
    //   console.log(data);
    //   if (data.Post.media_type != "video") {
    //     setTimeout(() => {
    //       window.open(
    //         "https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443",
    //         "_self"
    //       );
    //     }, 5000);
    //   }
    // }

    // if (error) {
    //   console.log(data);
    // }

    // if (pid) {
    //   refetch();
    // }
  }, []);

  return (
    <div className={styles.container}>
      <Headd title={data?.Post.hashtag} image={data?.Post.media_thumbnail} />

      {/* <div className={styles.list}> */}
      <MyItem data={data?.Post} />
      {/* </div> */}

      <div className={styles.openapp}>
        <div className={styles.user}>
          <img src={data?.Post?.creator?.avatar} className={styles.img} />
          <div className={styles.names}>
            <text className={styles.name}>{data?.Post?.creator?.name}</text>
            <text className={styles.username}>
              Want you to join and tap in the fun!🎉
            </text>
          </div>
        </div>
        <Link href="https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443">
          <div className={styles.open}>open</div>
        </Link>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const pid = context.params.pid;

  console.log(pid);

  const query = gql`
    query Post($postId: String!) {
      Post(id: $postId) {
        _id
        hashtag
        media_type
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
    postId: pid,
  };

  const res = await request(
    "https://api.joinb.social/graphql",
    query,
    variables
  );

  // console.log()
  const data = res;

  return { props: { data: data } };
}
