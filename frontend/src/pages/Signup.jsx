import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { signupUser } from "../redux/auth/action";
import { SIGNUP_SUCCESS } from "../redux/auth/actionType";
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = React.useState({});
  const dispatch = useDispatch();

  const handleChange = (e) => {
    let { name, value, checked, type, files } = e.target;
    if (type == "file") setForm({ ...form, [name]: files });
    else setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(form)).then((res) =>
      res.type == SIGNUP_SUCCESS
        ? 
        // alert("error")
        navigate("/signin")
        : alert("error")
    );
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} width="45%" maxW={"xl"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Chat App
          </Heading>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form >
              <FormControl id="userName" isRequired>
                <FormLabel>User Name</FormLabel>
                <Input type="text" onChange={handleChange} name="userName" />
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={handleChange} name="email" />
              </FormControl>
              <FormControl id="mobile">
                <FormLabel>Mobile Number</FormLabel>
                <Input type="tel" onChange={handleChange} name="mobile" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? "text" : "password"}
                    onChange={handleChange}
                    name="password"
                  />
                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <FormControl id="about">
                <FormLabel>About</FormLabel>
                <Input type="text" onChange={handleChange} name="about" />
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Input
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  value="Sign up"
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  // onSubmit={handleSubmit}
                />
                  {/* Sign Up</Input> */}
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user? <Link color={"blue.400"}>Login</Link>
                </Text>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
