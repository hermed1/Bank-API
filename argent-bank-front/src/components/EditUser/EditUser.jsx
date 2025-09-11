import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { updateUserInfo } from '../../store/userSlice';
import './EditUser.css';
import { useNavigate } from 'react-router-dom';

export default function EditUser({ setEditUser }) {
  const userInfos = useSelector((state) => state.user.userInfo);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();

  const [lastName, setLastName] = useState('');
  const [firstName, setFirstName] = useState('');

  useEffect(() => {
    if (userInfos) {
      setLastName(userInfos.lastName);
      setFirstName(userInfos.firstName);
    }
  }, [userInfos]);

  const handleSave = async () => {
    try {
      const { data } = await axios.put(
        'http://localhost:3001/api/v1/user/profile',
        { firstName, lastName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(updateUserInfo(data.body));
      setEditUser(false);
    } catch (err) {
      console.error('Erreur mise à jour profil :', err);
    }
  };

  const handleCancel = () => {
    setLastName(userInfos.lastName);
    setFirstName(userInfos.firstName);
    setEditUser(false);
  };

  if (!userInfos) return <div>Loading…</div>;

  return (
    <div className='edit__user'>
      <h1>Welcome back</h1>
      <div className='edit__user__form'>
        <input
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className='edit__user__form__input'
        />
        <input
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className='edit__user__form__input'
        />
      </div>
      <div className='edit__user__actions'>
        <button className='btn save' onClick={handleSave}>
          Save
        </button>
        <button className='btn cancel' onClick={() => handleCancel()}>
          Cancel
        </button>
      </div>
    </div>
  );
}
