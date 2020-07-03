import React from 'react';
import style from './Profile.module.sass';
import Description from './Description/Description';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../../common/Preloader/Preloader";


const Profile = ({
                    profile, status,
                    updateStatus,
                    updateDataProfile,
                    isOwner, savePhoto
                 }) => {
   if (!profile) {
      return <Preloader/>
   }
   return (
      <div className={style.wrapperContent}>
         <Description savePhoto={savePhoto}
                      isOwner={isOwner}
                      profile={profile}
                      status={status}
                      updateStatus={updateStatus}
                      updateDataProfile={updateDataProfile}
         />
         {isOwner && <MyPostsContainer/>}
      </div>
   )
}


export default Profile;