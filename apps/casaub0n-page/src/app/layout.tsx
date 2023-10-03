import "./globals.css";
import type { ReactNode } from "react";

import { Inter } from "next/font/google";
import Script from "next/script";

import { layoutMetadata } from "@/components/layouts/layoutMetadata";

import type { Article, WithContext } from "schema-dts";


const inter = Inter({ subsets: ["latin"] });

export const metadata = layoutMetadata;

const jsonLd: WithContext<Article> = {
  "@type": "BlogPosting",
  "@context": "https://schema.org",
  "name": "casaub0n web page",
  "author": {
    "@type": "Person",
    "name": "casaub0n"
  },
  "datePublished": "2023-10-03",
  "description": "This page is my web site"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        {children}
      </body>
    </html>
  );
}
