import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import DrawerAppBar from "../AppBar/index";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { useLocation, useNavigate } from "react-router-dom";
import PasswordPage from "./PasswordPage";
import { themeConfig } from "../../theme/theme";
import PageFade from "../FramerMotion/PageFade";
import PageFadeEffect from "../FramerMotion/PageFadeEffect";
import SwiperComponent from "./Swiper";
import { motion } from "framer-motion";
import PageFadeContent from "../FramerMotion/PageFadeContent";
import Footer from "../Footer";
import { useMediaQuery, useTheme } from "@mui/system";
import secureLocalStorage from "react-secure-storage";

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
    status: "Read the case study",
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
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/Setup%20your%20microsite.svg",
  },
  {
    id: 1,
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/Setup%20your%20profile.svg",
  },
  {
    id: 2,
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/Microsite%20landing.svg",
  },
  {
    id: 3,
    image:
      "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/Doctor%20Profile.svg",
  },
];

const About = () => {
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
              display: "flex",
              flexDirection: "column",
              height: "90vh",
              alignItems: "center",
              background: "#F5F7FD",
              justifyContent: isMobile ? "flex-start" : "center",
            }}
          >
            <PasswordPage setIsAuth={setIsAuth} />
          </Box>
        </Box>
      )}

      {isAuth === true && (
        <>
          <Box>
            <Box
              sx={{
                height: "10vh",
              }}
            >
              <DrawerAppBar />
            </Box>
            <PageFade>
              <Box
                sx={{
                  paddingBlockStart: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
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
              </Box>
            </PageFade>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PageFadeEffect>
                <Box
                  sx={{
                    maxWidth: 770,
                    paddingBlockStart: 4,
                    paddingInline: isMobile && 2,
                  }}
                >
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
                </Box>
              </PageFadeEffect>
              <PageFadeEffect>
                <Box
                  sx={{
                    maxWidth: 770,
                    paddingBlockStart: 4,
                  }}
                >
                  {isTablet && (
                    <Stack direction={"row"} gap={2}>
                      <Stack sx={{ width: 192.5 }} gap={1}>
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
                          Oct - Nov 2023
                        </Typography>
                      </Stack>
                      <Stack sx={{ width: 192.5 }} gap={1}>
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
                      <Stack sx={{ width: 192.5 }} gap={1}>
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
                      <Stack sx={{ width: 192.5 }} gap={1}>
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
                            Oct - Nov 2023
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
              </PageFadeEffect>
              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
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
                </PageFadeEffect>
                <PageFadeEffect>
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
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
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
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    As a Product Designer, I have taken the lead for the design
                    team.
                    <a
                      style={{
                        color: themeConfig.palette.primaryColor,
                        fontWeight: 600,
                      }}
                      href="https://www.linkedin.com/in/praveenkumardesigner/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Praveenkumar
                    </a>{" "}
                    (Product Designer),{" "}
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
                    Business Analyst, and the founder of LYFnGO have been
                    involved throughout the implementation process of this
                    feature in our product.
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 3,
                    }}
                  >
                    Works: Research plan, wireframe, prototyping, Interaction
                    design.
                  </Typography>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Real Problem
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 3,
                    }}
                  >
                    Our team identified this problem while the doctor managed
                    the clinic.
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    In a <b>busy clinic, appointments</b> often overlapped, and{" "}
                    <b>patients</b>
                    showed up without warning, making schedules messy. The{" "}
                    <b>doctor, nurse,</b> and <b>receptionist</b> had to manage
                    multiple tasks simultaneously, and patients had to wait
                    longer or have hurried <b>appointments.</b> Things needed to
                    change to bring order back to the <b>confusion.</b>
                  </Typography>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFade>
                  <Stack alignItems={isMobile && "center"}>
                    <img
                      src={
                        "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/problem.png"
                      }
                      alt="bannerImage"
                      width={isMobile && 320}
                    />
                  </Stack>
                </PageFade>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig.typography.p1
                        : themeConfig.typography.h3,
                      textAlign: "center",
                      fontWeight: 600,
                      paddingBlockStart: 4,
                      fontStyle: "italic",
                    }}
                  >
                    Disorganized appointment scheduling leads to
                    <br /> longer waits and rushed appointments in the clinic.
                  </Typography>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  minWidth: isTablet && 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 1,
                    }}
                  >
                    Goals
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    Goals that our team considered to create a microsite
                    feature.
                  </Typography>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig?.typography.h3,
                      fontWeight: 600,
                      marginBlockEnd: 1,
                    }}
                  >
                    Doctor’s Goals
                  </Typography>
                </PageFadeEffect>
                {isTablet && (
                  <PageFade>
                    <Stack direction={"row"}>
                      <img
                        src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/Goal1.svg"
                        alt="docterlogo"
                      />
                    </Stack>
                  </PageFade>
                )}
                {isMobile && (
                  <Stack direction={"column"} gap={2}>
                    <PageFade>
                      <Stack>
                        <img
                          src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/m1.svg"
                          alt="docterlogo"
                        />
                      </Stack>
                    </PageFade>
                    <PageFade>
                      <Stack>
                        <img
                          src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/m2.svg"
                          alt="docterlogo"
                        />
                      </Stack>
                    </PageFade>
                  </Stack>
                )}
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig?.typography.h3,
                    fontWeight: 600,
                    marginBlockEnd: 1,
                  }}
                >
                  Patient’s Goals
                </Typography>
                {isTablet && (
                  <PageFade>
                    <Stack direction={"row"} gap={4}>
                      <img
                        src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/Goal2.svg"
                        alt="Patient’s"
                      />
                    </Stack>
                  </PageFade>
                )}

                {isMobile && (
                  <Stack direction={"column"} gap={2}>
                    <PageFade>
                      <Stack>
                        <img
                          src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/m3.svg"
                          alt="docterlogo"
                        />
                      </Stack>
                    </PageFade>
                    <PageFade>
                      <Stack>
                        <img
                          src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/m4.svg"
                          alt="docterlogo"
                        />
                      </Stack>
                    </PageFade>
                  </Stack>
                )}
              </Box>

              <Box
                sx={{
                  minWidth: isTablet && 770,
                  paddingBlockStart: 4,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 1,
                    }}
                  >
                    Impacts
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Stack direction={"row"} gap={2} alignItems={"center"}>
                    {isTablet && (
                      <Stack>
                        <img
                          src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/LYFnGO_Logo.svg"
                          alt="lyfngo"
                        />
                      </Stack>
                    )}
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: themeConfig.typography.p1,
                          fontStyle: "italic",
                          fontWeight: 400,
                        }}
                      >
                        “Our founder and marketing team have stated.”
                      </Typography>
                    </Stack>
                  </Stack>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  minWidth: isTablet && 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeContent>
                  <Stack
                    direction={isMobile ? "column" : "row"}
                    gap={2}
                    alignItems={"center"}
                  >
                    <Stack>
                      <img
                        src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/doctor.png"
                        alt="doctor"
                        style={{ height: 90, width: 90, objectFit: "contain" }}
                      />
                    </Stack>
                    <Stack gap={2}>
                      <Stack direction={"row"} alignItems={"center"} gap={2}>
                        <Typography
                          sx={{
                            fontSize: isMobile
                              ? themeConfig?.typography.h3
                              : themeConfig.typography.h2,
                            fontWeight: 400,
                          }}
                        >
                          90%
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            fontWeight: 400,
                          }}
                        >
                          <b>Patient retention</b> has increased, and doctors
                          are really happy with our microsite.
                        </Typography>
                      </Stack>

                      <Stack direction={"row"} alignItems={"center"} gap={2}>
                        <Typography
                          sx={{
                            fontSize: isMobile
                              ? themeConfig?.typography.h3
                              : themeConfig.typography.h2,
                            fontWeight: 400,
                          }}
                        >
                          95%
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            fontWeight: 400,
                          }}
                        >
                          We've increased the Clinic team's <b>efficiency</b>{" "}
                          and <b>revenue</b> with LYFnGO.
                        </Typography>
                      </Stack>
                      <Stack>
                        <Typography
                          sx={{
                            fontSize: themeConfig?.typography.h3,
                          }}
                        >
                          Patients engagements
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </PageFadeContent>
              </Box>
              {/* <Box
                sx={{
                  minWidth: 770,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: isMobile
                      ? themeConfig?.typography.h3
                      : themeConfig.typography.h2,
                    // textAlign: "center",
                  }}
                >
                  Patients engagements
                </Typography>
              </Box> */}

              <Box
                sx={{
                  minWidth: isTablet && 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeContent>
                  <Stack
                    direction={isMobile ? "column" : "row"}
                    gap={2}
                    alignItems={"center"}
                  >
                    <Stack>
                      <img
                        src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/customer.png"
                        alt="customer"
                        style={{ height: 90, width: 90, objectFit: "contain" }}
                      />
                    </Stack>
                    <Stack gap={2}>
                      <Stack direction={"row"} alignItems={"center"} gap={2}>
                        <Typography
                          sx={{
                            fontSize: isMobile
                              ? themeConfig?.typography.h3
                              : themeConfig.typography.h2,
                            fontWeight: 400,
                          }}
                        >
                          80%
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            fontWeight: 400,
                          }}
                        >
                          of the patients using the microsite via <b>mobile,</b>{" "}
                          we've seen excellent performance.
                        </Typography>
                      </Stack>

                      <Stack direction={"row"} alignItems={"center"} gap={2}>
                        <Typography
                          sx={{
                            fontSize: isMobile
                              ? themeConfig?.typography.h3
                              : themeConfig.typography.h2,
                            fontWeight: 400,
                          }}
                        >
                          20%
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: themeConfig.typography.p1,
                            fontWeight: 400,
                          }}
                        >
                          are using it on web/tab.
                        </Typography>
                      </Stack>
                    </Stack>
                  </Stack>
                </PageFadeContent>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      lineHeight: 2,
                    }}
                  >
                    Now, many clients, not only on the clinic side but also{" "}
                    <b>therapy centers</b> and <b>wellness centers,</b> are
                    asking for the microsite for their business needs.
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.h3,
                      lineHeight: isMobile ? 1 : 3,
                      fontWeight: 600,
                    }}
                  >
                    Boosted LYFnGO sales 10x with a microsite!
                  </Typography>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Design Process
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    We conducted our <b>daily meetings</b> to facilitate
                    collaboration across departments. Along with the product
                    lead, business analyst, and sometimes the founders and
                    co-founders, we <b>contributed</b> fresh ideas to the
                    discussion. The <b>purpose</b> of these daily meetings is to
                    align everyone toward the same goal: improving our client
                    experience by solving <b>users' problems.</b>
                  </Typography>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Competitor analysis
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    Our team, including the Product Lead, Business Analyst, and
                    Founder, conducted a thorough analysis of industry
                    competitors. While I'm unable to disclose specific details
                    due to non-disclosure agreements, this analysis helped us
                    gain valuable insights.
                  </Typography>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  minWidth: isTablet && 770,
                  paddingBlockStart: 4,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Insights gained while analysis
                  </Typography>
                </PageFadeEffect>
                <Stack direction={isMobile ? "column" : "row"} gap={6}>
                  <Stack>
                    {/* <PageFade> */}
                    <img
                      src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/insights1.png"
                      style={{ width: isMobile ? 300 : 350, height: 150 }}
                      alt="insights1"
                    />
                    {/* </PageFade> */}
                  </Stack>
                  <Stack>
                    {/* <PageFade> */}
                    <img
                      src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/insights2.png"
                      style={{ width: isMobile ? 300 : 350, height: 150 }}
                      alt="insights2"
                    />
                    {/* </PageFade> */}
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  minWidth: isTablet && 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Initial UX Challenge
                  </Typography>
                </PageFadeEffect>
                <Stack
                  direction={isMobile ? "column" : "row"}
                  gap={isMobile ? 2 : 18}
                >
                  <PageFadeContent>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: themeConfig.typography.h3,
                          fontWeight: 600,
                          marginBlockEnd: 2,
                        }}
                      >
                        For Clinic Owner’s
                      </Typography>
                      <li
                        style={{
                          fontSize: themeConfig.typography.p1,
                          fontFamily: "Cabin",
                          marginBlockEnd: 8,
                        }}
                      >
                        Instant create & publish microsite
                      </li>
                      <li
                        style={{
                          fontSize: themeConfig.typography.p1,
                          fontFamily: "Cabin",
                        }}
                      >
                        Staff easy approval process
                      </li>
                    </Stack>
                  </PageFadeContent>
                  <PageFadeContent>
                    <Stack>
                      <Typography
                        sx={{
                          fontSize: themeConfig.typography.h3,
                          fontWeight: 600,
                          marginBlockEnd: 2,
                        }}
                      >
                        For Patient’s : Accessing microsite
                      </Typography>
                      <li
                        style={{
                          fontSize: themeConfig.typography.p1,
                          fontFamily: "Cabin",
                          marginBlockEnd: 8,
                        }}
                      >
                        Optimize microsite for all devices, favoring mobile.
                      </li>
                      <li
                        style={{
                          fontSize: themeConfig.typography.p1,
                          fontFamily: "Cabin",
                          marginBlockEnd: 8,
                        }}
                      >
                        Must be a user friendly with quick steps
                      </li>
                      <li
                        style={{
                          fontSize: themeConfig.typography.p1,
                          fontFamily: "Cabin",
                        }}
                      >
                        Design should be simple for 18-60 years age group
                      </li>
                    </Stack>
                  </PageFadeContent>
                </Stack>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Conceptualization
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    Started creating the <b>rough sketches</b> and{" "}
                    <b>4 times</b> gets <b>iterated.</b> Then, I started
                    creating the user-flow and low-fi concepts for primary use
                    cases. After having a go-ahead from the Product Lead,
                    Developers, and Stakeholders on the mockups, we began to
                    conduct usability tests internally with the low-fidelity
                    mockups. Once we had confidence in the design, we began
                    digitalizing designs.
                  </Typography>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                }}
              >
                {isTablet && <SwiperComponent />}
                {isMobile && (
                  <Stack direction={"column"}>
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
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    We made it
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    <b>- 4 iterations</b> on the Microsite Setup & Doctor
                    profile setup.
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  {" "}
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    <b>- 5 iterations</b> to finalize the web & mobile designs
                    for the patient’s microsite.
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    These iterations were directly provided by the founder,
                    product lead, business analyst, along with usability
                    testing. Finally, we have completed the Microsite.
                  </Typography>
                </PageFadeEffect>
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Final Designs
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.h3,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Microsite Creation in 3 Steps{" "}
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    Enable clinic owners to effortlessly create microsites on
                    our platform with an intuitive interface, requiring minimal
                    technical expertise. Once configured, clinic owners can
                    swiftly publish their microsites with just a few clicks,
                    simplifying accessibility.
                  </Typography>
                </PageFadeEffect>
              </Box>
              <PageFade>
                <Box
                  sx={{
                    paddingBlockStart: 4,
                  }}
                >
                  <img
                    src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/Setupmicrosite_final.png"
                    alt="microsite"
                    style={{
                      width: isMobile ? 320 : 1140,
                      height: isMobile ? 300 : 640,
                      objectFit: "contain",
                    }}
                  />
                </Box>
              </PageFade>
            </Box>
          </Box>

          <Box
            sx={{
              paddingBlockStart: 4,
              background: "#EbF8FF",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                minWidth: isTablet && 770,
                height: isMobile ? 560 : 830,
                alignItems: "center",
                paddingInline: isMobile && 2,
                // justifyContent: "center",
              }}
            >
              <PageFadeEffect>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h3,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Doctor Profile Creation & Approval Process
                </Typography>
              </PageFadeEffect>
              <PageFadeEffect>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 500,
                    marginBlockEnd: 2,
                    // textAlign: isTablet && "center",
                    maxWidth: 770,
                    lineHeight: 2,
                  }}
                >
                  Doctors can create their profiles and set their availability
                  times on the calendar system, which can sync easily to the
                  microsite. Once created, a streamlined approval process by
                  clinic owners is implemented for doctor profiles. This ensures
                  quality control and maintains the integrity of the platform.
                </Typography>
              </PageFadeEffect>
              <PageFade>
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/doctorprofilecreation_final.png"
                  alt="microsite"
                  style={{
                    width: isMobile ? 320 : 1140,
                    height: isMobile ? 200 : 640,
                    objectFit: "contain",
                  }}
                />
              </PageFade>
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
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Let’s Jump into a microsite the final solution
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                    }}
                  >
                    The microsite serves as a pivotal solution connecting
                    doctors to patients instantly, enhancing the overall
                    healthcare experience.
                  </Typography>
                </PageFadeEffect>
              </Box>
            </Typography>
            <PageFade>
              <img
                src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/micrositelanding_final.png"
                alt="creation"
                style={{
                  width: isMobile ? 320 : 1280,
                  height: isMobile ? 220 : 800,
                  objectFit: "contain",
                }}
              />
            </PageFade>
          </Box>
          <Box
            sx={{
              // maxWidth: 770,
              paddingBlockStart: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              background: "#Dff0E6",
            }}
          >
            <PageFade>
              <img
                src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/micrositeapp_final.png"
                alt="creation"
                style={{
                  width: isMobile ? 320 : 1280,
                  height: isMobile ? 220 : 640,
                  objectFit: "contain",
                }}
              />
            </PageFade>
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
                  maxWidth: 770,
                  paddingBlockStart: 4,
                  paddingInline: isMobile && 2,
                }}
              >
                <PageFadeEffect>
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
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    Our team started the handoff process, Once all preparations
                    are completed, we have scheduled meetings with Product Leads
                    and Business Analysts to recheck all aspects. Additionally,
                    we will present to the Developer, QA Testers, and Backend
                    Team. Any improvements and technical flaws noted will be
                    redesigned by our team. Finally, we will provide a design
                    handoff including assets.
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
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
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    Our team has been closely monitoring the development team to
                    ensure better quality. We've been identifying any necessary
                    improvements as the developers work. Once all processes are
                    completed, the product is deployed to the secondary testing
                    environment for further evaluation.
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: isMobile
                        ? themeConfig?.typography.h3
                        : themeConfig.typography.h2,
                      fontWeight: 600,
                      marginBlockEnd: 2,
                    }}
                  >
                    Gathering User feedback
                  </Typography>
                </PageFadeEffect>
                <PageFadeEffect>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      fontWeight: "300",
                      lineHeight: 2,
                      marginBlockEnd: 2,
                    }}
                  >
                    This action will be carried out by the Product Lead and the
                    Business Analyst. Once they have gathered client feedback,
                    we will enhance the user experience. Remember, user
                    experience is an ongoing process. Finally, the Microsite
                    feature has been launched live.
                  </Typography>
                </PageFadeEffect>
              </Box>
            </Typography>
          </Box>

          <Box
            sx={{
              // maxWidth: 770,
              paddingBlockStart: isTablet && 4,
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
                  maxWidth: 770,
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
                  Insights gained
                </Typography>
                <Stack direction={isMobile ? "column" : "row"} gap={8}>
                  <Stack>
                    {" "}
                    <img
                      src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/design_approach.svg"
                      alt="microsite"
                      style={{
                        width: isMobile ? 300 : 350,
                        height: isMobile ? 300 : 350,
                        objectFit: "contain",
                      }}
                    />
                  </Stack>
                  <Stack>
                    {" "}
                    <img
                      src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/collaboration.svg"
                      alt="microsite"
                      style={{
                        width: isMobile ? 300 : 350,
                        height: isMobile ? 300 : 350,
                        objectFit: "contain",
                      }}
                    />
                  </Stack>
                </Stack>
              </Box>
            </Typography>
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
            <Box
              sx={{
                minWidth: isTablet && 980,
              }}
            >
              <Divider />
            </Box>
            <Box
              sx={{
                maxWidth: 770,
                paddingBlockStart: 4,
                paddingInline: isMobile && 2,
              }}
            >
              <PageFadeEffect>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 400,
                    marginBlockEnd: 3,
                  }}
                >
                  This has been <b>my proudest contribution at LYFnGO.</b>{" "}
                  Couldn't have done so without the{" "}
                  <b>amazing team at LYFnGO ! Huge kudos to our heroes</b> in
                  the Development Team , our QA team, and Backend Team.
                </Typography>
              </PageFadeEffect>
              <PageFadeEffect>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 700,
                    marginBlockEnd: 3,
                  }}
                >
                  Thank you for reading through! Hope you enjoyed learning about
                  my design and thought process.
                </Typography>
              </PageFadeEffect>
            </Box>
          </Box>

          <Footer />
          <Box
            sx={{
              paddingBlockStart: 4,
              paddingInline: isMobile ? 2 : 8,
            }}
          >
            <PageFadeEffect>
              <Typography
                sx={{
                  fontSize: isMobile
                    ? themeConfig?.typography.h3
                    : themeConfig.typography.h2,
                  fontWeight: 400,
                  // marginBlockEnd: 2,
                }}
              >
                Check out my other case studies
              </Typography>
            </PageFadeEffect>
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
                    height: isMobile ? 450 : 550,
                    position: "relative",
                    cursor: "pointer",
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
                      borderRadius: 4,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, transition: ".5s ease-in-out" }}
                    >
                      <PageFade>
                        <img
                          src={item?.image}
                          alt="card_image"
                          width={isMobile ? 320 : 500}
                          height={isMobile ? 200 : 330}
                          style={{ objectFit: "contain", padding: 12 }}
                        />
                      </PageFade>
                    </motion.div>
                  </Box>
                  <Box sx={{ marginBlockStart: 4 }}>
                    <PageFadeEffect>
                      <Typography
                        sx={{
                          fontSize: themeConfig.typography.p1,
                          color: themeConfig.palette.secondaryColor,
                        }}
                      >
                        {item?.Author}
                      </Typography>
                    </PageFadeEffect>
                    <PageFadeEffect>
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
                    </PageFadeEffect>
                    <PageFadeEffect>
                      <Typography
                        onClick={() => handleClick(item)}
                        sx={{
                          fontSize: themeConfig.typography.p1,
                          color: themeConfig.palette.primaryColor,
                          display: "flex",
                          alignItems: "center",
                          gap: 1,
                          position: "absolute",
                          // bottom: isTablet && 12,
                          marginTop: isMobile ? 1 : 3,
                          "&:hover": {
                            cursor: "pointer",
                            opacity: 0.3,
                            transition: "0.3s ease-in-out",
                          },
                        }}
                      >
                        {item?.status} <TrendingFlatIcon />
                      </Typography>
                    </PageFadeEffect>
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

export default About;
