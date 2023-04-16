import React from "react";
import { useState } from "react";
import { motion,AnimateSharedLayout } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Card.css";
import Chart from 'react-apexcharts'

import { UilTimes } from "@iconscout/react-unicons";
const CardBoard = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

//compact card
function CompactCard({ param,setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId='expandableCard'
    >

      <div className="radialbar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>

      <div className="details">
        <Png />
        <span>${param.value}</span>
        {/* use timestamp from api */}
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, setExpanded }) {
    //  to do customise the chart to show students
    const data = {
        options:{
            chart:{
                type:"area",
                height:"auto",
            }
        },
        dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: '#000',
            opacity: 0.35
        },
        fill: {
            colors:["#fff"],
            type: "gradient",
        },
        dataLabels:{
            enabled: false,
        },
        stroke: {
            curve:"smooth",
            colors: ["white"],
        },
        xaxis:{
            categories:[
                "S1",
                "S2",
                "S3",
                "S4",
                "S5",
                "S6"
            ]
        }
    }
  return (
    <motion.div className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      >
      <div className="times">
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
      <Chart series={param.series} type="area" options={data.options}/>
      </div>
      <span>last 24 hours</span>
    </motion.div>
  );
}

export default CardBoard;