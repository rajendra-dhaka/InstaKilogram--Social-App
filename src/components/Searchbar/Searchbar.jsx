import { IonSearchbar } from '@ionic/react';
import React, { useState } from 'react';
import { usePostData } from '../../context/PostDataContext';
import './Searchbar.scss';

export const Searchbar = () => {
  const { myPostData, setPostFilteredData} = usePostData();

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.trim());

    const filteredData = myPostData.filter(
      (post) =>
        post?.author?.username?.toLowerCase()?.includes(searchTerm.toLowerCase()) ||
        post?.comments[0]?.text?.toLowerCase()?.includes(searchTerm.toLowerCase())
    );

    setPostFilteredData(filteredData);
  };
  return (
    <IonSearchbar
      animated='true'
      placeholder='Search by Name or Comments'
      value={searchTerm}
      onIonInput={handleSearch}></IonSearchbar>
  );
};
