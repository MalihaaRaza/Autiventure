import React from "react";
import Navbar from "./Navbar";
import Footer from "../Footer";
import Tasks from "./Tasks";
import { VStack, Image, Text, HStack, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Games = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <VStack
        height={"full"}
        width={"100%"}
        align={"center"}
        justifyContent={"center"}
        p={4}
      >
        <HStack width={["100%", "25%"]} ml={5} justifyContent={"space-between"}>
          <Text
            color={"#41807c"}
            letterSpacing={2}
            fontSize={["lg", "6xl"]}
            fontWeight={"bold"}
          >
            GAMES
          </Text>
          <Image src="3500896.png" width={["20%", "20%"]} height={"auto"} />
        </HStack>
        <Text
          fontSize={"4xl"}
          textAlign={"center"}
          as={"i"}
          color={"black"}
          width={["90%", "70%"]}
        >
          Indulgde in our highly interactive games which are a learning and fun
          experience in one !!
        </Text>
        <Stack
          fontSize={"xl"}
          fontWeight={"bold"}
          as={"i"}
          mt={10}
          direction={["column", "row"]}
          width={["100%", "100%"]}
        >
          <VStack onClick={() => navigate("/find")} cursor={"pointer"}>
            <Image src="find.jpg" width={["200px", "450px"]} height={"auto"} />
            <Text>Seek and Find</Text>
          </VStack>
          <VStack onClick={() => navigate("/zombie")} cursor={"pointer"}>
            <Image
              src="zombie.jpg"
              width={["200px", "450px"]}
              height={"auto"}
            />
            <Text>Zombie Survival</Text>
          </VStack>
          <VStack onClick={() => navigate("/key")} cursor={"pointer"}>
            <Image src="dost.jpg" width={["200px", "450px"]} height={"auto"} />
            <Text>Key Finder</Text>
          </VStack>
          <VStack onClick={() => navigate("/brick")} cursor={"pointer"}>
            <Image
              src="sudoku.jpg"
              width={["200px", "450px"]}
              height={"auto"}
            />
            <Text>Tile Smasher</Text>
          </VStack>
        </Stack>
      </VStack>
      <Tasks />
      <Footer />
    </>
  );
};

export default Games;
