import './App.scss'
import Header from './components/header/Header'
import Card from './components/card/Card'
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
      <div className='boddy'>

        {data && data.map(item => <Card item={item}/>)}

      </div>


    </div>


  )
}

export default App