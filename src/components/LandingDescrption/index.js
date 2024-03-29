import { Box, Typography } from "@mui/material";
import { Stack, useMediaQuery, useTheme } from "@mui/system";
import React from "react";
import { themeConfig } from "../../theme/theme";

const LandingDescrption = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // const CurvedLine = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="278"
  //     height="12"
  //     viewBox="0 0 278 12"
  //     fill="none"
  //     style={{ position: "absolute", top: 280, left: 230 }}
  //   >
  //     <path
  //       d="M1 10C74.8452 3.96301 233.542 -4.48877 277.567 10"
  //       stroke="#4169E1"
  //       stroke-width="2.4"
  //     />
  //   </svg>
  // );
  return (
    <Box
      sx={{
        background: "#F5F7FD",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // marginBlockStart: 2,
        paddingInline: 8,
      }}
    >
      <Box
        sx={{
          height: 650,
          background: "#F5F7FD",
          width: "100%",
          maxWidth: 1380,
          marginBlockStart: 2,
        }}
        className="image-container"
      >
        {/* display: { xs: "block", sm: "none" }, */}
        <Stack
          direction={isMobile ? "column" : "row"}
          gap={14}
          width={"100%"}
          height={"90vh"}
        >
          <Stack
            width={"60%"}
            sx={{ height: "90vh" }}
            alignItems={"center"}
            justifyContent={"center"}
            position={"relative"}
          >
            <Typography
              sx={{ fontSize: themeConfig.typography.h1, fontWeight: 700 }}
            >
              I’m{" "}
              <span style={{ color: themeConfig.palette.ternaryColor }}>
                Santhosh
              </span>
              , a Product Designer Focused on minimizing risks<br></br> for both
              businesses and users.
            </Typography>
            {/* <CurvedLine /> */}
            <Typography
              sx={{ fontSize: themeConfig.typography.p1, marginBlockStart: 3 }}
            >
              Strategic thinker crafting clean, effective designs that
              seamlessly blend user delight with business success.
            </Typography>
          </Stack>
          <Stack
            width={"40%"}
            //  sx={{ height: 750 }}
            alignItems={"flex-end"}
            justifyContent={"center"}
          >
            <img
              src={
                "https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/Santhosh_Profile.png"
              }
              alt="myimage"
              height={330}
              style={{ objectFit: "contain" }}
              width={330}
            />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default LandingDescrption;
