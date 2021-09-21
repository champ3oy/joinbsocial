import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import $ from "jquery";

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 60,
    });
  }, []);

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
            <text className={styles.textBtn}>About us</text>
            <text className={styles.joinBtn}>Sign up as brand</text>
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
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showStatus={false}
          interval={5000}
        >
          <main id="herotext" className={styles.hero} >
            <div className={styles.heroContent} data-aos="zoom-in">
              <text className={`${styles.heroText}`} >
                Be in the moment <br />
                with your FRIENDS
              </text>
              <text className={`${styles.heroTextm}`} >
                Be in the <br />
                moment with <br />
                your FRIENDS
              </text>
              <text className={`${styles.heroSubTextm}`} >
                Not your typical app to post content just for fun. <br />
                With B.Social you build close relationships with your <br />
                friends & followers through your interactions in the
                <br />
                app plus your participation in the challenges.
              </text>
              <text className={`${styles.heroSubText}`} >
                Not your typical app to post content just for fun. With B.Social
                you build close relationships <br />
                with your friends & followers through your interactions in the
                app plus your participation in the <br />
                challenges.
              </text>

              <div
                className={styles.joinBtn2}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Join the Waitlist &#127881;
              </div>
            </div>
          </main>
          <main id="herotext" className={styles.hero2}>
            <div className={styles.heroContent} data-aos="zoom-in">
              <text className={`${styles.heroText}`} >
                Get paid for promoting <br />
                your favorite brands
              </text>
              <text className={`${styles.heroTextm}`} >
                Get paid for <br />
                promoting your <br />
                favorite brands
              </text>
              <text className={`${styles.heroSubText}`} >
                As a creator or influncer, you can make sustainable incomes from
                promoting your products
                <br />
                and brands in the B.Social app & in other social app. The more
                views your contact receives the higher the
                <br />
                revenue you get
              </text>
              <text className={`${styles.heroSubTextm}`} >
                As a creator or influncer, you can make <br />
                sustainable incomes from promoting your products
                <br />
                and brands in the B.Social app & in other social app. <br />
                The more views your contact receives the higher the
                <br />
                revenue you get
              </text>

              <div
                className={styles.joinBtn2}
                onClick={() => {
                  setShowModal(true);
                }}
              >
                Join the Waitlist &#127881;
              </div>
            </div>
          </main>
          <main id="herotext" className={styles.hero3}>
            <div className={styles.heroContent} data-aos="zoom-in">
              <text className={`${styles.heroText}`} >
                Get your superfans <br />
                and influncers to promote <br />
                your brand
              </text>
              <text className={`${styles.heroTextm}`} >
                Get your <br />
                superfans and <br />
                influncers to <br />
                promote
                <br />
                your brand
              </text>
              <text className={`${styles.heroSubText}`} >
                Get more engaged customers to your brand by setting up brand
                challenges in <br />
                B.Social. influncers and super fans create to promote your
                products & brand.
                <br />
                Your brand could go viral on social media, you know!
              </text>
              <text className={`${styles.heroSubTextm}`} >
                Get more engaged customers to your brand by setting up brand
                <br />
                challenges in B.Social. influncers and <br />
                super fans create to promote your products & brand.
                <br />
                Your brand could go viral on social media, you know!
              </text>

              <div className={styles.joinBtn2}>Sign up as brand</div>
            </div>
          </main>
        </Carousel>
      </div>

      <main className={`${styles.section} ${styles.banner}`}>
        <img className={styles.emoji1} src="/fire.png" />
        <img className={styles.emoji2} src="/hand.png" />
        <img className={styles.emoji3} src="/fireball.png" />
        <text className={`${styles.bannerHeader}`} data-aos="fade-up">
          Don&apos;t just post, like in your typical social media app
        </text>

        <text className={`${styles.bannerText}`} data-aos="fade-up">
          Create moments together
        </text>
        <text className={`${styles.bannerFooter}`} data-aos="fade-up">
          Start a challenge with your friends, promote it on other social media
          <br />
          and watch your fanbase in B.Social app grow
        </text>
        <text className={`${styles.bannerFooterm}`} >
          Start a challenge with your friends, promote it on <br />
          other social media and watch your fanbase <br />
          in B.Social app grow
        </text>
      </main>

      <main className={`${styles.content1} ${styles.section}`}>
        <div className={styles.content1Left} data-aos="fade-up">
          <img className={styles.emoji5} src="/hand.png" />
          <text className={styles.challenge}>#challenge</text>
          <text className={styles.content1Text} >
            Create <br />
            moments <br />
            together
          </text>
          <text className={`${styles.content1Subtext}`} >
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

        <div className={styles.screen1}>
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
            <img className={styles.floatImg3} src="/float1.png" />
            <text className={styles.floatText3}>Liza join your challenge</text>
          </div>
        </div>
      </main>

      <main className={`${styles.content2} ${styles.section}`}>
        <div className={styles.screen2}>
          <img className={styles.emoji7} src="/crown.png" />
          <img className={styles.emoji8} src="/crown.png" />
          <div className={styles.col}>
            <text className={styles.views2}>@JefferyAfrane</text>
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
          <text className={`${styles.content2Subtext}`} >
            Are you in an exciting moment or at an <br />
            incredibly exciting location with breathtaking <br />
            view? Then activate your reaction+ camera and <br />
            share the excitement with your friends & followers
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
        <div className={styles.content1Left} data-aos="fade-up">
          <text className={styles.challenge}>Updates</text>
          <text className={styles.content1Text}>
            Keep tabs on <br />
            your homies
          </text>
          <text className={`${styles.content1Subtext}`} >
            Let your friends know you got them, by checking <br />
            in with them
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
          <img className={styles.emoji9} src="/fire.png" data-aos="zoom-in"/>
          <img className={styles.emoji10} src="/confeti.png" data-aos="zoom-in"/>
          <img className={styles.emoji11} src="/crown.png" data-aos="zoom-in"/>
          <img src="/circle1.png" className={styles.circle1} data-aos="zoom-in"/>
          <img src="/circle2.png" className={styles.circle2} data-aos="zoom-in"></img>
          <img src="/circle3.png" className={styles.circle3} data-aos="zoom-in"></img>
          <img src="/circle4.png" className={styles.circle4} data-aos="zoom-in"></img>
          <img src="/circle5.png" className={styles.circle5} data-aos="zoom-in"></img>
        </div>
      </main>

      {/* promote and earn */}
      <main className={`${styles.content2} ${styles.section}`}>
        <div className={styles.screen2}>
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
        <div className={styles.content2Left} data-aos="fade-up">
          <text className={styles.challenge}>#Creator Revenue</text>
          <text className={styles.content2Text}>
            Promote <br />& Earn
          </text>
          <text className={`${styles.content2Subtext}`} >
            Select your favourite brand, create a #challenge <br />
            for it, promote across your social channels, amass <br />
            views and watch your revenue skyrocket!
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

          <div
            className={styles.joinBtn5}
            onClick={() => {
              setShowModal(true);
            }}
            data-aos="fade-up"
          >
            Join the Waitlist &#127881;
          </div>
        </div>
        <div
          className={styles.foot}
          data-aos="fade-up"
        >
          <div className={styles.fleft}>
            <text>Terms</text>
            <text>Privacy</text>
          </div>
          {/* <img className={styles.fcenter} src="/california.png" /> */}
          <div className={styles.fcenter}>
            &copy; 2021 BSocial. All rights reserved. contact@joinb.social
          </div>
          <div className={styles.fright}>
            <img src="/fb.png" className={styles.icon} />
            <img src="/ink.png" className={styles.icon} />
            <img src="/ig.png" className={styles.icon} />
            <img src="/tk.png" className={styles.icon} />
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
