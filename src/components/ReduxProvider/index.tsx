"use client";
import { makeStore } from "@/store";
import React from "react";
import { Provider } from "react-redux";

const ReduxProvider = ({ children }: { children: React.ReactNode }) => {
  const store = makeStore();

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
