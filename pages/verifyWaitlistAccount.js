import Head from "next/head";
import styles from "../styles/Verify.module.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import UserForm from "../components/UserForm";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Verify from "../components/Verify";
import { useRouter } from "next/router";

const client = new ApolloClient({
  uri: "https://api.joinb.social/graphql",
  cache: new InMemoryCache(),
});

export default function VerifyUser() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [page, setpage] = useState(1);
  const [refCode, setrefCode] = useState("");
  const router = useRouter();
  const { verifyToken } = router.query;

  useEffect(() => {
    AOS.init({
      offset: 100,
    });

    console.log(verifyToken);
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>Verified - BSocial</title>
          <meta name="description" content="Be Social with us" />
          <link rel="icon" href="/favicon.svg" />
        </Head>

        <nav className={styles.nav}>
          <Link href="/">
            <img alt="image" src="/logo2x.png" className={styles.logo} />
          </Link>

          <div className={styles.right}>
            <Link href="/leaderboard">
              <a className={styles.joinBtnl}>Leaderboard</a>
            </Link>
            {/* <Link href="/">
              <a className={styles.textBtn}>About us</a>
            </Link> */}
            <text
              onClick={() => {
                setShowModal2(true);
              }}
              className={styles.joinBtn}
            >
              Sign up as brand &#127881;
            </text>
            <div
              className={styles.joinBtn}
              onClick={() => {
                setShowModal(true);
              }}
            >
              Join the Waitlist &#127881;
            </div>
          </div>
        </nav>

        {verifyToken ? <Verify token={verifyToken} /> : "l"}

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
                  src="/float2.png"
                />
                <text className={styles.floatText81}>Reaction</text>
              </div>

              <div className={styles.modalleft}>
                <text className={styles.modaltext}>
                  Let&apos;s be in <br />
                  the moment <br />
                  together
                </text>
                <text className={styles.modaltext2}>
                  Sign up to be on the exclusive group of early access users.
                  You will receive frequent updates on the app’s progress. Use
                  your unique link to refer more friends to sign up as well and
                  see yourself rise on the leaderboard. You stand a chance of
                  winning souvenirs and other goodies from the BSocial team.
                </text>
              </div>

              <img alt="image" src="/line.svg" className={styles.line} />

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

        {showModal2 ? (
          <main
            data-aos="zoom-in"
            data-aos-offset="50"
            data-aos-delay="10"
            className={styles.modalcon}
          >
            <div className={styles.modalb}>
              <div className={styles.floatm1b} style={{ marginTop: -60 }}>
                <img alt="image" className={styles.emoji13} src="/fire.png" />
                <img
                  alt="image"
                  className={styles.floatImg}
                  src="/float2.png"
                />
                <text className={styles.floatText81}>#challenge</text>
              </div>

              <div className={styles.modalleftb}>
                <text className={styles.modaltext}>
                  Get your <br />
                  superfans and <br />
                  influencers <br />
                  to promote <br />
                  your band.
                </text>
                <text className={styles.modaltext2}>
                  Get more engaged customers to your brand by setting up <br />
                  brand challenge in B.Social. Influencers and superfans create
                  <br />
                  content to promote your products & brand. Your brand could
                  <br />
                  go viral on social media, you know!
                </text>
              </div>

              <img alt="image" src="/line.svg" className={styles.line} />

              {page == 1 ? (
                <div className={styles.modalright}>
                  <div className={styles.pagination}>1 of 2</div>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="What is the name of your brand / product?"
                  />

                  <input
                    type="text"
                    className={styles.input}
                    placeholder="What is your brand / product email?"
                  />

                  <input
                    type="text"
                    className={styles.input}
                    placeholder="What is your brand / products phone number?"
                  />
                  <button
                    name="btn"
                    onClick={() => {
                      setpage(2);
                    }}
                    className={styles.btn}
                  >
                    Next
                  </button>
                  <text
                    onClick={() => {
                      setpage(1);
                      setShowModal2(false);
                    }}
                    className={styles.close}
                  >
                    close
                  </text>
                </div>
              ) : (
                <div className={styles.modalright}>
                  <div
                    className={styles.pagination}
                    onClick={() => {
                      setpage(1);
                    }}
                  >
                    <img alt="image" src="/back2.png" />2 of 2
                  </div>
                  <div className={styles.infocon}>
                    <input
                      required
                      type="text"
                      className={styles.input}
                      placeholder="What is your budget per day?"
                    />
                    <img alt="image" src="/info.png" className={styles.info} />
                    <img
                      alt="image"
                      src="/tooltip1.png"
                      className={styles.tooltip1}
                    />
                  </div>

                  <div className={styles.infocon}>
                    <input
                      required
                      type="text"
                      className={styles.input}
                      placeholder="Your target CPV(cost per view)?"
                    />
                    <img alt="image" src="/info.png" className={styles.info2} />
                    <img
                      alt="image"
                      src="/tooltip2.png"
                      className={styles.tooltip2}
                    />
                  </div>
                  <div className={styles.infocon}>
                    <input
                      required
                      type="text"
                      className={styles.input}
                      placeholder="What are some of the challenges you want to do for your brand?"
                    />
                    <img alt="image" src="/info.png" className={styles.info} />
                  </div>

                  <button
                    name="btn"
                    onClick={() => {
                      setpage(1);
                      setShowModal2(false);
                      setShowModal3(true);
                    }}
                    className={styles.btn}
                  >
                    Done
                  </button>
                  <text
                    onClick={() => {
                      setpage(1);
                      setShowModal2(false);
                    }}
                    className={styles.close}
                  >
                    close
                  </text>
                </div>
              )}
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
                app is more fun when you have your friends in the app and so we
                have created a unique link for you to invite your friends into
                the Waitlist and Referral program. The more users you bring into
                the program the higher you rank on the leaderboard.{" "}
                <span style={{ color: "#939393" }}>
                  You may earn many goodies from the BSocial team including
                  swags, souvenirs and getting promoted and verified in the
                  BSocial app and on BSocial’s social channels.
                </span>
              </text>
              <text className={styles.modaltext2cm}>
                Thank you for joining the BSocial Waitlist and Referral program.
                You are in an exclusive group of users who will be among the
                first to be invited into this awesome app when ready. BSocial
                app is more fun when you have your friends in the app and so we
                have created a unique link for you to invite your friends into
                the Waitlist and Referral program. The more users you bring into
                the program the higher you rank on the leaderboard.{" "}
                <span style={{ color: "#939393" }}>
                  You may earn many goodies from the BSocial team including
                  swags, souvenirs and getting promoted and verified in the
                  BSocial app and on BSocial’s social channels.
                </span>
              </text>

              <div className={styles.rlink}>
                <div className={styles.http}>https://</div>
                <text>joinb.social/invite/{refCode}</text>
                <img
                  alt="image"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "https://joinb.social/invite/" + refCode
                    );
                  }}
                  className={styles.copy}
                  src="/copy.png"
                />
              </div>

              <button
                name="btn"
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
      </div>
    </ApolloProvider>
  );
}
