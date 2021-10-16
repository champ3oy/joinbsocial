// log the pageview with their URL
export const pageview = (url) => {
  const cirlorm = "UA-191424621-1";
  window.gtag("config", cirlorm, {
    page_path: url,
  });
};
