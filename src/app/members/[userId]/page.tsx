import { getMemberByUserId } from "@/app/actions/memeberActions";
import CardInnerWrapper from "@/components/cardInnerWrapper";
import { notFound } from "next/navigation";
import React from "react";

export default async function MemberDetailedPage({
  params,
}: Readonly<{
  params: { userId: string };
}>) {
  const member = await getMemberByUserId(params.userId);
  if (!member) {
    return notFound();
  }
  return (
    <CardInnerWrapper
      header={"Profile"}
      body={<div>{member.description}</div>}
    />
  );
}
