import React from 'react'
import { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Card.css"

const Card = (props) => {

    const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
        {
            expanded?(
                {/* <ExpandedCard/> */}

            ):
            <CompactCard param = {props}/>
        }
    </AnimateSharedLayout>
  )
}

//compact card
function CompactCard ({param}){
    const Png = param.png;
    return(
        <div className="CompactCard"
        style= {
            {
                background : param.color.backGround,
                boxShadow : param.color.boxShadow,
            }

        }>
            <div className="radialbar">
                <CircularProgressbar
                value={param.barValue}
                text = {`${param.barValue}%`}
                /> 
                 <span>{param.title}</span>
            </div>
           
            <div className="details">
                <Png/>
                <span>${param.value}</span>
                {/* use timestamp from api */}
                <span>Last 24 hours</span>

            </div>
        </div>
    )
}



export default Card