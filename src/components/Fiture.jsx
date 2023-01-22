import { Typography, styled, withStyles } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Image from "../assets/Icon/Banner.png";
import Land from "../assets/Icon/bg-landing.png";
import Phone from "../assets/Icon/bg-tentang.png";
import "../assets/Icon/grad.css";
const Title = styled("div")(({ theme }) => ({
  display: "flex",
  marginLeft: 5,
  justifyContent: "center",
  gap: 99,
}));

export default function Fiture() {
  return (
    <Box
      id="tentang"
      sx={{
        backgroundColor: "white",

        height: 677,
        position: "relative",
        transition: "0.1s",
      }}
    >
      <Box
        sx={{
          display: "flex",
          top: 40,
          position: "absolute",
          left: 80,
          gap: 2,
        }}
      >
        <img src={`${Phone}`} />
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              marginBottom: 1,
              fontWeight: 600,
              color: "#404852",
            }}
          >
            Apa itu
          </Typography>
          <Typography
            className="gradient"
            variant="h3"
            sx={{
              marginBottom: 1,
              fontWeight: 600,
            }}
          >
            Sharecation?
          </Typography>
          <Typography paragraph={true} sx={{ color: "#404852", fontSize: 16 }}>
            ShareCation adalah media sosial pelancong yang dirancang untuk
            memudahkan <br />
            para pengguna dalam mencari dan berbagi informasi mengenai
            tempat-tempat
            <br /> wisata. ShareCation menyediakan informasi yang faktual dan
            aktual mengenai
            <br /> destinasi wisata yang dapat membantu para pengguna dalam
            merencanakan
            <br /> perjalanan mereka. Media sosial ini dapat digunakan untuk
            mencari rekomendasi <br /> tempat wisata dan berbagi foto, serta
            meninggalkan ulasan dan komentar <br />
            mengenai pengalaman perjalanan.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
