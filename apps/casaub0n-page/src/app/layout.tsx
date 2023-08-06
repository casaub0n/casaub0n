import "./globals.css";
import type { ReactNode } from "react";

import { Inter } from "next/font/google";

import { layoutMetadata } from "@/components/layouts/layoutMetadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata = layoutMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
