import { IonCol, IonContent, IonGrid, IonPage, IonRow } from "@ionic/react";
import React from "react";
import { Post } from "../../components";
import { usePostData } from "../../context/PostDataContext";


export const Liked = () => {
  const { myPostData, showLoading } = usePostData();
  const likedPost = myPostData.filter((item) => {
    return item.isLiked === true
  })

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>{likedPost.length > 0 && likedPost.map((item) => <Post post={item} />)}</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
