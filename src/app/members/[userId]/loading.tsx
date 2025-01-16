import { Spinner } from "@nextui-org/react";
import React from "react";

export default function loading() {
  return (
    <div className="flex justify-center items-center vertical-center">
      <Spinner label="Loading..." color="secondary" labelColor="secondary" />
    </div>
  );
}
