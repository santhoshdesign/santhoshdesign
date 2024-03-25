import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { themeConfig } from "../../theme/theme";

const Footer = () => {
  return (
    <Box
      sx={{
        height: 300,
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
          marginBlockEnd: 2,
        }}
      >
        Feel free to reach out for collaborations or just a friendly hi
      </Typography>
      <Typography
        sx={{
          fontSize: themeConfig.typography.h2,
          color: themeConfig.palette.ternaryColor,
          marginBlockEnd: 2,
        }}
      >
        hi@santhosh.design
      </Typography>
      <Stack direction={"row"} gap={2}>
        <Button
          sx={{
            width: 240,
            height: 40,
            border: "1px solid #BCB2B2",
            background: themeConfig.palette.whiteColor,
            borderRadius: 30,
            textTransform: "capitalize",
            fontSize: themeConfig.typography.p1,
            color: themeConfig.palette.primaryColor,
          }}
        >
          Get my CV
        </Button>
        <Button
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
            gap: 1,
          }}
        >
          <img
            src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/linkedin.svg"
            alt="linkedin"
          />{" "}
          @santhoshdesign
        </Button>
      </Stack>
    </Box>
  );
};

export default Footer;
