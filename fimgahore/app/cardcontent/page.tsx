'use client'
import Link from "next/link";
import svgContent from './likes.svg';
import React, { useState, useEffect } from 'react';  

export default function Home() {

  const [TestData, setTestData]=useState([
    {'id':1,'img':'../ces.png','title':'Echart generator plugin','username':'Fots','likes':600,'user':23100},
    {'id':2,'img':'../ces.png','title':'Echart generator plugin','username':'Fots','likes':600,'user':23100},
    {'id':3,'img':'../ces.png','title':'Echart generator plugin','username':'Fots','likes':600,'user':23100},
    {'id':4,'img':'../ces.png','title':'Echart generator plugin','username':'Fots','likes':600,'user':23100},
    {'id':5,'img':'../ces.png','title':'Cursors','username':'Fots','likes':50000,'user':5155},
    {'id':6,'img':'../ces.png','title':'Echart generator plugin','username':'Fots','likes':600,'user':23100},
    {'id':7,'img':'../ces.png','title':'Cursors','username':'Fots','likes':600,'user':23100},

  ])
  const TestData2= [
    {'id':8,'img':'../ces.png','title':'Cursors','username':'Fots','likes':50000,'user':54},
    {'id':9,'img':'../ces.png','title':'Echart generator plugin','username':'Fots','likes':600,'user':23100},
  ]


  const PushData=()=>{
    const NewArry=[...TestData,...TestData2] 
    setTestData(NewArry)
  }

  return (
    <div  style={{width: '90%'}}>
    <div className="card-line">
      {
        TestData.map((item)=>(
          <div key={item.id} className="card-item">
            <img className="card-imgage group" src={item.img}></img>
            <img className="card-hoversvg" src='/test.svg'></img>
            <div className="card-title-box">
              <div className="basis-1/2">
                <div className="text-sm">{item.title}</div>
                <Link className="card-title-username" href={'./togo'}>by <span className="footer-detaild">{item.username}</span></Link>
              </div>
              <div className="card-title-likesNumber">
                <img style={{display:'inline'}} src='/likes.svg'></img> {item.likes}  &nbsp;&nbsp;
                <img style={{display:'inline'}} src='/user.svg'></img>  {item.user}
              </div>
            </div>
          </div>
        ))
      }

    </div>
      <div className="load_more_pagination_button">
        <button type="button" className="border-solid border border-black rounded-md text-xs" style={{width:'80px',height:'32px'}} onClick={PushData}>Load more</button>
      </div>
      <select style={{width: "100%"}}>  
          
          <option value="Figme">Figme</option>  
          <option value="Figmes">Figmes</option>  
          <option value="Figme">Figme</option>  
          <option value="AllProduct">AllProductAllProAllProductAllProductAllProductAllProductduct</option>  
        </select> 
    </div>
  );
}

