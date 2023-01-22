import { Box, Typography, styled, Link } from "@mui/material";
import React from "react";
import Ar from "../assets/Icon/ig9.png";
import logo from "../assets/Icon/ter.png";
import lok from "../assets/Icon/lok.png";
import ige from "../assets/Icon/instagram.png";
import email from "../assets/Icon/email.png";
import call from "../assets/Icon/call.png";
import link from "../assets/Icon/linkind.png";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        height: "262px",
        display: "flex",
        marginTop: "98px",
        position: "relative",
        justifyContent: "center",
        zIndex: 1,
        transition: "0.1s",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "absolute",
          left: 80,
          right: 80,
          top: 40,
          borderBottom: "1px solid #949494",
        }}
      >
        <Box>
          <Box sx={{ marginBottom: 5 }}>
            <img src={`${logo}`} />
          </Box>
          <Box sx={{ display: "flex", gap: 3, flex: 1 }}>
            <Box>
              <img src={`${lok}`} />
            </Box>
            <Typography
              paragraph={true}
              sx={{ color: "#949494", fontSize: 16 }}
            >
              Badan Riset Daerah (BRIDA NTB) <br />
              Jalan Raya Zamia, No.2 Desa Lelede, Banyumulek, Kediri,
              <br /> Lombok Barat, Nusa Tenggara Barat (NTB).
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#404852",
                marginBottom: 5,
              }}
            >
              Navigasi
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
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
        </Box>
        <Box>
          <Box>
            {" "}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#404852",
                marginBottom: 5,
              }}
            >
              Hubungi Kami
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 3, flex: 1 }}>
            <Box>
              <img src={`${email}`} />
            </Box>
            <Typography
              paragraph={true}
              sx={{ color: "#949494", fontSize: 16 }}
            >
              sharecation.idn@gmail.com
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: 3, flex: 1 }}>
            <Box>
              <img src={`${call}`} />
            </Box>
            <Typography
              paragraph={true}
              sx={{ color: "#949494", fontSize: 16 }}
            >
              +62 8123456789
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            {" "}
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: "#404852",
                marginBottom: 5,
              }}
            >
              Cari tau berita terbaru
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 3, cursor: "pointer" }}>
            <a href="https://www.linkedin.com/company/sharecation/">
              <img for="link" src={`${link}`} />
            </a>
            <a href="https://www.instagram.com/sharecation_id/?igshid=Zjc2ZTc4Nzk%3D">
              <img src={`${ige}`} />
            </a>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          position: "absolute",
          top: 231,
          color: "#949494",
        }}
      >
        Copyright @ ShareCation 2023
      </Box>
    </Box>
  );
}
