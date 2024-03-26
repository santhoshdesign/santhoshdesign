import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "../AppBar/index";
import { useLocation } from "react-router-dom";
import { themeConfig } from "../../theme/theme";
import SwiperComponent from "./Swiper";
import Footer from "../Footer";

const doctorGoals = [
  {
    id: 0,
    content: "Improve appointment scheduling efficiency",
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/1.svg",
  },
  {
    id: 1,
    content: "Enhance patient experience",
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/2.svg",
  },
  {
    id: 2,
    content: "Optimize staff productivity",
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/3.svg",
  },
  {
    id: 3,
    content: "Strengthen clinic quality of service",
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/4.svg",
  },
];

const patientGoals = [
  {
    id: 0,
    content: "Check the availability of clinic and doctor",
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/5.svg",
  },
  {
    id: 1,
    content: "Book appointments easier and faster",
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/6.svg",
  },
  {
    id: 2,
    content: "Reduce waiting times for patients",
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/7.svg",
  },
  {
    id: 3,
    content: "Maintain a good reputation for the clinic",
    image: "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/8.svg",
  },
];

const Healthboard = () => {
  const location = useLocation();
  const data = location.state;
  console.log("dsta", data);
  return (
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
              width: 900,
              height: 450,
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
          <Box sx={{ maxWidth: 730, paddingBlockStart: 4 }}>
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
              maxWidth: 730,
              paddingBlockStart: 4,
            }}
          >
            <Stack direction={"row"}>
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
              <Stack sx={{ width: 180 }} gap={1}>
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
              <Stack sx={{ width: 150 }} gap={1}>
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
              maxWidth: 730,
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
              LYFnGO, an Asian <b>startup</b>, delivers <b>SaaS</b> solutions
              for <b>health and wellness.</b> Their{" "}
              <b>Clinic, Wellness, and Fitness management software</b> optimize
              productivity, finances, and client experience. With user-friendly
              interfaces, LYFnGO simplifies operations, fostering better
              outcomes for businesses and clients alike.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 730,
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
              As a Product Designer, I have taken the lead for the design team.
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
              Business Analyst, and the founder of LYFnGO have been involved
              throughout the implementation process of this feature in our
              product.
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 3,
              }}
            >
              Works: Research plan, wireframe, prototyping, Interaction design.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 730,
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
              Real Problem
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 3,
              }}
            >
              Our team identified this problem while the doctor managed the
              clinic.
            </Typography>
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
              multiple tasks simultaneously, and patients had to wait longer or
              have hurried <b>appointments.</b> Things needed to change to bring
              order back to the <b>confusion.</b>
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 730,
              paddingBlockStart: 4,
            }}
          >
            <img
              src={
                "https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/problem.png"
              }
              alt="bannerImage"
            />
            <Typography
              sx={{
                fontSize: themeConfig.typography.h3,
                textAlign: "center",
                fontWeight: 600,
                paddingBlockStart: 4,
                fontStyle: "italic",
              }}
            >
              Disorganized appointment scheduling leads to
              <br /> longer waits and rushed appointments in the clinic.
            </Typography>
          </Box>

          <Box
            sx={{
              minWidth: 730,
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
              Goals
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              Goals that our team considered to create a microsite feature.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 730,
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
              Doctor’s Goals
            </Typography>
            <Stack direction={"row"} gap={4}>
              {doctorGoals.map((item) => (
                <Stack gap={3}>
                  <img
                    src={item?.image}
                    alt={item?.id}
                    style={{ height: 60, width: 60 }}
                  />
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      lineHeight: 2,
                      fontWeight: 400,
                    }}
                  >
                    {item?.content}
                  </Typography>
                </Stack>
              ))}
            </Stack>
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
                marginBlockEnd: 1,
              }}
            >
              Patient’s Goals
            </Typography>
            <Stack direction={"row"} gap={4}>
              {patientGoals.map((item) => (
                <Stack gap={3}>
                  <img
                    src={item?.image}
                    alt={item?.id}
                    style={{ height: 60, width: 60 }}
                  />
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.p1,
                      lineHeight: 2,
                      fontWeight: 400,
                    }}
                  >
                    {item?.content}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box
            sx={{
              minWidth: 770,
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
              Impacts
            </Typography>
            <Stack direction={"row"} gap={2} alignItems={"center"}>
              <Stack>
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/LYFnGO_Logo.svg"
                  alt="lyfngo"
                />
              </Stack>
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
          </Box>

          <Box
            sx={{
              minWidth: 770,
              paddingBlockStart: 4,
            }}
          >
            <Stack direction={"row"} gap={2} alignItems={"center"}>
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
                      fontSize: themeConfig.typography.h2,
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
                    <b>Patient retention</b> has increased, and doctors are
                    really happy with our microsite.
                  </Typography>
                </Stack>

                <Stack direction={"row"} alignItems={"center"} gap={2}>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.h2,
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
                    We've increased the Clinic team's <b>efficiency</b> and{" "}
                    <b>revenue</b> with LYFnGO.
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              maxWidth: 770,
              paddingBlockStart: 4,
            }}
          >
            <Typography
              sx={{ fontSize: themeConfig.typography.h2, textAlign: "center" }}
            >
              Patients engagements
            </Typography>
          </Box>

          <Box
            sx={{
              minWidth: 770,
              paddingBlockStart: 4,
            }}
          >
            <Stack direction={"row"} gap={2} alignItems={"center"}>
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
                      fontSize: themeConfig.typography.h2,
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
                    of the patients using the microsite via <b>mobile,</b> we've
                    seen excellent performance.
                  </Typography>
                </Stack>

                <Stack direction={"row"} alignItems={"center"} gap={2}>
                  <Typography
                    sx={{
                      fontSize: themeConfig.typography.h2,
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
          </Box>

          <Box
            sx={{
              maxWidth: 770,
              paddingBlockStart: 4,
            }}
          >
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                lineHeight: 2,
              }}
            >
              Now, many clients, not only on the clinic side but also{" "}
              <b>therapy centers</b> and <b>wellness centers,</b> are asking for
              the microsite for their business needs.
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.h3,
                lineHeight: 3,
                fontWeight: 600,
              }}
            >
              Boosted LYFnGO sales 10x with a microsite!
            </Typography>
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
              Design Process
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              We conducted our <b>daily meetings</b> to facilitate collaboration
              across departments. Along with the product lead, business analyst,
              and sometimes the founders and co-founders, we <b>contributed</b>{" "}
              fresh ideas to the discussion. The <b>purpose</b> of these daily
              meetings is to align everyone toward the same goal: improving our
              client experience by solving <b>users' problems.</b>
            </Typography>
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
              Competitor analysis
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              Our team, including the Product Lead, Business Analyst, and
              Founder, conducted a thorough analysis of industry competitors.
              While I'm unable to disclose specific details due to
              non-disclosure agreements, this analysis helped us gain valuable
              insights.
            </Typography>
          </Box>

          <Box
            sx={{
              minWidth: 770,
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
              Insights gained while analysis
            </Typography>
            <Stack direction={"row"} gap={6}>
              <Stack>
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/insights1.png"
                  style={{ width: 350, height: 150 }}
                  alt="insights1"
                />
              </Stack>
              <Stack>
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/insights2.png"
                  style={{ width: 350, height: 150 }}
                  alt="insights2"
                />
              </Stack>
            </Stack>
          </Box>

          <Box
            sx={{
              minWidth: 770,
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
              Initial UX Challenge
            </Typography>
            <Stack direction={"row"} gap={18}>
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
            </Stack>
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
              Conceptualization
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              Started creating the <b>rough sketches</b> and <b>4 times</b> gets{" "}
              <b>iterated.</b> Then, I started creating the user-flow and low-fi
              concepts for primary use cases. After having a go-ahead from the
              Product Lead, Developers, and Stakeholders on the mockups, we
              began to conduct usability tests internally with the low-fidelity
              mockups. Once we had confidence in the design, we began
              digitalizing designs.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 770,
              paddingBlockStart: 4,
            }}
          >
            <SwiperComponent />
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
              We made it
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              <b>- 4 iterations</b> on the Microsite Setup & Doctor profile
              setup.
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              <b>- 5 iterations</b> to finalize the web & mobile designs for the
              patient’s microsite.
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              These iterations were directly provided by the founder, product
              lead, business analyst, along with usability testing. Finally, we
              have completed the Microsite.
            </Typography>
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
              Final Designs
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              Microsite Creation in 3 Steps{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              Enable clinic owners to effortlessly create microsites on our
              platform with an intuitive interface, requiring minimal technical
              expertise. Once configured, clinic owners can swiftly publish
              their microsites with just a few clicks, simplifying
              accessibility.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: 770,
              paddingBlockStart: 4,
            }}
          >
            <img
              src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/Setupmicrosite_final.png"
              alt="microsite"
              style={{ width: 800, height: 640, objectFit: "contain" }}
            />
          </Box>
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
            // maxWidth: 770,
            height: 850,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: themeConfig.typography.h3,
              fontWeight: 600,
              marginBlockEnd: 2,
            }}
          >
            Doctor Profile Creation & Approval Process
          </Typography>
          <Typography
            sx={{
              fontSize: themeConfig.typography.p1,
              fontWeight: 500,
              marginBlockEnd: 2,
              textAlign: "center",
              maxWidth: 770,
              lineHeight: 2,
            }}
          >
            Doctors can create their profiles and set their availability times
            on the calendar system, which can sync easily to the microsite. Once
            created, a streamlined approval process by clinic owners is
            implemented for doctor profiles. This ensures quality control and
            maintains the integrity of the platform.
          </Typography>
          <img
            src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/doctorprofilecreation_final.png"
            alt="microsite"
            style={{ width: 800, height: 640, objectFit: "contain" }}
          />
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
              Let’s Jump into a microsite the final solution
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              The microsite serves as a pivotal solution connecting doctors to
              patients instantly, enhancing the overall healthcare experience.
            </Typography>
          </Box>
        </Typography>
        <img
          src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/micrositelanding_final.png"
          alt="creation"
          style={{ width: 1280, height: 800, objectFit: "contain" }}
        />
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
        <img
          src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/micrositeapp_final.png"
          alt="creation"
          style={{ width: 1280, height: 800, objectFit: "contain" }}
        />
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
              Our team started the handoff process, Once all preparations are
              completed, we have scheduled meetings with Product Leads and
              Business Analysts to recheck all aspects. Additionally, we will
              present to the Developer, QA Testers, and Backend Team. Any
              improvements and technical flaws noted will be redesigned by our
              team. Finally, we will provide a design handoff including assets.
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
              Our team has been closely monitoring the development team to
              ensure better quality. We've been identifying any necessary
              improvements as the developers work. Once all processes are
              completed, the product is deployed to the secondary testing
              environment for further evaluation.
            </Typography>

            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              Gathering User feedback
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockEnd: 2,
              }}
            >
              This action will be carried out by the Product Lead and the
              Business Analyst. Once they have gathered client feedback, we will
              enhance the user experience. Remember, user experience is an
              ongoing process. Finally, the Microsite feature has been launched
              live.
            </Typography>
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
              Insights gained
            </Typography>
            <Stack direction={"row"} gap={8}>
              <Stack>
                {" "}
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/design_approach.svg"
                  alt="microsite"
                  style={{ width: 350, height: 350, objectFit: "contain" }}
                />
              </Stack>
              <Stack>
                {" "}
                <img
                  src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Microsite/collaboration.svg"
                  alt="microsite"
                  style={{ width: 350, height: 350, objectFit: "contain" }}
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
                fontSize: themeConfig.typography.p1,
                fontWeight: 400,
                marginBlockEnd: 2,
              }}
            >
              This has been <b>my proudest contribution at LYFnGO.</b> Couldn't
              have done so without the{" "}
              <b>amazing team at LYFnGO ! Huge kudos to our heroes</b> in the
              Development Team , our QA team, and Backend Team.
            </Typography>

            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: 700,
                marginBlockEnd: 2,
              }}
            >
              Thank you for reading through! Hope you enjoyed learning about my
              design and thought process.
            </Typography>
          </Box>
        </Typography>
      </Box>

      <Footer />
    </>
  );
};

export default Healthboard;