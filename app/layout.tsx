import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
const ibmPlexSans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imaginify",
  description: "AI-powered image generator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: neobrutalism,
        layout: {
          logoImageUrl: "/assets/images/logo-text.svg",
          logoPlacement: "inside",
          socialButtonsVariant: "iconButton",
          socialButtonsPlacement: "bottom",
          showOptionalFields: false,
          unsafe_disableDevelopmentModeWarnings: true,
        },
        variables: {
          colorPrimary: "#624cf5",
        },
      }}
    >
      <html lang="en">
        <body className={`${ibmPlexSans.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
