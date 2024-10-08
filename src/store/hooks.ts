"use client";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, IRootState } from ".";

export const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
