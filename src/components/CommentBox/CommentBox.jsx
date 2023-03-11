import { IonButton, IonCard, IonInput } from "@ionic/react";
import React, { useState } from "react";
import { usePostData } from "../../context/PostDataContext";
import './CommentBox.scss';

export const CommentBox = ({ post, showComment }) => {
  const { setPostFilteredData, setMyPostData, postFilteredData } = usePostData();
  const [comment, setComment] = useState(null);

  const handleAddComment = (postId) => {
        if (postId && comment.trim().length > 0) {
          setPostFilteredData((prevData) => {
            // Find the object with the matching id
            const objectIndex = prevData.findIndex((post) => post.id === postId);

            const updatedObject = {
              ...prevData[objectIndex],
              comments: [...prevData[objectIndex].comments, { username: 'TestUser', text: comment }],
            };

            const updatedArray = [...prevData.slice(0, objectIndex), updatedObject, ...prevData.slice(objectIndex + 1)];
            // Empty the comment text
            setComment('');
            // Return the updated array
            return updatedArray;
          });
        
          setMyPostData((prevData) => {
            // Find the object with the matching id
            const objectIndex = prevData.findIndex((post) => post.id === postId);

            const updatedObject = {
              ...prevData[objectIndex],
              comments: [...prevData[objectIndex].comments, { username: 'TestUser', text: comment }],
            };

            const updatedArray = [...prevData.slice(0, objectIndex), updatedObject, ...prevData.slice(objectIndex + 1)];
            // Empty the comment text
            setComment('');
            // Return the updated array
            return updatedArray;
          });
        }
  }

  return (
    <IonCard style={showComment ? { display: 'block' } : { display: 'none' }} className='ion-margin post comment-box'>
      <ul>
        {post?.comments?.length > 0 &&
          post?.comments?.map((comment, index) => <li key={index}>{comment?.username}:&nbsp;{comment?.text}</li>)}
      </ul>
      <IonInput value={comment} onIonChange={(e) => setComment(e.target.value)} placeholder='Comment here!!!'></IonInput>
      <IonButton onClick={() => handleAddComment(post.id)}>Comment</IonButton>
    </IonCard>
  );
};
