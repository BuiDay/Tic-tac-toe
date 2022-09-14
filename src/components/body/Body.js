import React, { useEffect, useState } from 'react';
import Board from './Board';
import './Body.css'
import { calculateWinner } from './calculate';

const Body = ({setIsWinner, name1, name2}) => {

    const [n, setN] = useState(30);

    const [board, setBoard] = useState(Array(30*30).fill(null));
    const [number, setNumber] = useState([0])
    const [next, setNext] = useState(true);
    const [winner, setWinner] = useState ("");
    const [name, setName] = useState (name1);

    const handleClick = (index) =>{
        const boardCopy = [...board];
        if(winner || boardCopy[index]) return;
        boardCopy[index] = next ? "X" : "O" ;
        setBoard(boardCopy);
        setNext(!next);
        setNumber(oldArray => [...oldArray, index])
        setName(next ? name2 : name1)
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

    useEffect(()=>{
       
            const x = window.innerWidth
            const n = Math.floor((x-400)/35);
            if(n > 30){
                setBoard(Array(30*30).fill(null));
                setN(30);
            }else if (n<8){
                setBoard(Array(8*8).fill(null));
                setN(8);
            }else{
                setBoard(Array(n*n).fill(null));
                setN(n)
            }
           
        
    },[window.innerWidth])


    return (
        <>  
            <p className="playing">Đến lượt: {name}</p>
            <Board cells={board} n={n} onClick={handleClick}/>
        </>
    );
};

export default Body;

 