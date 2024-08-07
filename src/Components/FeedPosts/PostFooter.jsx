import { Avatar, Box, Button, Flex, Input, InputGroup, InputRightElement, SkeletonCircle, Text,Skeleton, useDisclosure} from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import { CommentLogo, NotificationsLogo, Tagg, UnlikeLogo } from '../../assets/contants';
import usePostComment from '../../Hooks/usePostComment';
import useAuthStore from '../../Store/AuthStore';
import useLikePost from '../../Hooks/useLikePost';
import { Link } from 'react-router-dom';
import { timeAgo } from '../../utils/timeAgo';
import CommentsModal from '../Modals/CommentsModal.jsx';

const PostFooter = ({ post, creatorProfile, isProfilePage }) => {
    const [comment, setComment] = useState("");
    const {isCommenting,handlePostComment}= usePostComment();
    const authUser = useAuthStore((state)=>state.user)
    const commentRef = useRef(null)
    const {handleLikePost,isLiked,likes} = useLikePost(post)
    const {isOpen,onOpen,onClose}= useDisclosure()
    const handleSubmitComment = async () => {
      await handlePostComment(post.id, comment);
      setComment("");
    };    
   return ( <> <Box mb={10}>
  <Flex alignItems ={"center"} w={"full"}  pt={"0"} mb={"2"} mt={4} >
  <Flex gap={"4"}>
<Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
{!isLiked ? <NotificationsLogo/> : <UnlikeLogo/>}
</Box>
<Box cursor ={"pointer"} fontSize={18} onClick={()=>commentRef.current.focus()}>
<CommentLogo/>
</Box>
<Flex><Tagg/> <Box fontSize={10} color={"green"}>{post.tag}</Box></Flex> </Flex>

  </Flex>
  <Text  textAlign={'left'} fontWeight={600} fontSize={"sm"}>
    {likes} likes
  </Text>
  {isProfilePage && (<Text fontSize={"12"} color={"gray"}>  Posted {timeAgo(post.createdAt)}</Text>
)}

  {!isProfilePage && (
  <>
  <Flex gap={2} alignItems={"center"}>
    {creatorProfile? ( <Link to={`/${creatorProfile.username}`}>
    <Box> <Avatar  src={creatorProfile.profilePicURL} alt="user profile pic"  size={"sm"}/></Box></Link>):(<SkeletonCircle size={10}/>)}
    {creatorProfile? (<><Link to={`/${creatorProfile.username}`}> <Text    fontWeight={700} fontSize={"sm"}>
  {creatorProfile.username} {"  "} </Text></Link>
   <Text fontWeight={400} as='span'>
   {post.caption}
 </Text></>):(<Skeleton width={"100px"} height={"10px"}/> )}
  </Flex>
  {post.comments.length>0 && (
 <Text textAlign={'left'}  color={"gray"} fontSize={"sm"} onClick={onOpen} cursor={"pointer"}>
    View all {post.comments.length} comments
  </Text>)}
  {isOpen ? (<CommentsModal isOpen={isOpen} onClose={onClose} post={post}/>) : null}
  </>)}
{authUser && (<Flex alignItems={"center"}
gap={2}
justifyContent={"space-between"}
w={"fUll"}>
<InputGroup>
<Input  variant={"flushed"} placeholder={"Add a comment..."}  fontSize={"14px"} onChange={(e)=>setComment(e.target.value)} value={comment} ref={commentRef}/>
<InputRightElement>
<Button fontSize={14} color={"green.500" } fontWeight={600} cursor={"pointer"} _hover={{color:"black"}} bg={"transparent"} onClick={handleSubmitComment} isLoading={isCommenting}>Post
</Button>

</InputRightElement>

</InputGroup>

</Flex>)}
  </Box>
   </>
   );
};

export default PostFooter;