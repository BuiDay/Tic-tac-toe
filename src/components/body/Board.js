import React from 'react';
import Square from './Square';
import styled from 'styled-components';


const Board = (props) => {

    return (
        <Contanier style={{
            display:'grid',
            gridTemplateColumns:`repeat(${props.n},1fr)`,
            gridTemplateRows:`repeat(${props.n},1fr)`
        }}>
           {
            props.cells.map((item,index)=>{
                return(
                    <Square key={index} 
                            next={props.next}
                            value ={item} 
                            onClick={()=>{props.onClick(index)}}  
                            className = {item === "O" ? "is-O" : item === "X" ? "is-X" : ''}
                    />
                )
            })
           }
        </Contanier>
    );
};

export default Board;

const Contanier = styled.div`
    width:max-content;
    margin:0 auto;
    gap:5px;
`