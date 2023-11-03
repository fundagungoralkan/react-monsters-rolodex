import {useState,useEffect} from "react"
import './App.css';

import SearchBox from "./components/search-box/search-box.component";

function App() {
const[monsters,setMonsters]=useState([])          // monster kartlari icin usestate
const[searchField,setSearchField]=useState("")  // arama sonuclari icin useState

useEffect(()=>{
  fetch("https://jsonplaceholder.typicode.com/users")     // API bilgilerinin oldugu URL'i fetch ettik
  .then((res)=>res.json())
   .then((users)=>setMonsters(users))           // json icindeki kullanicilari useState olan SetMonster'a ekledik
},[])

const onSearchChange=(e)=>{     //search islemindeki yaptigimiz aramalari lowercase-kucuk harf formatina cevirme 
const searchFieldString=e.target.value.toLocaleLowerCase()
setSearchField(searchFieldString)
}



  return (
    <div className="App">
     <h1 className='app-title'>Monsters Rolodex</h1>

   <SearchBox  className="monster-search-box"
    placeholder="Search Monsters" 
   onChangeHandler={onSearchChange} />
    </div>
  );
}

export default App;

// state  = tutma islemi yapar- kargo kolisi
// props  = tasima islemi yapar- kargo araci 
