import React, { useState, useEffect } from "react";
import Head from "next/head";

export default function Head_(props) {
  return (
    <Head>
      <title>{props.title ? props.title : "BSocial "} - Endless Entertainment</title>
      <meta
        name="description"
        content="BSocial is a short form video super app where users build new friendships and connect with old friends in a fun and gamified way. Post a fun challenge and invite your friends to interact with you and your content. Build a bigger fanbase as people interact with your content. Whatever your talent is, there is a place and an audience for you in the BSocial Super app. Engage with content that you like and see an endless stream of personalized content that will make your day!
Come join and become BSocial famous!"
      />
      <link rel="icon" href="/favicon.svg" />
      <meta
        content="BSocial - Endless Entertainment"
        property="og:title"
      ></meta>
      <meta
        content="BSocial is a short form video super app where users build new friendships and connect with old friends in a fun and gamified way. Post a fun challenge and invite your friends to interact with you and your content. Build a bigger fanbase as people interact with your content. Whatever your talent is, there is a place and an audience for you in the BSocial Super app. Engage with content that you like and see an endless stream of personalized content that will make your day!
Come join and become BSocial famous!"
        proterty="og:description"
      ></meta>
      <meta content="/cover.png" property="og:image"></meta>
      <meta
        content="BSocial - Endless Entertainment"
        property="twitter:title"
      ></meta>
      <meta
        content="BSocial is a short form video super app where users build new friendships and connect with old friends in a fun and gamified way. Post a fun challenge and invite your friends to interact with you and your content. Build a bigger fanbase as people interact with your content. Whatever your talent is, there is a place and an audience for you in the BSocial Super app. Engage with content that you like and see an endless stream of personalized content that will make your day!
Come join and become BSocial famous!"
        property="twitter:description"
      ></meta>
      <meta content="/cover.png" property="twitter:image"></meta>
      <meta content="/cover.png" property="image"></meta>
    </Head>
  );
}
