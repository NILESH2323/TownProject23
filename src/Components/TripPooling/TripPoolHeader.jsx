import { Avatar, Flex, Text,Link   } from "@chakra-ui/react"
import React from "react"
import{ Link as RouterLink} from "react-router-dom";
import useAuthStore from "../../Store/AuthStore";

const TripPoolHeader = () => {
	const authUser = useAuthStore((state) => state.user);

	if (!authUser) return null;
  return ( <>
			<Flex alignItems={"right"} gap={2} mr={40}>
				<Link to={`${authUser.username}`}>
					<Avatar size={"sm"} src={authUser.profilePicURL} />
				</Link>
				<Link to={`${authUser.username}`}>
					<Text fontSize={12} fontWeight={"bold"}>
						{authUser.username}
					</Text>
				</Link>
			</Flex>

<Flex justify={"space-between"} alignItems={"center"} w={"full"} mt={20}>
<Flex alignItems={"center"} gap={2}>
<Avatar name='TripPool' size={"xl"} src='/Trippool.png' />
<Text fontSize={12} fontWeight={"bold"} >
    Trip Pools
</Text>
</Flex>
<Link as={RouterLink} to={"/createpool"} fontSize={14} fontWeight={"medium"} color={"green.500"} cursor={"pointer"}>Create new</Link>
</Flex></>

  );  
};

export default TripPoolHeader;