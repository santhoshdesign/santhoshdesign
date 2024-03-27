import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import DrawerAppBar from "../AppBar/index";
import { useLocation } from "react-router-dom";
import { themeConfig } from "../../theme/theme";
import SwiperComponent from "./Swiper";
import Footer from "../Footer";

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
              <Stack sx={{ width: 180 }} gap={1}>
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
              I lead the design team as the product designer, with{" "}
              <a
                style={{
                  color: themeConfig.palette.primaryColor,
                  fontWeight: 600,
                }}
                href="https://www.linkedin.com/in/praveenkumardesigner/"
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
              all actively involved throughout the implementation process of
              this feature in our product, LYFnGO.
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 3,
              }}
            >
              Works: User & Health data research, Wireframe, Prototypes &
              Usability testing.
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
              Problem Statement
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              Managing and monitoring precious customer health data, including
              vital metrics such as sugar levels, blood glucose, heart rate, and
              calories burned and gained, presents significant challenges for
              hospitals and nutrition centers, especially for high-risk
              individuals in the healthcare industry. This requires the
              allocation of specific specialists and nurses for validation and
              monitoring, leading to increased healthcare management costs and
              causing worry for customers when they are outside hospital
              facility.
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
              Solution Overview
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              To address these challenges, LYFnGO <b>partnered</b> with
              <b>Spike,</b> a B2B Generative AI and Data tech startup for the
              <b> Digital Health industry.</b> Spike provides health and fitness
              data interpretation-as-a-service on top of user-generated data
              from
              <b>Wearables</b> and IoT devices.
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
                "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/Solution_overview.png"
              }
              style={{ width: 770, height: 370, objectFit: "contain" }}
              alt="bannerImage"
            />
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
              How did I research to collect health data?
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              To gather health data, I followed a structured approach.
              Initially, I reviewed the spike shared by our founder and product
              lead collaborating closely with the design team and business
              analysts. <b>My first step</b> involved collecting{" "}
              <b>health data metrics</b> in line with healthcare{" "}
              <b>industry standards.</b> For nutrition centers, I tailored the
              data collection process to meet their specific requirements,
              confirming its importance to customer needs.
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
                "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/research_healthdata.png"
              }
              style={{ width: 770, height: 370, objectFit: "contain" }}
              alt="bannerImage"
            />
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockStart: 4,
              }}
            >
              After gathering the data, I <b>carefully cross-checked</b> it
              against the metrics outlined in the spike to ensure alignment.
              Afterwards, I validated our findings across supported platforms
              and engaged in discussions with the business analysts and product
              lead to confirm the <b>accuracy</b> and relevance of the collected
              data. Additionally, to ensure the strength of our data, we looked
              for validation from <b>healthcare industry experts,</b>{" "}
              incorporating their feedback into our process.
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
              Challenges Faced
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              How can we share health data with selective specialists?
            </Typography>
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
            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              How can customers integrate with wearables?
            </Typography>
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
              <b>user-friendly interface</b> that allows users to effortlessly{" "}
              <b>connect</b> their wearable devices to our platform, ensuring a
              smooth flow of data for personalized health insights.
            </Typography>

            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              Decision Point
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockEnd: 2,
              }}
            >
              Our team and business analysts verified all the gathered data and
              insights and created the use cases and discussed with the product
              lead and the stakeholders.
            </Typography>

            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              How spike connects with LYFnGO to Healthcare providers?
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockEnd: 2,
              }}
            >
              In the <b>LYFnGO B2C application,</b> users can easily integrate
              their wearable devices, including well-known brands like Apple
              HealthKit, Fitbit, Google Fit, Garmin, Samsung Health, Bio Starp,
              and more.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 880,
              paddingBlockStart: 4,
            }}
          >
            <img
              src={
                "https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/Lyfngo_to_healthcareproviders.png"
              }
              style={{ width: 880, height: 320, objectFit: "contain" }}
              alt="bannerImage"
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
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockEnd: 2,
              }}
            >
              Customers have the flexibility to control which health data they
              share and which they keep private. They can also set a{" "}
              <b>validity period for sharing</b> their health data and{" "}
              <b>choose</b> specific doctors or specialists who are authorized
              to monitor and validate their information.
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockEnd: 2,
              }}
            >
              This feature allows for <b>greater privacy</b> and{" "}
              <b>security,</b> giving users peace of mind while still allowing
              them to benefit from monitoring their health with wearable
              devices.
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
              Collaborated with LYFnGO Developers
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              After finalizing the use cases, I engaged with the LYFnGO Python
              and React JS teams to discuss the health data we are obtaining,
              ensuring that their functionality was thoroughly tested. We also
              exchanged researched health data that could potentially be
              integrated into the <b>first MVP</b> for this feature.
              Additionally, I communicated with the business analysts to gather
              feedback and ensure alignment with <b>project goals.</b>
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
              Research Methodologies
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              The research methodologies that I followed included the design
              team and business analysts conducting <b>competitor analysis</b>{" "}
              for <b>B2C wearable integration,</b> along with spike guidelines
              and their client applications. For the <b>B2B client profile,</b>{" "}
              I conducted a small research on all wearable health data
              providers, including well known brands like Apple HealthKit,
              Fitbit, Google Fit, Garmin, Samsung Health, Biostrap, and more.
              This research focused on <b>analyzing health data graphs,</b> how
              they showcased health data to end customers, and an analysis of
              key features along with user feedback.
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
              From Paper to Perfected: Design Iteration Journey
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              We began with paper wireframes, <b>facilitating</b> iterative
              discussions with stakeholders to refine the design. Through{" "}
              <b>three iterations</b> on the B2C application for wearable
              integration and two iterations on the Client Profile Health Board
              for web design, we finalized the designs based on feedback and
              usability testing.
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginTop: 4,
              }}
            >
              Finally, after the wireframe iteration, we finalized the paper
              wireframes.
            </Typography>
          </Box>

          <Box
            sx={{
              maxWidth: 900,
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
              Design Iterations
            </Typography>
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
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              <b>- 2 iterations</b> on the Client Profile Health Board : Web
              Design
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
              have completed the Wearable Integration and the Healthboard.
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
              Customer Wearable Integration
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
              }}
            >
              High-risk patients or nutritionist clients can easily connect
              their wearable devices through the LYFnGO B2C Application. The
              process involves quick and straightforward steps, allowing
              customers to instantly connect their devices. They can select the
              duration of time for data sharing and even choose which custom
              health data to share and with which doctors/specialists.
            </Typography>
          </Box>
          <Box
            sx={{
              maxWidth: 990,
              paddingBlockStart: 4,
            }}
          >
            <img
              src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/Customer_wearable_integration.png"
              alt="Customer_wearable_integration"
              style={{ width: 990, height: 640, objectFit: "contain" }}
            />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          paddingBlockStart: 4,
          background: "#FFF6F8",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            // maxWidth: 770,
            // height: 940,
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
            Business Healthboard
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
            Once the customer has provided access to share their health data, it
            will be displayed as shown in the images below. This view allows
            doctors and nutritionists to track progress easily without
            hesitation.
          </Typography>
          <img
            src="https://ik.imagekit.io/ht9dvktzw/Portfolio/Healthboard/Buisness_healthboard.png"
            alt="Buisness_healthboard"
            style={{ width: 1185, height: 900, objectFit: "contain" }}
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
              Our team started the handoff process, Once all <b>preparations</b>{" "}
              are completed, we have <b>scheduled meetings</b> with Product
              Leads and Business Analysts to recheck all aspects. Additionally,
              we will present to the Developer, QA Testers, and Backend Team.
              Any
              <b>improvements</b> and <b>technical flaws</b> noted will be
              redesigned by our team. Finally, we will provide a design handoff
              including assets.
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
              Our team has been <b>closely monitoring</b> the development team
              to ensure better <b>quality.</b> We've been identifying any
              necessary improvements as the developers work. Once all processes
              are completed, the product is deployed to the{" "}
              <b>secondary testing environment</b> for further evaluation.
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockEnd: 2,
              }}
            >
              Finally, with the permission of CEO we have launched the Wearable
              Integration & Healthboard.
            </Typography>

            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              Impacts
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockEnd: 2,
              }}
            >
              Our CEO and the marketing teams showcased this new feature to our
              clients and new leads. In the healthcare industry, our CEO pitched
              the feature and received <b>98% positive feedback.</b> By
              introducing Wearable Integrations and Healthboard, we boosted our
              sales by <b>10x.</b>
            </Typography>

            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              Reflection and Learning
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockEnd: 2,
              }}
            >
              This project provided valuable insights into the importance of
              collaboration and iterative design. It showcased our ability to
              adapt to <b>new technologies</b> and deliver impactful solutions
              to complex problems.
            </Typography>

            <Typography
              sx={{
                fontSize: themeConfig.typography.h2,
                fontWeight: 600,
                marginBlockEnd: 2,
              }}
            >
              Insights
            </Typography>
            <Typography
              sx={{
                fontSize: themeConfig.typography.p1,
                fontWeight: "300",
                lineHeight: 2,
                marginBlockEnd: 2,
              }}
            >
              This project was a different approach for me, as we{" "}
              <b>started from scratch</b> and collaborated with all the teams,
              making impactful decisions along the way.
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
