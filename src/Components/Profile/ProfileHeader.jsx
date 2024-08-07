import { Avatar, AvatarGroup, Flex, VStack, Text, Button} from '@chakra-ui/react'
import React from 'react'
import useUserProfileStore from '../../Store/userProfileStore'
import useAuthStore from '../../Store/AuthStore'
import { useDisclosure } from '@chakra-ui/react'
import EditProfile from './EditProfile'

const ProfileHeader = () => {
  const {userProfile}= useUserProfileStore();
  const authUser = useAuthStore((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const visitingOwnProfileAndAuth = authUser && authUser.username === userProfile.username;
  return (
    <Flex gap={{base:4, sm:10}} py={10} direction={{base:"column",sm:"row"}}>
      <AvatarGroup size={{base:"xl",md:"2xl"}} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar  src={userProfile.profilePicURL} alt="neil"/>
        </AvatarGroup>
        <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
          <Flex gap={4} direction={{base:"column",sm:"row"}} justifyContent={{base:"center",sm:"flex-start"}}
          alignItems={"center"} w={"full"}>
            <Text fontSize={{base:"sm",md:"lg"}}>{userProfile.username}</Text>
            {visitingOwnProfileAndAuth && (
						<Flex gap={4} alignItems={"center"} justifyContent={"center"}>
							<Button
								bg={"green.500"}
								color={"white"}
								_hover={{ bg: "blackAlpha.800" }}
								size={{ base: "xs", md: "sm" }}
								onClick={onOpen}
							>
								Edit Profile
							</Button>
						</Flex>
					)}
          </Flex>
          <Flex alignItems={"center"} gap={{base:2,sm:4}}>
            <Text>
            <Text as="span" fontWeight={"bold"} mr={1}>{userProfile.posts.length}</Text>
            Posts
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"sm"} fontWeight={"bold"}>{userProfile.fullName}</Text>
          </Flex>
        </VStack>
        {isOpen && <EditProfile isOpen={isOpen} onClose={onClose} />}
        </Flex>
  )
}

export default ProfileHeader;