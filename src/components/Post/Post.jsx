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
import { bookmarkOutline, chatbubbleOutline, heartOutline } from 'ionicons/icons';
import React from 'react';
import './Post.scss';

export const Post = ({ data }) => {
  return (
    <IonCard className='ion-margin post'>
      <div className='user-info d-flex ion-align-items-center mar-l-10'>
        <IonAvatar>
          <img
            alt='user'
            src={data?.author?.profilePictureUrl || 'https://ionicframework.com/docs/img/demos/avatar.svg'}
          />
        </IonAvatar>
        <IonCardSubtitle className='ion-text-capitalize mar-l-10'>{data?.author?.username}</IonCardSubtitle>
      </div>
      <img
        alt='Silhouette of mountains'
        src={data?.imageUrl || 'https://ionicframework.com/docs/img/demos/card-media.png'}
      />
      <IonCardHeader>
        <IonCardTitle>{data?.caption || `My Wow! Caption ${data?.id}`}</IonCardTitle>
      </IonCardHeader>

      <IonCardContent className='ion-no-padding mar-l-10 mar-b-10'>
        {data?.comments[0]?.username && `${data?.comments[0]?.username}:${data?.comments[0]?.text} `}
      </IonCardContent>
      <div className='cta d-flex ion-justify-content-around ion-align-items-center'>
        <IonButton fill='clear'>
          <IonIcon icon={heartOutline} color='primary' />
        </IonButton>
        <IonButton fill='clear'>
          <IonIcon icon={chatbubbleOutline} color='secondary' />
        </IonButton>
        <IonButton fill='clear'>
          <IonIcon icon={bookmarkOutline} color='tertiary' />
        </IonButton>
      </div>
    </IonCard>
  );
};
