import Head from "next/head";
import styles from "../styles/Terms.module.css";
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function Leaderboard() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [page, setpage] = useState(1);

  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Terms & Conditions - BSocial</title>
        <meta name="description" content="Be Social with us" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <nav className={styles.nav}>
        <Link href="/">
          <img src="/logo2x.png" className={styles.logo} />
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

      <main className={styles.header}>
        Terms & <br />
        Conditions
      </main>

      <main className={styles.main}>
        <strong> TERMS AND CONDITIONS</strong>
        <br />
        Last Updated on 10/02/2021
        <br />
        NOTICE: Please read the terms and conditions set forth below, which are
        legally binding. By visiting, viewing or using this website, app and/or
        by using any program, product, course or service from us, you agree to
        be bound by these Terms and Conditions and our Privacy Policy and
        Disclaimer.
        <br />
        <br />
        <strong>
          PLEASE READ THE SECTIONS TITLED “BINDING ARBITRATION” AND “CLASS
          ACTION WAIVER” AS THEY AFFECT YOUR LEGAL RIGHTS.
        </strong>
        <br />
        <br />
        B.Social App, www.joinb.social (“website”), which is operated by
        BB.Social Inc (“Company”, “we”, “us”, or “our”) provides visitors
        information on the app or website subject to the following terms and
        conditions (“Terms and Conditions”). The term “you” refers to any
        visitor, viewer or user of the app, website and/or any user of any free
        or paid program, product, course or service of the Company (each, a
        “Product”).
        <br />
        <br />
        By viewing, visiting or using the app, website and/or a Product, you
        indicate your acceptance and agreement to be bound by these Terms and
        Conditions and our Privacy Policy and Disclaimer, which are hereby
        incorporated by reference (collectively, this “Agreement”). If you do
        not accept the terms and conditions of this Agreement, then please do
        not use the app, website or any of our Products. These Terms and
        Conditions were created with the help of the Plug and Law and Privacy
        Policy Solutions.
        <br />
        <br />
        We reserve the right to amend this Agreement at any time without notice
        to you. We will alert you to any changes by posting the effective date
        of the latest version at the top of this page, at which point any
        changes will become immediately effective. It is your responsibility to
        check for updates, as your continued use of the website or any Products
        after this Agreement is amended will constitute your acceptance and
        agreement to continue to be bound by this Agreement, as amended.
        <br />
        <br />
        <br />
        <strong>UNITED STATES AND OVER 12 USE ONLY</strong>
        <br />
        The app or website is intended only for individuals over the age of 12
        residing inThe United States. We do not make any representations that
        this app, website is appropriate or available for use outside of The
        United States. If you access the app, website or any of our Products
        from outside of the indicated territory, you do so at your own risk and
        on your own initiative. It is solely your responsibility to ensure
        compliance with applicable laws in your specific jurisdiction.
        <br />
        <br />
        <strong>GUIDELINES FOR USE</strong>
        <br />
        We have established certain guidelines to keep our community safe
        (“Guidelines”). By visiting or using the website or any Product, you
        agree to abide by these Guidelines, which are as follows:
        <br />
        <br />
        You will comply with all applicable law;
        <br />
        <br />
        You will not upload, post, send, email, or otherwise make available any
        information or content which in any way infringes any copyright, trade
        secret, trademark, right of publicity, privacy, property or other
        intellectual property or proprietary rights, or any information or
        content which you do not have the right to make available, through any
        law, contractual or fiduciary relationship or otherwise;
        <br />
        <br />
        You will not upload, post, send, email or otherwise make available in
        the app or website any material that a reasonable person will deem as
        obscene. Nudity is prohibited from the BSocial app.
        <br />
        <br />
        You will not act in any way that is fraudulent, false, misleading,
        deceitful or deceptive, such as by impersonating another individual or
        falsifying your association with an individual or entity;
        <br />
        <br />
        You will not upload, post, send, email, or otherwise make available any
        material or behave in any manner which could be perceived as harassing,
        demeaning, threatening, “stalking”, defamatory, sexually explicit,
        abusive, vulgar, hate speech, obscene, indecent or otherwise
        objectionable;
        <br />
        <br />
        You will not upload, post, send, email, or otherwise make available any
        material which would reveal the personal information of another
        individual;
        <br />
        <br />
        You will not behave in any manner which could limit or otherwise impact
        any other person’s use or enjoyment of the website and/or any Product;
        <br />
        <br />
        You will not engage in any unsolicited or unauthorized advertising nor
        will you send any spam; You will not attempt to gain unauthorized access
        to any portion of the app, website or any of the Products; You will not
        engage in or encourage others to engage in any activity which would
        violate any law, constitute a criminal offense, give rise to civil
        liability, or infringe on the rights of any third party;
        <br />
        <br />
        You will not send any materials which contain viruses, devices,
        information collection or transmission mechanisms, trojan horses, worms,
        time-bombs, adware, keystroke loggers or any other programs or code
        which would be harmful to, interfere with or attempt to interfere with
        our systems;
        <br />
        <br />
        You will not engage in market research or any research intended to help
        a competitor;
        <br />
        <br />
        You will not deploy any automated query program, such as a bot or
        spider, at any time or for any purpose without our express written
        consent;
        <br />
        <br />
        You will not block or cover any advertisements on the website; With the
        exception of any personal information you share (which is covered under
        our Privacy Policy), once you upload, post, send, email, or otherwise
        make available any material, we have the right to display, repurpose or
        otherwise use such material in any way; and
        <br />
        <br />
        You will notify us through the contact information provided below if you
        know or have reason to know that a violation of any of our Guidelines
        has occurred.
        <br />
        <br />
        We reserve the right to deny you access to the app, website and any
        Products in our sole discretion at any time and for any reason.
        <br />
        <br />
        <strong>INTELLECTUAL PROPERTY</strong>
        <br />
        The website and its content and all Products, including but not limited
        to videos, coursework, training modules, photographs, sound recordings,
        images, digital content, material available as a free download,
        software, text, graphics and other material, are owned or licensed by
        the Company and are protected by copyright, trademarks (whether
        registered or unregistered), design rights, database rights and all
        other intellectual property rights afforded to us (“Intellectual
        Property”).
        <br />
        <br />
        While you may view and have access to our Intellectual Property for your
        own personal and non-commercial use, you agree to abide by the
        following:
        <br />
        <br />
        Our Intellectual Property must be kept intact with the proper copyright
        and other intellectual property notices; and
        <br />
        <br />
        You may not reproduce, resell, distribute, publicly perform, create
        derivative works, translate, transmit, post, republish, exploit, copy or
        otherwise use our Intellectual Property for any commercial or
        non-personal use, unless you have received explicit written consent from
        us to do so.
        <br />
        <br />
        <br />
        It is in our sole discretion to give written consent for you to
        reproduce, resell, distribute, publicly perform, create derivative
        works, translate, transmit, post, republish, copy or otherwise use our
        Intellectual Property. If you have any questions, please contact us
        using the contact information provided below.
        <br />
        <br />
        <strong>NO WARRANTIES </strong>
        <br />
        Your use of this app, website and any Products is entirely at your risk,
        as the app, website and our Products are provided on an “as is” and “as
        available” basis. We do not make any express or implied warranties or
        representations relating to the website, its content and our Products,
        including but not limited to warranties of title, merchantability,
        fitness for a particular purpose and non-infringement of third parties’
        rights. We also do not make any express or implied warranties or
        representations that the app, website will operate without error or that
        the website, the servers relied on, our Products and any content is free
        from computer viruses or other potentially harmful or destructive
        features. Some jurisdictions do not permit the exclusion of certain
        warranties. As such, some of the exclusions referenced in this section
        may not apply to you.
        <br />
        <br />
        <strong>LIMITATION OF LIABILITY</strong>
        <br />
        To the fullest extent permissible by law, the Company and our directors,
        contractors, successors, joint venture partners, shareholders, agents,
        affiliates, officers, employees, assignees and licensees, as applicable,
        shall not be liable for any direct, indirect, special, incidental,
        consequential, exemplary or other loss or damage, including but not
        limited to damages for loss of profits, goodwill, business interruption,
        use or loss of data or other intangible losses, which may directly or
        indirectly arise out of or be related to your use of or inability to
        access this website or any Products or your reliance on any advice,
        opinion, information, representation or omission contained on, or
        received through this website or any Products, even if we have been
        advised of the possibility of such damages occurring. This limitation of
        liability applies whether such liability arises from tort, negligence,
        breach of contract or any other legal theory of liability.
        <br />
        <br />
        <strong>INDEMNIFICATION</strong>
        <br />
        You shall indemnify, defend and hold harmless the Company and our
        affiliates, and our respective directors, contractors, successors, joint
        venture partners, shareholders, agents, affiliates, officers, employees,
        assignees and licensees from and against any and all damages,
        liabilities, losses, costs and expenses resulting from any suits,
        proceedings, judgments, demands, causes of action and claims
        (collectively, the “Claims”), including legal and accounting fees and
        expenses, whether or not involving a third party claim, to the extent
        arising out of, relating to or resulting from: (i) your use or misuse of
        this website or any of our Products, (ii) your breach of this Agreement,
        or (iii) your violation of any third party rights, including without
        limitation any copyright, trade secret, trademark, right of publicity,
        privacy, property or other intellectual property or proprietary rights.
        We will provide you with notice of any Claims, and may in our sole
        discretion assist you, at your expense, in defending such Claims. We
        reserve the right to assume exclusive control of defending any such
        Claim, at your expense, including choice of legal counsel. You agree to
        cooperate and assist us in defending any such Claim.
        <br />
        <br />
        <strong>LIMITED LICENSE</strong>
        <br />
        Notwithstanding any other provisions in this Agreement, if you purchase
        any Products or download any of our free Products, we grant you a
        limited, non-sublicensable, non-transferable, non-exclusive, revocable
        license (“License”) to use or access the Products for your personal and
        non-commercial use. You may not reproduce, resell, distribute, create
        derivative works, translate, transmit, post, republish, exploit, copy or
        otherwise use our Products for any commercial or non-personal use. Your
        License is for individual use. You have no right to assign any of your
        rights or transfer any of your obligations under this Agreement. If we
        discover that any violation of the terms and conditions in this
        Agreement has occurred, including violation of the License granted to
        you, we reserve the right to terminate your access to the Products and
        invoice you for any damages.
        <br />
        <br />
        <strong>CONFIDENTIAL INFORMATION</strong>
        <br /> Please do not upload, post, send, email, or otherwise make
        available any material that contains any confidential information.{" "}
        <br />
        <br />
        <strong>FEES </strong>
        <br />
        When you purchase any Product through this app or website, you are
        responsible for all applicable fees and taxes. It is your responsibility
        to provide complete, accurate and up-to-date billing and credit card
        information. If you are on a payment plan or recurring payment, it is
        your responsibility to keep an up-to-date payment method with us. If
        your payment method is declined or expired, you hereby agree to pay all
        applicable fees and taxes due upon demand. You also agree to pay all
        costs of collection, including but not limited to attorney’s fees, on
        any outstanding balance. <br />
        <br />
        <strong>WEBSITE AVAILABILITY</strong>
        <br />
        Your access to the website or Products may be occasionally restricted,
        such as when we need to make repairs or are introducing new features.
        Your access to the website or Products may also become permanently
        disabled, such as if we decide to terminate the operation of the website
        or Products. We cannot guarantee that you will have continuous access to
        the website or Products.
        <br />
        <br />
        <strong>NO REFUNDS</strong>
        <br />
        We reserve the right to change our refund policy at any time. We do not
        offer refunds for any of our Products under any circumstances. We
        believe we provide products and services that are high-quality and at a
        reasonable price point.
        <br />
        <br />
        <strong>GOVERNING LAW </strong>
        <br />
        All matters relating to or arising out of this Agreement shall be
        governed by and construed and interpreted under the laws of the State of
        Delaware, United States of America, without regard to conflicts of laws
        principles that would require the application of any other law.
        <br />
        <br />
        <strong>BINDING ARBITRATION </strong>
        <br />
        In the event that either party asserts that there is a dispute arising
        out of or relating to this Agreement, such party shall first notify the
        other party in writing, specifying the nature of the dispute and
        scheduling a meeting to attempt to resolve the dispute.
        <br />
        <br />
        If no resolution is reached within thirty (30) calendar days of the
        delivery of the written notice, either party may then elect to
        exclusively and finally resolve the dispute by binding arbitration by
        filing a written notice of arbitration in accordance with this section
        under the subheading “Binding Arbitration” and the Rules of Conciliation
        and Arbitration of the International Chamber of Commerce applicable at
        the time of submission of the dispute to arbitration (the “ICC Rules”).
        <br />
        <br />
        Notwithstanding anything to the contrary in the ICC Rules, the following
        terms and conditions shall apply.
        <br />
        <br />
        The arbitration shall be conducted by a panel of three (3) arbitrators.
        Each party shall have the right to appoint one (1) arbitrator within
        fifteen (15) days following the delivery of the written notice of
        arbitration, and a third arbitrator shall be selected by those two (2)
        party-appointed arbitrators within thirty (30) days of the appointment
        of the two (2) party-appointed arbitrators.
        <br />
        <br />
        The arbitration proceedings shall be held in San Francisco, California,
        United States of America in the English language.
        <br />
        <br />
        The parties shall equally bear the costs and fees of the arbitration,
        and each party shall bear its own cost for its own legal expenses. The
        arbitrators shall apply the substantive law set forth in the section of
        this Agreement under the subheading “Governing Law”. Any arbitration
        proceeding shall be conducted on a confidential basis. The arbitrators
        shall specify the reason and basis for their decision, the reason for
        any damages awarded and the breakdown for such damages awarded, and the
        basis for any other remedy authorized under this Agreement, including
        but not limited to injunctive relief or specific performance. For the
        avoidance of doubt, nothing in this Agreement shall prevent us from
        seeking injunctive or other equitable relief.
        <br />
        <br />
        The decision of the arbitrators shall be considered as a final and
        binding resolution of the dispute, shall be final and binding on the
        parties, and shall not be subject to appeal or reexamination. The award
        of the arbitrators may be entered as a judgment and enforced by any
        court of competent jurisdiction.
        <br />
        <br />
        TO THE EXTENT PERMITTED BY APPLICABLE LAW, YOU AGREE TO WAIVE YOUR RIGHT
        TO TRIAL BY JURY IN ANY PROCEEDINGS, ACTION OR COUNTERCLAIM.
        <br />
        <br />
        <br />
        <strong>INJUNCTIVE OR OTHER EQUITABLE RELIEF</strong>
        <br /> We may seek injunctive or other equitable relief that is
        necessary to protect our rights and intellectual property. All actions
        or proceedings related to this Agreement that are not subject to binding
        arbitration will be brought solely in the state or federal courts of the
        State of Delaware, United States of America. You hereby unconditionally
        and irrevocably consent to the personal and subject matter jurisdiction
        of those courts for purposes of any such action.
        <br />
        <br />
        <strong>CLASS ACTION WAIVER</strong>
        <br />
        You agree that any dispute arising out of or relating to this Agreement
        shall be solely between you and the Company.
        <br />
        <br />
        YOU AGREE TO WAIVE THE RIGHT TO LITIGATE IN COURT OR ARBITRATE ANY CLAIM
        OR DISPUTE AS A CLASS ACTION. YOU AGREE THAT YOU WILL ONLY MAKE CLAIMS
        AGAINST US IN YOUR INDIVIDUAL CAPACITY, AND CANNOT MAKE CLAIMS AGAINST
        US AS A MEMBER OF A CLASS OR AS A REPRESENTATIVE.
        <br />
        <br />
        <strong>ENTIRE AGREEMENT </strong>
        <br />
        This Agreement, the Privacy Policy and Disclaimer contain the entire
        agreement between you and the Company with respect to the subject matter
        hereof and thereof and supersede all prior agreements and undertakings,
        both written and oral, with respect thereto.
        <br />
        <br />
        <strong>TERMINATION OF AGREEMENT</strong>
        <br />
        We reserve the right, in our sole discretion, to terminate this
        Agreement and to terminate, restrict, deny, or suspend your access to
        the website and all Products at any time and for any purpose without
        prior notice. We also reserve the right to discontinue any or all of the
        website or Products at any time and for any purpose without prior
        notice.
        <br />
        <br />
        <strong>SEVERABILITY</strong>
        <br />
        If any term or other provision of this Agreement is held to be invalid,
        prohibited or unenforceable under applicable law, the other provisions
        of this Agreement will remain in full force and effect.
        <br />
        <br />
        <strong>MISCELLANEOUS </strong>
        <br />
        Our failure to act on or delay in exercising any privilege, power or
        right under this Agreement will not operate as a waiver of such
        privilege, power or right, and no single or partial exercise of any such
        privilege, power or right will preclude any other or further exercise of
        such privilege, power or right or the exercise of any other privilege,
        power or right.
        <br />
        <br />
        Subheadings in this Agreement are used for convenience of reference only
        and in no way define, describe, limit or extend the scope of this
        Agreement or the intent of any of its provisions. They shall not be
        considered in construing or interpreting this Agreement.
        <br />
        <br />
        The terms and conditions of this Agreement shall inure to the benefit of
        and be binding upon the successors, heirs, executors, administrators,
        legal representatives and assigns of the Company. Nothing in this
        Agreement, express or implied, is intended to confer upon any party
        other than the Company or our successors, heirs, executors,
        administrators, legal representatives and assigns, any rights, remedies,
        obligations or liabilities under this Agreement. You may not assign any
        of your rights or transfer any obligations under this Agreement to any
        other person.
        <br />
        <br />
        If any action at law or in equity is necessary to enforce or interpret
        the terms of this Agreement, the prevailing party shall be entitled to
        reasonable attorneys’ fees, costs and disbursements in addition to any
        other relief to which such party may be entitled.
        <br />
        <br />
        <br />
        <strong>HOW TO CONTACT US </strong>
        <br />
        If you have any questions, please contact us using the information
        below.
        <br />
        <br />
        <br />
        By email: contactus@joinb.social
        <br />
        By phone:
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
              Thank you for joining the B.Social waitlist to the first people to
              use an awesome app design and craft for you <br />
              by you. To make it more fun we have created a unique for you to
              help you invite more friends. The more <br />
              you invite people
              <span style={{ color: "#939393" }}>
                you stand a chance to B.Social swags, promoted in the app and on
                our your socials, get verified <br />
                in the app and potential gain equities in B.Social App company
              </span>
            </text>
            <text className={styles.modaltext2cm}>
              Thank you for joining the B.Social waitlist to the <br />
              first people to use an awesome app design and craft for you
              <br />
              by you. To make it more fun we have created a unique <br />
              for you to help you invite more friends. The more
              <br />
              you invite people{" "}
              <span style={{ color: "#939393" }}>
                you stand a chance to B.Social swags, <br />
                promoted in the app and on our your socials, get verified
                <br />
                in the app and potential gain equities in <br />
                B.Social App company
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
    </div>
  );
}
