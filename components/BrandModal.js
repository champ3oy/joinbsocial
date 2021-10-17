import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function BrandModal({ page, onClose, onNext, onDone, onBack }) {
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
          <div className={styles.floatm1b} style={{ marginTop: -60 }}>
            <img alt="image" className={styles.emoji13} src="/fire.png" />
            <img alt="image" className={styles.floatImg} src="/float2.png" />
            <text className={styles.floatText81}>#challenge</text>
          </div>

          <div className={styles.modalleftb}>
            <text className={` ${styles.modaltext} ${styles.modaltextb}`}>
              Get your <br />
              superfans and other <br />
              influencers <br />
              to promote <br />
              your band.
            </text>
            <text className={styles.modaltext2}>
              Increase your brand equity by setting up brand challenges in
              BSocial. Pay influencers and your brand’s superfans to create
              content to promote your products. Your brand could go viral on
              social media, you know!
            </text>
          </div>

          <img alt="image" src="/line.svg" className={styles.line} />
          <div className={styles.modalrightm}>
            <div className={styles.pagination}>1 of 3</div>
            <input
              type="text"
              className={styles.input}
              placeholder={`Your name`}
            />
            <div className={styles.input}>
              <textarea
                type="text"
                className={styles.textarea}
                placeholder={`What is the name of the product or brand you \nwant to promote? `}
              />
            </div>

            <input
              type="text"
              className={styles.input}
              placeholder={`What is your email address? `}
            />

            <input
              type="text"
              className={styles.input}
              placeholder="What is your phone number?"
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

          {page == 1 ? (
            <div className={`${styles.modalright} ${styles.modalrightx}` }>
              <div className={styles.pagination}>1 of 3</div>
              <div className={styles.input}>
                <textarea
                  type="text"
                  className={styles.textarea}
                  placeholder={`What is the name of the product or brand \nyou want to promote?`}
                />
              </div>

              <div className={styles.input}>
                <textarea
                  type="text"
                  className={styles.textarea}
                  placeholder={`What is your name or the name of your \nmarketing director or company representative for this promotion?`}
                />
              </div>
              <div className={styles.input}>
                <textarea
                  type="text"
                  className={styles.textarea}
                  placeholder={`What is your email address? or Email address \nto be associated to this brand promotion.`}
                />
              </div>
              <input
                type="text"
                className={styles.input}
                placeholder="What is your phone number?"
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
              <div className={styles.infocon}>
                <div className={styles.input}>
                  <textarea
                    required
                    type="text"
                    className={styles.textarea}
                    placeholder={`What is your total budget for this \nbrand challenge?`}
                  />
                  <img alt="image" src="/info.png" className={styles.info} />
                  <img
                    alt="image"
                    src="/tooltip1.png"
                    className={styles.tooltip1}
                  />
                </div>
              </div>

              <div className={styles.infocon}>
                <input
                  required
                  type="text"
                  className={styles.input}
                  placeholder="How much do you want to spend per day?"
                />
                <img alt="image" src="/info.png" className={styles.info2} />
                <img
                  alt="image"
                  src="/tooltip2.png"
                  className={styles.tooltip2}
                />
              </div>
              <div className={styles.infocon}>
                <div className={styles.input}>
                  <select className={styles.textarea} name="clicks" id="clicks">
                    <option value="default">
                      {`We charge based on the number of video \nresponses, Clicks
                        and views your \nbrand challenge receives.`}
                    </option>
                    <option value="saab">
                      Target Cost Per Video Created (CPVC)
                    </option>
                    <option value="mercedes">
                      Target Cost Per Click (CPC)
                    </option>
                    <option value="audi">Target Cost per View (CPV)</option>
                  </select>
                </div>
                {/* <img alt="image" src="/info.png" className={styles.info} /> */}
              </div>

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
              <div className={styles.infocon}>
                <div className={styles.input}>
                  <textarea
                    required
                    type="text"
                    className={styles.textarea}
                    placeholder={`Share requirements for your brand challenge. What are your must include items for the challenge?`}
                  />
                  <img alt="image" src="/info.png" className={styles.info} />
                  <img
                    alt="image"
                    src="/tooltip1.png"
                    className={styles.tooltip1}
                  />
                </div>
              </div>

              <div className={styles.infocon}>
                <div className={styles.input}>
                  <textarea
                    required
                    type="text"
                    className={styles.textarea}
                    placeholder={`Can you share example of other challenges you have liked in the past?`}
                  />
                  <img alt="image" src="/info.png" className={styles.info2} />
                  <img
                    alt="image"
                    src="/tooltip2.png"
                    className={styles.tooltip2}
                  />
                </div>
              </div>
              <div className={styles.infocon}>
                <div className={styles.input}>
                  <input
                    required
                    type="text"
                    className={styles.textarea}
                    placeholder="How did you hear about BSocial?"
                  />
                  <img alt="image" src="/info.png" className={styles.info} />
                </div>
              </div>

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
                onClose()
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
