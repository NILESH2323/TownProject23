import { Box, Flex, Tooltip, Link } from "@chakra-ui/react";
import { SearchLogo } from "../../assets/contants";
import { Link as RouterLink } from "react-router-dom";

const Search = () => {
	return (
		<>
			<Tooltip
				hasArrow
				label={"Search"}
				placement='right'
				ml={1}
				openDelay={500}
				display={{ base: "block", md: "none" }}
			>
				<Link
				to={'/search'}
				as={RouterLink}
				>
					<Flex gap={4} alignItems={"center"} _hover={{ bg: "lightgreen" }}
				borderRadius={6}
				p={2}
				w={{ base: 10, md: "full" }}
				justifyContent={{ base: "center", md: "flex-start" }}>
					<SearchLogo />
					<Box display={{ base: "none", md: "block" }}>Search</Box>
					</Flex>
				</Link>
			</Tooltip>
		</>
	);
};

export default Search;