import React, { useState, useEffect } from "react";
import styles from "../styles/Brand.module.css";
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
    const [productName, setproductName] = useState(null);
    const [name, setname] = useState(null);
    const [email, setemail] = useState(null);
    const [phone, setphone] = useState(null);
    const [totalBudget, settotalBudget] = useState(null);
    const [spendPerDay, setspendPerDay] = useState(null);
    const [cpvc, setcpvc] = useState(null);
    const [cpc, setcpc] = useState(null);
    const [cpv, setcpv] = useState(null);
    const [requirements, setrequirements] = useState(null);
    const [challengeExample, setchallengeExample] = useState(null);
    const [approveAllEntires, setapproveAllEntires] = useState(true);
    const [bsocialReferralSource, setbsocialReferralSource] = useState(null);
    const [err, seterr] = useState("");
    const [page, setpage] = useState(2);
    const [showmodal, setmodal] = useState(false);
    const [BrandSignup, { data, loading, error }] = useMutation(BRAND_SIGNUP_C);

    useEffect(() => {
        console.log(conToken)
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
                            Thank you for your interest in the Ambassador program, we super excited for you to be a part of our
                            B.Social family and can’t wait to roll you in. Please go ahead and fill out these information to help us know you
                            better. Thank you again!
                        </text>
                    </div>

                    <div className={styles.modalleftbm}>
                        <text className={` ${styles.modaltext} ${styles.modaltextb}`}>
                            You need a<br />
                            computer <br />
                            or tablet to <br />
                            complete <br />
                            this step <br />
                        </text>
                    </div>


                    <div className={styles.modalright}>
                        

                        <label className={styles.label}>
                            How much do you want to spend per day?
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
                            type="number"
                            className={styles.input}
                            placeholder={`Type amount here(USD)`}
                            onChange={(e) => {
                                setspendPerDay(e.target.value);
                            }}
                            value={spendPerDay}
                        />

                        <label className={styles.label}>
                            How much do you want to spend per day?
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
                            type="number"
                            className={styles.input}
                            placeholder={`Type amount here(USD)`}
                            onChange={(e) => {
                                setspendPerDay(e.target.value);
                            }}
                            value={spendPerDay}
                        />



                        <div className={styles.options2}>
                            <div className={styles.shorts}>
                                <label className={styles.label}>
                                    We charge??
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
                                        marginTop: 10
                                    }}
                                    required={true}
                                    type="number"
                                    className={styles.input}
                                    placeholder={`Type amount here`}
                                    onChange={(e) => {
                                        setcpc(e.target.value);
                                    }}
                                    value={cpc}
                                />
                            </div>
                            <div className={styles.shorts}>
                                <label className={styles.label}>
                                    We charge??
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
                                        marginTop: 10
                                    }}
                                    required={true}
                                    type="number"
                                    className={styles.input}
                                    placeholder={`Type amount here`}
                                    onChange={(e) => {
                                        setcpc(e.target.value);
                                    }}
                                    value={cpc}
                                />
                            </div>

                        </div>

                        <div className={styles.options2}>
                            <div className={styles.shorts}>
                                <label className={styles.label}>
                                    We charge??
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
                                        marginTop: 10
                                    }}
                                    required={true}
                                    type="number"
                                    className={styles.input}
                                    placeholder={`Type amount here`}
                                    onChange={(e) => {
                                        setcpc(e.target.value);
                                    }}
                                    value={cpc}
                                />
                            </div>
                            <div className={styles.shorts}>
                                <label className={styles.label}>
                                    We charge??
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
                                        marginTop: 10
                                    }}
                                    required={true}
                                    type="number"
                                    className={styles.input}
                                    placeholder={`Type amount here`}
                                    onChange={(e) => {
                                        setcpc(e.target.value);
                                    }}
                                    value={cpc}
                                />
                            </div>

                        </div>




                        <button
                            name="btn"
                            // disabled={
                            //     !spendPerDay && !cpvc && !cpc && !cpv && !requirements
                            // }
                            onClick={() => {
                                // setpage(3)
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
