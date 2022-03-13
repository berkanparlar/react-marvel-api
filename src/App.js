import axios from 'axios';
import React,{useState,useEffect} from 'react';
import './App.css';
import { ChacterTable } from './components/ChacterTable';
import Header from './components/Header';
import Search from './components/Search';

const hash = "b3d40a0a6f29a07d62be3fa197ab1152"



function App() {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [query,setQuery]=useState("")
  useEffect(()=>{
    const fetch= async()=>{
      if(query===''){
      const result=await axios(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6aebb8431862a419f4fe815f2b30728f&hash=${hash}`) 
      console.log(result.data.data.results)
      setItems(result.data.data.results)
      setLoading(false)
      }else{
      const result=await axios(`http://gateway.marvel.com/v1/public/characters?nameStartsWith=${query}&ts=1&apikey=6aebb8431862a419f4fe815f2b30728f&hash=${hash}`) 
      console.log(result.data.data.results)
      setItems(result.data.data.results)
      setLoading(false)
      }
      
    }

    fetch()
  },
  [query]
  )

  return (
    <div className="container">

      <Header/>
      <Search search={(q)=>setQuery(q)}/>
      <ChacterTable items={items} isLoading={isLoading}/>
    </div>
  );
}

export default App;
