import React from "react";
import Container from "../common/Container";

const Installations = () => {
  return (
    <Container className="w-full rounded-xl">
      <span>pnpm</span>
      <span>
        pnpm dlx shadcn@latest add https://tweakcn.com/r/themes/darkmatter.json
      </span>
    </Container>
  );
};

export default Installations;
