import { Box, Typography } from "@mui/material";
import { Stack, useMediaQuery, useTheme } from "@mui/system";
import React from "react";
import { themeConfig } from "../../theme/theme";

const LandingDescrption = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        height: "90vh",
        background: "#F5F7FD",
        marginBlockStart: 2,
        paddingInline: 8,
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
          width={"50%"}
          sx={{ height: "90vh" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography sx={{ fontSize: themeConfig.typography.h1 }}>
            I’m{" "}
            <span style={{ color: themeConfig.palette.ternaryColor }}>
              Santhosh
            </span>
            , a Product Designer Focused on minimizing risks for both businesses
            and users.
          </Typography>
          <Typography
            sx={{ fontSize: themeConfig.typography.p1, marginBlockStart: 3 }}
          >
            Strategic thinker crafting clean, effective designs that seamlessly
            blend user delight with business success.
          </Typography>
        </Stack>
        <Stack
          width={"50%"}
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
            width={330}
          />
        </Stack>
      </Stack>
    </Box>
  );
};

export default LandingDescrption;
