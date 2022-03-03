import React, { useState, useEffect } from "react";
import styles from "../styles/Ambassador.module.css";
import modal from "../styles/Modal.module.css";
import { useMutation } from "@apollo/client";
import { BRAND_SIGNUP_C } from "../GraphQL/mutations";

export default function Ambassador({
  onClose,
  onNext,
  onDone,
  onBack,
  conToken,
}) {
  const [showModal3, setShowModal3] = useState(false);
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null);
  const [school, setschool] = useState(null);
  const [country, setcountry] = useState(null);
  const [tiktok, settiktok] = useState(null);
  const [instagram, setinstagram] = useState(null);

  const [err, seterr] = useState("");
  const [page, setpage] = useState(2);
  const [showmodal, setmodal] = useState(false);
  const [loading1, setloading] = useState(false);
  const [BrandSignup, { data, loading, error }] = useMutation(BRAND_SIGNUP_C);

  useEffect(() => {
    console.log(conToken);
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
      console.log(error.message);
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
              Sign Up as an Ambassador <br />
              Of Bsocial🤩
            </text>
            <text className={` ${styles.modaltextm} ${styles.modaltextbm}`}>
              Sign Up as an Ambassador <br />
              Of Bsocial🤩
            </text>
            <text className={styles.modaltext2}>
              Thank you for your interest in the Ambassador program, we super
              excited for you to be a part of our B.Social family and can’t wait
              to roll you in. Please go ahead and fill out these information to
              help us know you better. Thank you again!
            </text>
          </div>

          <div className={styles.modalright}>
            <label className={styles.label}>
              What is your email?
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
              placeholder={`Type email`}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
            />

            <label className={styles.label}>
              What is your full name?
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
              type="default"
              className={styles.input}
              placeholder={`Type full name`}
              onChange={(e) => {
                setname(e.target.value);
              }}
              value={name}
            />

            <div className={styles.options2}>
              <div className={styles.shorts}>
                <label className={styles.label}>
                  what is the name of your school?
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
                  style={{
                    marginTop: 10,
                  }}
                  required={true}
                  type="default"
                  className={styles.input}
                  placeholder={`Type school`}
                  onChange={(e) => {
                    setschool(e.target.value);
                  }}
                  value={school}
                />
              </div>
              <div className={styles.shorts}>
                <label className={styles.label}>
                  What country are ou based at?
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
                  style={{
                    marginTop: 10,
                  }}
                  required={true}
                  type="default"
                  className={styles.input}
                  placeholder={`Type country`}
                  onChange={(e) => {
                    setcountry(e.target.value);
                  }}
                  value={country}
                />
              </div>
            </div>

            <div className={styles.options2}>
              <div className={styles.shorts}>
                <label className={styles.label}>
                  What is your Tik Tok handle
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
                  style={{
                    marginTop: 10,
                  }}
                  required={true}
                  type="default"
                  className={styles.input}
                  placeholder={`Type handle`}
                  onChange={(e) => {
                    settiktok(e.target.value);
                  }}
                  value={tiktok}
                />
              </div>
              <div className={styles.shorts}>
                <label className={styles.label}>
                  What is your instagram handle?
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
                  style={{
                    marginTop: 10,
                  }}
                  required={true}
                  type="default"
                  className={styles.input}
                  placeholder={`Type handle`}
                  onChange={(e) => {
                    setinstagram(e.target.value);
                  }}
                  value={instagram}
                />
              </div>
            </div>

            <button
              name="btn"
              // disabled={
              //     !spendPerDay && !cpvc && !cpc && !cpv && !requirements
              // }
              onClick={() => {
                console.log({
                  name: name,
                  email: email,
                  tiktok: tiktok,
                  instagram: instagram,       
                  school: school,
                  country: country,
                });
                setloading(true);
                fetch("https://purple-go.herokuapp.com/api/addAmbassador", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    name: name,
                    email: email,
                    tiktok: tiktok,
                    instagram: instagram,
                    school: school,
                    country: country,
                  }),
                })
                  .then((response) => response.json())
                  .then((data) => {
                    if (data.status) {
                      onClose();
                      setloading(false);
                    } else {
                      console.log(data);
                      onClose(data.message);
                      setloading(false);
                    }
                  })
                  .catch((error) => {
                    setloading(false);
                    // setemail1("");
                    console.error("Error:", error);
                  });
              }}
              className={styles.btn}
            >
              {loading1 ? "Loading" : "Next"}
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
