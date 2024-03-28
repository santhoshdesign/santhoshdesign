import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "../AppBar";
import { motion } from "framer-motion";
import { themeConfig } from "../../theme/theme";

const AboutPage = () => {
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/santhoshdesign/", "_blank");
  };
  return (
    <Box>
      <Box
        sx={{
          height: "10vh",
        }}
      >
        <DrawerAppBar />
      </Box>
      <Box
        sx={{
          position: "relative",
          height: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            // paddingBlockStart: 18,
            maxWidth: 1350,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: themeConfig.typography.h1,
              color: themeConfig.palette.primaryColor,
              fontWeight: 700,
              marginBlockEnd: 4,
            }}
          >
            Let’s talk
          </Typography>
          <Typography
            sx={{
              fontSize: themeConfig.typography.h2,
              color: themeConfig.palette.primaryColor,
              marginBlockEnd: 4,
              fontWeight: 600,
            }}
          >
            I am always happy to discuss new ideas and opportunities.Let’s talk
          </Typography>
          <Typography
            sx={{
              fontSize: themeConfig.typography.h2,
              color: themeConfig.palette.primaryColor,
              fontWeight: 700,
              marginBlockEnd: 4,
            }}
          >
            hi<span style={{ fontFamily: "Inter" }}>@</span>
            santhosh.design
          </Typography>

          <Stack direction={"row"} gap={2}>
            <motion.div whileTap={{ scale: 0.95, transition: "0.3s ease" }}>
              <Button
                onClick={() => {
                  window.open(
                    "https://drive.google.com/file/d/1YujcuAg1XW3oMvKMmzT8RvjwMHPX-0pW/view?usp=sharing",
                    "_blank"
                  );
                }}
                sx={{
                  width: 240,
                  height: 40,
                  border: "1px solid #BCB2B2",
                  background: themeConfig.palette.whiteColor,
                  borderRadius: 30,
                  textTransform: "capitalize",
                  fontSize: themeConfig.typography.p1,
                  color: themeConfig.palette.primaryColor,
                  "&:hover": {
                    background: themeConfig.palette.whiteColor,
                    color: themeConfig.palette.primaryColor,
                  },
                }}
              >
                Get my CV
              </Button>
            </motion.div>
            <motion.div whileTap={{ scale: 0.95, transition: "0.3s ease" }}>
              <Button
                onClick={() => handleLinkedInClick()}
                sx={{
                  width: 240,
                  height: 40,
                  border: "1px solid #BCB2B2",
                  background: themeConfig.palette.whiteColor,
                  borderRadius: 30,
                  textTransform: "capitalize",
                  fontSize: themeConfig.typography.p1,
                  color: themeConfig.palette.primaryColor,
                  display: "flex",
                  "&:hover": {
                    background: themeConfig.palette.whiteColor,
                    color: themeConfig.palette.primaryColor,
                  },
                }}
              >
                <img
                  style={{ marginInlineEnd: 4 }}
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/linkedin.svg"
                  alt="linkedin"
                />
                <span style={{ fontFamily: "Inter" }}>@</span>santhoshdesign
              </Button>
            </motion.div>
          </Stack>
        </Box>
        <Box sx={{ paddingInline: 6, position: "absolute", top: 250, left: 0 }}>
          <img
            src={
              "https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/Santhosh_Profile.png"
            }
            alt="santosh"
            style={{ width: 300, height: 300, objectFit: "cover" }}
          ></img>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
