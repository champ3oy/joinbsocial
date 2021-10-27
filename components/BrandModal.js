import React, { useState, useEffect } from "react";
import styles from "../styles/Brand.module.css";
import modal from "../styles/Modal.module.css";
import { useMutation } from "@apollo/client";
import { BRAND_SIGNUP } from "../GraphQL/mutations";

export default function BrandModal({ page, onClose, onNext, onDone, onBack }) {
  const [showModal3, setShowModal3] = useState(false);
  const [productName, setproductName] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [totalBudget, settotalBudget] = useState("");
  const [spendPerDay, setspendPerDay] = useState("");
  const [cpvc, setcpvc] = useState("");
  const [cpc, setcpc] = useState("");
  const [cpv, setcpv] = useState("");
  const [requirements, setrequirements] = useState("");
  const [challengeExample, setchallengeExample] = useState("");
  const [approveAllEntires, setapproveAllEntires] = useState(true);
  const [bsocialReferralSource, setbsocialReferralSource] = useState("");
  const [err, seterr] = useState("");
  const [showmodal, setmodal] = useState(false);
  const [BrandSignup, { data, loading, error }] = useMutation(BRAND_SIGNUP);

  useEffect(() => {
    if (data) {
      console.log(data);
      if (data.BrandSignup.status == "success") {
        onDone(data);
        setShowModal3(true);
      } else {
        seterr("Sorry an error occured, Please try again");
        setmodal(true);
      }
    }
    if (error) {
      console.log(error);
      seterr(error?.message);
      setmodal(true);
    } else {
      setmodal(false);
    }
  }, [data, error]);

  return (
    <>
      <main
        data-aos="zoom-in"
        data-aos-offset="50"
        data-aos-delay="10"
        className={styles.modalcon}
      >
        <div className={styles.modalb}>
          <div className={styles.modalleftb}>
            <text className={` ${styles.modaltext} ${styles.modaltextb}`}>
              Get your superfans and <br />
              other influencers to promote <br />
              your brand.
            </text>
            <text className={` ${styles.modaltextm} ${styles.modaltextbm}`}>
              Get your <br />
              superfans <br />
              and other <br />
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
          <div className={styles.modalleftbm}>
            <text className={` ${styles.modaltext} ${styles.modaltextb}`}>
              Get your superfans and <br />
              other influencers to promote <br />
              your brand.
            </text>
            <text className={` ${styles.modaltextm} ${styles.modaltextbm}`}>
              Get your <br />
              superfans <br />
              and other <br />
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
          <div className={styles.modalrightm}>
            {/* <div className={styles.pagination}>1 of 3</div> */}
            <input
              required={true}
              type="text"
              className={styles.input}
              placeholder={`Your name`}
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
            />
            <div className={styles.input}>
              <textarea
                type="text"
                className={styles.textaream}
                placeholder={`What is the name of the product or brand you \nwant to promote? `}
                onChange={(e) => {
                  setproductName(e.target.value);
                }}
                value={productName}
              />
            </div>

            <input
              required={true}
              type="email"
              className={styles.input}
              placeholder={`What is your email address? `}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
            />

            <input
              required={true}
              type="tel"
              className={styles.input}
              placeholder="What is your phone number?"
              onChange={(e) => {
                setphone(e.target.value);
              }}
              value={phone}
            />
            <button
              name="btn"
              onClick={() => {
                try {
                  BrandSignup({
                    variables: {
                      email: email,
                      phone: phone,
                      device: "mobile",
                      productName: productName,
                    },
                  }).catch(() => {
                    if (error) {
                      seterr(error?.message);
                      setmodal(true);
                    } else {
                      setmodal(false);
                    }
                  });
                } catch {
                  (e) => {
                    console.log("error", e);
                  };
                }
              }}
              className={styles.btn}
            >
              {loading ? "Loading" : "Done"}
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
            <div className={`${styles.modalright} ${styles.modalrightx}`}>
              <div className={styles.pagination}>1 of 3</div>
              <label className={styles.label}>
                What is the name of the product or brand you want to promote?
                <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span>
              </label>
              <input
                required={true}
                type="text"
                className={styles.input}
                placeholder={`Type name here`}
                onChange={(e) => {
                  setproductName(e.target.value);
                }}
                value={productName}
              />

              <label className={styles.label}>
                What is your email address? or email address to be associated to
                this brand promotion?
                <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span>
              </label>
              <input
                required={true}
                type="email"
                className={styles.input}
                placeholder={`Type email here`}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                value={email}
              />

              <label className={styles.label}>
                What is your phone number?
                <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span>
              </label>
              <input
                required={true}
                type="tel"
                className={styles.input}
                placeholder={`Type your phone number`}
                onChange={(e) => {
                  setphone(e.target.value);
                }}
                value={phone}
              />

              <label className={styles.label}>
                What is your total budget for this brand challenge?(USD)
                <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span>
              </label>
              <input
                required={true}
                type="text"
                className={styles.input}
                placeholder={`Type amount here`}
                onChange={(e) => {
                  settotalBudget(e.target.value);
                }}
                value={totalBudget}
              />
              <button
                name="btn"
                disabled={!productName && !email && !phone && !totalBudget}
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
                How much do you want to spend per day?(USD)
                <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span>
              </label>
              <input
                required={true}
                type="text"
                className={styles.input}
                placeholder={`Type amount here`}
                onChange={(e) => {
                  setspendPerDay(e.target.value);
                }}
                value={spendPerDay}
              />

              <label className={styles.label}>
                We charge based on the number of video responses, clicks and
                views your brand challenge receives. How much do you want to pay
                for each method?
                <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span>
              </label>
              <div className={styles.options}>
                <text className={styles.optiontext}>
                  A. Target Cost Per Video Created(CPVC)
                </text>
                <input
                  required={true}
                  type="text"
                  className={styles.inputoption}
                  placeholder={`Type amount here(USD)`}
                  onChange={(e) => {
                    setcpvc(e.target.value);
                  }}
                  value={cpvc}
                />
              </div>
              <div className={styles.options}>
                <text className={styles.optiontext}>
                  B. Target Cost Per Click (CPC)
                </text>
                <input
                  required={true}
                  type="text"
                  className={styles.inputoption}
                  placeholder={`Type amount here(USD)`}
                  onChange={(e) => {
                    setcpc(e.target.value);
                  }}
                  value={cpc}
                />
              </div>
              <div className={styles.options}>
                <text className={styles.optiontext}>
                  C. Target Cost Per View (CPV)
                </text>
                <input
                  required={true}
                  type="text"
                  className={styles.inputoption}
                  placeholder={`Type amount here(USD)`}
                  onChange={(e) => {
                    setcpv(e.target.value);
                  }}
                  value={cpv}
                />
              </div>

              <label className={styles.label}>
                Share requirements for your brand challenge. What are your
                must-include (non-negotiable) items for the challenge?
                <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span>
              </label>
              <textarea
                type="text"
                className={styles.textarea}
                placeholder={`Type some challenge`}
                onChange={(e) => {
                  setrequirements(e.target.value);
                }}
                value={requirements}
              />

              <button
                name="btn"
                disabled={
                  !spendPerDay && !cpvc && !cpc && !cpv && !requirements
                }
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
                {/* <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span> */}
              </label>
              <input
                // required={true}
                type="text"
                className={styles.input}
                placeholder={`Type amount here`}
                onChange={(e) => {
                  setchallengeExample(e.target.value);
                }}
                // value={challengeExample}
              />

              <label className={styles.label}>
                Would you want to approve all entries from superfans and
                influencers?
                {/* <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span> */}
              </label>
              <select
              style={{
                paddingTop: 30
              }}
                className={`${styles.input}`}
                name="approval"
                onChange={(e) => {
                  setapproveAllEntires(e.target.value == "yes" ? true : false);
                }}
              >
                <option className={`${styles.optionstext}`} value="yes">
                  Yes
                </option>
                <option className={`${styles.optionstext}`} value="no">
                  No
                </option>
              </select>

              <label className={styles.label}>
                How did you hear about BSocial?
                {/* <span
                  style={{
                    fontSize: 13,
                    color: "red",
                    marginLeft: 3,
                    marginTop: -3,
                  }}
                >
                  {" "}
                  *
                </span> */}
              </label>
              <input
                // required={true}
                type="text"
                className={styles.input}
                placeholder={`Type entry here`}
                onChange={(e) => {
                  setbsocialReferralSource(e.target.value);
                }}
                // value={bsocialReferralSource}
              />

              <button
                name="btn"
                disabled={
                  !challengeExample &&
                  !bsocialReferralSource &&
                  !approveAllEntires
                }
                onClick={() => {
                  try {
                    BrandSignup({
                      variables: {
                        email: email,
                        phone: phone,
                        device: "web",
                        productName: productName,
                        totalBudget: totalBudget,
                        spendPerDay: spendPerDay,
                        cpvc: cpvc,
                        cpc: cpc,
                        cpv: cpv,
                        requirements: requirements,
                        challengeExample: challengeExample,
                        bsocialReferralSource: bsocialReferralSource,
                        approveAllEntires: approveAllEntires,
                      },
                    }).catch(() => {
                      if (error) {
                        seterr(error?.message);
                        setmodal(true);
                      } else {
                        setmodal(false);
                      }
                    });
                  } catch {
                    (e) => {
                      console.log("error", e);
                    };
                  }
                }}
                className={styles.btn}
              >
                {loading ? "Loading" : "Done"}
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

      {showmodal ? (
        <div className={modal.con}>
          <div className={modal.modal}>
            <text className={modal.title}>Error</text>
            {/* <text className={modal.subtitle}>{err}</text> */}
            <text
              onClick={() => {
                setmodal(false);
              }}
              className={modal.close}
            >
              close
            </text>
          </div>
        </div>
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
