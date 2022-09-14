import React, { useEffect, useState } from 'react';
import './Modal.css'



const Modal = (props)=> {
    const {name1, name2, isWinner, onClick,time} = props
    const name = (isWinner === "X") ? name1 : (isWinner === "O") ? name2 : isWinner; 
    const [second, setSecond] = useState();
    const [minute, setMinute] = useState();

   
    console.log(time)
    useEffect(()=>{
        
        const n = (1200-time) / 60;
        if( n <= 1){
            setMinute(0);
            setSecond(1200-time);
        }else{
            setMinute(Math.floor(n));
            setSecond((minute*60)-time);
        }
        
    })
    console.log(minute,second)
    return (
        <div className='modal__container'>
            <div className='modal__content'>
                <div className='modal__winner' > {isWinner === "Hoà" ? "Hoà" : `Chiến thắng: ${name}`}</div>
                <div className='modal__time'>Thời gian: {minute} phút {second} giây</div>
                <button className='modal__btn' onClick={()=>onClick()}>Chơi lại</button>
            </div>
        </div>
    );
};

export default Modal;