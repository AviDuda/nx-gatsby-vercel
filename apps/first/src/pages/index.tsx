import type { PageProps } from "gatsby";
import { Link } from "gatsby";
import React from "react";

const IndexPage = (_props: PageProps) => (
  <main>
    <h2>Howdy!</h2>
    <p>App: {process.env.GATSBY_SUBDOMAIN}</p>
    <p>
      <Link to="raccoons">Go see some raccoons!!</Link>
    </p>
  </main>
);

export default IndexPage;
