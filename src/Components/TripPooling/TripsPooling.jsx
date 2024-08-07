import { Flex, Text, VStack, } from '@chakra-ui/react';
import React from 'react';
import TripPoolHeader from './TripPoolHeader';
import TripPooling from './TripPooling';

const TripsPooling =() => {
  return (
     <VStack py={8} px={6} gap={3}>
<TripPoolHeader/>
<Flex  alignItems={"center"} justifyContent={"space-between"} w={"full"}>
    <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
        Suggested for you
    </Text>
    <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
        See All
    </Text>
</Flex>
<VStack >
<TripPooling  username='Nishant' destination='Goa' members={3} startDate="12/12/23"   endDate="16/12/23" avatarSrc="./a1.jpg"/>
<TripPooling  username='Divya' destination='Ladakh' members={4} startDate="12/02/24"   endDate="16/02/24" avatarSrc="./a3.png" />
<TripPooling username='Nilesh' destination='Udaipur' members={5}  startDate='02/01/24'   endDate='04/01/24' avatarSrc='./a1.jpg'/>
<TripPooling username='Bhavesh' destination='Lakshadweep' members={4}  startDate='06/01/24'   endDate='12/01/24' avatarSrc='./a1.jpg'/>
</VStack>

  </VStack>
    
  
  
  );
};

export default TripsPooling;