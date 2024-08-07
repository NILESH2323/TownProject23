import { Box, Flex, Tooltip } from "@chakra-ui/react";
import { TravelGenieLogo } from "../../assets/contants";
import { Link } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

const TravelGenie = () => {
	return (
		<Tooltip
			hasArrow
			label={"TravelGenie"}
			placement='right'
			ml={1}
			openDelay={500}
			display={{ base: "block", md: "none" }}
		>
			<Link to={`/travelgenie`}
				as={RouterLink}
			>
			<Flex
				alignItems={"center"}
				gap={4}
				_hover={{ bg: "lightgreen" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}
			>
				<TravelGenieLogo />
				<Box display={{ base: "none", md: "block" }}>TravelGenie</Box>
			</Flex>
			</Link>
		</Tooltip>
	);
};

export default TravelGenie;