import UserDetail from "@/components/Users/UserDetail";
import React from "react";

async function page({ params }: { params: { slug: string } }) {
  return <UserDetail id={params.slug} />;
}

export default page;
