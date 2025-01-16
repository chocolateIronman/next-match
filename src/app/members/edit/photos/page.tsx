import { getAuthUserId } from "@/app/actions/authActions";
import { getMemberPhotosByUSerId } from "@/app/actions/memeberActions";
import DeleteButton from "@/components/DeleteButton";
import StarButton from "@/components/StarButton";
import { CardBody, CardHeader, Divider, Image } from "@nextui-org/react";
import React from "react";
import MemberPhotoUpload from "./MemberPhotoUpload";

export default async function PhotosPage() {
  const userId = await getAuthUserId();
  const photos = await getMemberPhotosByUSerId(userId);

  return (
    <>
      <CardHeader className="text-2xl font-semibold text-secondary">
        Edit Profile
      </CardHeader>
      <Divider />
      <CardBody>
        <MemberPhotoUpload />
        <div className="grid grid-cols-5 gap-3 p-5">
          {photos?.map((photo) => (
            <div key={photo.id} className="relative">
              <Image
                width={220}
                height={220}
                src={photo.url}
                alt="Image of user"
              />
              <div className="absolute top-3 left-3 z-50">
                <StarButton selected={false} loading={false} />
              </div>
              <div className="absolute top-3 right-3 z-50">
                <DeleteButton loading={false} />
              </div>
            </div>
          ))}
        </div>
      </CardBody>
    </>
  );
}
