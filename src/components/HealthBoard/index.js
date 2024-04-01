import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import DrawerAppBar from "../AppBar/index";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useLocation, useNavigate } from "react-router-dom";
import { themeConfig } from "../../theme/theme";
import SwiperComponent from "./Swiper";
import Footer from "../Footer";
import PasswordPage from "../About/PasswordPage";
import { motion } from "framer-motion";
import { useMediaQuery, useTheme } from "@mui/system";

const cardList = [
  {
    id: 0,
    title:
      "Designing a microsite that helps clinics, hospitals, and the public.",
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/Microsite_banner_image_.png",
    Author: "LYFnGO",
    background: "#DFF3FF",
    status: "Read the case study",
  },
  {
    id: 1,
    title:
      "Creating a health board for doctors and nutritionists to monitor customer health through wearables.",
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/Healthboardbanner_image_s.png",
    Author: "LYFnGO",
    status: "Enter password",
    background: "#D8E9FF",
  },
  {
    id: 2,
    title:
      "Redesigning the patients profile experience for clinics and hospitals.",
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Home/LYFnGO_patient_management.png",
    Author: "LYFnGO",
    status: "Read the case study",
    background: "#E2FAFF",
  },
];

const swiperImages = [
  {
    id: 0,
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/11.png",
  },
  {
    id: 1,
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/22.png",
  },
  {
    id: 2,
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/33.png",
  },
];

