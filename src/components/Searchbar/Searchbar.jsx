import { IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import { usePostData } from '../../context/PostDataContext';
import './Searchbar.scss';

export const Searchbar = () => {
  const { myPostData, postFilteredData, setPostFilteredData } = usePostData();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    const searchQuery = e.target.value.trim();

    if (searchQuery.trim() === '') {
      setPostFilteredData(myPostData);
    } else {
      const filtered = postFilteredData.filter((post) => {
        return (
          post?.author?.username?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
          post?.comments?.some((comment) => comment?.text?.toLowerCase()?.includes(searchQuery.toLowerCase()))
        );
      });
      console.log(filtered, 'aya re filterd post');
      setPostFilteredData(filtered);
    }
  };


  return (
    <IonSearchbar
      animated='true'
      placeholder='Search by Name or Comments'
      value={searchTerm}
      onIonChange={handleSearch}></IonSearchbar>
  );
};
