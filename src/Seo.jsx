import { useEffect } from "react";

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function upsertJsonLd(jsonLd) {
  const selector = 'script[data-managed="seo-jsonld"]';
  let element = document.head.querySelector(selector);

  if (!jsonLd) {
    element?.remove();
    return;
  }

  if (!element) {
    element = document.createElement("script");
    element.type = "application/ld+json";
    element.setAttribute("data-managed", "seo-jsonld");
    document.head.appendChild(element);
  }

  element.textContent = JSON.stringify(jsonLd);
}

export default function Seo({ title, description, path = "/", jsonLd }) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = title;
    upsertMeta('meta[name="description"]', {
      name: "description",
      content: description,
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: title,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: description,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: `${window.location.origin}${path}`,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: title,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: description,
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: `${window.location.origin}${path}`,
    });
    upsertJsonLd(jsonLd);

    return () => {
      document.title = previousTitle;
    };
  }, [description, jsonLd, path, title]);

  return null;
}