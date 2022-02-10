import Head from "next/head";

export default function Headd({ title, image }) {
  const dash = title == "" ? "" : " |";
  return (
    <Head>
      <title>{"#" + title + dash + " Endless Entertainment"} </title>
      <meta
        name="title"
        content={"#" + title + dash + " Endless Entertainment"}
      ></meta>
      <meta
        name="og:title"
        content={"#" + title + dash + " Endless Entertainment"}
      ></meta>

      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content="https://joinb.social/"></meta>
      <meta
        name="description"
        content="BSocial is a short form video super app where users build new friendships and connect with old friends in a fun and gamified way. Post a fun challenge and invite your friends to interact with you and your content. Build a bigger fanbase as people interact with your content. Whatever your talent is, there is a place and an audience for you in the BSocial Super app. Engage with content that you like and see an endless stream of personalized content that will make your day!
Come join and become BSocial famous!"
      />
      <meta
        name="description"
        content="BSocial is a short form video super app where users build new friendships and connect with old friends in a fun and gamified way. Post a fun challenge and invite your friends to interact with you and your content. Build a bigger fanbase as people interact with your content. Whatever your talent is, there is a place and an audience for you in the BSocial Super app. Engage with content that you like and see an endless stream of personalized content that will make your day!
Come join and become BSocial famous!"
      />
       <link rel="icon" href="/favicon.svg" />
      <meta property="og:image" content={image ? image : "/cover.jpeg"}></meta>

      <meta
        name="twitter:title"
        content={"#" + title + dash + " Endless Entertainment"}
      ></meta>
      <meta
        name="description"
        content="BSocial is a short form video super app where users build new friendships and connect with old friends in a fun and gamified way. Post a fun challenge and invite your friends to interact with you and your content. Build a bigger fanbase as people interact with your content. Whatever your talent is, there is a place and an audience for you in the BSocial Super app. Engage with content that you like and see an endless stream of personalized content that will make your day!
Come join and become BSocial famous!"
      ></meta>
      <meta name="twitter:url" content="https://joinb.social/"></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta name="twitter:image" content={image ? image : "/cover.jpeg"}></meta>
    </Head>
  );
}
