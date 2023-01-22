import { Box, Typography, styled } from "@mui/material";
import React from "react";
import As from "../assets/Icon/ig9.png";
import "../assets/Icon/grad.css";
const Title = styled("div")(({ theme }) => ({
  display: "flex",

  marginLeft: 45,
  marginBottom: 40,
  backgroundColor: "#F5F5F5",
}));
export const FooterHeader = () => {
  return (
    <Box
      id="komunitas"
      sx={{
        backgroundColor: "#F5F5F5",
        transition: "0.1s",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 5,
          height: "max-content",
          zIndex: 999,
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{
              marginBottom: 1,
              fontWeight: 600,
              color: "#404852",
              position: "absolute",
              left: 80,
              marginTop: 5,
            }}
          >
            Sneak Peak
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 600,
              color: "#404852",
              position: "absolute",
              left: 80,
              marginTop: 6,
            }}
          >
            Pengguna <span className="gradient">ShareCation</span>.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#F5F5F5",
          position: "relative",
          top: 98,
          display: "flex",
          height: 525,
          gap: 5,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: 65,
            top: 20,
            right: 65,
            backgroundColor: "#F5F5F5",
            display: "flex",
          }}
        >
          <Box>
            <img src={`${As}`} width="410" height="500" />
          </Box>

          <Box>
            <img src={`${As}`} width="410" height="500" />
          </Box>
          <Box sx={{}}>
            <img src={`${As}`} width="410" height="500" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
