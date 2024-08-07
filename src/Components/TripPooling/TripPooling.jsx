import { Avatar, Box, Button, Flex, VStack } from '@chakra-ui/react';
import React from 'react';

const TripPooling = ({username,destination,startDate, endDate,members,avatarSrc}) => {
  return (
    <Flex  justifyContent={"space-between"} alignItems={"center"} w={"full"}>
        <Flex border ={"1px solid"} borderColor={"blackAlpha.300"} alignItems={"left"} gap={2} padding={"10px"}>
            <Avatar src={avatarSrc} name={username} size={"md"}/>
            <VStack spacing={1}>
                <Box  alignItems={"left"} fontSize={12} fontWeight={"bold"} w={"140px"}>
                {username}
                </Box>
                <Box alignItems={"left"} fontSize={10} fontWeight={"bold"} color={"gray.500"} >
                Destination: {destination}
                </Box>
                <Box alignItems={"left"} fontSize={10} fontWeight={"bold"} color={"gray.500"} >
                Members: {members}
                </Box>
                <Box alignItems={"left"} fontSize={10} fontWeight={"bold"} color={"gray.500"}>
                    {startDate} to {endDate}
                </Box>
            </VStack>
        </Flex>
        <Button fontSize={13} bg={"transparent"} p={0} h={"max-content"} fontWeight={"medium"} color="green" cursor={"pointer"} _hover={{color:"gray"}}>Join in</Button>
    </Flex>
  );
};

export default TripPooling;