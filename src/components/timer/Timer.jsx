import React, { useEffect, useState } from 'react'
import style from './Timer.module.scss'
import Circle from '../circle/Circle'

const Timer = () => {

  return (
    <div className={style.main}>

        <div className={style.imgBox}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png" alt="" />
        </div>

        <div className={style.text}>

            <p className={style.par}>Deal Of The Week</p>
            <div className={style.timer}>

                <Circle time={3} name="Day"/>
                <Circle time={10} name="Hours"/>
                <Circle time={20} name="Mins"/>
                <Circle time={50} name="Sec"/>

            </div>

            <button>SHOP NOW</button>

        </div>

    </div>
  )
}

export default Timer