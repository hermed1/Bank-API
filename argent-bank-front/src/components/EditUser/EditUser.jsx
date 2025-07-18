import React, { useState, useEffect } from 'react';
import './EditUser.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserInfo } from '../../store/userSlice';
import axios from 'axios';

const EditUser = () => {
  const userInfos = useSelector((state) => state.user.userInfo);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const [isEditingLastName, setIsEditingLastName] = useState(false);
  const [isEditingFirstName, setIsEditingFirstName] = useState(false);
  const [lastNameValue, setLastNameValue] = useState(userInfos.lastName);
  const [firstNameValue, setFirstNameValue] = useState(userInfos.firstName);

  useEffect(() => {
    if (userInfos) {
      setLastNameValue(userInfos.lastName);
      setFirstNameValue(userInfos.firstName);
    }
  }, [userInfos]);

  const saveInfos = (input) => {
    axios
      .put(
        'http://localhost:3001/api/v1/user/profile',
        {
          firstName: firstNameValue,
          lastName: lastNameValue,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        dispatch(updateUserInfo(response.data.body));
        if (input === 'lastName') setIsEditingLastName(false);
        else if (input === 'firstName') setIsEditingFirstName(false);
      })
      .catch((error) => {
        console.error('Error updating user info:', error);
      });
  };
  return (
    <div className='edit__user__container'>
      <h1>Edit User Profile</h1>
      <div className='edit__FirstName__Container'>
        <label htmlFor='userOriginalName'>Your last name : </label>
        <input
          type='text'
          id='userOriginalName'
          value={lastNameValue}
          disabled={!isEditingLastName}
          className={`edit__user__input ${
            isEditingLastName ? 'edit__user__input--editing' : ''
          }`}
          onChange={(e) => setLastNameValue(e.target.value)}
        />
        <i
          className={`fa fa-pen-to-square fa-lg ${
            isEditingLastName ? 'hidden' : ''
          }`}
          onClick={() => setIsEditingLastName(true)}
        />

        {isEditingLastName && (
          <div className='edit__user__icons--editing'>
            <i
              className='fa-solid fa-xmark fa-lg'
              onClick={() => {
                setLastNameValue(userInfos.lastName);
                setIsEditingLastName(!isEditingLastName);
              }}
            ></i>
            <i
              className='fa-solid fa-check fa-lg'
              onClick={() => {
                saveInfos('lastName');
              }}
            ></i>
          </div>
        )}
      </div>
      <div className='edit__FirstName__Container'>
        <label htmlFor='userOriginalName'>Your first name : </label>
        <input
          type='text'
          id='userOriginaFirstlName'
          value={firstNameValue}
          disabled={!isEditingFirstName}
          className={`edit__user__input ${
            isEditingFirstName ? 'edit__user__input--editing' : ''
          }`}
          onChange={(e) => setFirstNameValue(e.target.value)}
        />
        <i
          className={`fa fa-pen-to-square fa-lg ${
            isEditingFirstName ? 'hidden' : ''
          }`}
          onClick={() => setIsEditingFirstName(true)}
        />

        {isEditingFirstName && (
          <div className='edit__user__icons--editing'>
            <i
              className='fa-solid fa-xmark fa-lg'
              onClick={() => {
                setFirstNameValue(userInfos.firstName);
                setIsEditingFirstName(!isEditingFirstName);
              }}
            ></i>
            <i
              className='fa-solid fa-check fa-lg'
              onClick={() => {
                saveInfos('firstName');
              }}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditUser;
