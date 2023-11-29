import ClientLayout from "@/components/client-layout";
import { Sora } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "@/providers/toast-provider";
import ModalProvider from "@/components/modal-provider";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Abdul Hamid - Personal Website",
  description: "Personal website of Abdul Hamid Hasibuan",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon-32x32.png",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export const revalidate = 0;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <ToastProvider />
        <ModalProvider />
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
