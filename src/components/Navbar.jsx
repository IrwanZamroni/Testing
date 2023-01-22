import {
  AppBar,
  Box,
  Toolbar,
  styled,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import React from "react";
import Button from "@mui/material/Button";
import Logo from "../assets/Icon/Logo navbar.png";

const Demo = styled("div")(({ theme }) => ({
  display: "flex",
  backround: "red",
}));
function Navbar() {
  return (
    <Box
      sx={{
        display: "flex",
        height: 84,
      }}
    >
      <AppBar
        sx={{
          backgroundColor: "white",
          color: "black",

          display: "flex",
          marginBottom: 0,
          position: "fixed",
          width: "100%",
          height: 84,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginRight: 10,
            marginLeft: 10,
          }}
        >
          <Toolbar>
            <img src={`${Logo}`} />
          </Toolbar>
          <Demo>
            <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
              <Link
                sx={{
                  color: "#949494",
                  "&:hover": {
                    color: "black",
                  },
                }}
                href="#tentang"
                underline="none"
              >
                {"Tentang"}
              </Link>
              <Link
                sx={{
                  color: "#949494",
                  "&:hover": {
                    color: "black",
                  },
                }}
                href="#fitur"
                underline="none"
              >
                {"Fitur"}
              </Link>
              <Link
                sx={{
                  color: "#949494",
                  "&:hover": {
                    color: "black",
                  },
                }}
                href="#komunitas"
                underline="none"
              >
                {"Komunitas Kami"}
              </Link>
            </Box>
          </Demo>
        </Box>
      </AppBar>
    </Box>
  );
}

export default Navbar;
