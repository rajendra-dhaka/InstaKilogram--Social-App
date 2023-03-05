import {IonCol, IonContent, IonGrid, IonPage} from '@ionic/react';
import { Header } from '../components';
import './Home.scss';

const Home = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid fixed>
          <IonCol>
            
          </IonCol>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
