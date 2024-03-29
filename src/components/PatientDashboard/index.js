import { Box, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import DrawerAppBar from "../AppBar/index";
import { useLocation, useNavigate } from "react-router-dom";
import { themeConfig } from "../../theme/theme";
import { motion } from "framer-motion";
import Footer from "../Footer";
import PasswordPage from "../About/PasswordPage";

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

const PatientDashboard = () => {
  const location = useLocation();
  const data = location.state;
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const cardListFiltered = cardList.filter((card) => card.id !== data?.id);
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
              <img
                src={data?.image}
                alt="bannerImage"
                style={{
                  width: 1024,
                  height: 600,
                  paddingBlock: 24,
                  objectFit: "contain",
                  background: "#DEF3FF",
                  borderRadius: 6,
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ maxWidth: 840, paddingBlockStart: 4 }}>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h1,
                    fontWeight: 700,
                  }}
                >
                  {data?.title}
                </Typography>
              </Box>
              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
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
                      Sep - Oct 2023
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
              </Box>
              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  About LYFnGO
                </Typography>
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
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  My Role
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                  }}
                >
                  As a product designer, I have closely worked with the founder
                  of LYFnGO, the business analyst, and the frontend developers.
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 3,
                  }}
                >
                  Works: User Research, User Interface, Prototype & Usability
                  testing.
                </Typography>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Problem Identifications
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                  }}
                >
                  LYFnGO needs to redesign and improve patient management to be
                  more user-friendly. The existing version is complicated. Let's
                  see.
                </Typography>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Problem 1
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                  }}
                >
                  In the EMR section, the patient list displays an inconsistent
                  layout and buttons. On the patient info page, there is only
                  one option to check add, upcoming, and past appointments, and
                  to add bills and records. However, the process for adding
                  records and prescriptions is not user-friendly for immediate
                  utilization by doctors.
                </Typography>
              </Box>

              <Box
                sx={{
                  // minWidth: 970,
                  paddingBlockStart: 4,
                }}
              >
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/Problem1.png"
                  alt="Problem1"
                  style={{ width: 1024, height: 350, objectFit: "contain" }}
                />
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Stack direction={"row"} gap={4} alignItems={"center"}>
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: themeConfig.typography.p1,
                        lineHeight: 2,
                        textAlign: "center",
                      }}
                    >
                      Creating instant health records for the appointments is
                      difficult to Doctors.
                    </Typography>
                  </Stack>
                  <Stack>
                    <img
                      src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/problem1.1.png"
                      alt="Problem1"
                      style={{ width: 500, height: 240, objectFit: "contain" }}
                    />
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 1,
                  }}
                >
                  Problem 2
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    lineHeight: 2,
                  }}
                >
                  An undefined user experience often results in user
                  frustration, consequently leading to increased drop-off rates.
                  This issue is compounded by repetitive features, similar to
                  those found in another module, such as the Problem 1 &
                  Patients module, within the patient management profile, along
                  with other patient-related information.
                </Typography>
              </Box>

              <Box
                sx={{
                  // minWidth: 1020,
                  paddingBlockStart: 4,
                }}
              >
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/Problem2.png"
                  alt="Problem1"
                  style={{ width: 1024, height: 400, objectFit: "contain" }}
                />
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 1,
                  }}
                >
                  Problem 3
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    lineHeight: 2,
                  }}
                >
                  Redesign the side menu and header menu navigation. Checked on
                  all the other modules, and hospital name is not at a
                  consistent place. The 'Add Patient' button at the top right
                  corner creates user frustrations because of its dropdown. When
                  clicked, the dropdown opens with options for adding a patient
                  or an appointment.
                </Typography>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 1,
                  }}
                >
                  Business Goals
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 1,
                  }}
                >
                  Improved Efficiency
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    lineHeight: 2,
                    marginBlockEnd: 4,
                  }}
                >
                  Make clinic and hospital operations smoother, reducing wait
                  times and increasing revenue.
                </Typography>

                <Typography sx={{ fontSize: themeConfig.typography.h2 }}>
                  Enhanced User Adoption
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    lineHeight: 2,
                    marginBlockEnd: 4,
                  }}
                >
                  Ensure healthcare professionals perceive the platform as
                  user-friendly, fostering customer retention
                </Typography>

                <Typography sx={{ fontSize: themeConfig.typography.h2 }}>
                  Stand Out
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    lineHeight: 2,
                  }}
                >
                  Stand out in the Healthtech industry by offering a patient
                  management solution that not only meets but exceeds the
                  expectations of clinics and hospitals, thereby attracting more
                  clients and establishing LYFnGO as a leader in the field.
                </Typography>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 1,
                  }}
                >
                  User Goals
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    marginBlockEnd: 1,
                  }}
                >
                  Simplified Workflow
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 400,
                    lineHeight: 2,
                    marginBlockEnd: 4,
                  }}
                >
                  Enable healthcare professionals to easily manage patient
                  information, appointments, records, and prescriptions without
                  encountering unnecessary complexity or redundancy in the user
                  interface.
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    marginBlockEnd: 1,
                  }}
                >
                  Efficient Patient Care
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 400,
                    lineHeight: 2,
                    marginBlockEnd: 4,
                  }}
                >
                  Facilitate quick access to patient records, history, and
                  treatment plans, allowing doctors to make informed decisions
                  and provide high-quality care during appointments.
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    marginBlockEnd: 1,
                  }}
                >
                  Impacts
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 400,
                    lineHeight: 2,
                  }}
                >
                  LYFnGO, an <b>Asian startup,</b> delivers <b>SaaS</b>{" "}
                  solutions for <b>health and wellness.</b> Their{" "}
                  <b>Clinic, Wellness, and Fitness management software</b>
                  optimize productivity, finances, and client experience. With
                  user-friendly interfaces, LYFnGO simplifies operations,
                  fostering better outcomes for businesses and clients alike.
                </Typography>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  marginBlockStart: 4,
                }}
              >
                <Stack
                  direction={"row"}
                  // gap={8}
                  alignItems={"center"}
                >
                  <Stack>
                    <img
                      src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/Impacts1.png"
                      alt="Impacts1"
                      style={{ height: 450, width: 600, objectFit: "contain" }}
                    />
                  </Stack>
                  <Stack>
                    <Typography
                      color={themeConfig.palette.secondaryColor}
                      sx={{
                        fontSize: themeConfig.typography.p1,
                      }}
                    >
                      MONITERED CLIENT
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: themeConfig.typography.p1,
                        fontWeight: 400,
                        lineHeight: 2,
                      }}
                    >
                      <b>95%</b> of the specialists are using the{" "}
                      <b>Quick Search</b> to view patient profile
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: themeConfig.typography.p1,
                        fontWeight: 400,
                        lineHeight: 2,
                      }}
                    >
                      <b>80%</b>of the specialists using <b>Quick Addons</b>
                    </Typography>
                  </Stack>
                </Stack>
                <Stack
                  direction={"row-reverse"}
                  // gap={8}
                  alignItems={"center"}
                >
                  <Stack>
                    <img
                      src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/Impact2.png"
                      alt="Impacts1"
                      style={{ height: 450, width: 600, objectFit: "contain" }}
                    />
                  </Stack>
                  <Stack>
                    <Typography
                      sx={{
                        fontSize: themeConfig.typography.p1,
                        fontWeight: 400,
                        lineHeight: 2,
                      }}
                    >
                      <b>100%</b> of our clients use the newly clubbed side menu
                      Because, All the patient records in one page
                    </Typography>
                  </Stack>
                </Stack>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    lineHeight: 2,
                  }}
                >
                  Challenge Faced
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 400,
                    lineHeight: 2,
                    marginBlockEnd: 4,
                  }}
                >
                  The main challenge I faced is that our platform is not
                  exclusively focused on the healthcare sector. We also provide
                  solutions to fitness and wellness providers. Therefore, the
                  patient management system needs to work for client management
                  as well, with some modifications. For example, in client
                  management, we may need to reduce the focus on prescriptions
                  and instead include features such as workout plans and diet
                  plans.
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    lineHeight: 2,
                  }}
                >
                  User Research
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 400,
                    lineHeight: 2,
                    marginBlockEnd: 4,
                  }}
                >
                  Think of it like this - we're focusing on the most important
                  questions and goals. We want to get insights that we can act
                  on quickly. So, we're going to keep things simple and
                  straightforward. That means our business analyst made a quick
                  meet with our existing clients, competitor analysis & chatting
                  with our own team members to gather valuable feedback.
                </Typography>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Insights Gathered
                </Typography>
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/usability1.svg"
                  style={{ height: 50, width: 50 }}
                  alt="usability1"
                />
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                    marginBlockEnd: 4,
                  }}
                >
                  Understanding the current <b>workflow challenges</b> faced by
                  healthcare professionals, such as inefficient appointment
                  scheduling processes, difficulty accessing patient records, or
                  impractical prescription management systems.
                </Typography>

                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/Frame.svg"
                  style={{ height: 50, width: 50 }}
                  alt="usability1"
                />
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                    marginBlockEnd: 4,
                  }}
                >
                  Uncovering <b>usability issues</b> and pain points in the
                  existing patient management system, such as confusing
                  navigation, unclear labeling, or time-consuming data entry
                  tasks. These insights can inform improvements to the user
                  interface and overall user experience.
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                  }}
                >
                  After analyzing all the data from the design process above, I
                  started working on the final designs.
                </Typography>
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Sketches
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                  }}
                >
                  I sketched multiple user flows to visualize ideas quickly. My
                  focus at this stage is to diverge first, converge later. Here
                  are some sketches for patient management
                </Typography>

                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/Sketches.png"
                  style={{ height: 370, width: 770 }}
                  alt="Sketches"
                />
              </Box>

              <Box
                sx={{
                  maxWidth: 840,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Final Designs
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h3,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Patient List
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    marginBlockEnd: 2,
                  }}
                >
                  Most important thing for healthcare industry is managing
                  customer health data and the easy finding interact with
                  instant needs. so i have modified changes and verified with
                  our team.
                </Typography>
              </Box>

              <Box
                sx={{
                  paddingBlockStart: 4,
                }}
              >
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/0.png"
                  style={{ height: 600, width: 1400, objectFit: "contain" }}
                  alt="lyfngo_patientmanagement"
                />
              </Box>

              <Box>
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/1.png"
                  style={{ height: 640, width: 1380, objectFit: "contain" }}
                  alt="lyfngo_patientmanagement"
                />
              </Box>

              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Patient Infromation
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: 400,
                    marginBlockEnd: 2,
                  }}
                >
                  For patient management done many research and got many
                  insights along with that, i have notes down the changes for a
                  user friendly view & navigation to the doctor. I showed below
                  only the appointment. For all the menu i have done with
                  research.
                </Typography>
              </Box>

              <Box>
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/3.png"
                  style={{ width: 1080, objectFit: "contain" }}
                  alt="lyfngo_patientmanagement"
                />
              </Box>

              <Box>
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/lyfngo_patientmanagement/4.png"
                  style={{ width: 1350, objectFit: "contain" }}
                  alt="lyfngo_patientmanagement"
                />
              </Box>
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
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              <Box
                sx={{
                  maxWidth: 770,
                  paddingBlockStart: 4,
                }}
              >
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Design Handoff
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                    marginBlockEnd: 2,
                  }}
                >
                  <b>Preparation</b> - Ensure all necessary preparations are
                  completed before starting the handoff process.
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                    marginBlockEnd: 2,
                  }}
                >
                  <b>Meetings</b> - Schedule meetings with Product Leads and
                  Business Analysts to review and double-check everything.
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                    marginBlockEnd: 2,
                  }}
                >
                  <b>Presentation</b> - Present designs to Developers, QA
                  Testers, and Backend Team for review and feedback.
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                    marginBlockEnd: 2,
                  }}
                >
                  <b>Feedback and Redesign</b> - Note any improvements or
                  technical flaws identified by the team and redesign as needed.
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                    marginBlockEnd: 2,
                  }}
                >
                  <b>Handoff</b> - Provide assets and proper prototypes to the
                  development team for implementation.
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  After Done Design Handoff
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 2,
                    marginBlockEnd: 2,
                  }}
                >
                  Our team has been <b>closely monitoring</b> the development
                  team to ensure <b>better quality.</b> We've been identifying
                  any necessary improvements as the developers work. Once all
                  processes are completed, the product is deployed to the{" "}
                  <b>secondary testing environment</b> for further evaluation.
                </Typography>

                <Typography
                  sx={{
                    fontSize: themeConfig.typography.h2,
                    fontWeight: 600,
                    marginBlockEnd: 2,
                  }}
                >
                  Insights Gained
                </Typography>
                <Typography
                  sx={{
                    fontSize: themeConfig.typography.p1,
                    fontWeight: "300",
                    lineHeight: 3,
                  }}
                >
                  Iterative design approach and collaboration with
                  cross-functional teams led to continuous improvement. Enhanced
                  user experience and alignment with business objectives were
                  key outcomes of the redesign.
                </Typography>
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
                maxWidth: 770,
                paddingBlockStart: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: themeConfig.typography.h2,
                  fontWeight: 600,
                  marginBlockEnd: 2,
                }}
              >
                Conclusion
              </Typography>

              <Typography
                sx={{
                  fontSize: themeConfig.typography.p1,
                  lineHeight: 2,
                  marginBlockEnd: 2,
                }}
              >
                The redesign of LYFnGO's patient management system has been a
                significant milestone, showcasing the effectiveness of
                collaborative efforts and user-centric design principles. The
                improved efficiency and user adoption highlight the success of
                the project, positioning LYFnGO as a leader in the Healthtech
                industry.
              </Typography>
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
            {/* <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            > */}
            <Box
              sx={{
                minWidth: 980,
              }}
            >
              <Divider />
            </Box>
            <Box
              sx={{
                maxWidth: 840,
                paddingBlockStart: 4,
              }}
            >
              <Typography
                sx={{
                  fontSize: themeConfig.typography.p1,
                  fontWeight: 600,
                  marginBlockEnd: 2,
                  textAlign: "center",
                }}
              >
                Thank you for reading through! Hope you enjoyed learning about
                my design and thought process.
              </Typography>
            </Box>
            {/* </Typography> */}
          </Box>
          <Footer />

          <Box
            sx={{
              paddingBlockStart: 4,
              paddingInline: 8,
            }}
          >
            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 400,
                marginBlockEnd: 2,
              }}
            >
              Check out my other case studies
            </Typography>

            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: 4,
                rowGap: 4,
                marginBlock: 6,
              }}
            >
              {cardListFiltered.map((item, index) => (
                <Box
                  sx={{
                    // width: 500,
                    height: 550,
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
                      borderRadius: 4,
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
                        width={500}
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
                        fontWeight: 700,
                        maxWidth: 550,
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
          </Box>
        </>
      )}
    </>
  );
};

export default PatientDashboard;
