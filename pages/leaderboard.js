import Head from "next/head";
import styles from "../styles/Leader.module.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Leaderboard() {
  const [showModal, setShowModal] = useState(false);
  const [screen, setscreen] = useState("referral");
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
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
        <div className={styles.brand}>
          <Link href="/">
            <img src="/back.png" className={styles.back} />
          </Link>
          <img src="/logo2.png" className={styles.logo} />
        </div>
        <img
          onClick={() => {
            setShowModal4(true);
          }}
          className={styles.menu}
          src="/bar.png"
        />
        <div className={styles.right}>
          <Link href="/leaderboard">
            <a className={styles.textBtn}>Checkout the record &#127881;</a>
          </Link>
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
      {/* <main className={styles.bg}> */}
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

          <Link href="/">
            <a className={styles.textBtnw}>
              Check where you are on the waitlist &#127881;
            </a>
          </Link>
        </main>
      ) : (
        <main className={styles.referral}>
          <div className={styles.rleft}>
            <text className={styles.number2}>300,000+</text>
            <text className={styles.subtext2}>Total Number of Referral</text>
            <div
              onClick={() => {
                setShowModal(true);
              }}
              className={styles.joinx}
            >
              Join the waitlist
            </div>
            <div className={styles.head}>
              <text className={styles.head1}>Top 10</text>
              <div className={styles.filter}>
                <img src="/calender.png" />
                <text>Weekly</text>
                <img src="/arrow-down.png" className={styles.ad} />
              </div>
            </div>
            <div className={styles.top5}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
                return (
                  <div className={styles.stick} key={item}>
                    <div className={styles.stickleft}>
                      <text className={styles.position}>{item}</text>
                      <div className={styles.midtext1}>
                        <text className={styles.name1}>
                          Jeffery Afrane Adu-Donkor
                        </text>
                        <text className={styles.emojis1}>1st on the rank</text>
                      </div>
                    </div>
                    <div className={styles.stickright}>
                      <text className={styles.signups}>800 Sign ups</text>
                      <img src="/arrow-up.png" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.rright}>
            <div className={styles.rankcon}>
              <text className={styles.ranking}>Ranking</text>
              <div
              onClick={() => {
                setShowModal(true);
              }}
              className={styles.joinx2}
            >
              Join the waitlist
            </div>
            </div>

            <div className={styles.tab}>
              <text>Everyone on ranking</text>

            </div>
            <div className={styles.ranklist}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => {
                return (
                  <div className={styles.listitem} key={item}>
                    <div className={styles.listitemleft}>
                      <div className={styles.imgborder}>
                        <img />
                      </div>
                      <div className={styles.midtext}>
                        <text className={styles.name}>
                          Jeffery Afrane Adu-Donkor
                        </text>
                        <text className={styles.emojis}>1st on the rank</text>
                      </div>
                    </div>
                    <div className={styles.rank}>
                      <img src="/arrow-up2.png" />
                      <text>70</text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      )}
      {/* </main> */}

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
                Let&apos;s be in <br />
                the moment <br />
                together
              </text>
              <text className={styles.modaltext2}>
                Sign up to be on the exclusive group of early access users. You
                will receive frequent updates on the app’s progress. Use your
                unique link to refer more friends to sign up as well and see
                yourself rise on the leaderboard. You stand a chance of winning
                souvenirs and other goodies from the BSocial team.
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
              <button
                onClick={() => {
                  setShowModal(false);
                  setShowModal3(true);
                }}
                className={styles.btn}
              >
                Done
              </button>
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

      {showModal3 ? (
        <main
          data-aos="zoom-in"
          data-aos-offset="50"
          data-aos-delay="10"
          className={styles.modalcon}
        >
          <div className={styles.modalc}>
            {/* <div className={styles.floatm1}>
              <img className={styles.emoji122} src="/crown.png" />
              <text className={styles.floatText61}>Update</text>
            </div> */}

            <text className={styles.modaltextc}>Congratulations &#127881;</text>
            <text className={styles.modaltext2c}>
              Thank you for joining the BSocial Waitlist and Referral program.
              You are in an exclusive group of users who will be among the first
              to be invited into this awesome app when ready. BSocial app is
              more fun when you have your friends in the app and so we have
              created a unique link for you to invite your friends into the
              Waitlist and Referral program. The more users you bring into the
              program the higher you rank on the leaderboard.{" "}
              <span style={{ color: "#939393" }}>
                You may earn many goodies from the BSocial team including swags,
                souvenirs and getting promoted and verified in the BSocial app
                and on BSocial’s social channels.
              </span>
            </text>
            <text className={styles.modaltext2cm}>
              Thank you for joining the BSocial Waitlist and Referral program.
              You are in an exclusive group of users who will be among the first
              to be invited into this awesome app when ready. BSocial app is
              more fun when you have your friends in the app and so we have
              created a unique link for you to invite your friends into the
              Waitlist and Referral program. The more users you bring into the
              program the higher you rank on the leaderboard.{" "}
              <span style={{ color: "#939393" }}>
                You may earn many goodies from the BSocial team including swags,
                souvenirs and getting promoted and verified in the BSocial app
                and on BSocial’s social channels.
              </span>
            </text>

            <div className={styles.rlink}>
              <div className={styles.http}>https://</div>
              <text>join.social/invite/jeffery.afrane/other</text>
              <img className={styles.copy} src="/copy.png" />
            </div>

            <button
              onClick={() => {
                setpage(2);
              }}
              className={styles.btn}
            >
              Share
            </button>
            <text
              onClick={() => {
                setpage(1);
                setShowModal3(false);
              }}
              className={styles.close}
            >
              close
            </text>
          </div>
        </main>
      ) : null}

      {showModal4 ? (
        <main className={styles.menumodal}>
          <img
            onClick={() => {
              setShowModal4(false);
            }}
            className={styles.x}
            src="/x.png"
          />
          <div
            className={styles.joinBtnm}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Get on the leaderboard &#127881;
          </div>
          <Link href="/leaderboard">
            <a className={styles.textBtnm}>Checkout the record &#127881;</a>
          </Link>
        </main>
      ) : null}

      {showModal5 ? (
        <main
          data-aos="zoom-in"
          data-aos-offset="50"
          data-aos-delay="10"
          className={styles.modalcon}
        >
          <div className={styles.modalc}>
            {/* <div className={styles.floatm1}>
              <img className={styles.emoji122} src="/crown.png" />
              <text className={styles.floatText61}>Update</text>
            </div> */}

            <text className={styles.modaltextc}>Congratulations &#127881;</text>
            <text className={styles.modaltext2c}>
              Thank you for joing the B.Social waitlist to the first people to
              use an awesome app design and craft for you <br />
              by you. To make it more funWe have created a unique for you to
              help you invite more friends. The more <br />
              you invite people you stand a chance to B.Social swags, promoted
              in the app and on our your socials, get verified <br />
              in the appAnd potential gain equities in B.Social App company
            </text>
            <text className={styles.modaltext2cm}>
              Thank you for joing the B.Social waitlist to the <br />
              first people to use an awesome app design and craft for you
              <br />
              by you. To make it more funWe have created a unique <br />
              for you to help you invite more friends. The more
              <br />
              you invite people you stand a chance to B.Social swags, <br />
              promoted in the app and on our your socials, get verified
              <br />
              in the appAnd potential gain equities in <br />
              B.Social App company
            </text>

            <div className={styles.rlink}>
              <div className={styles.http}>https://</div>
              <text>join.social/invite/jeffery.afrane/other</text>
              <img className={styles.copy} src="/copy.png" />
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator
                    .share({
                      title: "B.Social",
                      url: "https://joinb.social/invite/",
                    })
                    .then(() => {
                      console.log("Thanks for sharing!");
                    })
                    .catch(console.error);
                } else {
                  // fallback
                }
              }}
              className={styles.btn}
            >
              Share
            </button>
            <text
              onClick={() => {
                setpage(1);
                setShowModal5(false);
              }}
              className={styles.close}
            >
              close
            </text>
          </div>
        </main>
      ) : null}
    </div>
  );
}
