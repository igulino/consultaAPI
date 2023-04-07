import { useEffect, useState } from 'react';
import { req } from  './akisius';

function App() {

  interface ServerData {
    nome: "", descri: ""
  }
  

  const [arr, setArr] = useState<ServerData[]>([]);
  const [pka, est] = useState('');
  
  async function az() {
    const zia = await req.get('/produtos');
    setArr(zia.data);
    console.log(arr);
  }

  const aziu = () => {
    az()
    
  }
  useEffect(()=>{
    const bika = arr.filter((nome) =>{
        if(nome.nome == pka){
          console.log('assss');
           
        }
    })
    
  }, [pka])

  return (
    <div>
      <input type="text" id='ui' onChange = {(i => est(i.target.value))}></input>
      <p>{pka}</p>
      <button onClick={aziu}>aperta!</button>
      <ul>
        {arr.map(ar => (
        <li key={ar.nome}>
          {ar.nome}
        </li>
      ))}</ul>
    </div>
  )
}

export default App
