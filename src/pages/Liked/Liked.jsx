import { IonCol, IonContent, IonGrid, IonLoading, IonPage, IonRow } from "@ionic/react";
import React, { useEffect } from "react";
import { Post } from "../../components";
import { usePostData } from "../../context/PostDataContext";


export const Liked = () => {
  const { postFilteredData, showLoading, setShowLoading } = usePostData();

  useEffect(() => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
    }, 1000);
  }, [setShowLoading]);

  const likedPost = postFilteredData.filter((item) => {
    return item.isLiked === true
  })

  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed>
          <IonRow>
            <IonCol>
              {likedPost.length > 0 ? likedPost.map((item) => <Post post={item} key={ item?.id} />) : 'Please Like Some Posts!!!'}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonLoading cssClass='my-custom-class' isOpen={showLoading} message={'Please wait...'} />
    </IonPage>
  );
};
