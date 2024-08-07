import { Flex, Button, Input } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import useSearchPost from '../../Hooks/useSearchPost';
import { Link as RouterLink } from 'react-router-dom';
import FeedPost from '../../Components/FeedPosts/FeedPost'

const SearchPost = () => {
  const { isLoading, getTagPosts, posts } = useSearchPost();
  const searchRef = useRef(null);

  const handleSearchTag = (e) => {
    e.preventDefault();
    const tag = searchRef.current.value;
    if (tag) {
      getTagPosts(tag);
    }
  };

  useEffect(() => {
    // Log posts for debugging
    console.log('Posts updated in SearchPost:', posts);
  }, [posts]);

  return (
    <>
      <Flex mb={"12"}>
        <Input
          focusBorderColor="green.500"
          borderRadius="50px"
          placeholder="Just name the tag"
          ref={searchRef}
        />
        <Button
        color="black"
        _hover={{ color: "green.500" }}
        bg="transparent"
        position="absolute"
        ml={420}
        borderRightRadius="50px"
        onClick={handleSearchTag}
        isLoading={isLoading}
      >
        <BiSearchAlt2 />
      </Button>
      </Flex>
      {!isLoading  && posts.length > 0 && posts.map((post) => {
        const key = `${post.id}-${post.createdBy}`;
        console.log('Rendering post with key:', key, post);
        return <FeedPost key={key} post={post} />;
      })}
    </>
  );
};

export default SearchPost;
