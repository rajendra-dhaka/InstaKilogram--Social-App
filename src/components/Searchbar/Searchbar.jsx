import { IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import { usePostData } from '../../context/PostDataContext';
import './Searchbar.scss';

export const Searchbar = () => {

  const { myPostData, setPostFilteredData } = usePostData();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);

    if (searchTerm.trim() === '') {
      setPostFilteredData(myPostData);
    } else {
      const filtered = myPostData.filter(
        (post) =>
          post?.author?.username?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
          post?.comments[0]?.text?.toLowerCase()?.includes(searchTerm.toLowerCase())
      );
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
