import React, { useEffect, useState } from 'react';
import Board from './Board';
import './Body.css'
import { calculateWinner } from './calculate';

const Body = ({setIsWinner}) => {

    const [n, setN] = useState(20);
    const [board, setBoard] = useState(Array(n*n).fill(null));
    const [number, setNumber] = useState([0])
    const [next, setNext] = useState(true);
    const [winner, setWinner] = useState ("");

    const handleClick = (index) =>{
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = next ? "X" : "O" ;
        setBoard(boardCopy);
        setNext(!next);
        setNumber(oldArray => [...oldArray, index])
    };
  
    useEffect(()=>{
        for(var i = 0; i < number.length; i++){
            var x = calculateWinner(board,number[i],n)
            if(x) {
                setWinner(x);
                setIsWinner(x);
            }
        }  
    })

    return (
        <>
            <Board cells={board} n={n} onClick={handleClick}/>
        </>
    );
};

export default Body;

 // useEffect(()=>{
    //     window.addEventListener("resize",()=>{
    //         console.log(window.innerWidth)
    //     })
    // })