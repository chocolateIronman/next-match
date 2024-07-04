import { Button } from "@nextui-org/react";
import Link from "next/link";
import { FaRegSmile } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Hello app!</h1>
      <Button
        color="primary"
        variant="bordered"
        startContent={<FaRegSmile size={20} />}
        as={Link}
        href="/members"
      >
        Click me!
      </Button>
    </div>
  );
}
