import { IonCol, IonContent, IonGrid, IonLoading, IonPage, IonRow } from "@ionic/react";
import React, { useEffect } from "react";
import { Post } from "../../components";
import { usePostData } from "../../context/PostDataContext";

export const Saved = () => {
  const { myPostData, showLoading, setShowLoading } = usePostData();

  useEffect(() => {
    setShowLoading(true);
    setTimeout(()=>{ setShowLoading(false);},1000)
  }, [])
  
 const savedPost = myPostData.filter((item) => {
   return item.isSaved === true;
 });
  

  return (
    <IonPage>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>{savedPost.length > 0 ? savedPost.map((item) => <Post post={item} />):'Please Save Some Posts!!!'}</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <IonLoading cssClass='my-custom-class' isOpen={showLoading} message={'Please wait...'} />
    </IonPage>
  );
};
