"use client";

import { useAppSelector } from "@/store/hooks";

const SwitchMode = () => {
  const theme = useAppSelector((store) => store.colorMode);
  console.log(theme);

  return <div></div>;
};

export default SwitchMode;
