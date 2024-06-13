import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Icon
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { useState } from "react";
import { VStack, Text, Button } from "@chakra-ui/react";
import { IoAddCircleOutline } from "react-icons/io5";
import { Textarea } from "@chakra-ui/react";

const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [task, setTask] = useState("");
 
  return (
    <>
      <VStack cursor={'pointer'} onClick={onOpen}>
        <Text as={"i"} fontSize={"2xl"} color={"black"}>
          Add Task
        </Text>
        <Icon
          cursor={"pointer"}
          as={IoAddCircleOutline}
          boxSize={16}
          color={"blue.500"}
        />
            </VStack>

      <Modal   isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg={'#41807c'}>
          <ModalHeader>Want to add a Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody  p={4} >
          <Textarea
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder='Details'
                    size='lg'
                    width={'90%'}
                    resize='vertical'
                    minH="200px"
                    color={'black'}
                    border={'1px solid #A9A9A9'}
                    textColor={'black'}
                    _placeholder={{ color: "black" }}

                />

          
            <Button
              width={"100%"}
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

export default AddTask;
