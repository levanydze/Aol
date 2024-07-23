import type { Metadata } from "next";
import { Nunito_Sans, Roboto_Flex, Gabriela } from "next/font/google";
import "./globals.css";
import Header from "../../components/header/header4/Header";
import LowerFoot from "../../components/footer/lowerFooter3/LowerFoot";
import { googleAnalyticsId } from "../../controlFolder/control";
import { Analytics } from "@vercel/analytics/react";

//fonts
const roboto = Roboto_Flex({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const gabriela = Gabriela({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font4",
});

const nunito = Nunito_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font1",
});

// SEO Metadata and title tags
import {
  mainTitle,
  companyDescription,
  companyDomain,
  googleVerification,
} from "../../controlFolder/control";
import Script from "next/script";
import Divider from "@/components/miniComponents/Divider/Divider";
export const metadata: Metadata = {
  metadataBase: new URL(companyDomain),
  title: {
    // absolute: "", // If I write absolute title it will ignore template title
    default: `${mainTitle}`, // Corrected usage of template literal
    template: `%s | ${mainTitle}`, // Corrected usage of template literal
  },
  description: `${companyDescription}`,
  verification: {
    google: `${googleVerification}`,
  },
};

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src={`https://www.googletagmanager.com/gtag/js?${googleAnalyticsId}`}
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', '${googleAnalyticsId}');`}
        </Script>
      </head>
      <body
        className={` ${roboto.className} ${nunito.variable}  ${gabriela.variable}   `}
      >
        <Header />
        {children}
        <Analytics />
        <Divider />

        <LowerFoot />
      </body>
    </html>
  );
}
