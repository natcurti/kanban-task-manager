"use client";
import Loader from "@/components/Loader";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useGetTasksAndBoards from "@/hooks/useGetTasksAndBoards";

const Home = () => {
  const { isLoading, boards } = useGetTasksAndBoards();
  const router = useRouter();

  useEffect(() => {
    if (boards.length > 0) {
      console.log("executando este use effect");
      router.push(`/${boards[0].slug}`);
    }
  }, [boards, router]);

  return <>{isLoading && <Loader />}</>;
};

export default Home;
