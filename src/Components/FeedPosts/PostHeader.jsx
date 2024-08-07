import { Box, Flex } from '@chakra-ui/react';
import React from 'react';
import { time } from '../../utils/time';
const PostHeader = ({post}) => {
  return (

    <Flex justifyContent={"space-between "}  alignItems={"center"} w={"full"} my={"2"}> 
    <Flex     alignItems={"center"} gap={2}>
         {/* <Avatar  src={avatar} alt="user profile pic"  size={"sm"}/>  */}
        <Flex fontSize={"12px"} fontWeight={"bold"} gap={"2"}>
        {post.location} 
            <Box color={"gray.500"}>.{time(post.createdAt)}</Box>
            
        </Flex>

    </Flex>   
<Box>
{/* unfollow button will come here  */}
</Box> 
    </Flex>
  )
}

export default PostHeader;