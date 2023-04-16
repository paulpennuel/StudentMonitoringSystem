import React from 'react'
import './Cards.css'
import { CardsData } from '../../../data/Data'
import CardBoard  from '../Card/CardBoard'
const Cardboards = () => {
  return (
    <div className='Cards'>
        {CardsData.map((card,id)=>{
            return (
                <div className='parentContainer'>
                    <CardBoard
                    title = {card.title}
                    color = {card.color}
                    barValue = {card.barValue}
                    value={card.value}
                    png={card.png}
                    series={card.series}/>
                </div>
            )
        }
        )}
    </div>
)
}

export default Cardboards