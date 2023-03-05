import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonImg, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import './Modal.scss';

export const Modal = ({ setModalIsOpen, modalIsOpen, data }) => {
  return (
    <IonModal isOpen={modalIsOpen}>
  
        <IonToolbar>
          <IonTitle>{ data.name}</IonTitle>
          <IonButtons slot='end'>
            <IonButton
              onClick={() => {
                setModalIsOpen(false);
              }}>
              <IonIcon icon={closeOutline}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>

      <IonContent className='ion-padding'>
        <IonImg src={data.image}></IonImg>
      </IonContent>
    </IonModal>
  );
};
