import Head from "next/head";
import styles from "../styles/Leader.module.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Leaderboard() {
  const [showModal, setShowModal] = useState(false);
  const [screen, setscreen] = useState("referral");
  const [page, setpage] = useState(1);

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Leaderboard - BSocial</title>
        <meta name="description" content="Be Social with us" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <nav className={styles.nav}>
        <img src="/logo2x.png" className={styles.logo} />

        <div className={styles.right}>
          <a href="/leaderboard" className={styles.textBtn}>
            Checkout the leaderboard &#127881;
          </a>

          <div
            className={styles.joinBtn}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Get on the leaderboard &#127881;
          </div>
        </div>
      </nav>

      <main className={`${styles.accordion}`}>
        <div
          onClick={() => {
            setscreen("referral");
          }}
          className={` ${styles.tabs} ${
            screen == "referral" ? styles.active : ""
          }`}
        >
          Referral
        </div>
        <div
          onClick={() => {
            setscreen("waitlist");
          }}
          className={` ${styles.tabs} ${
            screen == "waitlist" ? styles.active : ""
          }`}
        >
          Waitlist
        </div>
      </main>

      {screen == "waitlist" ? (
        <main className={styles.waitlist}>
          <text className={styles.number}>300,000+</text>
          <text className={styles.subText}>Total Number on Waitlist</text>
          <div
            className={styles.joinBtn}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Join the waitlist &#127881;
          </div>
        </main>
      ) : (
        <main className={styles.referral}>
          <div className={styles.rleft}>
            <text className={styles.number2}>300,000+</text>
            <text className={styles.subtext2}>Total Number of Referral</text>

            <div className={styles.head}>
              <text className={styles.head1}>Top 5</text>
              <div className={styles.filter}>
                <img />
                <text>Weekly</text>
                <img />
              </div>
            </div>

            <div className={styles.stick}>
              <text className={styles.position}>1</text>
              <div className={styles.midtext1}>
                <text className={styles.name1}>Jeffery Afrane Adu-Donkor</text>
                <text className={styles.emojis1}>1st on the rank</text>
              </div>
              <text className={styles.signups}>800 Sign ups</text>
              <img />
            </div>
          </div>
          <div className={styles.rright}>
            <text className={styles.ranking}>Ranking</text>

            <div className={styles.tab}>
              <text>Everyone on ranking</text>
            </div>

            <div className={styles.listitem}>
              <div className={styles.imgborder}>
                <img />
              </div>
              <div className={styles.midtext}>
                <text className={styles.name}>Jeffery Afrane Adu-Donkor</text>
                <text className={styles.emojis}>1st on the rank</text>
              </div>
              <div className={styles.rank}>
                <img />
                <text>70</text>
              </div>
            </div>
          </div>
        </main>
      )}

      {showModal ? (
        <main
          data-aos="zoom-in"
          data-aos-offset="50"
          data-aos-delay="10"
          className={styles.modalcon}
        >
          <div className={styles.modal}>
            <div className={styles.floatm1}>
              <img className={styles.emoji122} src="/crown.png" />
              <text className={styles.floatText61}>Update</text>
            </div>
            <div className={styles.floatm2}>
              <img className={styles.emoji14} src="/fireball.png" />
              <img className={styles.floatImg} src="/float2.png" />
              <text className={styles.floatText71}>#Challenge</text>
            </div>
            <div className={styles.floatm3}>
              <img className={styles.emoji13} src="/fire.png" />
              <img className={styles.floatImg} src="/float2.png" />
              <text className={styles.floatText81}>Reaction</text>
            </div>

            <div className={styles.modalleft}>
              <text className={styles.modaltext}>
                Lets be in <br />
                the moment <br />
                together
              </text>
              <text className={styles.modaltext2}>
                Get all updates on when B.Social is coming, <br />
                what we up to in the news and how you can be apart
                <br />
                of the tester too
              </text>
            </div>

            <img src="/line.svg" className={styles.line} />

            <div className={styles.modalright}>
              <input
                type="text"
                className={styles.input}
                placeholder="Full Name"
              />

              <input type="text" className={styles.input} placeholder="Email" />
              <input
                type="text"
                className={styles.input}
                placeholder="Phone Number"
              />
              <button className={styles.btn}>Done</button>
              <text
                onClick={() => {
                  setShowModal(false);
                }}
                className={styles.close}
              >
                close
              </text>
            </div>
          </div>
        </main>
      ) : null}
    </div>
  );
}
