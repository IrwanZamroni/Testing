import { Box } from "@mui/material";
import React from "react";

import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Fiture from "../components/Fiture";
import { Feature } from "../components/Feature";
import { FooterHeader } from "../components/FooterHeader";
import Footer from "../components/Footer";

export const Home = () => {
  return (
    <React.Fragment>
      <Box sx={{ display: "flex", position: "static" }}>
        <Navbar />
      </Box>

      <Box>
        <Header />
        <Fiture />
        <Feature />
        <FooterHeader />
        <Footer />
      </Box>
    </React.Fragment>
  );
};
export default Home;
