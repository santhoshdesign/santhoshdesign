import { Box, Typography } from "@mui/material";
import { Stack, useMediaQuery, useTheme } from "@mui/system";
import React from "react";
import { themeConfig } from "../../theme/theme";
import FadeVariantStart from "../FramerMotion/PageFade";

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
        paddingInline: isMobile ? 2 : 8,
      }}
    >
      <Box
        sx={{
          background: "#F5F7FD",
          width: "100%",
          maxWidth: 1380,
          marginBlockStart: isMobile ? 12 : 2,
        }}
        className="image-container"
      >
        {/* display: { xs: "block", sm: "none" }, */}
        <FadeVariantStart>
          <Stack direction={isMobile ? "column-reverse" : "row"} width={"100%"}>
            <Stack
              width={isMobile ? "100%" : "50%"}
              sx={{ height: isMobile ? "60vh" : "90vh" }}
              alignItems={"center"}
              justifyContent={isMobile ? "start" : "center"}
              position={"relative"}
            >
              <Typography
                sx={{
                  fontSize: isMobile
                    ? themeConfig.typography.h2
                    : themeConfig.typography.h1,
                  fontWeight: 700,
                }}
              >
                I’m{" "}
                <span style={{ color: themeConfig.palette.ternaryColor }}>
                  Santhosh
                </span>
                , a Product Designer Focused on minimizing risks<br></br> for
                both businesses and users.
              </Typography>
              {/* <CurvedLine /> */}
              <Typography
                sx={{
                  fontSize: themeConfig.typography.p1,
                  marginBlockStart: 3,
                }}
              >
                Strategic thinker crafting clean, effective designs that
                seamlessly blend user delight with business success.
              </Typography>
            </Stack>
            <Stack
              width={isMobile ? "100%" : "50%"}
              //  sx={{ height: 750 }}
              alignItems={isMobile ? "center" : "flex-end"}
              justifyContent={isMobile ? "start" : "center"}
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
        </FadeVariantStart>
      </Box>
    </Box>
  );
};

export default LandingDescrption;
