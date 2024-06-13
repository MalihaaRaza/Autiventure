import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
  Icon
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";
import { VStack, Text, Input, Button } from "@chakra-ui/react";
import { FaRegUser } from "react-icons/fa";

const Settings = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [newname, setNewName] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [gender, setGender] = useState("");

  return (
    <>
      <VStack cursor={'pointer'} onClick={onOpen}>
        <Icon as={FaRegUser} boxSize={16} color={"#2cccc4"} />
        <Text as={"i"} fontSize={"2xl"} color={"black"}>
          Profile
        </Text>
      </VStack>

      <Modal bg={'#FFFDD0'}  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={'#FFFDD0'}>
          <ModalHeader>User Settings</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={'#FFFDD0'} p={4} >
            <Input
              placeholder="New Name"
              value={newname}
              onChange={(e) => setNewName(e.target.value)}
              py={2}
              border = "1px solid black"
            />
            <Input
              placeholder="New Password"
              value={newpassword}
              onChange={(e) => setNewPassword(e.target.value)}
              py={2}
              border = "1px solid black"
              mt={2}
      
            />
            <Select
              placeholder="Select gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              py={2}
              border = "1px solid black"
      
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>

            <Button
              width={"80%"}
              px={8}
              py={6}
              mt={10}
              rounded={"20px"}
              color={"black"}
              bg={"#f1c50e"}
              size={"lg"}
              _hover={{
                bg: "#2cccc4",
                color: "black",
              }}
            >
              Submit
            </Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Settings;
