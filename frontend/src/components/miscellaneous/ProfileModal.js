import { useDisclosure } from '@chakra-ui/hooks'
import { ViewIcon, IconButton } from "@chakra-ui/icons";
import React from 'react'
import { Image, Text } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,

  } from '@chakra-ui/react'

const ProfileModal = ({user,children}) => {
  // console.log("ProfileModal user:", user); 
    const {isOpen,onOpen,onClose}=useDisclosure();
    
   
  return(
    <>
        {children?(
            <span onClick={onOpen} style={{cursor:"pointer"}}>{children}</span>
        ):(
            <IconButton display={{base:"flex"}} icon={<ViewIcon/>} onClick={onOpen} />
        )}
         <Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="400px">
          <ModalHeader
          fontSize="40px"
            fontFamily="Work sans"
            display="flex"
            justifyContent="center"
          >
            {user.name}
            </ModalHeader>
          <ModalCloseButton />
          <ModalBody 
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="space-between"
          >
             <Image
                borderRadius="full"
                boxSize="150px"
                src={user.pic}
                alt={user.name}
              />
              <Text
              fontSize={{base:"28px",md:"30px"}}
                fontFamily="Work sans"
                >
                    Email: {user.email}
                </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
        
    </>
  )
         

};

export default ProfileModal;