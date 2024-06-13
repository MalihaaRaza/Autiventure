import React, { useState } from "react";
import { VStack, IconButton, Image, Text, HStack } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import AddTask from "./AddTask";

const Tasks = () => {
  const images = ["brush.jpg", "gardening.jpg", "fruits.jpg"];

  const [currentSlide, setCurrentSlide] = useState(0);
  const side = "15px";
  const top = "50%";

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <VStack width={"100%"} align={"center"} justifyContent={"center"} py={2}>
      <HStack width={["100%", "25%"]} ml={5} justifyContent={"space-between"}>
        <Text
          color={"#41807c"}
          letterSpacing={2}
          fontSize={['lg','6xl']}
          fontWeight={"bold"}
        >
          Tasks List
        </Text>
        <Image src="1453025.png" width={["20%", "20%"]} height={"auto"} />
      </HStack>
      <HStack
        width={['100%','90%']}
        position={"relative"}
        mt={'20'}
        align={"center"}
        justifyContent={"center"}
        height={['30vh','70vh']}
        overflow="hidden"
      >
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform="translate(0%, -50%)"
          zIndex={2}
          color={"black"}
          onClick={prevSlide}
          icon={<ChevronLeftIcon h={10} w={10} />}
        />
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          color={"black"}
          transform="translate(0%, -50%)"
          zIndex={2}
          onClick={nextSlide}
          icon={<ChevronRightIcon h={10} w={10} />}
        />
        <Image
          src={images[currentSlide]}
          alt="Slide Image"
          objectFit="cover"
          width="40%"
          height="auto"
        />
      </HStack>
      <AddTask />
    </VStack>
  );
};

export default Tasks;
