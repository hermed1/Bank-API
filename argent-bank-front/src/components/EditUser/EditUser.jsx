import React, { useState } from 'react';
import './EditUser.css';
import { useSelector } from 'react-redux';

const EditUser = () => {
  const userInfos = useSelector((state) => state.user.userInfo);
  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);

  console.log('iseditingfirst', isEditingFirstName);

  return (
    <div className='edit__user__container'>
      <h1>Edit User Profile</h1>
      <div className='edit__FirstName__Container'>
        <label htmlFor='userOriginalName'>Your last name : </label>
        <input
          type='text'
          id='userOriginalName'
          value={userInfos.lastName}
          disabled={!isEditingLastName}
          className={`edit__user__input ${
            isEditingLastName ? 'edit__user__input--editing' : ''
          }`}
        />
        <i
          className={`fa fa-pen-to-square fa-lg ${
            isEditingLastName ? 'hidden' : ''
          }`}
          onClick={() => setIsEditingLastName(!isEditingLastName)}
        />

        {isEditingLastName && (
          <div className='edit__user__icons--editing'>
            <i
              className='fa-solid fa-xmark fa-lg'
              onClick={() => setIsEditingLastName(!isEditingLastName)}
            ></i>
            <i className='fa-solid fa-check fa-lg'></i>
          </div>
        )}
      </div>
      <div className='edit__FirstName__Container'>
        <label htmlFor='userOriginalName'>Your first name : </label>
        <input
          type='text'
          id='userOriginaFirstlName'
          value={userInfos.firstName}
          disabled={!isEditingFirstName}
          className={`edit__user__input ${
            isEditingFirstName ? 'edit__user__input--editing' : ''
          }`}
        />
        <i
          className={`fa fa-pen-to-square fa-lg ${
            isEditingFirstName ? 'hidden' : ''
          }`}
          onClick={() => setIsEditingFirstName(!isEditingFirstName)}
        />

        {isEditingFirstName && (
          <div className='edit__user__icons--editing'>
            <i
              className='fa-solid fa-xmark fa-lg'
              onClick={() => setIsEditingFirstName(!isEditingFirstName)}
            ></i>
            <i className='fa-solid fa-check fa-lg'></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditUser;
