import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { BiSolidGrid } from 'react-icons/bi'

const ProfileTabs = () => {
  return (
    <Flex w={"full"} justifyContent={"center"} gap={{base:4,sm:10}} textTransform={'uppercase'} 
    fontWeight={"bold"}>
      <Flex borderTop={"1px solid black"} alignItems={"center"} p={3} gap={1} cursor={"pointer"}>
        <Box fontSize={20}>
          <BiSolidGrid/>
        </Box>
        <Text fontSize={12} display={{base:'none',sm:'block'}}>
          Posts
        </Text>
      </Flex>
      </Flex>
  )
}

export default ProfileTabs;