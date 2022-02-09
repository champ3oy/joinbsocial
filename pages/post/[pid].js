import Head from "next/head";
import { useEffect } from "react";
import styles from "../../styles/Content.module.css";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import { GET_POST } from "../../GraphQL/queries";

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

export default function Posts() {
  const [index, setIndex] = useState(1);
  const router = useRouter();
  const { pid } = router.query;

  console.log(pid);

  const { loading, error, data, refetch } = useQuery(GET_POST, {
    variables: {
      postId: pid,
    },
  });

  useEffect(() => {
    const resizeOps = () => {
      document.documentElement.style.setProperty(
        "--vh",
        window.innerHeight * 0.01 + "px"
      );
    };

    resizeOps();
    window.addEventListener("resize", resizeOps);
    if (data) {
      console.log(data);
      if (data.Post.media_type != "video") {
        setTimeout(() => {
          window.open(
            "https://apps.apple.com/us/app/bsocial-endless-entertainment/id1586761443",
            "_self"
          );
        }, 5000);
      }
    }

    if (error) {
      console.log(data);
    }

    // if (pid) {
    //   refetch();
    // }
  }, [loading, data, error]);

  return (
    <div className={styles.container}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        />
        <title>B.Social | Endless entertainment</title>
        <meta name="description" content="Endless entertainment" />
        <link rel="icon" href="/logo.png" />
      </Head>

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
