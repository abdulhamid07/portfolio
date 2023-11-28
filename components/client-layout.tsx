"use client";
import Header from "@/components/header";
import Nav from "@/components/navbar";
import TopLeftImg from "@/components/top-left-img";
import Transition from "@/components/transition";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <TopLeftImg />
      <Nav />
      <Header />
      <AnimatePresence>
        <motion.div key={pathname}  className="h-full">
          <Transition />
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ClientLayout;
