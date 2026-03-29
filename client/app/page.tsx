"use client";
import { trpc } from "@/trpc/TrpcProvider";

export default function Home() {
  const { data } = trpc.getSingleUser.useQuery({ id: "1" });
  console.log(data);

  return <>kfdhbs</>;
}
