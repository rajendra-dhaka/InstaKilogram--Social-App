import { IonCol, IonContent, IonGrid, IonLoading, IonPage, IonRow } from "@ionic/react";
import React, { useEffect } from "react";
import { Post } from "../../components";
import { usePostData } from "../../context/PostDataContext";

export const Saved = () => {
  const { postFilteredData, showLoading, setShowLoading } = usePostData();

  useEffect(() => {
    setShowLoading(true);
    setTimeout(() => {
      setShowLoading(false);
    }, 1000);
  }, [setShowLoading]);
  
 const savedPost = postFilteredData.filter((item) => {
   return item.isSaved === true;
 });
  

  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed>
          <IonRow>
            <IonCol>
              {savedPost.length > 0
                ? savedPost.map((item) => <Post post={item} key={item?.id} />)
                : 'Please Save Some Posts!!!'}
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonLoading cssClass='my-custom-class' isOpen={showLoading} message={'Please wait...'} />
    </IonPage>
  );
};
