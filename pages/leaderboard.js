import Head from "../components/Head";
import styles from "../styles/Leader.module.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from "@apollo/client";
import Top10 from "../components/Top10";
import UserForm from "../components/UserForm";
import PositionModals from "../components/PositionModals";
import * as ga from "../lib/ga";

const client = new ApolloClient({
  uri: "https://api.joinb.social/graphql",
  cache: new InMemoryCache(),
});

export default function Leaderboard() {
  const [showModal, setShowModal] = useState(false);
  const [screen, setscreen] = useState("referral");
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);
  const [position, setposition] = useState("");
  const [refCode, setrefCode] = useState("");
  const [hide, setHide] = useState(false);
  const [copied, setcopied] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head title="Leaderboard" />

        <nav className={styles.nav}>
          <div className={styles.brand}>
            <Link legacyBehavior href="/">
              <img alt="image" src="/back.png" className={styles.back} />
            </Link>
            <div className={styles.brandcon}>
              <img alt="image" src="/favicon.svg" className={styles.logo} />
              <text className={styles.brandname}>B.Social Leaderboard</text>
            </div>
          </div>

          <img
            alt="image"
            onClick={() => {
              setShowModal4(true);
            }}
            className={styles.menu}
            src="/bar.png"
          />

          <div className={styles.right}>
            {/* <Link legacyBehavior href="/leaderboard">
              <a className={styles.textBtn}>Checkout the record &#127881;</a>
            </Link> */}
            <div
              className={styles.joinBtn}
              onClick={() => {
                setShowModal(true);
                ga.event({
                  action: "open popup",
                  params: "join waitlist",
                });
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

        <Top10
          screen={screen}
          modal5={() => {
            setShowModal5(true);
            ga.event({
              action: "open popup",
              params: "check position",
            });
          }}
          modal1={() => {
            setShowModal(true);
            ga.event({
              action: "open popup",
              params: "join waitlist",
            });
          }}
        />

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
                <img alt="image" className={styles.emoji122} src="/crown.png" />
                <text className={styles.floatText61}>Update</text>
              </div>
              <div className={styles.floatm2}>
                <img
                  alt="image"
                  className={styles.emoji14}
                  src="/fireball.png"
                />
                <img
                  alt="image"
                  className={styles.floatImg}
                  src="/float2.png"
                />
                <text className={styles.floatText71}>#Challenge</text>
              </div>
              <div className={styles.floatm3}>
                <img alt="image" className={styles.emoji13} src="/fire.png" />
                <img
                  alt="image"
                  className={styles.floatImg}
                  src="/float3.png"
                />
                <text className={styles.floatText81}>Reaction</text>
              </div>
              <div className={styles.modalleft}>
                <text className={styles.modaltext}>
                  Sign up, <br />
                  Refer and <br />
                  win
                </text>
                <text className={styles.modaltext2}>
                  Sign up to be on the exclusive group of early access users.
                  You will receive frequent updates on the app’s progress. Use
                  your unique link to refer more friends to sign up as well and
                  see yourself rise on the leaderboard. You stand a chance of
                  winning souvenirs and other goodies from the BSocial team.
                </text>
              </div>
              <img alt="image" src="/line.png" className={styles.line} />
              <UserForm
                onDone={(data) => {
                  setrefCode(data?.RegisterWaitListUser?.referralCode);
                  setShowModal(false);
                  setShowModal3(true);
                }}
                onClose={() => {
                  setShowModal(false);
                }}
              />
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
              <img alt="image" className={styles.emoji122} src="/crown.png" />
              <text className={styles.floatText61}>Update</text>
            </div> */}

              <text className={styles.modaltextc}>
                <img
                  alt="image"
                  className={styles.emojicrown}
                  src="/crown.png"
                />
                Congratulations &#127881;
              </text>
              <text className={styles.modaltext2c}>
                Thank you for joining the BSocial Waitlist and Referral program.
                You are in an exclusive group of users who will be among the
                first to be invited into this awesome app when ready. BSocial
                app is more fun when you have your friends in the app
                {!hide ? <span className={styles.dots}>...</span> : null}{" "}
                {!hide ? (
                  <span
                    onClick={() => {
                      setHide(true);
                    }}
                    className={styles.more}
                  >
                    Learn More
                  </span>
                ) : null}
                {hide ? (
                  <span className={styles.hide}>
                    and so we have created a unique link for you to invite your
                    friends into the Waitlist and Referral program. The more
                    users you bring into the program the higher you rank on the
                    leaderboard.{" "}
                    <span style={{ color: "#939393" }}>
                      You may earn many goodies from the BSocial team including
                      swags, souvenirs and getting promoted and verified in the
                      BSocial app and on BSocial’s social channels.
                    </span>
                    <span
                      onClick={() => {
                        setHide(false);
                      }}
                      className={styles.more}
                    >
                      Learn Less
                    </span>
                  </span>
                ) : null}
              </text>
              <text className={styles.modaltext2cm}>
                Thank you for joining the BSocial Waitlist and Referral program.
                You are in an exclusive group of users who will be among the
                first to be invited into this awesome app when ready. BSocial
                app is more fun when you have your friends in the app
                {!hide ? <span className={styles.dots}>...</span> : null}{" "}
                {!hide ? (
                  <span
                    onClick={() => {
                      setHide(true);
                    }}
                    className={styles.more}
                  >
                    Learn More
                  </span>
                ) : null}
                {hide ? (
                  <span className={styles.hide}>
                    and so we have created a unique link for you to invite your
                    friends into the Waitlist and Referral program. The more
                    users you bring into the program the higher you rank on the
                    leaderboard.{" "}
                    <span style={{ color: "#939393" }}>
                      You may earn many goodies from the BSocial team including
                      swags, souvenirs and getting promoted and verified in the
                      BSocial app and on BSocial’s social channels.
                    </span>
                    <span
                      onClick={() => {
                        setHide(false);
                      }}
                      className={styles.more}
                    >
                      Learn Less
                    </span>
                  </span>
                ) : null}
              </text>

              <div className={styles.rlink}>
                <div className={styles.http}>https://</div>
                <text>joinb.social/?referralCode={refCode}</text>
                {copied ? (
                  <img
                    alt="image"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "https://joinb.social/?referralCode=" + refCode
                      );
                    }}
                    className={styles.copied}
                    src="/copied.png"
                  />
                ) : (
                  <img
                    alt="image"
                    onClick={() => {
                      setcopied(true);
                      setTimeout(() => {
                        setcopied(false);
                      }, 5000);
                      navigator.clipboard.writeText(
                        "https://joinb.social/?referralCode=" + refCode
                      );
                    }}
                    className={styles.copy}
                    src="/copy.png"
                  />
                )}
              </div>

              <button
                name="btn"
                onClick={async () => {
                  const shareData = {
                    title: "B.Social",
                    text: "Join B.Social Waitlist",
                    url: "https://joinb.social/?referralCode=" + refCode,
                  };
                  try {
                    await navigator.share(shareData);
                  } catch (err) {
                    console.log(err);
                  }
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
              alt="image"
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
            <div
              style={{ marginTop: 20 }}
              onClick={() => {
                setShowModal5(true);
              }}
            >
              <a className={styles.textBtnw}>
                Check where you are on the waitlist &#127881;
              </a>
            </div>
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
              <text className={styles.modaltextc2}>
                <img
                  alt="image"
                  className={styles.emojicrown2r}
                  src="/crown.png"
                />
                Your place on the waitlist
              </text>
              <text className={styles.modaltext2c}>
                Enter your name or email in the text space to check your rank{" "}
                <br />
                in the wailist
              </text>
              <text className={styles.modaltext2cm}>
                Enter your name or email in the text <br />
                space to check your rank in <br />
                the wailist
              </text>

              <PositionModals
                onDone={(position, referral) => {
                  setposition(position);
                  setrefCode(referral);
                  setShowModal5(false);
                  setShowModal6(true);
                }}
              />

              <text
                onClick={() => {
                  setShowModal5(false);
                }}
                className={styles.close}
              >
                close
              </text>
            </div>
          </main>
        ) : null}

        {showModal6 ? (
          <main
            data-aos="zoom-in"
            data-aos-offset="50"
            data-aos-delay="10"
            className={styles.modalcon}
          >
            <div className={styles.modalc}>
              <text className={styles.modaltextc2r}>
                <img
                  alt="image"
                  className={styles.emojicrown2r2}
                  src="/crown.png"
                />
                You are{" "}
                <span style={{ color: "#7f46ff" }}>
                  {position == 1
                    ? "1st"
                    : position == 2
                    ? "2nd"
                    : position == 3
                    ? "3rd"
                    : position + "th"}
                </span>{" "}
                on <br />
                the waitlist
              </text>
              <text className={styles.modaltext2c}>
                Invite 5 more people to move you up the waitlist!
              </text>
              <text className={styles.modaltext2cm}>
                Invite 5 more people to move you up <br />
                the waitlist!
              </text>

              <button
                onClick={async () => {
                  const shareData = {
                    title: "B.Social",
                    text: "Join B.Social Waitlist",
                    url: "https://joinb.social/?referralCode=" + refCode,
                  };
                  try {
                    await navigator.share(shareData);
                  } catch (err) {
                    console.log(err);
                  }
                }}
                name="btn"
                className={styles.btn2}
              >
                Share
              </button>
              <div className={styles.rlink}>
                <div className={styles.http}>https://</div>
                <text>joinb.social/?referralCode={refCode}</text>
                {copied ? (
                  <img
                    alt="image"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        "https://joinb.social/?referralCode=" + refCode
                      );
                    }}
                    className={styles.copied}
                    src="/copied.png"
                  />
                ) : (
                  <img
                    alt="image"
                    onClick={() => {
                      setcopied(true);
                      setTimeout(() => {
                        setcopied(false);
                      }, 5000);
                      navigator.clipboard.writeText(
                        "https://joinb.social/?referralCode=" + refCode
                      );
                    }}
                    className={styles.copy}
                    src="/copy.png"
                  />
                )}
              </div>
              <text
                onClick={() => {
                  setShowModal6(false);
                }}
                className={styles.close}
              >
                close
              </text>
            </div>
          </main>
        ) : null}
      </div>
    </ApolloProvider>
  );
}
