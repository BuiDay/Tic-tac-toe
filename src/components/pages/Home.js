import React,{ useEffect, useState }from 'react';
import './Home.css'
import Body from '../body/Body';
import Header from '../header/Header';
import Modal from '../modal/Modal';

const Home = () => {
    const [play, setPlay] = useState(false)
    const [isWinner, setIsWinner] = useState("")
    const [name1, setName1] = useState('');
    const [name2, setName2] = useState('');
    const [second, setSecond] = useState(0);
    const [minute, setMinute] = useState(20)
    const [time, setTime] = useState(1200);

    const countdown  = () =>{
            if(time > 0){
                if(second > 0){
                    setSecond(second=>second-1);
                    
                }else if (second <= 1)
                {
                    setMinute(minute=>minute-1)
                    setSecond (59);
                }
                setTime(time=>time-1)
            }else{
                setTime(0);
                setIsWinner("Hoà")
            }
        }

    const handlePlay = () =>{
        setPlay(true);  
    }

    const handleRestart = () =>{
        setMinute(20)
        setSecond(0)
        setTime(1200)
        setIsWinner("")
        setPlay(false)
    }

    useEffect(() => {
        if(play && !isWinner){
        const interval = setInterval(countdown,1000);
        if(isWinner){
            clearInterval(interval);
        }       
        return () => clearInterval(interval)
        }
      }, [time,play,isWinner]);

      useEffect(()=>{
        window.addEventListener('resize',()=>{
            setMinute(20);
            setSecond(0);
            setTime(1200);
        })
      },)

    return (
        <>
            {
                play ? (
                <>  
                    <Header second={second} minute={minute}  time={time} name1={name1} name2={name2} /> 
                    <Body setIsWinner={setIsWinner}  name1={name1} name2={name2} />
                    {isWinner ? <Modal name1={name1} name2={name2} isWinner= {isWinner} onClick = {handleRestart} time={time} /> :""}
                </>)  : (
                <div className='body'>
                    <div className='container'>
                        <h3>Cờ ca rô</h3>
                        <form action="submit">
                            <div className="form-control">
                                <label style={{color:"#545851"}}>Nhập tên người thứ nhất</label>
                                <input type="text" value={name1} onChange={e=>setName1(e.target.value)}/>
                            </div>

                            <div className="form-control">
                                <label style={{color:"#F3453F"}}>Nhập tên người thứ hai</label>
                                <input type="text" value={name2} onChange={e=>setName2(e.target.value)}/>
                            </div>
                            <p className='notice'>{name1 && name2 ? "" : "Vui lòng điền tên người chơi !"}</p>
                        </form>
                        <button className='btn' type="" onClick={()=>name1 && name2 ? handlePlay() : ""}> Play</button>
                    </div>
                </div>
                )

            }
            
             
        </>
    );
};

export default Home;