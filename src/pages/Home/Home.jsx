import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react';
import { Header, Post } from '../../components';
 import postsData from '../../postData.json';
import './Home.scss';

export const Home = () => {
  console.log(postsData,'posgh');
  return (
    <IonPage className='home'>
      <Header />
      <IonContent className='home-content'>
        <IonGrid fixed>
          <IonRow>
            <IonCol size='12'>
              {postsData.map((item) => (
                <Post key={item.id} data={item} />
              ))}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
