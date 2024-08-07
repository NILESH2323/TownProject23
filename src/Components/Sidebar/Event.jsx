/* eslint-disable no-mixed-spaces-and-tabs */
import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { EventLogo } from "../../assets/contants";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
 const Event = () => {
 	return (
 		<>
 			<Tooltip
			hasArrow
			label={"Events"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<a href='https://665457d7eb7d05709b5fbc2a--prismatic-babka-96cdc7.netlify.app/posts'>
				<Flex gap={4} alignItems={"center"} _hover={{ bg: "lightgreen" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}>	
				<EventLogo/>
				<Box display={{ base: "none", md: "block" }}>Events</Box>
				</Flex></a>
			
		</Tooltip>
 		</>
 	);
 };

 export default Event;