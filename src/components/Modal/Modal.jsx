import { IonButton, IonButtons, IonContent, IonHeader, IonImg, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import './Modal.scss';

export const Modal = ({ setModalIsOpen, modalIsOpen, data }) => {
  console.log(data,'modal me data ki value');
  return (
    <IonModal isOpen={modalIsOpen}>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{ data.name}</IonTitle>
          <IonButtons slot='end'>
            <IonButton
              onClick={() => {
                setModalIsOpen(false);
              }}>
              Close
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className='ion-padding'>
        <IonImg src={data.image}></IonImg>
      </IonContent>
    </IonModal>
  );
};
