import type { PageProps } from "gatsby";
import { Link } from "gatsby";
import React from "react";
import styled, { keyframes } from "styled-components";

const RaccoonsPage = (_props: PageProps) => (
  <main>
    <h2>Raccoons</h2>
    <Link to="/">Go back</Link>
    <Raccoons aria-hidden>
      {new Array(1000).fill(null).map((_, i) => (
        <span key={i}>🦝</span>
      ))}
    </Raccoons>
  </main>
);

const RaccoonFlip = keyframes`
  0% { transform: matrix(0, 0, 0) };
  50% { transform: matrix(-1, 0, 0, 1, 0, 0); };
  100% { transform: matrix(0, 0, 0) };
`;

const Raccoons = styled("section")`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 10rem;
  animation: ${RaccoonFlip} 5s linear infinite;
`;

export default RaccoonsPage;
