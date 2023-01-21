import type { PageProps } from "gatsby";
import React from "react";

const IndexPage = (props: PageProps) => (
  <main>
    <h2>Howdy!</h2>
    <p>App: {process.env.GATSBY_SUBDOMAIN}</p>
    <p>Port: {props.location.port}</p>
  </main>
);

export default IndexPage;
