import { CardHeader, Divider, CardBody, CardFooter } from "@nextui-org/react";
import React, { ReactNode } from "react";

type Props = {
  header: ReactNode | string;
  body: ReactNode;
  footer?: ReactNode;
};

export default function cardInnerWrapper({ header, body, footer }: Props) {
  return (
    <>
      <CardHeader>
        {typeof header === "string" ? (
          <div className="text-2xl font-semibold text-secondary">{header}</div>
        ) : (
          <>{header}</>
        )}
        Chat
      </CardHeader>
      <Divider />
      <CardBody>{body}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </>
  );
}
