import { Avatar, Box, Button, Divider, Flex, GridItem, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, Text, VStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { MdDelete } from "react-icons/md"
import Comment from '../Comment/Comment'
import PostFooter from '../FeedPosts/PostFooter'
import useUserProfileStore from '../../Store/userProfileStore'
import useAuthStore from '../../Store/AuthStore'
import useShowToast from '../../Hooks/useShowToast'
import { deleteObject, ref } from 'firebase/storage'
import { firestore, storage } from '../../FireBase/FireBase'
import { arrayRemove, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import usePostStore from '../../Store/postStore'
import { useState } from 'react'
import Caption from '../Comment/caption'

const ProfilePost = ({post}) => {
  const { isOpen, onOpen, onClose}= useDisclosure()
  const userProfile = useUserProfileStore((state)=> state.userProfile);
  const authUser = useAuthStore((state)=>state.user);
  const showToast = useShowToast();
  const [isDeleting,setIsDeleting]= useState(false);
  const deletePost = usePostStore(state =>state.deletePost)
  const decrementPostCount = useUserProfileStore((state)=>state.deletePost)

  
  const handleDeletePost = async()=>{
    if(!window.confirm("Are you sure, you want to delete this post?"))
      return ;
    if(isDeleting) return
    try{
      const imageRef = ref(storage,`posts/${post.id}`)
      await deleteObject(imageRef)
      const userRef = doc(firestore,"users",authUser.uid)
      await deleteDoc(doc(firestore,"posts",post.id))
      await updateDoc(userRef,{posts:arrayRemove(post.id)})
      deletePost(post.id)
      decrementPostCount(post.id)

      showToast("Success","Post deleted successfully","success")
    }
    catch(error){
      showToast("Error",error.message,"error");
    }
    finally{setIsDeleting(false)}

  }
  return (<>
    <GridItem cursor={"pointer"} borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"blackAlpha.300"}position={"relative"} aspectRatio={1/1} _hover={{bg:"gray"}} onClick={onOpen}>
      {/* <Flex opacity={0} _hover={{opacity:1}} position={"absolute"} m={0} bg={"whiteAlpha.700"} transition={"all 0.3s ease"} zIndex={1} justifyContent={"center"}> */}
        
          <Image src={post.imageURL} alt="profile post" w={"100%"} h={"100%"} objectFit={"cover"}></Image>
        </GridItem>

        <Modal isOpen={isOpen} onClose={onClose} isCentered={true} size={{base:"3xl",md:"5xl"}}>
          <ModalOverlay/>
          <ModalContent>
            <ModalCloseButton/>
            <ModalBody bg={'white'} pb={5}>
              <Flex gap={4} w={{base:"100%",sm:"70%",md:"full"}} mx={"auto"} maxH={"90vh"} minH={"50vh"}>
                <Flex borderRadius={4} overflow={"hidden"} border={"1px solid"} borderColor={"blackAlpha.300"} flex={1.5} jusyifycontent={"center"} alignItems={"center"}>
                  <Image src={post.imageURL} alt="profile post"/>
                </Flex>
                <Flex flex={1} flexDir={"column"} px={10} display={{base:"none",md:"flex"}}>
                  <Flex alignItems={"center"} justifycontent={"space-between"}>

                  
                  <Flex alignItems={"center"} gap={4}>
                    <Avatar src={userProfile.profilePicURL} size={"sm"} name='{userProfile.username}'/>
                    <Text fontWeight={"bold"} fontSize={12}>{userProfile.username}</Text>
                  </Flex>
                  {authUser?.uid === userProfile.uid &&(
                    <Button size={"sm"} bg={"transparent"} _hover={{bg:"blackAlpha.300",color:"red.600"}} borderRadius={4} p={1} onClick={handleDeletePost} isLoading={isDeleting}><MdDelete size={20} cursor="pointer"/></Button>
                  )  }
                </Flex>
                <Divider my={4} bg={"gray.500"}/>
                <VStack w="full" alignItems={"start"} maxH={"350px"} overflowY={"auto"}>
                  {post.caption && <Caption post={post} />}
                {post.comments.map((comment) =>(<Comment key={comment.id} comment={comment}/>))}
                </VStack>
                <PostFooter isProfilePage={true} post={post}/>
              </Flex>
              </Flex>
            </ModalBody>
          </ModalContent>

        </Modal>
        </>
  )
}

export default ProfilePost;