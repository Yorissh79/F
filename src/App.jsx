import './App.scss'
import Header from './components/header/Header'
import Card from './components/card/Card'
import Photo from './components/photo/Photo'
import Test from './components/test/Test'
import Bort from './components/bort/Bort'
import Time from './components/timer/Timer'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {

  const [data, setData] = useState([])

  const getData = () => {
    axios.get("https://fakestoreapi.com/products")
    .then(res => {
      setData(res.data)
    })
  }

  useEffect(() => {
    getData()
  },[])

  return (

    <div className='cont'>

      <Header/>
      <Photo/>
      <div className='center'>
        <Test image="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" link="#" text="WOMEN'S"/>
        <Test image="https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" link="#" text="ACCESSORIES'S"/>
        <Test image="https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" link="#" text="MEN'S"/>
      </div>

      <Bort/>

      <div className='boddy'>

        {data && data.map(item => <Card item={item}/>)}

      </div>

      <Time/>

    </div>


  )
}

export default App