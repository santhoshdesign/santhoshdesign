import React from "react";
import DrawerAppBar from "../AppBar";
import LandingDescrption from "../LandingDescrption";
import { Box, Typography } from "@mui/material";
import { themeConfig } from "../../theme/theme";
import HomePageCard from "../HomePageCard";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <DrawerAppBar />
      <LandingDescrption />
      <Box sx={{ padding: 3 }}>
        <Typography sx={{ fontSize: themeConfig.typography.h2 }}>
          How do I solve business & user problems?
        </Typography>
        <Typography sx={{ fontSize: themeConfig.typography.p1, lineHeight: 2 }}>
          In the past 2 years, I've designed health & wellness products,
          <br />
          business & customers -facing products, and a problem solver.
        </Typography>
        <HomePageCard />
      </Box>
      <Footer />
    </div>
  );
};

export default Home;
