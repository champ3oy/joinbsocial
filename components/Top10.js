import React, { useState, useEffect } from "react";
import styles from "../styles/Leader.module.css";
import { useQuery } from "@apollo/client";
import { RANKED_USERS, GET_TOTAL_NUMBER, GET_WAITLIST_NUMBER } from "../GraphQL/queries";

export default function Top10(props) {
  const [showModalfilter, setShowModalfilter] = useState(false);
  const [page, setpage] = useState(1);
  const [filter, setfilter] = useState("Monthly");
  const [topTen, setTopTen] = useState([]);

  const { loading, error, data } = useQuery(RANKED_USERS, {
    variables: {
      orderBy: filter.toLocaleLowerCase(),
      limit: 10,
    },
  });

  const Query2 = useQuery(RANKED_USERS, {
    variables: {
      orderBy: "monthly",
      limit: 100,
    },
  });

  const Query3 = useQuery(GET_TOTAL_NUMBER);

  const Query4 = useQuery(GET_WAITLIST_NUMBER);

  useEffect(() => {
    if (data) {
      // console.log(data)
      setTopTen(data.ListRankedUsers.slice(0, 10));
    }

    // console.log(Query3.data.CountTotalReferredUsers.message)
  }, [data]);

  return (
    <>
      {props.screen == "waitlist" ? (
        <main className={styles.waitlist}>
          <text className={styles.number}>
            {Query3.data
              ? Query4?.data?.CountTotalWaitListUsers?.message
              : "00"}
          </text>
          <text className={styles.subText}>Total Number on Waitlist</text>
          <div
            className={styles.joinBtn}
            onClick={() => {
              props.modal1();
            }}
          >
            Join the waitlist &#127881;
          </div>
          <div
            style={{ marginTop: 20 }}
            onClick={() => {
              props.modal5();
            }}
          >
            <a className={styles.textBtnw}>
              Check where you are on the waitlist &#127881;
            </a>
          </div>
        </main>
      ) : (
        <main className={styles.referral}>
          <div className={styles.rleft}>
            <text className={styles.number2}>
            {Query3.data
              ? Query3?.data?.CountTotalReferredUsers?.message
              : "00"}
            </text>
            <text className={styles.subtext2}>Total Number of Referral</text>
            <div
              onClick={() => {
                props.modal1();
              }}
              className={styles.joinx}
            >
              Join the waitlist
            </div>
            <div className={styles.head}>
              <text className={styles.head1}>Top 10</text>
              <div
                onClick={() => {
                  if (showModalfilter) {
                    setShowModalfilter(false);
                  } else {
                    setShowModalfilter(true);
                  }
                }}
                className={styles.filter}
              >
                <img src="/calender.png" />
                <text>{filter}</text>
                <img src="/arrow-down.png" className={styles.ad} />
                {showModalfilter ? (
                  <div className={styles.filtepopup}>
                    <text
                      onClick={() => {
                        setfilter("Daily");
                        setShowModalfilter(false);
                      }}
                    >
                      Daily
                    </text>
                    <text
                      onClick={() => {
                        setShowModalfilter(false);
                        setfilter("Weekly");
                      }}
                    >
                      Weekly
                    </text>
                    <text
                      onClick={() => {
                        setfilter("Monthly");
                        setShowModalfilter(false);
                      }}
                    >
                      Monthly
                    </text>
                  </div>
                ) : null}
              </div>
            </div>
            <div className={styles.top5}>
              {topTen?.map((item, index) => {
                let colors = [
                  styles.stick0,
                  styles.stick1,
                  styles.stick2,
                  styles.stick3,
                  styles.stick4,
                  styles.stick5,
                  styles.stick6,
                  styles.stick7,
                  styles.stick8,
                  styles.stick9,
                ];
                return (
                  <div
                    className={`${styles.stick} ${colors[index]}`}
                    key={item._id}
                  >
                    <div className={styles.stickleft}>
                      <text className={styles.position}>{index + 1}</text>
                      <div className={styles.midtext1}>
                        <text className={styles.name1}>{item.name}</text>
                        <text className={styles.emojis1}>
                          {index + 1 == 1
                            ? "1st"
                            : index + 1 == 2
                            ? "2nd"
                            : index + 1 == 3
                            ? "3rd"
                            : index + 1 + "th"}{" "}
                          on the rank
                        </text>
                      </div>
                    </div>
                    <div className={styles.stickright}>
                      <text className={styles.signups}>
                        {item.invitedUsers ? item.invitedUsers : 0} Sign ups
                      </text>
                      <img src="/arrow-up.png" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.rright}>
            <div className={styles.rankcon}>
              <text className={styles.ranking}>Ranking</text>
              <div
                onClick={() => {
                  props.modal1();
                }}
                className={styles.joinx2}
              >
                Join the waitlist
              </div>
            </div>

            <div className={styles.tab}>
              <text>Everyone on ranking</text>
            </div>
            <div className={styles.ranklist}>
              {Query2?.data?.ListRankedUsers?.map((item, index) => {
                return (
                  <div className={styles.listitem} key={item._id}>
                    <div className={styles.listitemleft}>
                      <div className={styles.imgborder}>
                        <img />
                      </div>
                      <div className={styles.midtext}>
                        <text className={styles.name}>{item.name}</text>
                        <text className={styles.emojis}>
                          {" "}
                          {index + 1 == 1
                            ? "1st "
                            : index + 1 == 2
                            ? "2nd "
                            : index + 1 == 3
                            ? "3rd "
                            : index + 1 + "th "}
                          on the rank
                        </text>
                      </div>
                    </div>
                    <div className={styles.rank}>
                      <img src="/arrow-up2.png" />
                      <text>{item.invitedUsers ? item.invitedUsers : 0}</text>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      )}
    </>
  );
}
