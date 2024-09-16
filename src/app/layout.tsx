import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokProvider from "@/components/providers/StoryblokProvider";
import { COMPONENTS } from "@/components";
import TopBar from "@/components/global/top-bar";
import { Navbar } from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_SB_PREVIEW_TOKEN,
  use: [apiPlugin],
  components: COMPONENTS,
});

export const metadata: Metadata = {
  title: "Professional Translation services 24/7 - KoT",
  description: "Welcome to Kings of Translation, your go-to source for professional translation services✨. Our experienced team delivers high-quality translations for businesses and individuals.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body>
          <TopBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </StoryblokProvider>
  );
}
