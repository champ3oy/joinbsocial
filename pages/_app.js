import "../styles/globals.css";
import { useRouter } from "next/router";
import * as ga from "../lib/ga";
import { useEffect } from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const client = new ApolloClient({
    uri: "https://api.joinb.social/graphql",
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
