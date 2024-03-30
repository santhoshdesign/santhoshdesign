import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { themeConfig } from "../../theme/theme";
import { useLocation, useNavigate } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/system";

const drawerWidth = 240;
const navItems = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "About", path: "/about" },
  { id: 2, title: "Get my CV", path: "/get-cv" }, // Assuming "/get-cv" is the path for the CV page
];

function DrawerAppBar(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.up("sm"));
  const { window } = props;
  const navigate = useNavigate();
  const location = useLocation();
  const [isActiveTab, setIsActiveTab] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  console.log(isActiveTab);

  const handleNavigate = (data) => {
    if (data?.id === 0) {
      navigate("/", { state: data });
    } else if (data?.id === 1) {
      navigate("/about", { state: data });
    }
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const isActive = (path) => {
    console.log(location.pathname === path);
    setIsActiveTab(location.pathname === path?.path);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      {/* <svg
        onClick={() => navigate("/")}
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="47"
        viewBox="0 0 48 47"
        fill="none"
      >
        <path
          d="M10.5117 32.6524C9.7922 33.0879 5.97817 35.0444 5.11651 35.3559C4.50198 35.5797 3.83486 35.5252 3.4427 34.3882C2.96092 32.9821 3.63723 32.6495 4.60079 32.2836C5.45317 31.96 8.98923 30.7082 9.81067 30.4904C10.3882 30.3393 10.7896 30.5297 11.0676 31.2101C11.3733 31.9569 11.1633 32.2563 10.5117 32.6524Z"
          fill="#4169E1"
        />
        <path
          d="M7.36779 24.7268C6.34245 24.7539 2.08376 24.5756 1.11101 24.4818C0.264823 24.4002 -0.0779266 24.0343 0.0146984 22.8338C0.113511 21.5456 0.626136 21.4671 1.45695 21.5456C2.42051 21.6363 6.88301 22.3469 7.59336 22.5616C8.32836 22.7854 8.43026 23.112 8.34073 23.741C8.22636 24.5575 7.84957 24.7117 7.36779 24.7268Z"
          fill="#4169E1"
        />
        <path
          d="M7.89594 16.284C6.72238 15.9211 3.23881 13.8558 2.33094 13.3235C1.5095 12.8397 1.4045 12.4043 1.97581 11.3428C2.48225 10.4054 3.04438 10.2421 3.87819 10.6655C4.84485 11.1583 8.25735 13.7589 8.909 14.273C9.539 14.7689 9.45256 15.0259 9.1221 15.664C8.79153 16.3022 8.48272 16.4655 7.89594 16.284Z"
          fill="#4169E1"
        />
        <path
          d="M36.9619 15.8389H40.523C42.4123 15.8389 43.9431 14.3395 43.9431 12.49C43.9431 10.6405 42.4123 9.14111 40.523 9.14111H36.9619V15.8389Z"
          fill="#4169E1"
        />
        <path
          d="M19.417 30.1967H22.9785V36.8944H19.417C14.9631 36.8944 15.1587 30.1967 19.417 30.1967Z"
          fill="#4169E1"
        />
        <path
          d="M43.9384 28.2856C43.9138 32.6928 39.744 36.8945 35.1569 36.8945H25.6717V30.1967H35.1801C37.4931 30.1963 37.5122 26.3656 35.1569 26.3656C35.1569 26.3656 24.8016 26.3656 24.8007 26.3656C19.7758 26.3656 15.5047 21.8571 16.0465 16.8972C16.5103 12.6512 20.4284 9.13892 24.8007 9.13892H34.2722V15.8367C34.2722 15.8367 24.7706 15.8367 24.7637 15.8367C22.3154 15.8367 22.3897 19.6678 24.8007 19.6678H35.1569C39.64 19.6678 43.9626 23.9504 43.9384 28.2856Z"
          fill="#4169E1"
        />
      </svg> */}
      {/* <Divider /> */}
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              onClick={() => {
                handleNavigate(item);
                isActive(item.path);
              }}
              href={
                item?.id === 2 &&
                "https://drive.google.com/file/d/1YujcuAg1XW3oMvKMmzT8RvjwMHPX-0pW/view?usp=sharing"
              }
              target="_blank"
              sx={{
                textAlign: "center",
                color: isActiveTab ? "red" : themeConfig.palette.primaryColor,
                textTransform: "capitalize",
                "& span": {
                  fontSize: themeConfig.typography.p1,
                  fontWeight: 600,
                },
              }}
            >
              <ListItemText primary={item?.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <Button
          component="a"
          href="mailto:hi@santhosh.design"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            background: themeConfig.palette.ternaryColor,
            color: themeConfig.palette.whiteColor,
            borderRadius: 100,
            height: 40,
            width: 130,
            textTransform: "lowercase",
            fontSize: themeConfig.typography.p1,
            "&:hover": {
              background: themeConfig.palette.ternaryColor,
              color: themeConfig.palette.whiteColor,
            },
          }}
        >
          Email me
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.50) 0%, rgba(248, 248, 248, 0.50) 100%)",
          boxShadow: "none",
          fontFamily: "Cabin",
          backdropFilter: "blur(2px)",
          paddingInline: isTablet && 6,
        }}
      >
        <Toolbar
          sx={{
            display: isMobile && "flex",
            flexDirection: isMobile && "row-reverse",
            justifyContent: isMobile && "space-between",
            alignItems: isMobile && "center",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: themeConfig.palette.primaryColor }} />
          </IconButton>
          {isMobile && (
            <Box>
              <svg
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/")}
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="47"
                viewBox="0 0 48 47"
                fill="none"
              >
                <path
                  d="M10.5117 32.6524C9.7922 33.0879 5.97817 35.0444 5.11651 35.3559C4.50198 35.5797 3.83486 35.5252 3.4427 34.3882C2.96092 32.9821 3.63723 32.6495 4.60079 32.2836C5.45317 31.96 8.98923 30.7082 9.81067 30.4904C10.3882 30.3393 10.7896 30.5297 11.0676 31.2101C11.3733 31.9569 11.1633 32.2563 10.5117 32.6524Z"
                  fill="#4169E1"
                />
                <path
                  d="M7.36779 24.7268C6.34245 24.7539 2.08376 24.5756 1.11101 24.4818C0.264823 24.4002 -0.0779266 24.0343 0.0146984 22.8338C0.113511 21.5456 0.626136 21.4671 1.45695 21.5456C2.42051 21.6363 6.88301 22.3469 7.59336 22.5616C8.32836 22.7854 8.43026 23.112 8.34073 23.741C8.22636 24.5575 7.84957 24.7117 7.36779 24.7268Z"
                  fill="#4169E1"
                />
                <path
                  d="M7.89594 16.284C6.72238 15.9211 3.23881 13.8558 2.33094 13.3235C1.5095 12.8397 1.4045 12.4043 1.97581 11.3428C2.48225 10.4054 3.04438 10.2421 3.87819 10.6655C4.84485 11.1583 8.25735 13.7589 8.909 14.273C9.539 14.7689 9.45256 15.0259 9.1221 15.664C8.79153 16.3022 8.48272 16.4655 7.89594 16.284Z"
                  fill="#4169E1"
                />
                <path
                  d="M36.9619 15.8389H40.523C42.4123 15.8389 43.9431 14.3395 43.9431 12.49C43.9431 10.6405 42.4123 9.14111 40.523 9.14111H36.9619V15.8389Z"
                  fill="#4169E1"
                />
                <path
                  d="M19.417 30.1967H22.9785V36.8944H19.417C14.9631 36.8944 15.1587 30.1967 19.417 30.1967Z"
                  fill="#4169E1"
                />
                <path
                  d="M43.9384 28.2856C43.9138 32.6928 39.744 36.8945 35.1569 36.8945H25.6717V30.1967H35.1801C37.4931 30.1963 37.5122 26.3656 35.1569 26.3656C35.1569 26.3656 24.8016 26.3656 24.8007 26.3656C19.7758 26.3656 15.5047 21.8571 16.0465 16.8972C16.5103 12.6512 20.4284 9.13892 24.8007 9.13892H34.2722V15.8367C34.2722 15.8367 24.7706 15.8367 24.7637 15.8367C22.3154 15.8367 22.3897 19.6678 24.8007 19.6678H35.1569C39.64 19.6678 43.9626 23.9504 43.9384 28.2856Z"
                  fill="#4169E1"
                />
              </svg>
            </Box>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                sm: "block",
                color: themeConfig.palette.primaryColor,
              },
            }}
          >
            <svg
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="47"
              viewBox="0 0 48 47"
              fill="none"
            >
              <path
                d="M10.5117 32.6524C9.7922 33.0879 5.97817 35.0444 5.11651 35.3559C4.50198 35.5797 3.83486 35.5252 3.4427 34.3882C2.96092 32.9821 3.63723 32.6495 4.60079 32.2836C5.45317 31.96 8.98923 30.7082 9.81067 30.4904C10.3882 30.3393 10.7896 30.5297 11.0676 31.2101C11.3733 31.9569 11.1633 32.2563 10.5117 32.6524Z"
                fill="#4169E1"
              />
              <path
                d="M7.36779 24.7268C6.34245 24.7539 2.08376 24.5756 1.11101 24.4818C0.264823 24.4002 -0.0779266 24.0343 0.0146984 22.8338C0.113511 21.5456 0.626136 21.4671 1.45695 21.5456C2.42051 21.6363 6.88301 22.3469 7.59336 22.5616C8.32836 22.7854 8.43026 23.112 8.34073 23.741C8.22636 24.5575 7.84957 24.7117 7.36779 24.7268Z"
                fill="#4169E1"
              />
              <path
                d="M7.89594 16.284C6.72238 15.9211 3.23881 13.8558 2.33094 13.3235C1.5095 12.8397 1.4045 12.4043 1.97581 11.3428C2.48225 10.4054 3.04438 10.2421 3.87819 10.6655C4.84485 11.1583 8.25735 13.7589 8.909 14.273C9.539 14.7689 9.45256 15.0259 9.1221 15.664C8.79153 16.3022 8.48272 16.4655 7.89594 16.284Z"
                fill="#4169E1"
              />
              <path
                d="M36.9619 15.8389H40.523C42.4123 15.8389 43.9431 14.3395 43.9431 12.49C43.9431 10.6405 42.4123 9.14111 40.523 9.14111H36.9619V15.8389Z"
                fill="#4169E1"
              />
              <path
                d="M19.417 30.1967H22.9785V36.8944H19.417C14.9631 36.8944 15.1587 30.1967 19.417 30.1967Z"
                fill="#4169E1"
              />
              <path
                d="M43.9384 28.2856C43.9138 32.6928 39.744 36.8945 35.1569 36.8945H25.6717V30.1967H35.1801C37.4931 30.1963 37.5122 26.3656 35.1569 26.3656C35.1569 26.3656 24.8016 26.3656 24.8007 26.3656C19.7758 26.3656 15.5047 21.8571 16.0465 16.8972C16.5103 12.6512 20.4284 9.13892 24.8007 9.13892H34.2722V15.8367C34.2722 15.8367 24.7706 15.8367 24.7637 15.8367C22.3154 15.8367 22.3897 19.6678 24.8007 19.6678H35.1569C39.64 19.6678 43.9626 23.9504 43.9384 28.2856Z"
                fill="#4169E1"
              />
            </svg>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                onClick={() => {
                  handleNavigate(item);
                  isActive(item);
                }}
                component="a"
                disableTouchRipple={true}
                href={
                  item?.id === 2 &&
                  "https://drive.google.com/file/d/1YujcuAg1XW3oMvKMmzT8RvjwMHPX-0pW/view?usp=sharing"
                }
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: isActiveTab
                    ? themeConfig.palette.ternaryColor
                    : themeConfig.palette.primaryColor,
                  textTransform: "capitalize",
                  fontSize: themeConfig.typography.p1,
                  fontWeight: 600,
                  paddingInline: 2,
                  "&:hover": {
                    background: "transparent",
                  },
                }}
              >
                {item?.title}
              </Button>
            ))}
            <Button
              component="a"
              href="mailto:hi@santhosh.design"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                background: themeConfig.palette.ternaryColor,
                color: themeConfig.palette.whiteColor,
                borderRadius: 100,
                height: 40,
                width: 130,
                textTransform: "capitalize",
                fontSize: themeConfig.typography.p1,
                "&:hover": {
                  background: themeConfig.palette.ternaryColor,
                  color: themeConfig.palette.whiteColor,
                },
              }}
            >
              Email me
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
