"use client";
import React, { useEffect, useState } from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import SwipeableViews from "react-swipeable-views";
import { apolloClient } from "@/lib/apolloClient";
import { isIOS, isAndroid } from "react-device-detect";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TipJar from "./TipJar"
import ShopLink from "./ShopLink";
import Like from "./Like";
import Share from "./Share";
import Comment from "./Comment";
import { Icons } from "./icons";
import {
  GET_CONTENT_BY_ID,
  GET_COMMENTS,
  GET_CONTENTS,
} from "../GraphQL/queries";
import { useRouter } from "next/router";

const VideoFeed = () => {
  const router = useRouter()
  const {id} = router.query

  console.log(id)

  const [openTip, setOpenTip] = useState(false);
  const [openComment, setOpenComment] = useState(false);
  const [price, setPrice] = useState(5);
  const [cid, setcid] = useState("");

  const { loading, error, data } = useQuery(GET_CONTENT_BY_ID, {
    variables: { contentId: id },
    client: apolloClient,
    onCompleted(data) {
      if (data) {
        setContents([data?.GetContentById, ...contents]);
      }
    },
  });
  const [contents, setContents] = useState([]);

  // const moreContent = useQuery(GET_CONTENTS, {
  //   client: apolloClient,
  //   variables: {
  //     limit: 20,
  //     page: 0,
  //   },
  //   onCompleted(data) {
  //     if (data?.TrendingContents) {
  //       setContents([...contents, ...data?.TrendingContents]);

  //       console.log(contents);
  //     }
  //   },
  //   onError(error) {
  //     console.log(error);
  //   },
  // });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const response = await fetch(event.target.action, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    // Redirect to the Stripe checkout page
    window.open(data?.url, "_self");
  };

  if (loading)
    return (
      <div className="bg-black w-full h-[100dvh] flex justify-center items-center">
        <Icons.spinner color="white" className="mr-2 h-4 w-4 animate-spin" />
      </div>
    );
  if (error) {
    console.log(error);

    return (
      <div className="bg-black text-white w-[100vw] h-[100dvh] flex justify-center items-center">
        Sorry!!! Content not found
      </div>
    );
  }

  return (
    <div className="w-full flex items-center justify-center">
      <SwipeableViews
        className="w-fit relative flex flex-col h-fit"
        enableMouseEvents
        axis="y"
      >
        {contents?.map((content, index) => (
          <div
            className="relative w-[100wh] sm:w-[400px] h-[100dvh] sm:h-[90dvh] bg-[black] sm:rounded-2xl sm:overflow-hidden"
            key={content._id}
          >
            <video
              className="w-[100wh] sm:w-[400px] h-full sm:rounded-2xl sm:overflow-hidden"
              src={content.content_url}
              controls={false}
              autoPlay={true}
              loop
              muted={false}
              style={{
                objectFit: "cover",
              }}
            />

            <div className="w-full sm:w-full fixed top-0 flex h-full flex-col items-start justify-between sm:rounded-2xl sm:overflow-hidden">
              <div
                className="w-full h-[93px] flex justify-between items-center px-3 py-5"
                style={{
                  background: "linear-gradient(to bottom, #000, rgba(0,0,0,0))",
                }}
              >
                <div className="flex flex-row items-center">
                  <Avatar className="w-[41px] h-[41px]">
                    <AvatarImage
                      width={41}
                      height={41}
                      src={content?.creator?.profile_picture}
                    />
                    <AvatarFallback>BS</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col ml-2">
                    <text className="text-white text-[12px] font-bold leading-4">
                      {content?.creator?.name}
                    </text>
                    <text className="text-white text-[10px]">
                      Join me on BeSocial
                    </text>
                  </div>
                </div>
                <div className="">
                  <Button
                    onClick={() => {
                      if (isIOS) {
                        router.push("/ios-page");
                      } else if (isAndroid) {
                        router.push("/android-page");
                      }
                    }}
                    className="w-[84px] font-bold h-[26px] rounded-full bg-[#EF258A] border-none text-white text-[10px]"
                    variant="outline"
                  >
                    Open App
                  </Button>
                </div>
              </div>
              <div className="w-full">
                <div
                  className="pb-6 px-3 pt-5 flex flex-row justify-between items-end"
                  style={{
                    background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
                  }}
                >
                  <div className="w-[80%]">
                    <div className="flex flex-row items-center">
                      <Avatar className="w-[41px] h-[41px]">
                        <AvatarImage
                          width={41}
                          height={41}
                          src={content?.creator?.profile_picture}
                        />
                        <AvatarFallback>BS</AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col ml-2">
                        <text className="text-white text-[12px] font-bold leading-4">
                          {content?.creator?.name}
                        </text>
                        <text className="text-white text-[10px]">
                          @{content?.creator?.username}
                        </text>
                      </div>
                    </div>

                    <p
                      className="text-white text-[12px] mt-2"
                      style={{
                        lineHeight: 1.2,
                      }}
                    >
                      {content?.caption}
                    </p>
                  </div>
                  <div className="flex flex-col items-center justify-between">
                    <TipJar
                      onClick={() => {
                        setOpenTip(true);
                        setcid(content?._id);
                      }}
                    />

                    <ShopLink
                      onClick={() => {
                        if (isIOS) {
                          router.push("/ios-page");
                        } else if (isAndroid) {
                          router.push("/android-page");
                        }
                      }}
                    />

                    <Like
                      onClick={() => {
                        if (isIOS) {
                          router.push("/ios-page");
                        } else if (isAndroid) {
                          router.push("/android-page");
                        }
                      }}
                    />

                    <Comment
                      onClick={() => {
                        setOpenComment(true);
                        setcid(content?._id);
                      }}
                    />

                    <Share
                      onClick={() => {
                        if (isIOS) {
                          router.push("/ios-page");
                        } else if (isAndroid) {
                          router.push("/android-page");
                        }
                      }}
                    />
                  </div>
                </div>
                <div
                  onClick={() => {
                    if (isIOS) {
                      router.push("/ios-page");
                    } else if (isAndroid) {
                      router.push("/android-page");
                    }
                  }}
                  className="cursor-pointer w-[100wh] sm:w-[400px] max-h-[20%] py-5 bg-[#ef258a] flex items-center justify-center text-white text-sm font-bold"
                >
                  Open your account on the app
                </div>
              </div>

              {openComment && (
                <CommentBox id={cid} onClose={() => setOpenComment(false)} />
              )}
            </div>
          </div>
        ))}
      </SwipeableViews>

      {openTip && (
        <div className="w-[100vw] h-[100vh] fixed top-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <div className="w-[311px] h-[267px] relative">
            <div className="w-[311px] h-[267px] left-0 top-0 absolute bg-white rounded-[20px] shadow" />
            <div className="w-[285px] h-[155px] left-[13px] top-[86px] absolute bg-zinc-100 rounded-lg" />
            {/* <div className="w-[262px] h-[34px] left-[25px] top-[197px] absolute bg-[green] rounded-lg border-2 border-pink-600" > */}
            <form
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              action={`/api/checkout?price=${price}&cid=${cid}`}
              onSubmit={handleSubmit}
              method="POST"
            >
              <button
                type="submit"
                className="w-[262px] h-[34px] left-[25px] top-[197px] absolute bg-pink-600 rounded-lg border-2 border-pink-600 text-white text-[11px] font-black font-['Inter']"
              >
                Tip
              </button>
            </form>
            <div className="w-[262px] h-[45px] left-[25px] top-[140px] absolute bg-zinc-300 rounded-lg" />
            <div className="w-[167px] h-[17px] left-[25px] top-[102px] absolute text-black text-[11px] font-black font-['Inter']">
              The tip Jar
            </div>
            <div className="flex w-[133px] h-[13px] left-[41px] top-[156px] absolute text-black text-[11px] font-black font-['Inter']">
              $
              <input
                className="h-[50px] -mt-[17px] bg-transparent ml-1 outline-none"
                type="number"
                onChange={(e) => setPrice(Number(e.target.value))}
                value={price}
              />
            </div>
            <div className="w-[246px] left-[25px] top-[119px] absolute text-stone-300 text-[11px] font-medium font-['Inter'] leading-3">
              Help this content or the creator who posted it
            </div>
            <div className="flex absolute text-black text-[15px] font-black font-['Inter'] items-center justify-center w-full h-[70px] border-b-2 border-b-[#eee]">
              <svg
                className="mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="18"
                viewBox="0 0 16 18"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.0017 3.56741C13.4137 4.35606 14.5427 5.54307 15.2375 6.96944C15.9323 8.3958 16.1597 9.99339 15.8892 11.5482C15.6187 13.103 14.8632 14.5407 13.724 15.6688C12.5848 16.7969 11.1162 17.5614 9.51505 17.86C7.91388 18.1586 6.25658 17.977 4.76516 17.3395C3.27374 16.7019 2.01943 15.639 1.17028 14.293C0.32112 12.947 -0.0823331 11.3822 0.0139658 9.80832C0.110265 8.23443 0.701717 6.72659 1.70909 5.48677C1.93994 5.20279 2.38337 5.24589 2.61537 5.52987C2.93309 5.91882 3.29423 6.27242 3.69309 6.58402C4.07252 6.88126 4.59137 6.52988 4.57651 6.05805C4.54002 5.00598 4.76416 3.96072 5.23023 3.0094C5.84021 1.7678 6.83266 0.739144 8.07137 0.064611C8.35365 -0.0900869 8.69994 0.0469313 8.84508 0.327597C9.54439 1.68448 10.6425 2.81154 12.0017 3.56741ZM12.5731 11.3708C12.5731 12.5431 12.0914 13.6673 11.2341 14.4962C10.3768 15.3251 9.21407 15.7908 8.00165 15.7908C5.81537 15.7908 3.9788 14.246 3.53309 12.2747C3.4268 11.8007 4.03594 11.5642 4.46337 11.8183C5.02079 12.1489 5.64444 12.3613 6.29309 12.4415C6.63937 12.4835 6.89994 12.1764 6.87594 11.8404C6.75029 10.1679 7.2876 8.51181 8.3788 7.20834C8.43664 7.1385 8.51302 7.08516 8.59977 7.05402C8.68653 7.02288 8.7804 7.01511 8.87137 7.03154C9.91339 7.227 10.8526 7.76687 11.528 8.55859C12.2034 9.3503 12.5729 10.3445 12.5731 11.3708Z"
                  fill="#EF258A"
                />
              </svg>{" "}
              Tip Jar
              <svg
                onClick={() => setOpenTip(false)}
                className="cursor-pointer absolute top-7 right-5"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M6.575 8.3998L1.675 13.2998C1.49167 13.4831 1.25833 13.5748 0.975 13.5748C0.691667 13.5748 0.458333 13.4831 0.275 13.2998C0.0916663 13.1165 0 12.8831 0 12.5998C0 12.3165 0.0916663 12.0831 0.275 11.8998L5.175 6.9998L0.275 2.0998C0.0916663 1.91647 0 1.68314 0 1.3998C0 1.11647 0.0916663 0.883138 0.275 0.699804C0.458333 0.516471 0.691667 0.424805 0.975 0.424805C1.25833 0.424805 1.49167 0.516471 1.675 0.699804L6.575 5.5998L11.475 0.699804C11.6583 0.516471 11.8917 0.424805 12.175 0.424805C12.4583 0.424805 12.6917 0.516471 12.875 0.699804C13.0583 0.883138 13.15 1.11647 13.15 1.3998C13.15 1.68314 13.0583 1.91647 12.875 2.0998L7.975 6.9998L12.875 11.8998C13.0583 12.0831 13.15 12.3165 13.15 12.5998C13.15 12.8831 13.0583 13.1165 12.875 13.2998C12.6917 13.4831 12.4583 13.5748 12.175 13.5748C11.8917 13.5748 11.6583 13.4831 11.475 13.2998L6.575 8.3998Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoFeed;

const CommentBox = ({ id, onClose }) => {
  const [comments, setcomments] = useState([]);
  const [commentCount, setCommentCount] = useState(0);
  const _ = useQuery(GET_COMMENTS, {
    fetchPolicy: "cache-and-network",
    client: apolloClient,
    onCompleted(data) {
      setcomments(data?.GetComments);
      setCommentCount(data?.GetComments?.length);
    },
    variables: {
      limit: 10,
      page: 0,
      repliesLimit2: 2,
      repliesPage2: 0,
      contentId: id,
    },
  });

  return (
    <div className="w-full h-[350px] bg-white absolute bottom-0 rounded-t-3xl px-[16px] py-[24px]">
      <div className="font-black text-base font-[Inter] mb-3">
        {commentCount} comments
        <svg
          onClick={onClose}
          className="cursor-pointer absolute top-7 right-5"
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M6.575 8.3998L1.675 13.2998C1.49167 13.4831 1.25833 13.5748 0.975 13.5748C0.691667 13.5748 0.458333 13.4831 0.275 13.2998C0.0916663 13.1165 0 12.8831 0 12.5998C0 12.3165 0.0916663 12.0831 0.275 11.8998L5.175 6.9998L0.275 2.0998C0.0916663 1.91647 0 1.68314 0 1.3998C0 1.11647 0.0916663 0.883138 0.275 0.699804C0.458333 0.516471 0.691667 0.424805 0.975 0.424805C1.25833 0.424805 1.49167 0.516471 1.675 0.699804L6.575 5.5998L11.475 0.699804C11.6583 0.516471 11.8917 0.424805 12.175 0.424805C12.4583 0.424805 12.6917 0.516471 12.875 0.699804C13.0583 0.883138 13.15 1.11647 13.15 1.3998C13.15 1.68314 13.0583 1.91647 12.875 2.0998L7.975 6.9998L12.875 11.8998C13.0583 12.0831 13.15 12.3165 13.15 12.5998C13.15 12.8831 13.0583 13.1165 12.875 13.2998C12.6917 13.4831 12.4583 13.5748 12.175 13.5748C11.8917 13.5748 11.6583 13.4831 11.475 13.2998L6.575 8.3998Z"
            fill="black"
          />
        </svg>
      </div>
      {comments?.map((item, index) => {
        return (
          <div key={index} className="w-[340px] h-[91px] relative mb-2">
            <div className="left-[37px] top-[8px] absolute text-neutral-400 text-xs font-medium font-['Inter']">
              {item?.user?.username}
            </div>
            <div className="left-[37px] top-[79px] absolute text-neutral-400 text-[10px] font-medium font-['Inter']"></div>
            <div className="left-[37px] top-[29px] absolute text-black text-xs font-medium font-['Inter']">
              {item?.text}
            </div>
            <img
              className="w-[30px] h-[30px] left-0 top-0 absolute rounded-full"
              src={item?.user?.profile_picture}
            />
          </div>
        );
      })}
    </div>
  );
};
