import React from "react";
import { getMembers } from "../actions/memeberActions";
import MemberCard from "./MemberCard";
import { fetchCurrentUserLikeIds } from "../actions/likeActions";

export default async function MembersPage() {
  const members = (await getMembers()) ?? [];
  const likeIds = await fetchCurrentUserLikeIds();
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
      {members.map((member) => (
        <MemberCard key={member.id} member={member} likeIds={likeIds} />
      ))}
    </div>
  );
}
