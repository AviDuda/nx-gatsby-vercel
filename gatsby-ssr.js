/** @see https://www.gatsbyjs.org/docs/ssr-apis/ */
import React from "react";

import RootLayout from "@demo/shared/components/core/layout/RootLayout";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);
