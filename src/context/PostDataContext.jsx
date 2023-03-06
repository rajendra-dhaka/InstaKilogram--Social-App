import React, { createContext, useContext, useEffect, useState } from 'react';
import postsData from '../postData.json';

const PostDataContext = createContext({
  myPostData: [],
  setMyPostData: () => {},
  postFilteredData: [],
  setPostFilteredData: () => {},
  showLoading: false,
  setShowLoading: () => {},
});

const PostDataContextProvider = ({ children }) => {
  const [myPostData, setMyPostData] = useState([]);
  const [postFilteredData, setPostFilteredData] = useState(myPostData);
  const [showLoading, setShowLoading] = useState(false);

useEffect(() => {
  setShowLoading(true);
  setTimeout(() => {
    setMyPostData(postsData);
    setPostFilteredData(postsData);
    setShowLoading(false);
    }, 1000);
  }, []);

  const context = {
    myPostData,
    setMyPostData,
    showLoading,
    setShowLoading,
    postFilteredData,
    setPostFilteredData,
  };

  return <PostDataContext.Provider value={context}>{children}</PostDataContext.Provider>;
};

const usePostData = () => useContext(PostDataContext);
export { usePostData, PostDataContextProvider };
