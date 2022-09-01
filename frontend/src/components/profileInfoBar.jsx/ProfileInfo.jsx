import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  RadioGroup,
  Flex,
  Text,
  Image,
  Editable,
  EditableInput,
  EditablePreview,
  Button,
  Avatar,
  VStack,
  Box,
  Heading,
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useDispatch } from "react-redux";

export function ProfileInfoBar({ position, profileData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState(position);
  const [userName, setUserName] = React.useState("");
  const [about, setAbout] = React.useState(
    "Hey! there lets make it funny............."
  );
  const _id = 5;
  const dispatch = useDispatch();
  const updateProfileData = (e) => {};

  return (
    <div>
      <RadioGroup defaultValue={placement} onChange={setPlacement}></RadioGroup>
      <Button width={15} onClick={onOpen}>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </Button>
      <Drawer
        placement={placement}
        onClose={onClose}
        isOpen={isOpen}
        width="100%"
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          {/* ====================Top Back section============ */}

          <Flex borderBottomWidth="1px" p={4}>
            <DrawerCloseButton />
            <DrawerHeader height="50px" marginTop={-5} fontSize={30}>
              {" "}
              Profile{" "}
            </DrawerHeader>
          </Flex>

          <DrawerBody>
            <VStack>
              {/* ========================Profile image==================== */}

              <Flex
                justifyContent="center"
                width="100%"
                border="solid grey 2px"
              >
                <Image
                  borderRadius="full"
                  height="200px"
                  Flex
                  Size="10px"
                  src="https://bit.ly/dan-abramov"
                  alt="Dan Abramov"
                />
              </Flex>

              <VStack textAlign={"left"} border="solid grey 2px">
                <Heading
                  width="400px"
                  p={3}
                  marginLeft={0}
                  fontSize={20}
                  fontWeight={400}
                  color="teal"
                >
                  Your Name :
                </Heading>
                <Editable
                  width={"100%"}
                  defaultValue={"Rohit kumar Gupta"}
                  px={2}
                >
                  <EditablePreview width={"100%"} />
                  <EditableInput
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDownCapture={(e) => {
                      if (e.key == "Enter") {
                        updateProfileData({ userName, _id: _id });
                      }
                    }}
                  />
                </Editable>
              </VStack>

              <VStack textAlign={"left"} border="solid grey 2px">
                <Heading
                  width="400px"
                  p={3}
                  marginLeft={0}
                  fontSize={20}
                  fontWeight={400}
                  color="teal"
                >
                  Mobile Nmber :
                </Heading>
                <Text width="400px" px={3}>
                  {" "}
                  +91 9532334248
                </Text>
              </VStack>

              <VStack textAlign={"left"} border="solid grey 2px">
                <Heading
                  width="400px"
                  p={3}
                  marginLeft={0}
                  fontSize={20}
                  fontWeight={400}
                  color="teal"
                >
                  Email :
                </Heading>
                <Text width="400px" px={3}>
                  rg15697@gmail.com
                </Text>
              </VStack>

              <VStack textAlign={"left"} border="solid grey 2px">
                <Heading
                  width="400px"
                  p={3}
                  marginLeft={0}
                  fontSize={20}
                  fontWeight={400}
                  color="teal"
                >
                  About :
                </Heading>
                <Editable width={"100%"} defaultValue={about} px={2}>
                  <EditablePreview width={"100%"} />
                  <EditableInput
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDownCapture={(e) => {
                      if (e.key == "Enter") {
                        updateProfileData({ about, _id: _id });
                      }
                    }}
                  />
                </Editable>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
