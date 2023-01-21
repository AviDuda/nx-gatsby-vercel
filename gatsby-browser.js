/** @see https://www.gatsbyjs.org/docs/browser-apis/ */
import React from "react";

import RootLayout from "@demo/shared/components/core/layout/RootLayout";

export const wrapRootElement = ({ element }) => (
  <RootLayout>{element}</RootLayout>
);

/**
 * @see https://www.gatsbyjs.org/docs/add-offline-support-with-a-service-worker/#displaying-a-message-when-a-service-worker-updates
 * @see https://github.com/gatsbyjs/gatsby/issues/9087
 * onServiceWorkerUpdateFound is NOT the right place to trigger an update but onServiceWorkerUpdateReady is.
 */
export const onServiceWorkerUpdateReady = () => window.location.reload();
