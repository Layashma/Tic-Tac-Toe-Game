import React, { useEffect } from 'react';
import  './Body.css';
import { useState } from 'react';
const a=[" "," "," "," "," "," "," "," "," "]
const Body = () => {
  const lines=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  
  

  let c=1;
  const [arr,setnewarr]  =useState(a);
  
  useEffect(() => {
  const playerwonfun=(a,b,c)=>{
   return lines.filter((sqindices)=>{
    const squarevalues=sqindices.map(item=>arr[item]);
    return JSON.stringify([a,b,c]) === JSON.stringify(squarevalues)
   })
  }
  
   const playwon=playerwonfun('X','X','X').length>0
   const compwon=playerwonfun('O','O','O').length>0
   if(playwon){
    alert("Congrats! You Won the Game")
   }
   if(compwon){
    alert("Computer You Won the Game")
   }
    const iscpu=arr.filter(item => item!=" ").length%2=== 1;
    if(iscpu && arr.filter(item => item==" ").length>0){
      console.log(arr.filter(item => item!=" ").length)
    c=Math.floor(Math.random() * 9);
    while(arr[c]=='X' || arr[c]=='O'){
    c=Math.floor(Math.random() * 9);
    }
    
    const cnarr=[...arr]
    cnarr[c]='O'
    setnewarr(cnarr)
    }
    
  }, [...arr])
  
  
  function clickhandle(r){
   if(arr[r]=='X' || arr[r]=='O'){
    alert("Invalid operation Click on another box")
    return 0;
   }
   const isplayer=arr.filter(item => item!=" ").length%2=== 0;
   if(isplayer){
    console.log(arr.filter(item => item!=" ").length)
   const narr=[...arr]
   narr[r]='X';
   setnewarr(narr)
   }
  }

  return (
    <div>
        <h1 style={{color:"white"}}>Player1 : USER</h1>
        <h1 style={{color:"white"}}>Player2 : COMPUTER</h1>
        <div className='grid-container'>
          <div className='grid-item' onClick={(e)=>{clickhandle(0)}}>{arr[0]}</div>
          <div className='grid-item' onClick={(e)=>{clickhandle(1)}}>{arr[1]}</div>
          <div className='grid-item' onClick={(e)=>{clickhandle(2)}}>{arr[2]}</div>
          <div className='grid-item' onClick={(e)=>{clickhandle(3)}}>{arr[3]}</div>
          <div className='grid-item' onClick={(e)=>{clickhandle(4)}}>{arr[4]}</div>
          <div className='grid-item' onClick={(e)=>{clickhandle(5)}}>{arr[5]}</div>
          <div className='grid-item' onClick={(e)=>{clickhandle(6)}}>{arr[6]}</div>
          <div className='grid-item' onClick={(e)=>{clickhandle(7)}}>{arr[7]}</div>
          <div className='grid-item' onClick={(e)=>{clickhandle(8)}}>{arr[8]}</div>
        </div>

    </div>
  )
}

export default Body