import type { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container>
      <Box paddingY={5}>
        <h1 className="font-4xl text-white">Servus World!</h1>
        <h2 className="font-3xl text-white">
          {`Now it's your turn. If you see this, everything is setup.`}
        </h2>
      </Box>
    </Container>
  );
};

export default Home;
