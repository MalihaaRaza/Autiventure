import { VStack, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
      <VStack
        width={"100%"}
        height={"30vh"}
        align={"center"}
        justifyContent={"center"}
        spacing={"2"}
        bg={"#333333"}
        py={2}
      >
        <Text textAlign={"center"} fontSize={["md", "20px"]} color={"white"}>
          © 2023 Autiventure. All rights reserved.
        </Text>
        <Text textAlign={"center"} fontSize={["md", "20px"]} color={"white"}>
          Autiventure is a registered trademark of NUCES@lhr
        </Text>
        <Text textAlign={"center"} fontSize={["md", "20px"]} color={"white"}>
          Terms of Service | Privacy Policy | Cookie Policy{" "}
        </Text>
        <Text textAlign={"center"} fontSize={["md", "20px"]} color={"white"}>
          Designed with ❤️ by the AUTIVENTURE team.
        </Text>
      </VStack>
    </>
  )
}

export default Footer;
