import Head from "next/head";
import styles from "../styles/Home.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [page, setpage] = useState(1);

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const CustomDot = ({ onClick, ...rest }) => {
    const {
      onMove,
      index,
      active,
      carouselState: { currentSlide, deviceType },
    } = rest;
    const carouselItems = ["", "", ""];
    return (
      <button
        className={active ? styles.active : styles.inactive}
        onClick={() => onClick()}
      />
    );
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>BSocial</title>
        <meta name="description" content="Be Social with us" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <div className={`${styles.section}`}>
        <nav className={styles.nav}>
          <img src="/logo2x.png" className={styles.logo} />

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

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          showArrows={false}
          showStatus={false}
          autoPlaySpeed={5000}
          showDots={true}
          swipeable={true}
          arrows={false}
          pauseOnHover={false}
          customDot={<CustomDot />}
        >
          <main id="herotext" className={styles.hero}>
            <div className={styles.heroContent} data-aos="zoom-in">
              <text className={`${styles.heroText}`}>
                Be in the moment <br />
                with your FRIENDS
              </text>
              <text className={`${styles.heroTextm}`}>
                Be in the <br />
                moment with <br />
                your FRIENDS
              </text>
              <text className={`${styles.heroSubText}`}>
                Not your typical app to post content just for fun. With B.Social
                you build close relationships <br />
                with your friends & followers through your interactions in the
                app plus your participation in the <br />
                challenges.
              </text>
              <text className={`${styles.heroSubTextm}`}>
                Not your typical app to post content just
                <br />
                for fun. With B.Social you build close
                <br />
                relationships with your friends & followers
                <br />
                through your interactions in the app plus
                <br />
                your participation in the challenges.
              </text>

              <div
                className={styles.joinBtn2}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Join the Waitlist &#127881;
              </div>

              <Link href="/leaderboard">
                <a className={styles.lblink}>
                  Checkout the Waitlist Leaderboard
                </a>
              </Link>
            </div>
          </main>
          <main id="herotext" className={styles.hero2}>
            <div className={styles.heroContent} data-aos="zoom-in">
              <text className={`${styles.heroText}`}>
                Get paid for promoting <br />
                your favorite brands
              </text>
              <text className={`${styles.heroTextm}`}>
                Get paid for <br />
                promoting
                <br />
                your favorite
                <br />
                brands
              </text>
              <text className={`${styles.heroSubText}`}>
                As a creator or influencer, you can make sustainable incomes
                from promoting your favorite products
                <br />
                and brands in the B.Social app & in other social apps. The more
                views your content receives the higher the
                <br />
                revenue you get.
              </text>
              <text className={`${styles.heroSubTextm}`}>
                As a creator or influencer, you can make <br />
                sustainable incomes from promoting your favorite <br />
                products and brands in the B.Social app & in other <br />
                social apps. The more views your contact receives the <br />
                higher the revenue you get.
              </text>

              <div
                className={styles.joinBtn2}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Join the Waitlist &#127881;
              </div>
              <Link href="/leaderboard">
                <a className={styles.lblink}>
                  Checkout the Waitlist Leaderboard
                </a>
              </Link>
            </div>
          </main>
          <main id="herotext" className={styles.hero3}>
            <div className={styles.heroContent} data-aos="zoom-in">
              <div
                className={styles.brands}
                onClick={() => {
                  setShowModal(true);
                }}
              ></div>
              <text className={`${styles.heroText}`}>
                Get your superfans <br />
                and influencers to promote <br />
                your brand
              </text>
              <text className={`${styles.heroTextm}`}>
                Get your <br />
                superfans <br /> and <br />
                influencers
                <br />
                to promote
                <br />
                your brand
              </text>
              <text className={`${styles.heroSubText}`}>
                Get more engaged customers to your brand by setting up brand
                challenges in <br />
                B.Social. Influencers and superfans create content to promote
                your products & brand.
                <br />
                Your brand could go viral on social media, you know!
              </text>
              <text className={`${styles.heroSubTextm}`}>
                Get more engaged customers to your brand by <br />
                setting up brand challenges in B.Social. Influencers <br />
                and superfans create content to promote your products & <br />
                brand. Your brand could go viral on social media, you know!
              </text>

              <div
                onClick={() => {
                  setShowModal2(true);
                }}
                className={styles.joinBtn2}
              >
                Sign up as brand &#127881;
              </div>
              <Link href="/leaderboard">
                <a className={styles.lblink}>
                  Checkout the Waitlist Leaderboard
                </a>
              </Link>
            </div>
          </main>
        </Carousel>
      </div>

      <main className={`${styles.content1} ${styles.section}`}>
        <div className={styles.content1Left} data-aos="fade-up">
          <img className={styles.emoji5} src="/hand.png" />
          <text className={styles.challenge}>#challenge</text>
          <text className={styles.content1Text}>
            Create <br />
            moments <br />
            together
          </text>
          <text className={styles.content1Textm}>
            Create <br />
            moments <br />
            together
          </text>
          <text className={`${styles.content1Subtext}`}>
            Create a challenge with friends, invite <br />
            them to participate and watch their <br />
            creative juices flow
          </text>

          <div
            className={styles.joinBtn3}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Join the Waitlist &#127881;
          </div>
        </div>

        <div className={styles.screen1} data-aos="fade-up">
          <img className={styles.emoji4} src="/fire.png" />
          <div>
            <div className={styles.bar} />
            <text className={styles.hashtag}>#danceyour##</text>
          </div>
          <text className={styles.views}>50k Views &#129310;</text>

          <div className={styles.float1} data-aos="fade-up">
            <img className={styles.floatImg} src="/float1.png" />
            <text className={styles.floatText}>Luke join your challenge</text>
          </div>
          <div className={styles.float2} data-aos="fade-up">
            <img className={styles.floatImg} src="/float2.png" />
            <text className={styles.floatText}>Linda join your challenge</text>
          </div>
          <div className={styles.float3} data-aos="fade-up">
            <img className={styles.floatImg3} src="/float3.png" />
            <text className={styles.floatText3}>Liza join your challenge</text>
          </div>
        </div>
      </main>

      <main className={`${styles.content2} ${styles.section}`}>
        <div className={styles.screen2} data-aos="fade-up">
          <img className={styles.emoji7} src="/crown.png" />
          <img className={styles.emoji8} src="/crown.png" />
          <div className={styles.col}>
            <text className={styles.views2}>@Hanrtx</text>
            <text className={styles.hashtag2}>24k Views &#129310;</text>
          </div>
          <div className={styles.float4} data-aos="fade-up">
            <text className={styles.floatText4}>
              Living in the moment &#9975;
            </text>
          </div>
          <div className={styles.float5} data-aos="fade-up">
            <text className={styles.floatText5}>
              See my view today &#128293;&#128293;&#128293;
            </text>
          </div>
        </div>
        <div className={styles.content2Left} data-aos="fade-up">
          <text className={styles.challenge}>#Reaction</text>
          <text className={styles.content2Text}>
            Realtime <br />
            reaction to <br />
            moments
          </text>
          <text className={`${styles.content2Subtext}`}>
            Are you in an exciting moment or at an <br />
            incredibly exciting location with breathtaking <br />
            view? Then activate your reaction+ camera and <br />
            share the excitement with friends & followers
          </text>
          <text className={`${styles.content2Subtextm}`}>
            Are you in an exciting moment or at an <br />
            incredibly exciting location with <br />
            breathtaking view? Then activate your <br />
            reaction+ camera and share the <br />
            excitement with friends & followers
          </text>
          <div
            className={styles.joinBtn4}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Join the Waitlist &#127881;
          </div>
        </div>
      </main>

      {/* homies */}
      <main className={`${styles.content1} ${styles.section}`}>
        <div
          className={`${styles.content1Left} ${styles.homie}`}
          data-aos="fade-up"
        >
          <text className={styles.challenge}>Updates</text>
          <text className={`${styles.content1Text} ${styles.hometext}`}>
            Keep tabs on <br />
            your homies
          </text>
          <text className={`${styles.content1Textm} ${styles.hometext}`}>
            Keep tabs on your <br />
            homies
          </text>
          <text
            className={`${styles.content2Subtext} ${styles.content1Subtext2}`}
          >
            Let your friends know you got them, by checking <br />
            in with them. Follow your friends updates and do not
            <br />
            miss out on your friends exciting life milestones &
            <br />
            celebration
          </text>
          <text
            className={`${styles.content2Subtextm} ${styles.content1Subtext2}`}
          >
            Let your friends know you got them, <br />
            by checking in with them. Follow your <br />
            friendsupdates and do not miss out on <br />
            your friends exciting life milestones <br />& celebration
          </text>

          <div
            className={styles.joinBtn3}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Join the Waitlist &#127881;
          </div>
        </div>

        <div className={styles.circles}>
          <img className={styles.emoji9} src="/fire.png" data-aos="zoom-in" />

          <img className={styles.emoji11} src="/crown.png" data-aos="zoom-in" />
          <img
            src="/circle1.png"
            className={styles.circle1}
            data-aos="zoom-in"
          />
          <img
            src="/circle2.png"
            className={styles.circle2}
            data-aos="zoom-in"
          ></img>
          <img
            src="/circle3.png"
            className={styles.circle3}
            data-aos="zoom-in"
          ></img>
          <div>
            <img
              src="/circle4.png"
              className={styles.circle4}
              data-aos="zoom-in"
            />
            <img
              className={styles.emoji10}
              src="/confeti.png"
              data-aos="zoom-in"
            />
          </div>
          <img
            src="/circle5.png"
            className={styles.circle5}
            data-aos="zoom-in"
          ></img>
        </div>
      </main>

      {/* promote and earn */}
      <main
        className={`${styles.content2} ${styles.section} ${styles.promote}`}
      >
        <div
          className={`${styles.screen2} ${styles.screen22}`}
          data-aos="fade-up"
        >
          <img className={styles.emoji7} src="/money.png" />
          <img className={styles.emoji8} src="/money.png" />
          <div className={styles.col}>
            <text className={styles.views2}>@JefferyAfrane</text>
            <text className={styles.hashtag2}>24k Views &#129310;</text>
          </div>
          <div className={styles.float4} data-aos="fade-up">
            <text className={styles.floatText4}>
              Coke Cole-$150,000 &#128184;
            </text>
          </div>
          <div className={styles.float5} data-aos="fade-up">
            <text className={styles.floatText5}>
              Adidas - $250,000 &#128184;
            </text>
          </div>
        </div>
        <div
          className={`${styles.content2Left} ${styles.promote2}`}
          data-aos="fade-up"
        >
          <text className={styles.challenge}>#Creator Revenue</text>
          <text className={styles.content2Text}>
            Promote <br />& Earn
          </text>
          <text className={`${styles.content2Subtext}`}>
            Select your favorite brand, create a #challenge <br />
            for it, promote across your social channels, amass <br />
            views and watch your revenue skyrocket!
          </text>
          <text className={`${styles.content2Subtextm}`}>
            Select your favorite brand, create a <br />
            #challenge for it, promote across your <br />
            social channels, amass views and <br />
            watch your revenue skyrocket!
          </text>
          <div
            className={`${styles.joinBtn4} ${styles.joinPromoteb}`}
            onClick={() => {
              setShowModal(true);
            }}
          >
            Join the Waitlist &#127881;
          </div>
        </div>
      </main>

      <footer className={`${styles.footer} ${styles.section}`}>
        <div className={styles.footContent}>
          <text className={`${styles.footerText}`} data-aos="zoom-in">
            <img className={styles.emoji12} src="/crown.png" />
            <div className={styles.float6}>
              <text className={styles.floatText6}>Update</text>
            </div>
            <div className={styles.float7}>
              <img className={styles.emoji13} src="/fire.png" />
              <img className={styles.floatImg} src="/float2.png" />
              <text className={styles.floatText7}>Reaction</text>
            </div>
            <div className={styles.float8}>
              <img className={styles.emoji14} src="/fireball.png" />
              <img className={styles.floatImg} src="/float2.png" />
              <text className={styles.floatText8}>#Challenge</text>
            </div>
            Get ready for <br />
            the release
          </text>
          <text className={`${styles.footerTextm}`} data-aos="zoom-in">
            <div className={styles.float6}>
              <img className={styles.emoji12} src="/crown.png" />
              <text className={styles.floatText6}>Update</text>
            </div>
            <div className={styles.float7}>
              <img className={styles.emoji13} src="/fire.png" />
              <img className={styles.floatImg} src="/float2.png" />
              <text className={styles.floatText7}>Reaction</text>
            </div>
            <div className={styles.float8}>
              <img className={styles.emoji14} src="/fireball.png" />
              <img className={styles.floatImg} src="/float3.png" />
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
          {/* <img className={styles.fcenter} src="/california.png" /> */}
          <div className={styles.fcenter}>
            &copy; 2021 BB.Social Inc. All rights reserved.
            contactus@joinb.social
          </div>
          <div className={styles.fright}>
            <a href="https://www.facebook.com/JoinBSocial">
              <img src="/fb.png" className={styles.icon} />
            </a>
            <a href="https://twitter.com/BeSocia14814345">
              <img src="/twitter.svg" className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/bsocial_inc/">
              <img src="/ig.png" className={styles.icon} />
            </a>
            <a href="https://www.tiktok.com/@bsocial_inc">
              <img src="/tk.png" className={styles.icon} />
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
              <img className={styles.floatImg} src="/float3.png" />
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

      {showModal2 ? (
        <main
          data-aos="zoom-in"
          data-aos-offset="50"
          data-aos-delay="10"
          className={styles.modalcon}
        >
          <div className={styles.modalb}>
            <div className={styles.floatm1b} style={{ marginTop: -60 }}>
              <img className={styles.emoji13} src="/fire.png" />
              <img className={styles.floatImg} src="/float2.png" />
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

            <img src="/line.svg" className={styles.line} />

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
                  <img src="/back2.png" />2 of 2
                </div>
                <div className={styles.infocon}>
                  <input
                    required
                    type="text"
                    className={styles.input}
                    placeholder="What is your budget per day?"
                  />
                  <img src="/info.png" className={styles.info} />
                  <img src="/tooltip1.png" className={styles.tooltip1} />
                </div>

                <div className={styles.infocon}>
                  <input
                    required
                    type="text"
                    className={styles.input}
                    placeholder="Your target CPV(cost per view)?"
                  />
                  <img src="/info.png" className={styles.info2} />
                  <img src="/tooltip2.png" className={styles.tooltip2} />
                </div>
                <div className={styles.infocon}>
                  <input
                    required
                    type="text"
                    className={styles.input}
                    placeholder="What are some of the challenges you want to do for your brand?"
                  />
                  <img src="/info.png" className={styles.info} />
                </div>

                <button
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
              <img className={styles.emojicrown} src="/crown.png" />
              Congratulations &#127881;
            </text>
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
  );
}
