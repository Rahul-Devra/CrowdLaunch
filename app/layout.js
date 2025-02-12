import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CrowdLaunch - Fund your projects now!!!",
  description: "A crowfunding platform for creators",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <description>{metadata.description}</description>
        <link rel="icon" sizes="96x96" href="/icon.png" />
      </Head>
      <body className="relative text-white">
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        >
          <source src="bg.mp4" type="video/mp4" />
        </video>

        <SessionWrapper>
          <Navbar />
          <div className="min-h-[87vh]">{children}</div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
