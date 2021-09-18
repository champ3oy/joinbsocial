import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BSocial</title>
        <meta name="description" content="Be Social with us" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main id="herotext" className={styles.hero}>
        <nav className={styles.nav}>
          <img src="/logo2x.png" className={styles.logo} />

          <div className={styles.right}>
            <text className={styles.textBtn}>Sign up as brand</text>
            <text className={styles.textBtn}>About us</text>

            <div className={styles.joinBtn}>Join the Waitlist</div>
          </div>
        </nav>
        <div className={styles.heroContent}>
          <text className={`${styles.heroText}`} data-aos="zoom-in">
            Be in the moment <br />
            with your FRIENDS
          </text>
          <text className={`${styles.heroSubText}`} data-aos="zoom-in">
            Not your typical app to post content just for fun. With B.Social you
            build close relationships <br />
            with your friends & followers through your interactions in the app
            plus your participation in the <br />
            challenges.
          </text>

          <div className={styles.joinBtn2}>Join the Waitlist</div>
        </div>
      </main>

      <main className={styles.banner}>
        <text className={`${styles.bannerHeader}`} data-aos="zoom-in">
          Don't just post, like in your typical social media app
        </text>
        <text className={`${styles.bannerText}`} data-aos="zoom-in">
          Create moments together
        </text>
        <text className={`${styles.bannerFooter}`} data-aos="zoom-in">
          Start a challenge with your friends, promote it on other social media{" "}
          <br />
          and watch your fanbase in B.Social app grow
        </text>
      </main>

      <main className={styles.content1}>
        <div className={styles.content1Left} data-aos="zoom-in">
          <text className={styles.challenge}>#challenge</text>
          <text className={styles.content1Text}>
            Create <br />
            moments <br />
            together
          </text>
          <text className={`${styles.content1Subtext}`} data-aos="zoom-in">
            Create a challenge with friends, invite <br />
            them to participate and watch their <br />
            creative juices flow
          </text>
          <div className={styles.joinBtn3}>Join the Waitlist</div>
        </div>

        <div className={styles.screen1}>
          <div>
            <div className={styles.bar} />
            <text className={styles.hashtag}>#danceyour##</text>
          </div>
          <text className={styles.views}>50k View</text>
        </div>
      </main>

      <main className={styles.content2}>
        <div className={styles.screen2}>
          <div className={styles.col}>
            <text className={styles.views2}>@JefferyAfrane</text>
            <text className={styles.hashtag2}>24k Views</text>
          </div>
        </div>
        <div className={styles.content2Left} data-aos="zoom-in">
          <text className={styles.challenge}>#Reaction</text>
          <text className={styles.content2Text}>
            Realtime <br />
            reaction to <br />
            moments
          </text>
          <text className={`${styles.content2Subtext}`} data-aos="zoom-in">
            Are you in an exciting moment or at an <br />
            incredibly exciting location with breathtaking <br />
            view? Then activate your reaction+ camera and <br />
            share the excitement with your friends & followers
          </text>
          <div className={styles.joinBtn4}>Join the Waitlist</div>
        </div>
      </main>

      {/* homies */}
      <main className={styles.content1}>
        <div className={styles.content1Left} data-aos="zoom-in">
          <text className={styles.challenge}>Updates</text>
          <text className={styles.content1Text}>
            Keep tabs on <br />
            your homies
          </text>
          <text className={`${styles.content1Subtext}`} data-aos="zoom-in">
            Let your friends know you got them, by checking <br />
            in with them
          </text>
          <div className={styles.joinBtn3}>Join the Waitlist</div>
        </div>

        <div className={styles.circles}>
          <div className={styles.circle1}></div>
          <div className={styles.circle2}></div>
          <div className={styles.circle3}></div>
          <div className={styles.circle4}></div>
          <div className={styles.circle5}></div>
        </div>
      </main>

      {/* promote and earn */}
      <main className={styles.content2}>
        <div className={styles.screen2}>
          <div className={styles.col}>
            <text className={styles.views2}>@JefferyAfrane</text>
            <text className={styles.hashtag2}>24k Views</text>
          </div>
        </div>
        <div className={styles.content2Left} data-aos="zoom-in">
          <text className={styles.challenge}>#Reaction</text>
          <text className={styles.content2Text}>
            Promote <br />& Earn
          </text>
          <text className={`${styles.content2Subtext}`} data-aos="zoom-in">
            Select your favourite brand, create a #challenge <br />
            for it, promote across your social channels, amass <br />
            views and watch your revenue skyrocket!
          </text>
          <div className={styles.joinBtn4}>Join the Waitlist</div>
        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footContent}>
          <text className={`${styles.footerText}`} data-aos="zoom-in">
            Get ready for <br />
            the release
          </text>

          <div className={styles.joinBtn5}>Join the Waitlist</div>
        </div>
        <div
          className={styles.foot}
          data-aos="fade-up"
          data-aos-offset="50"
          data-aos-delay="10"
        >
          <div className={styles.fleft}>
            <text>Terms</text>
            <text>Privacy</text>
          </div>
          {/* <img className={styles.fcenter} src="/california.png" /> */}
          <div className={styles.fcenter}>
            &copy; 2021 Feels. All rights reserved. contact@joinb.social
          </div>
          <div className={styles.fright}>
            <img src="/fb.png" className={styles.icon} />
            <img src="/ink.png" className={styles.icon} />
            <img src="/ig.png" className={styles.icon} />
            <img src="/tk.png" className={styles.icon} />
          </div>
        </div>
      </footer>
    </div>
  );
}
