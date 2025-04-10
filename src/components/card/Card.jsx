import React from 'react'
import style from './Card.module.scss'
import { CiHeart } from "react-icons/ci";

const Card = ({item}) => {
  return (
   <div className={style.container}>
        
        <CiHeart className={style.heart}/>

        <div className={style.imgBox}>
            <img src={item.image} alt="" />
        </div>

        <div className={style.text}>

            <p className={style.title}>{item.title}</p>
            <p className={style.price}>${item.price}</p>

        </div>

        <button className={style.btn}>ADD TO CART</button>

    </div>
  )
}

export default Card
