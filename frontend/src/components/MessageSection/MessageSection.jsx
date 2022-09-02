import { Box, Button, Flex, HStack, Text, Input } from "@chakra-ui/react";
import React from "react";
import { ProfileInfoBar } from "../profileInfoBar.jsx/ProfileInfo";
import { StaticProfileBar } from "../profileInfoBar.jsx/StaticProfileBar";
import { ImRocket } from "react-icons/im";
import { NavLink } from "react-router-dom";

const ChatSection = () => {
  const [w, setW] = React.useState(false);

  <script src="/socket.io/socket.io.js"></script>;

  const ws = io();

  const form = document.getElementById("forms");
  const input = document.getElementById("input");
  const messagesDiv = document.getElementById("messages");

  // TO SHOW "OTHER USER IS TYPING"
  // IT REEPLACES THE OTHER MESSAGES HISTORY
  // ONLY FOR UNDERSTANDING PURPOSE
  // input.addEventListener("keyup", () => {
  //   ws.emit("typing");
  // });

  // ws.on("typing", () => {
  //   messagesDiv.innerText = "Other user is typing";
  // });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const textMessage = input.value;
    // my custom event
    ws.emit("new message", textMessage);
  });

  ws.on("new message", function (msg) {
    const span = document.createElement("div");
    span.innerText = msg;
    messagesDiv.appendChild(span);
  });

  ws.on("new user", () => {
    const span = document.createElement("div");
    span.innerText = "New user joined chat";
    messagesDiv.appendChild(span);
  });

  ws.on("history", (hs) => {
    if (hs?.length > 0) {
      for (const h of hs) {
        const span = document.createElement("div");
        span.innerText = h;
        messagesDiv.appendChild(span);
      }
    }
  });

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
