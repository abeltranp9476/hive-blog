import React from 'react'
import { useSelector} from 'react-redux';
import {selectProfile} from '../profile/profileSlice';

export const Avatar = () => { 
    const profile = useSelector(selectProfile);

  return (
        <img src={profile?.user?.metadata?.profile?.profile_image} width="355"/>
  )
}
