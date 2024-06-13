import { VStack ,Text,Image,Icon,Spacer,HStack} from "@chakra-ui/react";
import React from "react";
import { FaPencil } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";


const Container = ({name,image}) => {
  return (
    <>
      <VStack
        width={['350px','30%']}
        align={"center"}
        justifyContent={"center"}
        bg={"#41807c"}
        rounded={'16px'}
      >
        <Text color={'white'} fontSize={'xl'} >{name}</Text>
        <Image src={image} width={"80%"} height={"35vh"}  />
        <HStack p={2} width={'full'}>

            <Icon as={FaPencil} cursor={"pointer"} boxSize={16} color={"yellow.500"} />
            <Spacer />
            <Icon as={CiHeart} cursor={"pointer"} boxSize={16} color={"red.500"} />
        </HStack>
      </VStack>
    </>
  );
};

export default Container;
