"use client";
import AddNewTask from "@/components/AddNewTask";
import MainContainer from "@/components/MainContainer";
import styles from "./Home.module.scss";
import BacklogSection from "@/components/BacklogSection";
import CompletedSection from "@/components/CompletedSection";
import ReviewSection from "@/components/ReviewSection";
import ProgressSection from "@/components/ProgressSection";

export default function Home() {
  return (
    <MainContainer>
      <section className={styles["tasks-container"]}>
        <BacklogSection />
        <ProgressSection />
        <ReviewSection />
        <CompletedSection />
      </section>
      <div>
        <AddNewTask />
      </div>
    </MainContainer>
  );
}
