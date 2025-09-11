"use client";
import clsx from "clsx";
import React, { useState } from "react";
import { GoInbox } from "react-icons/go";
import { MdOutlineOutbox } from "react-icons/md";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Chip } from "@nextui-org/react";

export default function MessageSidebar() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [selected, setSelected] = useState<string>(
    searchParams.get("container") ?? "inbox"
  );
  const items = [
    {
      key: "inbox",
      label: "Inbox",
      icon: GoInbox,
      chip: true,
    },
    {
      key: "outbox",
      label: "Outbox",
      icon: MdOutlineOutbox,
      chip: false,
    },
  ];
  const handleSelect = (key: string) => {
    setSelected(key);
    const params = new URLSearchParams(searchParams);
    params.set("container", key);
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className="flex flex-col shadow-md rounded-lg cursor-pointer">
      {items.map(({ key, icon: Icon, label, chip }) => (
        <div
          key={key}
          className={clsx("flex flex-row items-center rounder-t-lg gap-2 p-3", {
            "text-secondary font-semibold": selected === key,
            "text-black hover:text-secondary/70": selected !== key,
          })}
          onClick={() => handleSelect(key)}
        >
          <Icon size={24} />
          <div className="flex justify-between flex-grow">
            <span>{label}</span>
            {chip && <Chip>5</Chip>}
          </div>
        </div>
      ))}
    </div>
  );
}
