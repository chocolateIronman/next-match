import { getMemberByUserId } from "@/app/actions/memeberActions";
import { notFound } from "next/navigation";
import React from "react";
import MemberSidebar from "../MemberSidebar";
import { Card } from "@nextui-org/react";
import { getAuthUserId } from "@/app/actions/authActions";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = await getAuthUserId();
  const member = await getMemberByUserId(userId);
  if (!member) {
    return notFound();
  }
  const basePath = `/members/edit`;
  const navLinks = [
    { name: "Edit Profile", href: `${basePath}` },
    { name: "Update Photos", href: `${basePath}/photos` },
  ];
  return (
    <div className="grid grid-cols-12 gap-5 h-[80hv]">
      <div className="col-span-3">
        <MemberSidebar member={member} navLinks={navLinks} />
      </div>
      <div className="col-span-9">
        <Card className="w-full mt-10 h-[80vh]">{children}</Card>
      </div>
    </div>
  );
}
