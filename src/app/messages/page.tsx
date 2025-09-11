"use client";
import React from "react";
import MessageSidebar from "./MessageSidebar";

export default function MessagesPage() {
  return (
    <div className="grid grid-cols-12 gap-5 h-[80vh] mt-10">
      <div className="col-span-2">
        <MessageSidebar />
      </div>
      <div className="col-span-10">{/* <MessageContent /> */}</div>
    </div>
  );
}
