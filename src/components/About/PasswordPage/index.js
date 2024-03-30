import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { themeConfig } from "../../../theme/theme";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/system";
import PageFadeEffect from "../../FramerMotion/PageFadeContent";
import PageFade from "../../FramerMotion/PageFade";

const PasswordPage = ({ setIsAuth }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);
  const handlePasswordSubmit = () => {
    if (password === "Assured") {
      setError("");
      setIsAuth(true);
    } else {
      setError("Incorrect password. Please try again.");
      setShake(true); // Trigger shake animation
      setTimeout(() => {
        setShake(false);
        setError("");
      }, 3000);
      setPassword("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handlePasswordSubmit();
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 3,
      }}
    >
      <PageFade>
        <img
          src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/Lock.svg"
          alt="lock"
        />
      </PageFade>
      <PageFadeEffect>
        <Typography
          sx={{
            fontSize: isMobile
              ? themeConfig.typography.h2
              : themeConfig.typography.h1,
            fontWeight: 700,
          }}
        >
          This content is producted.
        </Typography>
      </PageFadeEffect>
      <PageFadeEffect>
        <Typography
          sx={{
            fontSize: isMobile
              ? themeConfig.typography.h3
              : themeConfig.typography.h2,
            fontWeight: 600,
          }}
        >
          To view, please enter the password.
        </Typography>
      </PageFadeEffect>
      <motion.div
        animate={{ x: shake ? [-10, 10, -10, 10, 0] : 0 }} // Shake animation
      >
        <TextField
          placeholder="Enter password"
          variant="outlined"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            "& input": {
              width: isMobile ? 300 : 450,
              height: isMobile ? 25 : 54,
              marginInlineStart: 8,
              borderRadius: 30,
              background: themeConfig.palette.whiteColor,
              fontSize: themeConfig.typography.p1,
              paddingInlineStart: 3,
            },
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove border
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              border: "none", // Remove border on hover
            },
            "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: "none", // Remove border when focused
              },
          }}
          size="small"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment
                position="end"
                sx={{ position: "relative", left: -60 }}
              >
                <EastIcon />
              </InputAdornment>
            ),
          }}
        />
      </motion.div>
      {error && (
        <Typography sx={{ color: "red", fontSize: themeConfig.typography.p1 }}>
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default PasswordPage;
