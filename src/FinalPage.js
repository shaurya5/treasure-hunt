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
        { name: username, time_started: timeStarted, time_ended: timeEnded, id: idNo }  
      ])
      .single();
  }

  async function handleClick() {
    const today = new Date();
    const timeNow = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const date = today.getDate() + "-" + today.getMonth() + "-" + today.getFullYear();
    localStorage.setItem("time_ended", timeNow);
    var timeEnded = localStorage.getItem('time_ended');
    var timeStarted = localStorage.getItem('time_started');
    var username = localStorage.getItem('name');  
    var idNo = localStorage.getItem('ID');
    
    await supabase
      .from('data')
      .insert([
        { name: username, date: date, time_started: timeStarted, time_ended: timeEnded, id: idNo }  
      ])
      .single();
    
    localStorage.removeItem('name');
    localStorage.removeItem('ID');
    localStorage.removeItem('time_started');
    localStorage.removeItem('time_ended');
    navigate('end-event21');
    // navigate('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
  }
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.heading}>Well did your partner say yes or no?
      <br/>
      Not gonna lie, that's not upto the story maker to decide</h1>
//       <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
        <button className={styles.btn} onClick={handleClick}>Stop Timer</button>
//       </a>
    </div>
  );
}

export default FinalPage;
