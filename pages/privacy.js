import Head from "next/head";
import styles from "../styles/Terms.module.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import UserForm from "../components/UserForm";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.joinb.social/graphql",
  cache: new InMemoryCache(),
});

export default function Privacy() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [page, setpage] = useState(1);
  const [refCode, setrefCode] = useState("");

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <ApolloProvider client={client}>
      <div className={styles.container}>
        <Head>
          <title>Privacy Policy - BSocial</title>
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

        <main className={styles.header}>Privacy Policy</main>

        <main className={styles.main}>
          <strong>Last Updated on 9/23/2021</strong>
          <br />
          <br />
          <br />
          NOTICE: Please read the Privacy Policy set forth below carefully, as
          it is designed to provide important information on how and why we
          collect, use, store and share your personal information. It also
          outlines the rights you can exercise regarding your personal
          information and how you can contact us if you have any questions or
          complaints. <br />
          <br />
          The Privacy Policy set forth below is legally binding. By visiting,
          viewing or using this website and/or by using any program, product,
          course or service from us, you agree to be bound by this Privacy
          Policy.
          <br />
          <br />
          Your privacy is important to B.Social, [www.joinb.social] (“app or
          website”), which is operated by BB.Social Inc (“Company”, “we”, “us”,
          or “our”).
          <br />
          <br />
          We use the term “personal information” to refer to data we collect
          that may, directly or indirectly, identify, describe, relate to or be
          associated with you. This privacy policy (“Privacy Policy”) applies to
          personal information we collect when you interact with us through
          different means, including by visiting and using our website. The term
          “you” refers to any visitor, viewer or user of the website and/or any
          user of any Product. Please note that we cannot control the privacy
          practices of websites and services that we do not own.
          <br />
          <br />
          Please read the entire Privacy Policy before you open or use our app
          or visit our website or perform any Actions (as defined below). By
          visiting the website or performing any Actions (as defined below), you
          consent to the terms of this Privacy Policy. This Privacy Policy was
          created with the help of Plug and Law and Privacy Policy Solutions.
          <br />
          <br />
          <strong>INFORMATION WE COLLECT AND HOW WE COLLECT IT</strong>
          <br />
          <br />
          The following describes the categories of personal information we
          collect and how we collect such information.
          <br />
          <br />
          <strong>Information You Provide. </strong> We collect information you
          provide to us directly. This includes information you provide when you
          (i) receive any free or purchase any paid programs, products or
          services from us (each, a “Product”), (ii) sign up to receive any
          emails, (iii) comment on any posts or otherwise communicate with us on
          any social media platform, (iv) fill out any forms, (v) access public
          or private membership groups, including those hosted via a third-party
          platform (i.e., Facebook), (vi) sign up to become our affiliate
          partner, (viii) respond to any survey, (ix) participate in any contest
          or sweepstakes, or (x) contact us through any other means, including
          via an online form, phone call, or email (collectively, the
          “Actions”). Examples of data we may receive include your first name,
          last name, telephone number, email address, shipping address, billing
          address, physical address (such as your address, state, province,
          ZIP/postal code and city), date of birth, gender, account name,
          billing information (such as your credit card number), financial
          information, Social Security Number, Tax Identification Number,
          Employer Identification Number, PayPal address, social media
          information, and other information you provide to us through survey
          responses, feedback, reviews and other means of communication.
          <br />
          <br />
          <strong>Information Collected Automatically. </strong>We collect some
          data automatically when you visit or use our website or open or
          respond to our emails. For example, we may automatically collect
          information when you open or respond to our emails, make a choice with
          respect to communications we send to you, visit any page that displays
          our content, provide information to our service providers or purchase
          or return a Product.
          <br />
          <br />
          <strong>Information from Third Party Sites.</strong> We collect some
          data when you connect with us, comment on or like our posts or
          otherwise interact with us on any social media platform, or when you
          access public or private membership groups hosted on a third party
          platform (i.e., Facebook, Snapchat and TikTok). Examples of data we
          may receive include your profile information, profile picture, social
          media information, social media handles or nicknames, name, purchase
          history, email address, device identifiers and demographic
          information.
          <br />
          <br />
          <strong>
            Information from Internet or Other Electronic Network Activity.
          </strong>
          We automatically collect some data about your computer or mobile
          device when you access our app / website. Examples of data we may
          receive include your Internet Protocol (“IP”) address, browser type,
          browser version, cookies from your browser, unique device identifiers,
          web browser software (i.e., Google Chrome), information about the
          referring website, the date, time and length of your visit, including
          the specific pages you visit, information on how you interact with the
          website, Products and tools and other diagnostic data. Examples of
          additional data we may receive when you access our website through a
          mobile device include the type of mobile device you are using, the
          unique mobile device ID, your mobile operating system, web browser
          software on mobile, unique device identifiers and other diagnostic
          data.
          <br />
          <br />
          <strong>PURPOSES FOR COLLECTING INFORMATION</strong>
          <br /> We use your information for business and commercial purposes.
          For example, we may use your information to:
          <br />
          <br />
          Create customized experience for you based on your interests and
          preferences
          <br />
          <br />
          Suggest friends that you may connect with in the app to improve your
          experience in the app
          <br />
          <br />
          Register you for a course, presentation or class.
          <br />
          <br />
          Grant you access to a public or private membership group or other
          account, and maintain and service your profiles for such accounts.
          <br />
          <br />
          Validate and authenticate your profile when logging into a public or
          private membership group or other account or when purchasing a
          Product.
          <br />
          <br />
          Analyze interactions with you to improve quality.
          <br />
          <br />
          Identify your product preferences and shopping preferences.
          <br />
          <br />
          Secure our website and data.
          <br />
          <br />
          Create Products that you are interested in.
          <br />
          <br />
          Ship or otherwise deliver, process payment for, communicate about, and
          track orders of any Products.
          <br />
          <br />
          Suggest Products you may like based on past purchases and otherwise
          personalize your experience with the website.
          <br />
          <br />
          Provide promotional and marketing communications and information if
          you elect to receive it, including email marketing.
          <br />
          <br />
          Improve the design, functionality and ease-of-use of our website and
          Products.
          <br />
          <br />
          Respond to any inquiries, reviews or other feedback you submit to us.
          <br />
          <br />
          Provide customer service.
          <br />
          <br />
          Conduct research to improve our business processes.
          <br />
          <br />
          Administer affiliate programs.
          <br />
          <br />
          Administer contests, sweepstakes, surveys or promotions.
          <br />
          <br />
          Administer any business needs related to your purchase of any
          Products.
          <br />
          <br />
          Detect security incidents and protect against, stop, resolve and
          prevent any fraud and fraudulent transactions and any malicious,
          deceptive or illegal activity.
          <br />
          <br />
          Comply with all applicable law.
          <br />
          <br />
          Respond to legal and regulatory inquiries and assist law enforcement.
          <br />
          <br />
          <strong>THIRD PARTIES WE SHARE INFORMATION WITH</strong> <br />
          <br />
          The following is a list of third parties that we may share your
          information with or for.
          <br />
          <br />
          <strong>Affiliate Partners.</strong> We may share your information
          with affiliate partners to generate traffic or leads or for other
          business purposes.
          <br />
          <br />
          <strong>Analytics Providers.</strong> We may share your information
          with analytics providers.
          <br />
          <br />
          <strong>Business Transfers.</strong> If we and/or our website are
          acquired by a third party as a result of a transfer, sale, merger,
          acquisition, reorganization, liquidation, consolidation, merger or
          sale of some or all of our Company and/or our website, your personal
          information may be a transferred asset. We may also share personal
          information to prospective purchasers to diligence the proposed
          transaction.
          <br />
          <br />
          <strong>Cloud Service Providers.</strong> We may share your
          information with cloud service providers.
          <br />
          <br />
          <strong>Customer Analysis Providers.</strong> We may share your
          information with customer analysis providers, such as those used to
          analyze visitors clicks and navigation around the website.
          <br />
          <br />
          <strong>Customer Service Providers.</strong> We may share your
          information with customer service providers.
          <br />
          <br />
          <strong>Delivery</strong> Partners. We may share your information with
          delivery partners, such as those we use to ship or otherwise deliver
          any Products.
          <br />
          <br />
          <strong>Email Marketing and Advertising Providers.</strong> We may
          share your information with marketing and advertising providers,
          including email marketing and campaign providers, marketing software
          providers, direct mail providers, marketing analytics providers and
          sales funnel providers. We may share your information with email
          marketing service providers, in order to send you emails, newsletters,
          promotional materials, marketing materials or other information.
          <br />
          <br />
          <strong>Fraud Prevention</strong>
          Partners. We may share your information with fraud prevention
          partners.
          <br />
          <br />
          <strong>Fulfillment Partners.</strong> We may share your information
          with fulfillment partners, such as those we use to fulfill any
          Products.
          <br />
          <br />
          <strong>Government Agencies.</strong> We may share your information
          with government agencies, courts, regulators and law enforcement in
          the event we are required to comply with applicable laws and
          regulations or a legally binding process, or in response to subpoenas,
          warrants, government inquiries or investigations, and court orders. We
          may also share your information (i) to establish, exercise, protect or
          enforce our legal rights and the legal rights of our agents, employees
          and affiliates, (ii) to defend against a legal claim, (iii) to protect
          you, us or third parties against injury, interference, fraud or harm
          or (iv) to take action related to violations of our policies,
          including this Privacy Policy and our Terms & Conditions, or
          potentially illegal activities.
          <br />
          <br />
          <strong>Other Service</strong>
          Providers. We may share your information with service providers.
          <br />
          <br />
          <strong>Payment</strong>
          Processors. We may share your information with payment processors,
          such as those we use to collect and process payment for any Products
          you purchase.
          <br />
          <br />
          <strong>Public Forum.</strong> Our website may allow you to leave a
          post, comment or review on the website. If you choose to submit that
          information on a public forum, that information will be available to
          the public and we may elect to share your post, comment or review
          outside of the website.
          <br />
          <br />
          <strong>Social Media Platforms.</strong> We may share your information
          with social media platforms (i.e., Facebook). Their use of your
          information is not governed by this Privacy Policy.
          <br />
          <br />
          <strong>Technology Service Providers.</strong> We may share your
          information with technology service providers.
          <br />
          <br />
          <strong>Third Parties.</strong> We may share your information with
          third parties whom we have contractual relationships with, such as
          auditors, consultants, lawyers, and other professionals who rely on
          the data to provide us with professional services.
          <br />
          <br />
          <strong>Third Party Partners.</strong> We may share your information
          with third parties we have partnered with to jointly create or offer a
          product, service or joint promotion.
          <br />
          <br />
          <strong>WE DO NOT SELL YOUR PERSONAL INFORMATION</strong>
          <br /> We do not sell, rent or trade your personal information to any
          third parties, as we value your privacy. We also do not “sell” your
          personal information as defined by the California Consumer Privacy
          Act.
          <br />
          <br />
          <strong>COOKIES AND OTHER TRACKING TECHNOLOGIES</strong>
          <br /> We may collect and access, and may permit our business partners
          and third party service providers, such as advertising companies, to
          collect and access your Internet Protocol (IP) address, browsing
          metadata and other numerical identifiers, such as your browser type,
          version and operating system (collectively, the “Browsing
          Information”). We may also use, place, collect and store, or allow our
          third party service providers to use, place, collect and store,
          cookies, web beacons, remarketing pixel tags, or other similar
          tracking technologies. We, our business partners and third party
          service providers may use this information and these technologies to,
          among other things, improve and personalize your user experience,
          understand how you use the website, provide tailored ads, analyze
          trends, data, and website performance, administer the website,
          identify and track you when you use different devices, determine if
          you are logged onto the website, provide security and provide a range
          of features, customization and functionality. By using the website and
          not opting out of cookies, you consent to the use of Browsing
          Information, cookies and other tracking technologies as described in
          this Privacy Policy. Note that we have no control over these third
          party service providers and their use of such tracking technologies.
          We cannot and do not control the privacy policies and practices of any
          third party service providers. We encourage you to visit their
          websites directly to learn about their privacy policies.
          <br />
          <br />
          <strong>YOUR CHOICES</strong>
          <br /> It is important to us that you understand your choices
          regarding your personal information.
          <br />
          <br />
          <strong>Opting Out of/Blocking Cookies.</strong> Most browsers accept
          cookies by default. However, most browsers will allow you to prevent
          accepting new cookies, disable cookies, and/or receive a notification
          when you receive new cookies. If your browser has such
          functionalities, information on how you can change your cookie
          settings can typically be found in the help section of the browser
          toolbar. Please note that if you do disable cookies, this may have an
          impact on or interfere with your user experience, including your
          ability to use or make purchases from the website, or receive
          personalized content.
          <br />
          <br />
          <strong>Managing “Do Not Track”.</strong>
          <br /> As required by the California Online Privacy Protection Act
          (CalOPPA), we would like you to know that our systems are currently
          unable to recognize browser “Do No Track” signals.
          <br />
          <br />
          <strong>Use of Personal Information.</strong>
          <br />
          You can request that we delete your personal information at any time
          by contacting us using the contact details provided below, subject to
          certain exceptions. You can also (i) request to see your personal
          information that we have available on you, (ii) withdraw consent for
          our use of your personal information, (iii) review and request we
          rectify, change or modify your personal information, (iv) restrict or
          limit the processing of your personal information, (v) cancel the
          processing of your personal information and (vi) request your personal
          information and transfer it to another controller without any
          impediments on our part by contacting us using the contact details
          provided below.
          <br />
          <br />
          <strong>Unsubscribing from Email Marketing.</strong>
          <br /> When you sign up to receive emails from us, you agree to
          receive email communications from us, which may include newsletters
          and promotional emails. If you receive any email marketing from us,
          you can opt out at any time by clicking the “unsubscribe” link
          contained in each email. Please note that unsubscribing from email
          marketing does not necessarily unsubscribe you from other emails we
          may send, such as emails about any Products you purchase.
          <br />
          <br />
          <strong>Other Opt-Out Options.</strong>
          <br /> If we send you physical mailings or short message service (SMS)
          messages or contact you via telephone, you can opt-out by contacting
          us using the contact details provided below.
          <br />
          <br />
          <strong>DATA RETENTION</strong>
          <br /> We retain personal information as long as it is needed to
          conduct and operate our business or until you ask us to delete your
          personal information by contacting us using the contact details
          provided below. Please note that we cannot control the data retention
          policies of third parties.
          <br />
          <br />
          <strong>THIRD PARTY LINKS</strong>
          <br /> For your convenience, we provide links to third party websites
          on our website, such as links to third party social media platforms.
          If you click on a link to a third party website, you will be directed
          to a third party website. We cannot and do not control the privacy
          policies, content and practices of the website owners and operators of
          any of the third party websites that we link to. We encourage you to
          visit their websites directly to learn about their privacy policies.
          <br />
          <br />
          <strong>HOW WE PROTECT YOUR PERSONAL INFORMATION</strong>
          <br /> We care about the security of your personal information, so we
          maintain reasonable and appropriate physical, technical and procedural
          safeguards to help keep it safe. While we take reasonable steps to
          protect your personal information, no method of transmission over the
          internet or other network can be 100% secure, therefore we cannot and
          do not guarantee that personal information you transmit will remain
          secure from misuse or interception in all circumstances. By consenting
          to this Privacy Policy, you acknowledge that we cannot guarantee that
          your personal information will be protected from misuse or
          interception by third parties.
          <br />
          <br />
          <strong>INTERNATIONAL DATA, TRANSFERS AND PROCESSING</strong>
          <br /> Our app is intended for users around the world. Please be aware
          that our website servers and our service providers may be located
          outside of your state, province or country. As a result, some of your
          personal information may be collected, used, transferred, maintained,
          disclosed and stored outside of your state, province or country. By
          using this app, you acknowledge and agree that the collection, use,
          transfer, maintenance, disclosure and storage of your personal
          information, Browsing Information and communications related to or
          arising out of your use of this website is governed by the applicable
          laws in the United States of America. While we have the appropriate
          safeguards in place, the applicable privacy laws in the United States
          of America may be less stringent than those of your state, province or
          country.
          <br />
          <br />
          <strong>
            NOTICE ABOUT THE GENERAL DATA PROTECTION REGULATION (GDPR NOTICE)
          </strong>
          <br /> The information in this section, under the subheading “Notice
          About the General Data Protection Regulation”, applies to individuals
          covered by the General Data Protection Regulation (“GDPR”). References
          to “you” and “your” in this section refer only to those covered by
          GDPR. GDPR, which took effect on May 25, 2018, provides privacy rights
          for those inside the European Economic Area. For the purposes of this
          section, “personal information” refers to any information relating to
          an individual which can be directly or indirectly used to identify
          such individual. Examples include first name and last name, email
          address, identification number, information about location, ethnicity,
          gender, biometric data, web cookies, and religious or political
          beliefs.
          <br />
          <br />
          <strong>Legal basis for processing information.</strong> We may
          process personal information under the following conditions: (i) we
          have received your consent to process your personal information for
          one or more specific purposes, (ii) processing of your personal
          information is necessary to perform a contract to which you are a
          party to, or in order to take steps at your request prior to entering
          into a contract, (iii) processing of your personal information is
          necessary to comply with a legal obligation we are subject to, (iv)
          processing of your personal information is necessary in order to
          protect the vital interests of you or another natural person, (v)
          processing of your personal information is necessary to perform a task
          carried out in the public interest or to exercise an official
          authority vested in us; (vi) processing of your personal information
          is necessary for the purposes of the legitimate interests pursued by
          us or a third party, except in certain circumstances where the need
          for the information is overridden by the need to protect the subject
          of the personal information (such as when the subject of the personal
          information is a child). We are happy to let you know which legal
          basis applies to the processing of your personal information. You have
          certain rights you can exercise under the GDPR, including the
          following. Please note that this summary is merely provided for your
          convenience, but we do not warrant the accuracy or exhaustiveness of
          this summary nor should you rely on this as an accurate or exhaustive
          list of your rights.
          <br />
          <br />
          <strong>Right to Access.</strong> You have the right to learn whether
          or not your personal information is being processed. If it is being
          processed, you have the right to access the personal information, and
          to learn certain information about your personal information,
          including: (i) why it is being processed, (ii) the categories of
          personal information we collected, (iii) the recipients or categories
          of recipients to whom we have or will disclose the personal
          information to, (iv) if possible, the amount of time we will store the
          personal information, or if not possible, the criteria we use to
          determine such period and (v) available information about the sources
          for personal information we collected.
          <br />
          <br />
          <strong>Right to Correction.</strong> You have the right to correct
          any inaccurate personal information about yourself. You also have the
          right to complete any incomplete personal information collected,
          including through providing an additional statement.
          <br />
          <br />
          <strong>Right to Be Forgotten.</strong> You have the right to ask us
          to erase your personal information, which we will do without undue
          delay under certain circumstances. Examples may include: (i) where the
          personal information is no longer necessary for the purposes for which
          it was collected, (ii) where you withdraw consent on the basis of
          which we processed your personal information, and there is no legal
          ground for processing such personal information, (iii) where you
          invoke your right to object (described below) and there are no
          overriding grounds for processing such personal information, (iv)
          where your personal information has been unlawfully processed and (v)
          where the personal information has to be erased to comply with a legal
          obligation.
          <br />
          <br />
          <strong>Right to Restrict Processing.</strong>
          You have the right to restrict the processing of your personal
          information under certain circumstances. Examples may include: (i)
          where you indicate the inaccuracy of your personal information, (ii)
          where the processing is unlawful but you would like the processing of
          your personal information to be restricted as opposed to erased, (iii)
          where we no longer need the personal information for processing, but
          you would like it restricted for a legal basis, and (iv) where you
          invoke your right to object (described below).
          <br />
          <br />
          <strong>
            Notification of Recipients of Personal Information.
          </strong>{" "}
          If you exercise your Right to Rectification, Right to Be Forgotten or
          Right to Restrict Processing (each as described above), we will convey
          that to each recipient we have shared your personal information with.
          You have the right to request we provide you with a list of all
          recipients we have notified.
          <br />
          <br />
          <strong>Right to Data Portability.</strong> You have the right to
          request your personal information in a structured, commonly used and
          machine-readable format.
          <br />
          <br />
          <strong>Right to Object.</strong> You have the right to object to the
          processing of your personal information under certain circumstances.
          Examples may include: (i) where the personal information is being
          processed on grounds relating to your personal situation, where the
          legal grounds for processing such personal information falls under
          categories (v) and (vi) as described in the sub-section titled “Legal
          basis for processing information” and (ii) where the personal
          information is processed for direct marketing purposes.
          <br />
          <br />
          <strong>Right to Lodge a Complaint.</strong> You have the right to
          lodge a complaint with a supervisory authority. For more information,
          please contact your local data protection authority.
          <br />
          <br />
          <strong>
            Right to Be Informed About International Transfers.
          </strong>{" "}
          You have the right to be informed about the international transfer of
          your personal information and safeguards in place. Please read the
          section of this Privacy Policy titled “International Data, Transfers
          and Processing”.
          <br />
          <br />
          <strong>Right To Object to Profiling.</strong> We may use automated
          decision-making in operating our website. You have the right not to be
          subjected to any decisions arising from automated processing,
          including profiling, which produces legal effects concerning you or
          similarly significantly affects you.
          <br />
          <br />
          To exercise any of your rights, please contact us using the contact
          details provided below. We are required to verify the identity of
          anyone who makes any request.
          <br />
          <br />
          <strong>NOTICE TO CALIFORNIA RESIDENTS (CCPA NOTICE)</strong>
          <br />
          The information in this section, under the subheading “Notice to
          California Residents”, applies to residents of California. References
          to “you” and “your” in this section refer only to residents of
          California. The California Consumer Protection Act (“CCPA”), which
          took effect on January 1, 2020, provides privacy rights for residents
          of California. Please refer to the referenced sections in this Privacy
          Policy for details on the following, which you have a right to know
          under the CCPA:
          <br />
          <br />
          To review information on the categories of personal information and
          the categories of sources from which we collect, use, store and share
          personal information, read the section of this Privacy Policy titled
          “Information We Collect and How We Collect It”.
          <br />
          <br />
          To review information on the business or commercial purposes for which
          we collect information, read the section of this Privacy Policy titled
          “Purposes for Collecting Information”.
          <br />
          <br />
          To review information on the categories of third parties we share
          personal information, read the section of this Privacy Policy titled
          “Third Parties We Share Information With”.
          <br />
          <br />
          <br />
          As a California resident, you have certain rights you can exercise
          under the CCPA, including the following. Please note that this summary
          is merely provided for your convenience, but we do not warrant the
          accuracy or exhaustiveness of this summary nor should you rely on this
          as an accurate or exhaustive list of your rights.
          <br />
          <br />
          <strong>Right to Know. </strong>You have the right to obtain from us
          certain information about our collection of your personal information
          over the past 12 month period, including: (i) the categories of
          personal information we collected, (ii) the specific pieces of your
          personal information we collected, (iii) the categories of sources for
          the personal information we collected, (iv) our business or commercial
          purpose for collecting or selling that personal information, (v) the
          categories of third parties with whom we share that personal
          information, and (vi) if we sold or disclosed your personal
          information, then (a) a list disclosing the categories of personal
          information involved in sales and the categories of third parties to
          whom we sold your personal information and (b) a list disclosing
          categories of personal information disclosed for a business purpose
          and the categories of third parties with whom we shared your personal
          information. You have the right to obtain this information from us,
          free of charge, twice each year.
          <br />
          <br />
          <strong>Right to Delete. </strong>You have the right to request that
          we delete your personal information that we have collected, subject to
          certain exceptions. When you contact us, please let us know the
          information you are requesting we remove, update, correct or amend,
          and the timeframe and manner in which you believe we came to collect
          such information.
          <br />
          <br />
          <strong>Right to Opt-Out.</strong>You have the right to opt-out of the
          sale of your personal information. We do not sell, rent or trade your
          personal information to any third parties, as we value your privacy.
          Therefore, no request to opt-out of sale is necessary.
          <br />
          <br />
          <strong>Right to Non-Discrimination. </strong>You have the right not
          to receive discriminatory treatment by us for exercising your rights
          under the CCPA. We will not discriminate against you in any way for
          exercising any of the rights available to you under the CCPA,
          including by denying you goods or services, charging you different
          prices or rates, providing you with a lesser quality of goods or
          services or suggesting that you would receive a different price or
          rate for goods or services or a different quality of goods or
          services.
          <br />
          <br />
          To exercise any of your rights, please contact us using the contact
          details provided below. We are required to verify the identity of
          anyone who makes any request.
          <br />
          <br />
          <strong>NOTICE TO CALIFORNIA RESIDENTS</strong>
          (California’s “Shine the Light” Law) We do not share your personal
          information with third parties who we know or have reason to know may
          use your personal information for “direct marketing purposes” as
          contemplated by California’s “Shine the Light” law (Civil Code Section
          § 1798.83).
          <br />
          <br />
          <strong>NOTICE TO NEVADA RESIDENTS</strong> We do not exchange your
          personal information for monetary consideration with anyone who will
          license or sell your personal information to third parties.
          <br />
          <br />
          <strong>CHILDREN’S PRIVACY </strong>This website is not directed
          towards or designed for use by children under the age of 13 unless
          otherwise used under parental guidance. This website and the
          information contained on it is specifically designed for individuals
          over the age of 13. If you are under the age of 13, you must not
          access this website or perform any of the Actions unless guided by
          your parent. We do not knowingly collect, use, store or share personal
          information from children under the age of 13. If you know or have
          reason to believe that we have collected data from anyone under the
          age of 13, please contact us using the contact details provided for
          removal of that data.
          <br />
          <br />
          <strong>CHANGES TO THE PRIVACY POLICY </strong>We reserve the right to
          change, amend or modify this Privacy Policy at any time. We will alert
          you to any changes by posting the effective date of the latest version
          at the top of this page, at which point any changes will become
          immediately effective. It is your responsibility to check for updates,
          as your continued use of the website and our Products after the
          Privacy Policy is amended will constitute your acceptance and
          agreement to continue to be bound by the Privacy Policy as of the last
          updated date indicated at the top of this page.
          <br />
          <br />
          <strong>ALTERNATIVE FORMS </strong>You may print this Privacy Policy
          by using the “Print” function on your browser.
          <br />
          <br />
          <strong>HOW TO CONTACT US </strong>If you have any questions or
          complaints related to this Privacy Policy, or would like to exercise
          any of your rights, please contact us using the information below.
          <br />
          <br />
          <br />
          By email: contactus@joinb.social. <br />
          <br />
          <br />
          <br />
        </main>

        <footer className={`${styles.footer} ${styles.section}`}>
          <div className={styles.footContent}>
            <text className={`${styles.footerText}`} data-aos="zoom-in">
              <img alt="image" className={styles.emoji12} src="/crown.png" />
              <div className={styles.float6}>
                <text className={styles.floatText6}>Update</text>
              </div>
              <div className={styles.float7}>
                <img alt="image" className={styles.emoji13} src="/fire.png" />
                <img alt="image" className={styles.floatImg} src="/float2.png" />
                <text className={styles.floatText7}>Reaction</text>
              </div>
              <div className={styles.float8}>
                <img alt="image" className={styles.emoji14} src="/fireball.png" />
                <img alt="image" className={styles.floatImg} src="/float3.png" />
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
                <img alt="image" className={styles.floatImg} src="/float2.png" />
                <text className={styles.floatText7}>Reaction</text>
              </div>
              <div className={styles.float8}>
                <img alt="image" className={styles.emoji14} src="/fireball.png" />
                <img alt="image" className={styles.floatImg} src="/float3.png" />
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
            {/* <img alt="image" className={styles.fcenter} src="/california.png" /> */}
            <div className={styles.fcenter}>
              &copy; 2021 BB.Social Inc. All rights reserved.
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
                <img alt="image" className={styles.emoji14} src="/fireball.png" />
                <img alt="image" className={styles.floatImg} src="/float2.png" />
                <text className={styles.floatText71}>#Challenge</text>
              </div>
              <div className={styles.floatm3}>
                <img alt="image" className={styles.emoji13} src="/fire.png" />
                <img alt="image" className={styles.floatImg} src="/float2.png" />
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
                <img alt="image" className={styles.floatImg} src="/float2.png" />
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
                  <button name="btn"
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
                    <img alt="image" src="/tooltip1.png" className={styles.tooltip1} />
                  </div>

                  <div className={styles.infocon}>
                    <input
                      required
                      type="text"
                      className={styles.input}
                      placeholder="Your target CPV(cost per view)?"
                    />
                    <img alt="image" src="/info.png" className={styles.info2} />
                    <img alt="image" src="/tooltip2.png" className={styles.tooltip2} />
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

                  <button name="btn"
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
                <img alt="image" className={styles.emojicrown} src="/crown.png" />
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
                <img alt="image"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      "https://joinb.social/invite/" + refCode
                    );
                  }}
                  className={styles.copy}
                  src="/copy.png"
                />
              </div>

              <button name="btn"
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
