import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ig from "../assets/Icon/Clip path group.png";
import "../assets/Icon/grad.css";
import q from "../assets/Icon/Fitur1.png";
import w from "../assets/Icon/Fitur2.png";
import r from "../assets/Icon/Fitur3.png";
import t from "../assets/Icon/Fitur4.png";
export const Feature = () => {
  return (
    <Box
      id="fitur"
      sx={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height: 900,
        transition: "0.1s",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            marginBottom: 1,
            fontWeight: 600,
            color: "#404852",
            marginTop: 20,
          }}
        >
          Fitur <span className="gradient">ShareCation</span>.
        </Typography>
        <Typography paragraph={true} sx={{ color: "#404852", fontSize: 16 }}>
          Beberapa fitur keren yang ada di Aplikasi ShareCation.
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItem: "center", gap: 10, marginTop: 5 }}>
        <Box
          sx={{
            display: "flex",

            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <img src={`${q}`} />
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "#404852",
              textAlign: "end",
              fontWeight: 600,
            }}
          >
            Berbagi pengalaman liburan
          </Typography>
          <Typography
            paragraph={true}
            sx={{
              color: "#404852",
              fontSize: 16,
              textAlign: "end",
              marginBottom: 10,
            }}
          >
            anda dapat menuliskan ulasan dan memberikan rating <br />
            terkait pengalaman berlibur
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <img src={`${w}`} />
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "#404852",
              textAlign: "end",
              fontWeight: 600,
            }}
          >
            Detail lokasi wisata
          </Typography>
          <Typography
            paragraph={true}
            sx={{
              color: "#404852",
              fontSize: 16,
              textAlign: "end",
            }}
          >
            detail lokasi wisata yang memberikan informasi lengkap mengenai
            suatu tempat wisata
          </Typography>
        </Box>
        <Box sx={{ display: "flex", flex: 1 }}>
          <img className="box" src={`${ig}`} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            flex: 2,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <img src={`${r}`} />
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "#404852",
              fontWeight: 600,
            }}
          >
            Mencari referensi berwisata
          </Typography>

          <Typography
            paragraph={true}
            sx={{
              color: "#404852",
              fontSize: 16,
              marginBottom: 10,
            }}
          >
            Membantu anda untuk menemukan destinasi wisata <br />
            yang sesuai dengan keinginan mereka{" "}
          </Typography>
          <Box sx={{ display: "flex" }}>
            <img src={`${t}`} />
          </Box>
          <Typography
            variant="h5"
            sx={{
              color: "#404852",
              fontWeight: 600,
            }}
          >
            Ikuti traveler favoritmu
          </Typography>
          <Typography paragraph={true} sx={{ color: "#404852", fontSize: 16 }}>
            Memungkinkan anda untuk mengikuti <br />
            perjalanan liburan traveler favorit{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
