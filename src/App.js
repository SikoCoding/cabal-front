import React,{useState,useEffect} from 'react'

function App() {
  const [items,setItem] = useState([])
  useEffect(()=>{
    fetch('https://enchanting-leotard-calf.cyclic.app/cabal')
    .then(res => res.json())
    .then((result)=>{
      // console.log(result)
      setItem(result)
    })
  },[])
  return (
    
    <div>
      <h1>Cabal Monitoring</h1>
       <ul>
     {items.map((item)=>(
      <li key={item.id}>
        ID   :{item.Username} 
        . Level: {item.Level} 
        . Gem  : {item.Gem} 
        . User : {item.VM}
        . จอที่  : {item.VMnumber}
        . สถานะ : กำลังทำงานจุดที่ = 31, ลูป = 4
      </li>
     ))}
     </ul>
    </div>
  )
};

export default App