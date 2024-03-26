import { Box, Typography } from "@mui/material";
import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { themeConfig } from "../../theme/theme";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cardList = [
  {
    id: 0,
    title:
      "Designing a microsite that helps clinics, hospitals, and the public.",
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/Microsite_banner_image_.png",
    Author: "LYFnGO",
    status: "Read the case study",
  },
  {
    id: 1,
    title:
      "Creating a health board for doctors and nutritionists to monitor customer health through wearables.",
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/Healthboardbanner_image_s.png",
    Author: "LYFnGO",
    status: "Read the case study",
  },
  {
    id: 2,
    title:
      "Redesigning the patients profile experience for clinics and hospitals.",
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/LYFnGO_patient_management.png",
    Author: "LYFnGO",
    status: "Read the case study",
  },
  {
    id: 3,
    title: "Instant checkout",
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/Microsite_banner_image_.png",
    Author: "Blinkit",
    status: "Comming Soon",
  },
];

const HomePageCard = () => {
  const navigate = useNavigate();
  const handleClick = (data) => {
    if (data?.id === 0) {
      navigate("/microsite", { state: data });
    } else if (data?.id === 1) {
      navigate("/healthboard", { state: data });
    } else if (data?.id === 2) {
      navigate("/patientdashboard", { state: data });
    }
  };
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: 2,
        rowGap: 4,
        marginBlock: 6,
      }}
    >
      {cardList.map((item, index) => (
        <Box
          sx={{
            width: 500,
            height: 550,
            position: "relative",
          }}
        >
          <Box
            sx={{
              boxShadow: " 0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
              background: "#E2FAFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 1,
              cursor: "pointer",
            }}
            onClick={() => handleClick(item)}
          >
            <motion.div
              whileHover={{ scale: 1.1, transition: ".5s ease-in-out" }}
            >
              <img
                src={item?.image}
                alt="card_image"
                width={400}
                height={330}
                style={{ objectFit: "contain" }}
              />
            </motion.div>
          </Box>
          <Box sx={{ marginBlockStart: 4 }}>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                color: themeConfig.palette.secondaryColor,
              }}
            >
              {item?.Author}
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.h3,
                color: themeConfig.palette.primaryColor,
              }}
            >
              {item?.title}
            </Typography>

            <Typography
              onClick={() => handleClick(item)}
              sx={{
                fontSize: themeConfig.typography.p1,
                color: themeConfig.palette.primaryColor,
                display: "flex",
                alignItems: "center",
                gap: 1,
                position: "absolute",
                bottom: 1,
                "&:hover": {
                  cursor: "pointer",
                  opacity: 0.3,
                  transition: "0.3s ease-in-out",
                },
              }}
            >
              {item?.status} <TrendingFlatIcon />
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default HomePageCard;
