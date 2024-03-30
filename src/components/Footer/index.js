import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { themeConfig } from "../../theme/theme";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/system";

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/santhoshdesign/", "_blank");
  };
  return (
    <Box
      sx={{
        height: 500,
        background: "#F5F7FD",
        padding: 3,
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
          marginBlockEnd: 2,
        }}
      >
        Let’s Connect
      </Typography>
      <Typography
        sx={{
          fontSize: themeConfig.typography.h2,
          color: themeConfig.palette.primaryColor,
          fontWeight: 600,
          marginBlockEnd: 2,
          textAlign: isMobile && "center",
        }}
      >
        Feel free to reach out for collaborations or just a friendly hi
      </Typography>
      <Typography
        sx={{
          fontSize: themeConfig.typography.h2,
          color: themeConfig.palette.ternaryColor,
          fontWeight: 600,
          marginBlockEnd: 2,
        }}
      >
        hi<span style={{ fontFamily: "Inter" }}>@</span>
        santhosh.design
      </Typography>
      <Stack direction={isMobile ? "column " : "row"} gap={2}>
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
              height: 45,
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
              height: 45,
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
  );
};

export default Footer;
