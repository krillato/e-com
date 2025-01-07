// app/ReduxProvider.tsx (Client Component)
"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { ReactNode } from "react";
interface RootLayoutProps {
  children: ReactNode;
}
export default function ReduxProvider({ children }: RootLayoutProps) {
  return <Provider store={store}>{children}</Provider>;
}
