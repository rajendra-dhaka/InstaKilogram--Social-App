import { IonCol, IonContent, IonGrid, IonLoading, IonPage, IonRow } from '@ionic/react';
import { useEffect, useState } from 'react';
import { Header, Post } from '../../components';
import postsData from '../../postData.json';
import './Home.scss';

export const Home = () => {
  const [myPostData, setMyPostData] = useState([]);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    setShowLoading(true);
    setTimeout(() => {
      setMyPostData(postsData);
      setShowLoading(false);
    }, 1000);
  }, [setMyPostData]);
console.log('hme render hua',myPostData);
  return (
    <IonPage className='home'>
      <Header />
      <IonContent className='home-content'>
        <IonGrid fixed>
          <IonRow>
            <IonCol size='12'>
              {myPostData.length > 0 &&
                myPostData.map((item) => (
                  <Post key={item.id} post={item} allPosts={myPostData} setAllPosts={setMyPostData} />
                ))}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonLoading cssClass='my-custom-class' isOpen={showLoading} message={'Please wait...'} />
    </IonPage>
  );
};
