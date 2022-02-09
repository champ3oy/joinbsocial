import Head from "next/head";
import { useEffect } from "react";
import styles from "../styles/Content.module.css";
// import { SnapList, SnapItem } from "react-snaplist-carousel";
import React, { useState } from "react";
import { useRouter } from "next/router";

const MyItem = ({ children }) => (
  <div className={styles.video}>
    <div className={styles.hashtag}>
      <text>#faceoffchallenge</text>
      <img className={styles.profile} />
      <img className={styles.icon} src="/galleryy.png" />
    </div>
    <div className={styles.bottom}>
      <div className={styles.left}>
        <div className={styles.det}>
          <text className={styles.at}>@</text>
          <text className={styles.user2}>jeffreyafrane</text>
        </div>
        <div className={styles.musiccon}>
          <img className={styles.music} src="/music.png" />
          <text className={styles.musictext}>
            Peaches by Justin Bieber feat G
          </text>
        </div>
      </div>
      <div className={styles.right}>
        <img className={styles.ppic} src="/7.jpg" />
        <div className={styles.btnscon}>
          <div className={styles.btns}>
            <img className={styles.btn} src="/heart.png" />
          </div>
          <text className={styles.user2}>2.2k</text>
        </div>
        <div className={styles.btnscon}>
          <div className={styles.btns}>
            <img className={styles.msgs} src="/messagw.png" />
          </div>
          <text className={styles.user2}>2.2k</text>
        </div>
        <div className={styles.btnscon}>
          <div className={styles.btns}>
            <img className={styles.shr} src="/share.png" />
          </div>
        </div>
        <div className={styles.btnscon}>
          <div className={styles.btns}>
            <img className={styles.more} src="/more.png" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function Posts() {
  const [index, setIndex] = useState(1);
  const router = useRouter();
  const { pid } = router.query;

  console.log(pid)

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
     <MyItem />
      {/* </div> */}

      <div className={styles.openapp}>
        <div className={styles.user}>
          <img className={styles.img} />
          <div className={styles.names}>
            <text className={styles.name}>Cirlorm Sel</text>
            <text className={styles.username}>
              Want you to join and tap in the fun!🎉
            </text>
          </div>
        </div>

        <div className={styles.open}>open</div>
      </div>
    </div>
  );
}
