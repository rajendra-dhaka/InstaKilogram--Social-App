import { IonCol, IonContent, IonGrid, IonLoading, IonPage, IonRow } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Header, Post } from '../../components';
import { usePostData } from '../../context/PostDataContext';
import './Home.scss';

export const Home = () => {
  const { myPostData, setMyPostData, showLoading } = usePostData();

  return (
    <IonPage className='home'>
      <Header />
      <IonContent className='home-content'>
        <IonGrid fixed>
          <IonRow>
            <IonCol size='12'>
              {myPostData.length > 0 &&
                myPostData.map((item) => (
                  <Post key={item.id} post={item} />
                ))}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonLoading cssClass='my-custom-class' isOpen={showLoading} message={'Please wait...'} />
    </IonPage>
  );
};
