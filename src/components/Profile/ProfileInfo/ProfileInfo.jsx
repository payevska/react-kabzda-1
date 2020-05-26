import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
  return (
    <div>
      <div className={s.fotoProfile}>
        <img src="https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        ava + description
      </div>
    </div>
  );
}

export default ProfileInfo;