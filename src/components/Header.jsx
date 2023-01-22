import { Typography, styled } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "../assets/Icon/Banner.png";
import Land from "../assets/Icon/bg-landing.png";
import Log from "../assets/Icon/Playstore.png";
import "../assets/Icon/grad.css";
const Title = styled("div")(({ theme }) => ({
  display: "flex",
  marginLeft: 80,

  gap: 100,
}));
export default function Header() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        transition: "0.1s",
        backgroundImage: `url(${Image})`,
        height: 769,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Title>
        <Box sx={{ display: "flex", gap: 20 }}>
          <Box sx={{ gap: 200, marginTop: 40, flex: 1 }}>
            <Typography
              variant="h3"
              sx={{ marginBottom: 3, fontWeight: 600, color: "#333A51" }}
            >
              Share Your Moment,
            </Typography>
            <Typography
              variant="h3"
              sx={{ marginBottom: 3, fontWeight: 600, color: "#333A51" }}
            >
              Enjoy Your Vacation.
            </Typography>
            <Typography
              paragraph={true}
              sx={{ color: "#949494", fontSize: 20, marginBottom: 3 }}
            >
              Bagikan liburan mu bersama{" "}
              <Typography
                className="gradient"
                component="span"
                sx={{ color: "#FD841F", fontSize: 20 }}
              >
                ShareCation
              </Typography>{" "}
              sekarang!
            </Typography>
            <img src={`${Log}`} />
          </Box>
          <Box sx={{ marginTop: 7 }}>
            <img src={`${Land}`} />
          </Box>
        </Box>
      </Title>
    </Box>
  );
}
