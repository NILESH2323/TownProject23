import { Box, Image } from '@chakra-ui/react';
import React from 'react';
import PostFooter from './PostFooter';
import PostHeader from './PostHeader';
import useGetUserProfileById from '../../Hooks/useGetUserProfileById';

const FeedPost = ({post}) => {
  const {userProfile}= useGetUserProfileById(post.createdBy)
  return( <>
    <PostHeader post={post} creatorProfile={userProfile} />
    <Box my={2} borderRadius={4}
    overflow={'hidden'}>
<Image src = {post.imageURL} alt='feedpostimage'/>


    </Box>
    <PostFooter creatorProfile={userProfile}  post={post} />
  </>
  );
};

export default FeedPost;