import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import styles from './styles/finalpage.module.css';
import { supabase } from './supabase';

function FinalPage() {

  const navigate = useNavigate();
  const updateDB = async () => {
    var timeEnded = localStorage.getItem('time_ended');
    var timeStarted = localStorage.getItem('time_started');
    var username = localStorage.getItem('name');  
    var idNo = localStorage.getItem('ID');

    await supabase
      .from('data')
      .insert([
        { name: username, time_started: timeStarted, time_ended: timeEnded, id: idNo}  
      ])
      .single();
  }

  function redirect() {
    navigate('/end-event21');
  }

  // useEffect(() => {
  //   updateDB();
  //   redirect();
  // },[]);
  
  async function handleClick() {
    const today = new Date();
    const timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    localStorage.setItem("time_ended", timeNow);
    var timeEnded = localStorage.getItem('time_ended');
    var timeStarted = localStorage.getItem('time_started');
    var username = localStorage.getItem('name');  
    var idNo = localStorage.getItem('ID');
    
    await supabase
      .from('data')
      .insert([
        { name: username, time_started: timeStarted, time_ended: timeEnded, id: idNo }  
      ])
      .single();
    localStorage.removeItem('name');
    localStorage.removeItem('ID');
    localStorage.removeItem('time_started');
    localStorage.removeItem('time_ended');
    
    navigate('/end-event21')
  }
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Bravo! You have found the treasure!</h1>
      <button className={styles.btn} onClick={handleClick}>Stop Timer</button>
    </div>
  );
}

export default FinalPage;