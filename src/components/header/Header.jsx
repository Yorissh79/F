import React from 'react'
import style from './Header.module.scss'
import { CiSearch, CiShoppingCart, CiUser } from 'react-icons/ci'

const Header = () => {
  return (
    <div className={style.container}>
        
        <div className={style.logo}>
          <a href="#">COLO<span>SHOP</span></a>
        </div>

        <div className={style.cata}>

            <ul>
                <li>HOME</li>
                <li>SHOP</li>
                <li>PROMOTION</li>
                <li>PAGES</li>
                <li>BLOG</li>
                <li>CONTACT</li>
            </ul>

        </div>

        <div className={style.icons}>
            <CiSearch style={{fontSize:"1.2em"}}/>
            <CiUser  style={{fontSize:"1.2em"}}/>
            <CiShoppingCart  style={{fontSize:"1.2em"}}/>    
        </div>


    </div>
  )
}

export default Header
