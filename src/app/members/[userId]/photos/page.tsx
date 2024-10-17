import { getMemberPhotosByUSerId } from "@/app/actions/memeberActions";
import { CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import { notFound } from "next/navigation";
import React from "react";

export default async function PhotosPage({
  params,
}: Readonly<{
  params: { userId: string };
}>) {
  const photos = await getMemberPhotosByUSerId(params.userId);
  if (!photos) {
    return notFound();
  }
  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Photos
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="grid grid-cols-5 gap-3">
          {photos.map((photo) => (
            <div key={photo.id}>
              <Image
                src={photo.url}
                width={200}
                height={200}
                alt="Image of member"
                className="object-cover aspect-square"
              />
            </div>
          ))}
        </div>
      </CardBody>
    </>
  );
}
