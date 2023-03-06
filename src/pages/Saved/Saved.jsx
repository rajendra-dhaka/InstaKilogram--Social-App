import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React from "react";
import { Post } from "../../components";
import { usePostData } from "../../context/PostDataContext";

export const Saved = () => {
 const { myPostData, showLoading } = usePostData();
 const savedPost = myPostData.filter((item) => {
   return item.isSaved === true;
 });

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>{savedPost.length > 0 && savedPost.map((item) => <Post post={item} />)}</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
