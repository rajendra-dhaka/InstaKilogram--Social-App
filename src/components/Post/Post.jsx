import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
} from '@ionic/react';
import { bookmark, bookmarkOutline, chatbubbleOutline, heart, heartOutline } from 'ionicons/icons';
import React from 'react';
import './Post.scss';

export const Post = ({ post, allPosts, setAllPosts }) => {

  const handleLike = (postId) => {
    if (postId) {
      let index = allPosts.findIndex(post => {return post.id === postId });
      setAllPosts([...allPosts, allPosts[index].isLiked = !allPosts[index].isLiked]);
      console.log(allPosts[index],'ye raha bhai updated');
    }
  }
  const handleSave = (postId) => {
    if (postId) {
      let index = allPosts.findIndex(post => {return post.id === postId });
      setAllPosts([...allPosts, allPosts[index].isSaved = !allPosts[index].isSaved]);
      console.log(allPosts[index],'ye raha bhai updated');
    }
  }


  return (
    <IonCard className='ion-margin post'>
      <div className='user-info d-flex ion-align-items-center mar-l-10'>
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
{/* 
      <IonCardContent className='ion-no-padding mar-l-10 mar-b-10'>
        {post?.comments[0]?.username && `${post?.comments[0]?.username}:${post?.comments[0]?.text} `}
      </IonCardContent> */}
      <div className='cta d-flex ion-justify-content-around ion-align-items-center'>
        <IonButton fill='clear' onClick={() => handleLike(post?.id)}>
          <IonIcon
            icon={post?.isLiked === false ? heartOutline : heart}
            color='primary'
          />
        </IonButton>
        <IonButton fill='clear'>
          <IonIcon icon={chatbubbleOutline} color='secondary' />
        </IonButton>
        <IonButton fill='clear' onClick={() => handleSave(post?.id)}>
          <IonIcon icon={post?.isSaved === false ? bookmarkOutline: bookmark} color='tertiary' />
        </IonButton>
      </div>
    </IonCard>
  );
};
