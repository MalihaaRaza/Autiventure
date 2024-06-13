import React from "react";
import Navbar from "./Navbar";
import { Image, VStack, Text, Icon, Stack} from "@chakra-ui/react";
import { IoAddCircleOutline } from "react-icons/io5";
import Footer from "../Footer";
import Container from "./Container";


const Home = () => {

  return (
    <>
    <Navbar />
    <Image src="lion2.png" width={"100%"} height={"40vh"} alt="Games" />
      <VStack height={'full'} width={"100%"} align={"center"} justifyContent={"center"} p={4}>
        <Text fontSize={["md", "3xl"]} fontWeight={"semibold"} as={"i"}>
          {" "}
          Add new post
        </Text>
        <Icon
          cursor={"pointer"}
          as={IoAddCircleOutline}
          boxSize={16}
          color={"blue.500"}
        />
        <Stack  direction={['column','row']} width={"90%"} justifyContent={"space-between"} align={"center"}>
        <Container name={"Rober"} image={"g1.jpg"} />
        <Container name={"Cindy"} image={"g2.jpg"} />
        <Container name={"Mike"} image={"g3.jpg"} />
        </Stack>
        <Stack direction={['column','row']} width={"90%"} justifyContent={"space-between"} align={"center"}>
        <Container name={"Nawal"} image={"g4.jpg"} />
        <Container name={"Fatima"} image={"g5.jpg"} />
        <Container name={"Alice"} image={"g6.jpg"} />
        </Stack>
      </VStack>
        <Footer />
    </>
  );
};

export default Home;
