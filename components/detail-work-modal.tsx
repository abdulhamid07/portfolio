"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDetailWork } from "@/hooks/use-detail-work";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  SiFirebase,
  SiGooglesheets,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPrisma,
  SiSanity,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { ActionTooltip } from "@/components/action-tooltip";

const tagIcon: any = {
  nextjs: {
    label: "Next.js",
    icon: <SiNextdotjs className="w-6 h-6 hover:text-black" />,
  },
  tailwindcss: {
    label: "Tailwind CSS",
    icon: <SiTailwindcss className="w-6 h-6 hover:text-[#1fb7bc]" />,
  },
  nodejs: {
    label: "Node.js",
    icon: <SiNodedotjs className="w-6 h-6 hover:text-[#58a149]" />,
  },
  prisma: {
    label: "Prisma",
    icon: <SiPrisma className="w-6 h-6 hover:text-[#194055]" />,
  },
  firebase: {
    label: "Firebase Cloud Messaging",
    icon: <SiFirebase className="w-6 h-6 hover:text-[#ffcc2f]" />,
  },
  socketio: {
    label: "Socket.io",
    icon: <SiSocketdotio className="w-6 h-6 hover:text-black" />,
  },
  mongodb: {
    label: "MongoDB",
    icon: <SiMongodb className="w-6 h-6 hover:text-[#48a13f]" />,
  },
  mysql: {
    label: "MySQL",
    icon: <SiMysql className="w-6 h-6 hover:text-[#085972]" />,
  },
  spreadsheet: {
    label: "Google Sheets",
    icon: <SiGooglesheets className="w-6 h-6 hover:text-[#27a769]" />,
  },
  sanityio: {
    label: "Sanity.io",
    icon: <SiSanity className="w-6 h-6 hover:text-[#f04436]" />,
  },
  reactnative: {
    label: "React Native",
    icon: <TbBrandReactNative className="w-6 h-6 hover:text-[#3ddafe]" />,
  },
};
const DetailWorkModal = () => {
  const { onClose, work, isOpen } = useDetailWork();
  const tagList = work?.tags.split(",");
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-primary p-0 text-left">
        <DialogHeader>
          <DialogTitle>
            <Image
              src={work?.imageUrl!}
              className="object-cover rounded-lg"
              height={300}
              width={600}
              blurDataURL={work?.imageUrl}
              alt="image"
            />
          </DialogTitle>
          <DialogDescription className="px-8 pt-2 space-y-2 text-white">
            <h1 className="text-2xl font-bold">{work?.title}</h1>
            <p className="text-sm">{work?.description}</p>
            <div className="flex-row space-x-4 py-8">
              {work?.repo !== "private" && (
                <Button
                  onClick={() => window.open(work?.repo!, "_blank")}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Repository
                  <Github className="w-6 h-6 ml-2" />
                </Button>
              )}

              {work?.publishUrl !== "internal" && (
                <Button
                  onClick={() => window.open(work?.publishUrl!, "_blank")}
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Demo
                  <Globe className="w-6 h-6 ml-2" />
                </Button>
              )}
            </div>
            <div className="pb-12 flex flex-row space-x-3">
              {tagList?.map((tag: any, index: number) => (
                <ActionTooltip
                  label={tagIcon[tag].label}
                  key={index}
                  align="center"
                  side="bottom"
                >
                  <div className="p-2 hover:bg-white hover:rounded-lg">
                    {tagIcon[tag].icon}
                  </div>
                </ActionTooltip>
              ))}
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DetailWorkModal;
