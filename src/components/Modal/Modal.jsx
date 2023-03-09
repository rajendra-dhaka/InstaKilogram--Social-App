import { IonButton, IonButtons, IonContent, IonIcon, IonImg, IonModal, IonTitle, IonToolbar } from "@ionic/react";
import { closeOutline } from "ionicons/icons";
import React from "react";
import { usePostData } from "../../context/PostDataContext";
import './Modal.scss';

export const Modal = ({ setModalIsOpen, modalIsOpen }) => {
  const { userStatus, setUserStatus } = usePostData();
  return (
    <IonModal isOpen={userStatus !== null}>
      <IonToolbar>
        <IonTitle>{userStatus?.name}</IonTitle>
        <IonButtons slot='end'>
          <IonButton
            onClick={() => {
            setUserStatus(null);
            }}>
            <IonIcon icon={closeOutline}></IonIcon>
          </IonButton>
        </IonButtons>
      </IonToolbar>

      <IonContent className='ion-padding'>
        <IonImg src={userStatus?.image}></IonImg>
      </IonContent>
    </IonModal>
  );
};
