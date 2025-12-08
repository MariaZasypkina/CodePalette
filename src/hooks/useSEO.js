import { useEffect } from "react";

const SITE_NAME = "Creative Code Palette Studio";
const BASE_URL = "https://ccpalette.com";
const DEFAULT_DESCRIPTION =
  "Modern, conversion-focused web design agency creating custom websites, landing pages, and small business sites for US clients.";
const DEFAULT_KEYWORDS = [
  "web design services",
  "web design agency",
  "website design for small business",
  "custom website design",
  "landing page design",
  "responsive web design",
  "modern website design",
  "conversion-focused web design",
  "Colorado web design studio",
];

const setMeta = (attr, key, value) => {
  if (!value) return;
  const selector = attr === "property" ? `meta[property="${key}"]` : `meta[name="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
};

const setCanonical = (url) => {
  if (!url) return;
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
};

export default function useSEO({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  ogImage,
  canonicalPath,
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    setMeta("name", "description", description);
    setMeta("name", "keywords", Array.isArray(keywords) ? keywords.join(", ") : keywords);
    setMeta("name", "robots", "index, follow");
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:url", `${BASE_URL}${canonicalPath || window.location.pathname}`);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    if (ogImage) {
      setMeta("property", "og:image", ogImage);
      setMeta("name", "twitter:image", ogImage);
    }

    setCanonical(`${BASE_URL}${canonicalPath || window.location.pathname}`);
  }, [title, description, keywords, ogImage, canonicalPath]);
}
