import React from 'react'
import style from './Test.module.scss'

const Test = (props) => {
  return (
    <div className={style.main}>

        <div className={style.box} style={{backgroundImage: `url(${props.image})`}}>
            
            <div className={style.banner}>
                <a href={props.link}>{props.text}</a>
            </div>

        </div>

    </div>
  )
}

export default Test