const Healthboard = () => {
  const location = useLocation();
  const data = location.state;
  const [isAuth, setIsAuth] = useState(false);
  const cardListFiltered = cardList.filter((card) => card.id !== data?.id);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));

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
    <>
      {isAuth === false && (
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
              paddingBlockStart: 4,
              display: "flex",
              flexDirection: "column",
              height: "90vh",
              alignItems: "center",
              background: "#F5F7FD",
              justifyContent: "center",
            }}
          >
            <PasswordPage setIsAuth={setIsAuth} />
          </Box>
        </Box>
      )}

      {isAuth === true && (
        <>
          {" "}
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
                paddingBlockStart: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <>
                <img
                  src={data?.image}
                  alt="bannerImage"
                  style={{
                    width: isMobile ? 320 : 1024,
                    height: isMobile ? 250 : 600,
                    paddingBlock: 24,
                    padding: isMobile && 12,
                    objectFit: "contain",
                    background: "#DEF3FF",
                    borderRadius: 6,
                  }}
                />
              </>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig.typography.h2
                        : themeConfig.typography.h1,
                      fontWeight: 700,
                    }}
                  >
                    {data?.title}
                  </Typography>
                </>
              </Box>
              <>
                <Box
                  sx={{
                    maxWidth: 840,
                    paddingBlockStart: 4,
                  }}
                >
                  {isTablet && (
                    <Stack direction={"row"}>
                      <Stack sx={{ width: 210 }} gap={1}>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            color: themeConfig.palette.secondaryColor,
                          }}
                        >
                          TIMELINE
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            color: themeConfig.palette.primaryColor,
                          }}
                        >
                          Dec 2023 - Jan 2024
                        </Typography>
                      </Stack>
                      <Stack sx={{ width: 210 }} gap={1}>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            color: themeConfig.palette.secondaryColor,
                          }}
                        >
                          PLATFORM
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            color: themeConfig.palette.primaryColor,
                          }}
                        >
                          Web & Mobile Friendly
                        </Typography>
                      </Stack>
                      <Stack sx={{ width: 210 }} gap={1}>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            color: themeConfig.palette.secondaryColor,
                          }}
                        >
                          MY ROLE
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            color: themeConfig.palette.primaryColor,
                          }}
                        >
                          Product Designer
                        </Typography>
                      </Stack>
                      <Stack sx={{ width: 210 }} gap={1}>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            color: themeConfig.palette.secondaryColor,
                          }}
                        >
                          Industry
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            color: themeConfig.palette.primaryColor,
                          }}
                        >
                          HealthTech
                        </Typography>
                      </Stack>
                    </Stack>
                  )}

                  {isMobile && (
                    <Stack direction="column" spacing={2}>
                      <Stack direction="row" spacing={2}>
                        <Stack sx={{ width: 150 }} gap={1}>
                          <Typography
                            sx={{
                              fontSize: themeConfig.typography.p1,
                              color: themeConfig.palette.secondaryColor,
                            }}
                          >
                            TIMELINE
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: themeConfig.typography.p1,
                              color: themeConfig.palette.primaryColor,
                            }}
                          >
                            Dec 2023 - Jan 2024
                          </Typography>
                        </Stack>
                        <Stack sx={{ width: 200 }} gap={1}>
                          <Typography
                            sx={{
                              fontSize: themeConfig.typography.p1,
                              color: themeConfig.palette.secondaryColor,
                            }}
                          >
                            PLATFORM
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: themeConfig.typography.p1,
                              color: themeConfig.palette.primaryColor,
                            }}
                          >
                            Web & Mobile Friendly
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack direction="row" spacing={2}>
                        <Stack sx={{ width: 150 }} gap={1}>
                          <Typography
                            sx={{
                              fontSize: themeConfig.typography.p1,
                              color: themeConfig.palette.secondaryColor,
                            }}
                          >
                            MY ROLE
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: themeConfig.typography.p1,
                              color: themeConfig.palette.primaryColor,
                            }}
                          >
                            Product Designer
                          </Typography>
                        </Stack>
                        <Stack sx={{ width: 200 }} gap={1}>
                          <Typography
                            sx={{
                              fontSize: themeConfig.typography.p1,
                              color: themeConfig.palette.secondaryColor,
                            }}
                          >
                            INDUSTRY
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: themeConfig.typography.p1,
                              color: themeConfig.palette.primaryColor,
                            }}
                          >
                            HealthTech
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  )}
                </Box>
              </>
              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    About LYFnGO
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    LYFnGO, an Asian <b>startup</b>, delivers <b>SaaS</b>{" "}
                    solutions for <b>health and wellness.</b> Their{" "}
                    <b>Clinic, Wellness, and Fitness management software</b>{" "}
                    optimize productivity, finances, and client experience. With
                    user-friendly interfaces, LYFnGO simplifies operations,
                    fostering better outcomes for businesses and clients alike.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    My Role
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    I lead the design team as the product designer, with{" "}
                    <a
                      style={{
                        color: themeConfig.palette.primaryColor,
                        fontWeight: 600,
                      }}
                      href="https://www.linkedin.com/in/arvindh-yash-17a38a220/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Aravithkumar
                    </a>{" "}
                    serving as a Jr. Product Designer,
                    <a
                      style={{
                        color: themeConfig.palette.primaryColor,
                        fontWeight: 600,
                      }}
                      href="https://www.linkedin.com/in/sandhiya-jehan-358b24151/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sandhiya Jegan
                    </a>{" "}
                    - Product Lead,{" "}
                    <a
                      style={{
                        color: themeConfig.palette.primaryColor,
                        fontWeight: 600,
                      }}
                      href="https://www.linkedin.com/in/sathishkumarsash/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Sathishkumar
                    </a>{" "}
                    as the Business Analyst, all actively involved throughout
                    the implementation process of this feature in our product,
                    LYFnGO.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      // lineHeight: 3,
                      marginBlockStart: 3,
                    }}
                  >
                    Works: User & Health data research, Wireframe, Prototypes &
                    Usability testing.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Problem Statement
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    Managing and monitoring precious customer health data,
                    including vital metrics such as sugar levels, blood glucose,
                    heart rate, and calories burned and gained, presents
                    significant challenges for hospitals and nutrition centers,
                    especially for high-risk individuals in the healthcare
                    industry. This requires the allocation of specific
                    specialists and nurses for validation and monitoring,
                    leading to increased healthcare management costs and causing
                    worry for customers when they are outside hospital facility.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Solution Overview
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    To address these challenges, LYFnGO <b>partnered</b> with
                    <b>Spike,</b> a B2B Generative AI and Data tech startup for
                    the
                    <b> Digital Health industry.</b> Spike provides health and
                    fitness data interpretation-as-a-service on top of
                    user-generated data from
                    <b>Wearables</b> and IoT devices.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <>
                  <img
                    src={
                      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/Solution_overview.png"
                    }
                    style={{
                      width: isMobile ? 300 : 800,
                      height: isMobile ? 300 : 370,
                      objectFit: "contain",
                    }}
                    alt="bannerImage"
                  />
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    How did I research to collect health data?
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    To gather health data, I followed a structured approach.
                    Initially, I reviewed the spike shared by our founder and
                    product lead collaborating closely with the design team and
                    business analysts. <b>My first step</b> involved collecting{" "}
                    <b>health data metrics</b> in line with healthcare{" "}
                    <b>industry standards.</b> For nutrition centers, I tailored
                    the data collection process to meet their specific
                    requirements, confirming its importance to customer needs.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <img
                    src={
                      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/research_healthdata.png"
                    }
                    style={{
                      width: isMobile ? 320 : 770,
                      height: isMobile ? 320 : 370,
                      objectFit: "contain",
                    }}
                    alt="bannerImage"
                  />
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockStart: 4,
                    }}
                  >
                    After gathering the data, I <b>carefully cross-checked</b>{" "}
                    it against the metrics outlined in the spike to ensure
                    alignment. Afterwards, I validated our findings across
                    supported platforms and engaged in discussions with the
                    business analysts and product lead to confirm the{" "}
                    <b>accuracy</b> and relevance of the collected data.
                    Additionally, to ensure the strength of our data, we looked
                    for validation from <b>healthcare industry experts,</b>{" "}
                    incorporating their feedback into our process.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Challenges Faced
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    How can we share health data with selective specialists?
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    We've faced the challenge of securely and efficiently{" "}
                    <b>sharing health data</b> with <b>specific specialists.</b>{" "}
                    Ensuring the confidentiality of sensitive information while
                    enabling targeted access for specialists was a significant
                    obstacle.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    How can customers integrate with wearables?
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    Another challenge was facilitating seamless integration with
                    wearables for customers. This involved creating a{" "}
                    <b>user-friendly interface</b> that allows users to
                    effortlessly <b>connect</b> their wearable devices to our
                    platform, ensuring a smooth flow of data for personalized
                    health insights.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Decision Point
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    Our team and business analysts verified all the gathered
                    data and insights and created the use cases and discussed
                    with the product lead and the stakeholders.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    How spike connects with LYFnGO to Healthcare providers?
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    In the <b>LYFnGO B2C application,</b> users can easily
                    integrate their wearable devices, including well-known
                    brands like Apple HealthKit, Fitbit, Google Fit, Garmin,
                    Samsung Health, Bio Starp, and more.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  // maxWidth: 880,
                  paddingBlockStart: 4,
                }}
              >
                <>
                  <img
                    src={
                      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/Lyfngo_to_healthcareproviders.png"
                    }
                    style={{
                      width: isMobile ? 320 : 970,
                      height: isMobile ? 200 : 320,
                      objectFit: "contain",
                    }}
                    alt="bannerImage"
                  />
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    Customers have the flexibility to control which health data
                    they share and which they keep private. They can also set a{" "}
                    <b>validity period for sharing</b> their health data and{" "}
                    <b>choose</b> specific doctors or specialists who are
                    authorized to monitor and validate their information.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    This feature allows for <b>greater privacy</b> and{" "}
                    <b>security,</b> giving users peace of mind while still
                    allowing them to benefit from monitoring their health with
                    wearable devices.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Collaborated with LYFnGO Developers
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    After finalizing the use cases, I engaged with the LYFnGO
                    Python and React JS teams to discuss the health data we are
                    obtaining, ensuring that their functionality was thoroughly
                    tested. We also exchanged researched health data that could
                    potentially be integrated into the <b>first MVP</b> for this
                    feature. Additionally, I communicated with the business
                    analysts to gather feedback and ensure alignment with{" "}
                    <b>project goals.</b>
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Research Methodologies
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    The research methodologies that I followed included the
                    design team and business analysts conducting{" "}
                    <b>competitor analysis</b> for{" "}
                    <b>B2C wearable integration,</b> along with spike guidelines
                    and their client applications. For the{" "}
                    <b>B2B client profile,</b> I conducted a small research on
                    all wearable health data providers, including well known
                    brands like Apple HealthKit, Fitbit, Google Fit, Garmin,
                    Samsung Health, Biostrap, and more. This research focused on{" "}
                    <b>analyzing health data graphs,</b> how they showcased
                    health data to end customers, and an analysis of key
                    features along with user feedback.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    From Paper to Perfected: Design Iteration Journey
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    We began with paper wireframes, <b>facilitating</b>{" "}
                    iterative discussions with stakeholders to refine the
                    design. Through <b>three iterations</b> on the B2C
                    application for wearable integration and two iterations on
                    the Client Profile Health Board for web design, we finalized
                    the designs based on feedback and usability testing.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginTop: 2,
                    }}
                  >
                    Finally, after the wireframe iteration, we finalized the
                    paper wireframes.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 900,
                  paddingBlockStart: 4,
                }}
              >
                {isTablet && <SwiperComponent />}
                {isMobile && (
                  <Stack direction={"column"} gap={2}>
                    {swiperImages?.map((data) => (
                      <img
                        src={data?.image}
                        alt="iamge"
                        width={300}
                        height={200}
                      />
                    ))}
                  </Stack>
                )}
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Design Iterations
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    <b>- 3 iterations</b> on the B2C Application : Wearable
                    Integration setup.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    <b>- 2 iterations</b> on the Client Profile Health Board :
                    Web Design
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    These iterations were directly provided by the founder,
                    product lead, business analyst, along with usability
                    testing. Finally, we have completed the Wearable Integration
                    and the Healthboard.
                  </Typography>
                </>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig?.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Final Designs
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig?.typography.h3,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Customer Wearable Integration
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    High-risk patients or nutritionist clients can easily
                    connect their wearable devices through the LYFnGO B2C
                    Application. The process involves quick and straightforward
                    steps, allowing customers to instantly connect their
                    devices. They can select the duration of time for data
                    sharing and even choose which custom health data to share
                    and with which doctors/specialists.
                  </Typography>
                </>
              </Box>
              <Box
                sx={{
                  maxWidth: 990,
                  paddingBlock: isTablet && 4,
                }}
              >
                <>
                  <img
                    src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/Customer_wearable_integration.png"
                    alt="Customer_wearable_integration"
                    style={{
                      width: isMobile ? 300 : 990,
                      height: isMobile ? 300 : 640,
                      objectFit: "contain",
                    }}
                  />
                </>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              paddingBlockStart: 4,
              background: "#FFF6F8",
              paddingInline: isMobile && 2,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                // maxWidth: 770,
                // height: 940,
                alignItems: isTablet && "center",
                justifyContent: isTablet && "center",
              }}
            >
              <>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h3,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Business Healthboard
                </Typography>
              </>
              <>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 500,
                    marginBlockEnd: 2,
                    textAlign: isTablet && "center",
                    maxWidth: 840,
                    lineHeight: 2,
                  }}
                >
                  Once the customer has provided access to share their health
                  data, it will be displayed as shown in the images below. This
                  view allows doctors and nutritionists to track progress easily
                  without hesitation.
                </Typography>
              </>
              <>
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/Buisness_healthboard.png"
                  alt="Buisness_healthboard"
                  style={{
                    width: isMobile ? 350 : 1185,
                    height: isMobile ? 300 : 900,
                    objectFit: "contain",
                  }}
                />
              </>
            </Box>
          </Box>
          <Box
            sx={{
              // maxWidth: 770,
              paddingBlockStart: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontSize: isMobile
                  ? themeConfig?.typography.h3
                  : themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Design Handoff
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    Our team started the handoff process, Once all{" "}
                    <b>preparations</b> are completed, we have{" "}
                    <b>scheduled meetings</b> with Product Leads and Business
                    Analysts to recheck all aspects. Additionally, we will
                    present to the Developer, QA Testers, and Backend Team. Any
                    <b> improvements</b> and <b>technical flaws</b> noted will
                    be redesigned by our team. Finally, we will provide a design
                    handoff including assets.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    After Done Design Handoff
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    Our team has been <b>closely monitoring</b> the development
                    team to ensure better <b>quality.</b> We've been identifying
                    any necessary improvements as the developers work. Once all
                    processes are completed, the product is deployed to the{" "}
                    <b>secondary testing environment</b> for further evaluation.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    Finally, with the permission of CEO we have launched the
                    Wearable Integration & Healthboard.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Impacts
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    Our CEO and the marketing teams showcased this new feature
                    to our clients and new leads. In the healthcare industry,
                    our CEO pitched the feature and received{" "}
                    <b>98% positive feedback.</b> By introducing Wearable
                    Integrations and Healthboard, we boosted our sales by{" "}
                    <b>10x.</b>
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Reflection and Learning
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    This project provided valuable insights into the importance
                    of collaboration and iterative design. It showcased our
                    ability to adapt to <b>new technologies</b> and deliver
                    impactful solutions to complex problems.
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Insights
                  </Typography>
                </>
                <>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    This project was a different approach for me, as we{" "}
                    <b>started from scratch</b> and collaborated with all the
                    teams, making impactful decisions along the way.
                  </Typography>
                </>
              </Box>
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                minWidth: isTablet && 980,
              }}
            >
              <Divider />
            </Box>
            <Box
              sx={{
                maxWidth: 840,
                paddingInline: isMobile && 2,
                paddingBlockStart: 4,
              }}
            >
              <>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 400,
                    marginBlockEnd: 2,
                    lineHeight: 2,
                  }}
                >
                  This has been <b>my proudest contribution at LYFnGO.</b>{" "}
                  Couldn't have done so without the{" "}
                  <b>amazing team at LYFnGO ! Huge kudos to our heroes</b> in
                  the Development Team , our QA team, and Backend Team.
                </Typography>
              </>
              <>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 700,
                    marginBlockEnd: 4,
                    lineHeight: 2,
                  }}
                >
                  Thank you for reading through! Hope you enjoyed learning about
                  my design and thought process.
                </Typography>
              </>
            </Box>
          </Box>
          <Footer />
          <Box
            sx={{
              paddingBlockStart: 4,
              paddingInline: isMobile ? 2 : 8,
            }}
          >
            <>
              <Typography
                sx={{
                  fontSize: isMobile
                    ? themeConfig?.typography.h3
                    : themeConfig.typography.h2,
                  fontWeight: 400,
                  marginBlockEnd: 2,
                }}
              >
                Check out my other case studies
              </Typography>
            </>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
                columnGap: 4,
                rowGap: 4,
                marginBlock: 6,
              }}
            >
              {cardListFiltered.map((item, index) => (
                <Box
                  onClick={() => handleClick(item)}
                  sx={{
                    // width: 500,
                    cursor: "pointer",
                    height: isMobile ? 450 : 550,
                    position: "relative",
                  }}
                >
                  <Box
                    sx={{
                      boxShadow: " 0px 0px 10px 0px rgba(0, 0, 0, 0.10)",
                      background: item?.background,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 1,
                      borderRadius: 3,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, transition: ".5s ease-in-out" }}
                    >
                      <>
                        <img
                          src={item?.image}
                          alt="card_image"
                          width={isMobile ? 320 : 500}
                          height={isMobile ? 200 : 330}
                          style={{ objectFit: "contain", padding: 12 }}
                        />
                      </>
                    </motion.div>
                  </Box>
                  <Box sx={{ marginBlockStart: 4 }}>
                    <>
                      <Typography
                        sx={{
                          fontSize: themeConfig.typography.p1,
                          color: themeConfig.palette.secondaryColor,
                        }}
                      >
                        {item?.Author}
                      </Typography>
                    </>
                    <>
                      <Typography
                        sx={{
                          fontSize: isMobile
                            ? themeConfig.typography.h2
                            : themeConfig.typography.h3,
                          color: themeConfig.palette.primaryColor,
                          fontWeight: 700,
                          maxWidth: 550,
                        }}
                      >
                        {item?.title}
                      </Typography>
                    </>
                    <>
                      <Typography
                        onClick={() => handleClick(item)}
                        sx={{
                          fontSize: themeConfig.typography.p1,
                          color: themeConfig.palette.primaryColor,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          position: "absolute",
                          // bottom: 1,
                          marginBlockStart: 3,
                          "&:hover": {
                            cursor: "pointer",
                            opacity: 0.3,
                            transition: "0.3s ease-in-out",
                          },
                        }}
                      >
                        {item?.status} <TrendingFlatIcon />
                      </Typography>
                    </>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </>
      )}
    </>
  );
};

export default Healthboard;
