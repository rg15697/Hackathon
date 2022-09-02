import React from "react";
import { NavLink } from "react-router-dom";
import { ColorModeSwitcher } from "@chakra-ui/theme";
import { Flex } from "@chakra-ui/react";
import ContactBar from "../components/Contactbar/ContactBar";
import { ProfileInfoBar } from "../components/profileInfoBar.jsx/ProfileInfo";
import MessageSection from "../components/MessageSection/MessageSection";

const HomePage = () => {
  return (
    <Flex>
      <ContactBar />
      <MessageSection />
    </Flex>
  );
};

export default HomePage;
