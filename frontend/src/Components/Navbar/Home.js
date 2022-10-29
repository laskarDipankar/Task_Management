import { useMediaQuery } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import UserRev from "./UserRev";
import MobileHome from "./MobileHome";
import { Box } from "@mui/material";

const Home = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Box
        sx={{
          backdropFilter: "blur(99px)",
          backgroundColor: "rgba(192,192,192,0.4)",
          background: "linear-gradient(to right bottom, #430089, #82ffa1,0.5)",
        }}
      >
        {matches ? <MobileHome /> : <UserRev />}
      </Box>
    </>
  );
};

export default Home;
