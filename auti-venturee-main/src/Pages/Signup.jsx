import { useState } from "react";
import Footer from "./Footer";
import {
  Box, VStack, Text, Button, Icon, Input, Checkbox, HStack, Alert, AlertIcon,
} from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [guardianemail, setGuardianemail] = useState("");
  const [gender, setGender] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async () => {
    if (!username || !password || !date || !guardianemail || !gender) {
      setError("All fields are required.");
      return;
    }
    try {
      const res = await axios.post('/api/auth/register', { username, password, date, guardianemail, gender });
      localStorage.setItem('token', res.data.token);
      navigate("/dashboard");
    } catch (err) {
      console.error(err.response.data);
      setError("An error occurred during signup. Please try again.");
    }
  };


  return (
    <>
      <Box
        backgroundImage="url('/login.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        height="110vh"
        position="relative"
      >
        <VStack
          position="absolute"
          mt={["15%", "5%"]}
          mr={[0, "10%"]}
          ml={["4%", "25%"]}
          align={"center"}
          bg={"#41807c"}
          p={4}
          borderRadius={"16px"}
          width={["90%", "50%"]}
          height={"96vh"}
          justifyContent={"center"}
          spacing={8}
        >
          <Icon as={FaRegUser} w={20} h={20} color={"#f1c50e"} />
          <Text
            fontSize={["lg", "5xl"]}
            fontWeight={"semibold"}
            color={"#f1c50e"}
          >
            User Signup
          </Text>

          {error && (
            <Alert status="error" width={"80%"}>
              <AlertIcon />
              {error}
            </Alert>
          )}

          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            p={4}
            type="date"
            bg={"white"}
            color={"black"}
            placeholder="Date of Birth"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="Male/Female"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />

          <Input
            rounded={"16px"}
            height={"7vh"}
            width={"80%"}
            p={4}
            bg={"white"}
            color={"black"}
            placeholder="Guardian Email"
            value={guardianemail}
            onChange={(e) => setGuardianemail(e.target.value)}
          />
          <HStack width={"80%"} align={"flex-start"}>
            <Checkbox color={"white"} defaultChecked>
              Remember Me
            </Checkbox>
          </HStack>
          <Button
            width={"80%"}
            px={8}
            py={6}
            rounded={"20px"}
            color={"black"}
            bg={"#f1c50e"}
            size={"lg"}
            _hover={{
              bg: "#2cccc4",
              color: "black",
            }}
            onClick={handleSignup}
          >
            Confirm Signup
          </Button>
        </VStack>
      </Box>
      <Footer />
    </>
  );
};

export default Signup;