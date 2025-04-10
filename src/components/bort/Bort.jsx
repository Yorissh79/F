import React from 'react'
import style from './Bort.module.scss'

const Bort = () => {
  return (
    <div className={style.bort}>

    <div className={style.f}>
        <p>New Arrivals</p>
    </div>

    <div className={style.s}>

        <div className={`${style.card} ${style.selected}`}>
        <p>All</p>
        </div>

        <div className={style.card}>
        <p>WOMEN'S</p>
        </div>
        
        <div className={style.card}>
        <p>ACCESSORIES</p>
        </div>

        <div className={style.card}>
        <p>MEN'S</p>
        </div>

    </div>

    </div>
  )
}

export default Bort