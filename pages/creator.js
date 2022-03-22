import styles from "../styles/Creator.module.scss";
import home from "../styles/Home.module.scss";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import UserForm from "../components/UserForm";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Marquee from "react-fast-marquee";
import Head from "../components/Head";
import BrandModal from "../components/BrandModal";
import Ambassador from "../components/Ambassador";
import * as ga from "../lib/ga";
import { useRouter } from "next/router";
import CountryList from "../components/Country";

const client = new ApolloClient({
  uri: "https://api.joinb.social/graphql",
  cache: new InMemoryCache(),
});

export default function Creator() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [page, setpage] = useState(1);
  const [refCode, setrefCode] = useState("");
  const router = useRouter();
  const { referralCode, pid } = router.query;
  const [hide, setHide] = useState(false);
  const [copied, setcopied] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [platform, setplatform] = useState("");
  const [username, setusername] = useState("");
  const [following, setfollowing] = useState("");
  const [showFol, setshowFol] = useState(false);
  const [socials, setsocials] = useState([]);
  const [numsocials, setnumsocials] = useState([]);

  const [loading1, setloading] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [code, setcode] = useState("+1");

  const [dropdown, setdropdown] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
    // console.log("hey", referralCode);

    if (referralCode !== undefined) {
      // console.log(referralCode);
      setrefCode(referralCode);
      setShowModal(true);
      ga.event({
        action: "open popup",
        params: "join waitlist",
      });
    }
  }, [referralCode]);

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head title="BSocial" />

        <nav className={styles.nav}>
          <img alt="image" src="/logo2x.png" className={styles.logo} />

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
                ga.event({
                  action: "open popup",
                  params: "Sign up as a brand",
                });
              }}
              className={styles.joinBtn}
            >
              Brand sign up &#127881;
            </text>
            <div
              className={styles.joinBtn}
              onClick={() => {
                setdropdown(!dropdown);
              }}
              style={{ width: 150 }}
            >
              {"    "}Sign up🌟{"    "}
              {dropdown ? (
                <div className={styles.signup}>
                  <text
                    onClick={() => {
                      ga.event({
                        action: "open popup",
                        params: "sign up as ambassador",
                      });
                      setShowModal4(true);
                    }}
                    className={styles.signuptext}
                  >
                    Ambassador
                  </text>

                  <Link href="/creator">
                    <text className={styles.signuptext}>Creator</text>
                  </Link>

                  <Link href="/celebrity">
                    <text className={styles.signuptext}>Celebrity</text>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        </nav>
        <div className={styles.cont}>
          <div className={styles.middle}>
            <div className={styles.Head}>
              <text className={styles.sign}>Sign Up as creator</text>
            </div>
            <div className={styles.one}>
              <input
                onChange={(text) => {
                  setname(text.target.value);
                }}
                value={name}
                placeholder="Your name"
              ></input>
            </div>
            <div className={styles.couple}>
              <div className={styles.two}>
                <input
                  onChange={(text) => {
                    setemail(text.target.value);
                  }}
                  value={email}
                  placeholder="Your email"
                ></input>
              </div>
              <div className={styles.three}>
                {/* <div className={styles.small}>
                  +1 <image></image>
                </div> */}
                <div className={styles.small}>
                  {code ? <span>{code}</span> : null}
                  <select
                    onChange={(e) => {
                      setcode(e.target.value);
                    }}
                    className={home.phonelistx}
                  >
                    {CountryList.map((item) => {
                      return (
                        <option key={item.name} value={item.code}>
                          {item.code + " - " + item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <input
                  onChange={(text) => {
                    setphone(text.target.value);
                  }}
                  value={phone}
                  placeholder="Your phone number"
                ></input>
              </div>
            </div>

            {numsocials.map((item) => {
              return (
                <div
                  style={{ marginBottom: 20, opacity: 0.5 }}
                  className={styles.couples}
                >
                  <div className={styles.four}>
                    <input
                      value={item.platform}
                      disabled
                      placeholder="Pick social media platform"
                    ></input>
                  </div>
                  <div className={styles.five}>
                    <input
                      value={item.username}
                      disabled
                      placeholder="Type your username"
                    ></input>
                  </div>
                  <div className={styles.six}>
                    <text style={{ color: "white" }}>{item.following}</text>
                  </div>
                </div>
              );
            })}

            <div className={styles.couples}>
              <div className={styles.four}>
                <input
                  onChange={(text) => {
                    setplatform(text.target.value);
                  }}
                  value={platform}
                  placeholder="Pick social media platform"
                ></input>
                <image></image>
              </div>
              <div className={styles.five}>
                <input
                  onChange={(text) => {
                    setusername(text.target.value);
                  }}
                  value={username}
                  placeholder="Type your username"
                ></input>
              </div>
              <div className={styles.six}>
                <text
                  onClick={() => {
                    setshowFol(!showFol);
                  }}
                >
                  {following ? following : "Social following"}
                </text>

                {showFol ? (
                  <div className={styles.follPop}>
                    <text
                      onClick={() => {
                        setfollowing("0 - 100K followers");
                        setshowFol(false);
                      }}
                    >
                      0 - 100K followers
                    </text>
                    <text
                      onClick={() => {
                        setfollowing("100K - 300K followers");
                        setshowFol(false);
                      }}
                    >
                      100K - 300K followers
                    </text>
                    <text
                      onClick={() => {
                        setfollowing("300K - 600K followers");
                        setshowFol(false);
                      }}
                    >
                      300K - 600K followers
                    </text>
                    <text
                      onClick={() => {
                        setfollowing("600K - 800K followers");
                        setshowFol(false);
                      }}
                    >
                      600K - 800K followers
                    </text>
                    <text
                      onClick={() => {
                        setfollowing("1M+ followers");
                        setshowFol(false);
                      }}
                    >
                      1M+ followers
                    </text>
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.lowright}>
              <div
                onClick={() => {
                  setnumsocials([
                    {
                      platform: platform,
                      username: username,
                      following: following,
                    },
                    ...numsocials,
                  ]);

                  setplatform("");
                  setusername("");
                  setfollowing("");
                }}
                className={styles.handle}
              >
                <text>+ Add more social handle</text>
              </div>
              <div
                onClick={() => {
                  const data = {
                    name: name,
                    email: email,
                    phone: code + phone,
                    social: [numsocials],
                  };

                  setloading(true);
                  fetch("https://purple-go.herokuapp.com/api/addCreator", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  })
                    .then((response) => response.json())
                    .then((data) => {
                      if (data.status) {
                        // onClose();

                        setloading(false);
                      } else {
                        console.log(data);
                        // onClose(data.message);
                        setloading(false);
                      }
                    })
                    .catch((error) => {
                      setloading(false);
                      // setemail1("");
                      console.error("Error:", error);
                    });
                }}
                className={styles.done}
              >
                <text>{loading1 ? "Loading..." : "Done"}</text>
              </div>
            </div>
          </div>
        </div>

        <footer className={`${styles.footer} ${styles.section}`}>
          <div className={styles.footContent}>
            <text className={`${styles.footerText}`} data-aos="zoom-in">
              <img alt="image" className={styles.emoji12} src="/crown.png" />
              <div className={styles.float6}>
                <text className={styles.floatText6}>Update</text>
              </div>
              <div className={styles.float7}>
                <img alt="image" className={styles.emoji13} src="/fire.png" />
                <img
                  alt="image"
                  className={styles.floatImg}
                  src="/float2.png"
                />
                <text className={styles.floatText7}>Reaction</text>
              </div>
              <div className={styles.float8}>
                <img
                  alt="image"
                  className={styles.emoji14}
                  src="/fireball.png"
                />
                <img
                  alt="image"
                  className={styles.floatImg}
                  src="/float3.png"
                />
                <text className={styles.floatText8}>#Challenge</text>
              </div>
              Get ready for <br />
              the release
            </text>
            <text className={`${styles.footerTextm}`} data-aos="zoom-in">
              <div className={styles.float6}>
                <img alt="image" className={styles.emoji12} src="/crown.png" />
                <text className={styles.floatText6}>Update</text>
              </div>
              <div className={styles.float7}>
                <img alt="image" className={styles.emoji13} src="/fire.png" />
                <img
                  alt="image"
                  className={styles.floatImg}
                  src="/float2.png"
                />
                <text className={styles.floatText7}>Reaction</text>
              </div>
              <div className={styles.float8}>
                <img
                  alt="image"
                  className={styles.emoji14}
                  src="/fireball.png"
                />
                <img
                  alt="image"
                  className={styles.floatImg}
                  src="/float3.png"
                />
                <text className={styles.floatText8}>#Challenge</text>
              </div>
              Get <br />
              ready for <br />
              the release
            </text>

            <div
              className={styles.joinBtn5}
              onClick={() => {
                setShowModal(true);
                ga.event({
                  action: "open popup",
                  params: "join waitlist",
                });
              }}
            >
              Join the Waitlist &#127881;
            </div>
          </div>
          <div className={styles.foot}>
            <div className={styles.fleft}>
              <Link href="/terms">
                <text>Terms</text>
              </Link>
              <Link href="/privacy">
                <text>Privacy</text>
              </Link>
            </div>
            {/* <img alt="image" className={styles.fcenter} src="/california.png" /> */}
            <div className={styles.fcenter}>
              &copy; 2022 BB.Social Inc. All rights reserved.
              contactus@joinb.social
            </div>
            <div className={styles.fright}>
              <a href="https://www.facebook.com/JoinBSocial">
                <img alt="image" src="/fb.png" className={styles.icon} />
              </a>
              <a href="https://twitter.com/BeSocia14814345">
                <img alt="image" src="/twitter.svg" className={styles.icon} />
              </a>
              <a href="https://www.instagram.com/bsocial_inc/">
                <img alt="image" src="/ig.png" className={styles.icon} />
              </a>
              <a href="https://www.tiktok.com/@bsocial_inc">
                <img alt="image" src="/tk.png" className={styles.icon} />
              </a>
            </div>
          </div>
        </footer>

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
                  Win
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
                refs={refCode}
              />
            </div>
          </main>
        ) : null}

        {showModal2 ? (
          <BrandModal
            page={page}
            onClose={() => {
              setpage(1);
              setShowModal2(false);
            }}
            onNext={() => {
              setpage(page + 1);
            }}
            onBack={() => {
              setpage(page - 1);
            }}
            onDone={() => {
              setpage(1);
            }}
          />
        ) : null}

        {showModal4 ? (
          <Ambassador
            page={page}
            onClose={() => {
              setpage(1);
              setShowModal4(false);
            }}
            onNext={() => {
              setpage(page + 1);
            }}
            onBack={() => {
              setpage(page - 1);
            }}
            onDone={() => {
              setpage(1);
            }}
          />
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
                onClick={() => {
                  if (navigator.share) {
                    navigator
                      .share({
                        title: "B.Social",
                        url: "https://joinb.social/?referralCode=" + refCode,
                      })
                      .then(() => {
                        console.log("Thanks for sharing!");
                      })
                      .catch(console.error);
                  } else {
                    // fallback
                    console.log(share);
                  }
                }}
                className={styles.btn}
              >
                Share
              </button>
              <text
                onClick={() => {
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
