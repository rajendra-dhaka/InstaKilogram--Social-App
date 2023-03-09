import { IonButton, IonImg } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { usePostData } from '../../context/PostDataContext';
import { Modal } from '../Modal/Modal';
import './CircularScrollbar.scss';

const userNames = [
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' },
  { name: 'David' },
  { name: 'Eve' },
  { name: 'Frank' },
  { name: 'Grace' },
  { name: 'Alice' },
  { name: 'Bob' },
  { name: 'Charlie' },
];
export const CircularScrollbar = () => {
  const [userStatusData, setUserStatusData] = useState([]);
  const { setUserStatus } = usePostData();

  useEffect(() => {
    const statusInfo = userNames.map((item, index) => {
      return {
        name: item.name,
        image: `https://picsum.photos/id/${+index + 10}/200/300`,
      };
    });
    setUserStatusData(statusInfo);
  }, []);

  return (
    <div className='scroll-x circular-scrollbar'>
      {userStatusData &&
        userStatusData.map((item, index) => (
          <div
            key={index}
            className='scroll-item mar-b-10'
            onClick={() => {
              setUserStatus(item);
            }}>
            <IonButton fill='clear' shape='round'>
              <IonImg src={item.image} />
            </IonButton>
            <h6 className='ion-no-margin ion-text-capitalize font14'>{item.name}</h6>
          </div>
        ))}
      <Modal />
    </div>
  );
};
