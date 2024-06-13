import React from "react";
import { Box, VStack, Text, Button, Icon, HStack } from "@chakra-ui/react";
import { FiFacebook } from "react-icons/fi";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Landing = () => {
    const navigate = useNavigate();
  return (
    <>
      <Box
        backgroundImage="url('/landing.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        height="100vh"
        position="relative"
      >
        <VStack
          position="absolute"
          top={["52%", "52%"]}
          left="35%"
          transform="translate(-50%, -50%)"
          align={"center"}
          mt={1}
        >
          <Text
            color={"#41807c"}
            fontSize={["3xl", "8xl"]}
            fontWeight={"extrabold"}
            as={"i"}
          >
            AUTIVENTURE
          </Text>
          <Text as={"i"} fontSize={["xl", "3xl"]} color={"gray.800"}>
            Start a wonderful journey!!
          </Text>
          <Button
            width={"50%"}
            px={8}
            py={10}
            rounded={"20px"}
            color={"black"}
            bg={"#2cccc4"}
            size={"lg"}
            _hover={{
              bg: "#f1c50e",
              color: "black",
            }}
            onClick={() => navigate("/login")}
          >
            Get Started
          </Button>
        </VStack>
      </Box>
      <VStack
        width={"100%"}
        height={"70vh"}
        align={"center"}
        justifyContent={"space-between"}
        spacing={"2"}
        bg={"#293332"}
        py={6}
      >
        <Text
          textAlign={"center"}
          width={"70%"}
          as={"i"}
          fontSize={["md", "26px"]}
          color={"white"}
          fontWeight={"semibold"}
        >
          Welcome to our website, a dedicated space designed for autistic kids
          to explore, learn, and connect. Fusing education with enjoyment, our
          platform offers a curated selection of games tailored to enhance
          cognitive skills while providing a safe and supportive social
          environment.
        </Text>
        <Text
          textAlign={"center"}
          width={"70%"}
          as={"i"}
          fontSize={["md", "26px"]}
          color={"white"}
          fontWeight={"semibold"}
        >
          At the heart of our initiative is the belief that every child,
          regardless of neurodiversity, deserves an inclusive and enriching
          online experience. Our games are crafted to stimulate creativity,
          problem-solving, and social interaction, fostering a sense of
          accomplishment and camaraderie among our young users. Website
          Templates created with Website Builder Software.
        </Text>
        <HStack spacing={4} mt={6}>
          <Icon as={FiFacebook} boxSize={16} color={"#f1c50e"} />
          <Icon as={FaTwitter} boxSize={16} color={"#f1c50e"} />
          <Icon as={FaInstagram} boxSize={16} color={"#f1c50e"} />
        </HStack>
      </VStack>
      <Footer />
    </>
  );
};

export default Landing;
