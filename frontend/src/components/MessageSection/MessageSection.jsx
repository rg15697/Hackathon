import { Box, Button, Flex, HStack, Text, Input } from "@chakra-ui/react";
import React from "react";
import { ProfileInfoBar } from "../profileInfoBar.jsx/ProfileInfo";
import { StaticProfileBar } from "../profileInfoBar.jsx/StaticProfileBar";
import { ImRocket } from "react-icons/im";
import { NavLink } from "react-router-dom";
import io from "socket.io-client";

const ChatSection = () => {
  const [w, setW] = React.useState(false);

  return (
    <Box style={w ? { width: "40%" } : { width: "70%" }}>
      <Flex justifyContent="space-between" width={"100%"} p={2}>
        <Flex style={{ cursor: "pointer" }} px={4}>
          <StaticProfileBar
            position="right"
            profileData={{ name: "Aaro" }}
            onClick={() => setW(!w)}
          />
          <Text px={4} marginTop={1} fontWeight={500}>
            Username
          </Text>
        </Flex>

        <HStack spacing="24px">
          <NavLink to="/signin">
            <Button>Sign In</Button>
          </NavLink>
          <NavLink to="/signup">
            <Button>Sign Up</Button>
          </NavLink>
        </HStack>
      </Flex>
      <Box
        height="80vh"
        border={"solid grey 1px"}
        overflow="scroll"
        id="messages"
      ></Box>
      <Box>
        <Flex gap={15} p={5}>
          {/* <Form id="forms"> */}
          <Input
            type="text"
            placeholder="Enter your message .........."
            id="input"
          />
          <Button backgroundColor="#179cd2" width={150} type="submit">
            <ImRocket fontSize={25} />
          </Button>
          {/* </Form> */}
        </Flex>
      </Box>
    </Box>
  );
};

export default ChatSection;
