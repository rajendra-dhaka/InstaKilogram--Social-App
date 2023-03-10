import React from 'react';
import { IonCol, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { cameraOutline, heartOutline, paperPlaneOutline } from 'ionicons/icons';
import { CircularScrollbar } from '../CircularScrollbar/CircularScrollbar';
import './Header.scss'
import { Searchbar } from '../Searchbar/Searchbar';

export const Header = () => {
  return (
    <IonHeader className='header'>
      <IonToolbar>
        <IonGrid fixed>
          <IonRow className='d-flex ion-justify-content-center ion-align-items-center'>
            <IonCol size='2' className='ion-text-center'>
              <IonIcon icon={cameraOutline}></IonIcon>
            </IonCol>
            <IonCol size='8' className='fc'>
              <IonTitle>Insta KiloGram</IonTitle>
            </IonCol>
            <IonCol size='2' className='ion-text-center'>
              <IonIcon icon={heartOutline} className='mar-r-10'></IonIcon>
              <IonIcon icon={paperPlaneOutline} className=''></IonIcon>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
      <IonToolbar>
        <Searchbar/>
</IonToolbar>
      <IonToolbar>
        <CircularScrollbar/>
      </IonToolbar>
    </IonHeader>
  );
};
