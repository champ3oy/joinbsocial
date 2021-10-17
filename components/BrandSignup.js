import React, { useState, useEffect } from "react";
import styles from "../styles/Brand.module.css";

export default function BrandSignup({ page, onClose, onNext, onDone, onBack }) {
  const [showModal3, setShowModal3] = useState(false);
  return (
    <>
      <main
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-delay="10"
        className={styles.modalcon}
      >
        <div className={styles.modalb}>
          {/* <div className={styles.floatm1b} style={{ marginTop: -60 }}>
            <img alt="image" className={styles.emoji13} src="/fire.png" />
            <img alt="image" className={styles.floatImg} src="/float2.png" />
            <text className={styles.floatText81}>#challenge</text>
          </div> */}

          <div className={styles.modalleftb}>
            <text className={` ${styles.modaltext} ${styles.modaltextb}`}>
              Get your superfans and <br />
              other influencers to promote <br />
              your band.
            </text>
            <text className={styles.modaltext2}>
              Increase your brand equity by setting up brand challenges in
              BSocial. Pay influencers and your brand’s superfans to create
              content to promote your products. Your brand could go viral on
              social media, you know!
            </text>
          </div>

          <div className={styles.modalleftm}>
            <text className={` ${styles.modaltext} ${styles.modaltextb}`}>
              Use a computer to complete this step
            </text>
          </div>

          {page == 1 ? (
            <div className={`${styles.modalright} ${styles.modalrightx}`}>
              <div className={styles.pagination}>1 of 3</div>
              <label className={styles.label}>
                What is the name of the product or brand you want to promote?
              <span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Type name here`}
              />

              <label className={styles.label}>
                What is your email address? or Email address to be associated to
                this brand promotion?
              <span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Type email here`}
              />

              <label className={styles.label}>What is your phone number?<span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Type your phone number`}
              />

              <label className={styles.label}>
                What is your total budget for this brand challenge?
              <span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Type email here`}
              />
              <button
                name="btn"
                onClick={() => {
                  onNext();
                }}
                className={styles.btn}
              >
                Next
              </button>
              <text
                onClick={() => {
                  
                  onClose();
                }}
                className={styles.close}
              >
                close
              </text>
            </div>
          ) : page == 2 ? (
            <div className={styles.modalright}>
              <div
                className={styles.pagination}
                onClick={() => {
                  onBack();
                }}
              >
                <img alt="image" src="/back2.png" />2 of 3
              </div>
              <label className={styles.label}>
                How much do you want to spend per day?
              <span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Type name here`}
              />

              <label className={styles.label}>
                We charge based on the number of video responses, Clicks and
                views your brand challenge receives. How much do you want to pay
                for each method?
              <span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <div className={styles.options}>
                <text className={styles.optiontext}>
                  A. Target Cost Per Video Created(CPVC)
                </text>
                <input
                  type="text"
                  className={styles.inputoption}
                  placeholder={`Type amount here`}
                />
              </div>
              <div className={styles.options}>
                <text className={styles.optiontext}>
                  B. Target Cost Per Click (CPC)
                </text>
                <input
                  type="text"
                  className={styles.inputoption}
                  placeholder={`Type amount here`}
                />
              </div>
              <div className={styles.options}>
                <text className={styles.optiontext}>
                  C. Target Cost Per View (CPV)
                </text>
                <input
                  type="text"
                  className={styles.inputoption}
                  placeholder={`Type amount here`}
                />
              </div>

              <label className={styles.label}>
                Share requirements for your brand challenge. What are your
                must-include (non-negotiable) items for the challenge?
              <span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <textarea
                type="text"
                className={styles.textarea}
                placeholder={`Type some challenge`}
              />

              <button
                name="btn"
                onClick={() => {
                  onNext();
                }}
                className={styles.btn}
              >
                Next
              </button>
              <text
                onClick={() => {
                  onClose();
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
                  onBack();
                }}
              >
                <img alt="image" src="/back2.png" />3 of 3
              </div>
              <label className={styles.label}>
                Can you share examples of other challenges you liked in the
                past?
              <span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Type here`}
              />

              <label className={styles.label}>
                Would you want to approve all entries from superfans and
                influencers?
              <span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Type here`}
              />

              <label className={styles.label}>
                How did you hear about BSocial?
              <span style={{
                fontSize: 13,
                color: 'red',
                marginLeft: 3,
                marginTop: -3
              }}> *</span></label>
              <input
                type="text"
                className={styles.input}
                placeholder={`Type here`}
              />

              <button
                name="btn"
                onClick={() => {
                  onDone();
                  setShowModal3(true);
                }}
                className={styles.btn}
              >
                Done
              </button>
              <text
                onClick={() => {
                  onClose();
                }}
                className={styles.close}
              >
                close
              </text>
            </div>
          )}
        </div>
      </main>

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
              Thank you for your interest in promoting your brand or product in
              thhe B.Social app. With B.Social Brand challenge, you will
              activate creators, superfans, big and micro-influencers to promote
              your brand or product in B.socialapp and on other social media
              platforms.
              <br />
              <br />
              One of our Business Development and Partnership managers will
              reach out with next steps.
              <br />
              <br />
              Welcome to the B.Social family!
            </text>
            <text className={styles.modaltext2cm}>
              Thank you for your interest in promoting your brand or product in
              thhe B.Social app. With B.Social Brand challenge, you will
              activate creators, superfans, big and micro-influencers to promote
              your brand or product in B.socialapp and on other social media
              platforms.
              <br />
              <br />
              One of our Business Development and Partnership managers will
              reach out with next steps.
              <br />
              <br />
              Welcome to the B.Social family!
            </text>

            <button
              onClick={() => {
                setShowModal3(false);
                onClose();
              }}
              className={styles.btn}
            >
              close
            </button>
          </div>
        </main>
      ) : null}
    </>
  );
}
