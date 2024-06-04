import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

// Centralized SEO data
const SEO_DATA = {
  "/": {
    title: "Home Helmet",
    description: "Saran home helmet",
    keywords: "home, helmet, Saran, pets, products",
    twitter: {
      card: "summary_large_image",
      site: "@user",
      creator: "@user",
      title: "Pets - Products",
      description: "Best Products for your pet",
      image: "url_to_image"
    },
    og: {
      title: "Pets - Products",
      description: "Best Products for your pet",
      image: "url_to_image",
      url: "http://localhost:3000/",
      site_name: "Pets - Products",
      locale: "en_US",
      type: "article"
    },
    fb: {
      app_id: "ID_APP_FACEBOOK"
    },
    canonical: "http://localhost:3000/",
    robots: "index, follow",
    author: "Saran",
    publisher: "Saran's Company"
  },
  "/about": {
    title: "About Helmet",
    description: "Saran about helmet",
    keywords: "about, helmet, Saran, pets, products",
    twitter: {
      card: "summary_large_image",
      site: "@user",
      creator: "@user",
      title: "Pets - Products",
      description: "Best Products for your pet",
      image: "url_to_image"
    },
    og: {
      title: "Pets - Products",
      description: "Best Products for your pet",
      image: "url_to_image",
      url: "http://localhost:3000/about",
      site_name: "Pets - Products",
      locale: "en_US",
      type: "article"
    },
    fb: {
      app_id: "ID_APP_FACEBOOK"
    },
    canonical: "http://localhost:3000/about",
    robots: "index, follow",
    author: "Saran",
    publisher: "Saran's Company"
  },
  "/contact": {
    title: "Contact Helmet",
    description: "Saran contact helmet",
    keywords: "contact, helmet, Saran, pets, products",
    twitter: {
      card: "summary_large_image",
      site: "@user",
      creator: "@user",
      title: "Pets - Products",
      description: "Best Products for your pet",
      image: "url_to_image"
    },
    og: {
      title: "Pets - Products",
      description: "Best Products for your pet",
      image: "url_to_image",
      url: "http://localhost:3000/contact",
      site_name: "Pets - Products",
      locale: "en_US",
      type: "article"
    },
    fb: {
      app_id: "ID_APP_FACEBOOK"
    },
    canonical: "http://localhost:3000/contact",
    robots: "index, follow",
    author: "Saran",
    publisher: "Saran's Company"
  }
};

const SEO = () => {
  const location = useLocation();
  const seo = SEO_DATA[location.pathname];

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="twitter:card" content={seo.twitter.card} />
      <meta name="twitter:site" content={seo.twitter.site} />
      <meta name="twitter:creator" content={seo.twitter.creator} />
      <meta name="twitter:title" content={seo.twitter.title} />
      <meta name="twitter:description" content={seo.twitter.description} />
      <meta name="twitter:image" content={seo.twitter.image} />
      <meta property="og:title" content={seo.og.title} />
      <meta property="og:description" content={seo.og.description} />
      <meta property="og:image" content={seo.og.image} />
      <meta property="og:url" content={seo.og.url} />
      <meta property="og:site_name" content={seo.og.site_name} />
      <meta property="og:locale" content={seo.og.locale} />
      <meta property="og:type" content={seo.og.type} />
      <meta property="fb:app_id" content={seo.fb.app_id} />
      <link rel="canonical" href={seo.canonical} />
      <meta name="robots" content={seo.robots} />
      <meta name="author" content={seo.author} />
      <meta name="publisher" content={seo.publisher} />
    </Helmet>
  );
};

export default SEO;
