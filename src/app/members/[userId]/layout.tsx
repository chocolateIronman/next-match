import { getMemberByUserId } from "@/app/actions/memeberActions";
import { notFound } from "next/navigation";
import React from "react";
import MemberSidebar from "../MemberSidebar";
import { Card } from "@nextui-org/react";

export default async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { userId: string };
}>) {
  const member = await getMemberByUserId(params.userId);
  if (!member) {
    return notFound();
  }
  return (
    <div className="grid grid-cols-12 gap-5 h-[80hv]">
      <div className="col-span-3">
        <MemberSidebar member={member} />
      </div>
      <div className="col-span-9">
        <Card className="w-full mt-10 h-[80vh]">{children}</Card>
      </div>
    </div>
  );
}
