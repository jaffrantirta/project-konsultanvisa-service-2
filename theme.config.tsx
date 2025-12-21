import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const predefinedKeywords = [
  "Konsultan Visa",
  "Studi di Astralia",
  "J1 Program USA",
  "kuliah ke luar negeri",
  "kuliah ke Australia",
  "work & holiday visa",
  "whv australia",
  "magang ke luar negeri",
  "magang ke amerika",
  "imigrasi",
  "test IELTS",
  "IELTS preperation",
  "daftar SDUWHV",
  "kuliah ke swiss",
  "liburan ke Jepang",
  "liburan ke Eropa",
  "liburan ke Australia",
  "apply visa",
  "J1 internship di Bali",
  "kursus bahasa inggris",
  "kursus IELTS",
  "barista",
  "kursus barista",
  "Bali",
  "Denpasar",
  "visa",
  "Australia",
  "Amerika",
  "Eropa",
  "magang",
];

const config: DocsThemeConfig = {
  head: () => (
    <>
      <meta
        name="description"
        content={`Konsultan Visa is an Authorized Representative from a school in several countries who is given the authority to provide information, help with the enrollment process, complete documents, student visa applications and other services for students who will continue their studies at schools in several countries such as Australia, Canada, Switzerland, New Zealand, UK, Netherland, USA, Spain, Dubai and other countries. We also work with internship providers in various countries for internship programs in various fields.`}
      />
      <meta name="keyword" content={predefinedKeywords.join(", ")} />
      <link rel="icon" href="/medias/logo_white.png" />
      <link
        rel="shortcut icon"
        href="/medias/logo_white.png"
        type="image/png"
      />
    </>
  ),
  logo: <Image width={200} height={200} src="/medias/logo.png" alt="" />,
  footer: {
    text: "Konsultan Visa",
  },
  search: {
    placeholder: "Search...",
  },
  feedback: {
    content: <></>,
  },
  editLink: {
    text: <></>,
  },
  darkMode: true,
  nextThemes: {
    defaultTheme: "light",
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Konsultan Visa",
    };
  },
};

export default config;
