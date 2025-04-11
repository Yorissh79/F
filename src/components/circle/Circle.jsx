import React from 'react'
import style from './Circle.module.scss'

const Circle = (item) => {
  return (
    <div className={style.main}>
        <p className={style.time}>{item.time}</p>
        <p className={style.r}>{item.name}</p>
    </div>
  )
}

export default Circle