"use client";
import { useEffect, useState } from "react";
import DetailWorkModal from "@/components/detail-work-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <DetailWorkModal />
    </>
  );
};

export default ModalProvider;
