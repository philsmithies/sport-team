import type { NextPage } from "next";
import { Box, Container, Typography } from "@mui/material";

const Home: NextPage = () => {
  return (
    <Container>
      <Box paddingY={5}>
        <Typography variant="h1" gutterBottom>
          Servus World!
        </Typography>
        <Typography variant="h2">
          {`Now it's your turn. If you see this, everything is setup.`}
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
