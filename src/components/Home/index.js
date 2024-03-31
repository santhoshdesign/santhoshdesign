import React from "react";
import DrawerAppBar from "../AppBar";
import LandingDescrption from "../LandingDescrption";
import { Box, Typography } from "@mui/material";
import { themeConfig } from "../../theme/theme";
import HomePageCard from "../HomePageCard";
import Footer from "../Footer";
import { useMediaQuery, useTheme } from "@mui/system";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <DrawerAppBar />
      <LandingDescrption />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBlockStart: 2,
          paddingInline: isMobile ? 2 : 8,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1380,
            marginBlockStart: 2,
          }}
        >
            <Typography
              sx={{
                fontSize: isMobile
                  ? themeConfig.typography.h3
                  : themeConfig.typography.h2,
                fontWeight: 700,
              }}
            >
              How do I solve business & user problems?
            </Typography>
            <Typography
              sx={{ fontSize: themeConfig.typography.p1, lineHeight: 2 }}
            >
              In the past <b>2 years,</b> I've designed health & wellness
              products,
              <br />
              business & customers -facing products, and a problem solver.
            </Typography>
          <HomePageCard />
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            width: "100%",
            // minWidth: 1380,
            marginBlockStart: 2,
          }}
        >
          <Footer />
        </Box>
      </Box>
    </div>
  );
};

export default Home;
