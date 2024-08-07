import { useState } from 'react';
import useShowToast from './useShowToast';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { firestore } from '../FireBase/FireBase';


const useSearchPost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const showToast = useShowToast();
  const [posts, setPosts] = useState([]);

  const getTagPosts = async (tag) => {
    if (!tag) return;

    console.log('Fetching posts for tag:', tag);
    setIsLoading(true);
    setPosts([]); // Clear previous posts before fetching new ones

    try {
      const q1 = query(collection(firestore, 'posts'), where('tag', '==', tag));
      const querySnapshot = await getDocs(q1);

      if (querySnapshot.empty) {
        showToast('Error', 'No such posts', 'error');
        setIsLoading(false); // Ensure to stop loading if no posts found
        return;
      }

      const fetchedPosts = [];
      querySnapshot.forEach((doc) => {
        fetchedPosts.push({ ...doc.data(), id: doc.id });
      });

      console.log('Fetched posts:', fetchedPosts);
      setPosts(fetchedPosts);
      
    } catch (error) {
      showToast('Error', error.message, 'error');
      setPosts([]);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, getTagPosts, posts };
};

export default useSearchPost;
