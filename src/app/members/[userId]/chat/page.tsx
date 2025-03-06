import CardInnerWrapper from "@/components/cardInnerWrapper";
import React from "react";

export default function ChatPage() {
  return (
    <CardInnerWrapper
      header="Chat"
      body={<div>Chat goes here</div>}
      footer={<div>Chat form goes here</div>}
    />
  );
}
