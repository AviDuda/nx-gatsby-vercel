import type { ReactNode } from "react";
import React from "react";

const RootLayout = (props: { children: ReactNode }) => (
  <>
    <h1>Main header</h1>
    {props.children}
  </>
);

export default RootLayout;
