
import CreatePost from "./CreatePost";
import Event from "./Event";
import Home from "./Home";
import ProfileLink from "./ProfileLink";
import Search from "./Search";
import TravelGenie from "./TravelGenie";

const SidebarItems = () => {
	return (
		<>

			<Home />
      <Search />
			<TravelGenie />
			<CreatePost />
			<Event />
			<ProfileLink />
		</>
	);
};

export default SidebarItems;