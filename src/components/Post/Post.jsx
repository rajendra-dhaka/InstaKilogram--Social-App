import { IonAvatar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon } from '@ionic/react';
import { bookmark, bookmarkOutline, chatbubbleOutline, heart, heartOutline } from 'ionicons/icons';
import React from 'react';
import { usePostData } from '../../context/PostDataContext';
import './Post.scss';

export const Post = ({ post }) => {
  const { setPostFilteredData: setAllPosts } = usePostData();

  const handleLikeSave = (postId,type) => {
    if (postId) {
      setAllPosts((prevData) => {
        // Find the object with the matching id
        const objectIndex = prevData.findIndex((post) => post.id === postId);
        // Create a copy of the object with the updated property
        const updatedObject =
          type === 'like'
            ? { ...prevData[objectIndex], isLiked: !prevData[objectIndex].isLiked }
            : { ...prevData[objectIndex], isSaved: !prevData[objectIndex].isSaved };
        // Create a new array with the updated object
        const updatedArray = [...prevData.slice(0, objectIndex), updatedObject, ...prevData.slice(objectIndex + 1)];
        // Return the updated array
        return updatedArray;
      });
    }
  };

  return (
    <IonCard className='ion-margin post'>
      <div className='user-info d-flex ion-align-items-center mar-10'>
        <IonAvatar>
          <img
            alt='user'
            src={post?.author?.profilePictureUrl || 'https://ionicframework.com/docs/img/demos/avatar.svg'}
          />
        </IonAvatar>
        <IonCardSubtitle className='ion-text-capitalize mar-l-10'>{post?.author?.username}</IonCardSubtitle>
      </div>
      <img
        alt='Silhouette of mountains'
        src={post?.imageUrl || 'https://ionicframework.com/docs/img/demos/card-media.png'}
      />
      <IonCardHeader>
        <IonCardTitle>{post?.caption || `My Wow! Caption ${post?.id}`}</IonCardTitle>
      </IonCardHeader>
      
      <IonCardContent className='ion-no-padding mar-l-10 mar-b-10'>
        {post?.comments[0]?.username && `${post?.comments[0]?.username}:${post?.comments[0]?.text} `}
      </IonCardContent>
      <div className='cta d-flex ion-justify-content-around ion-align-items-center'>
        <IonButton fill='clear' onClick={() => handleLikeSave(post?.id,'like')}>
          <IonIcon icon={post?.isLiked === false ? heartOutline : heart} color='tertiary' />
        </IonButton>
        <IonButton fill='clear'>
          <IonIcon icon={chatbubbleOutline} color='secondary' />
        </IonButton>
        <IonButton fill='clear' onClick={() => handleLikeSave(post?.id,'save')}>
          <IonIcon icon={post?.isSaved === false ? bookmarkOutline : bookmark} color='primary' />
        </IonButton>
      </div>
    </IonCard>
  );
};
