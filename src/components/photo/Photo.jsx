import React from 'react'
import style from './Photo.module.scss'

const Photo = () => {
  return (
    <div className={style.main}>

        <div className={style.text}>

            <p className={style.para}>
                Spring / Summer Collection 2017
            </p>

            <p className={style.par}>
                Get up to 30% Off New Arrivals
            </p>

            <button>SHOP NOW</button>

        </div>

    </div>
  )
}

export default Photo