import CardInnerWrapper from "@/components/CardInnerWrapper";
import React from "react";
import ChatForm from "./ChatForm";
import { getMessageThread } from "@/app/actions/messageActions";

export default async function ChatPage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  const messages = await getMessageThread(userId);
  return (
    <CardInnerWrapper
      header="Chat"
      body={<div>Chat goes here</div>}
      footer={<ChatForm />}
    />
  );
}
