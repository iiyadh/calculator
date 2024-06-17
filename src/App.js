import { useState } from 'react';
import './App.css';

function App() {
  const [prom,setprom] = useState("");

  return (
    <div className="App">
      <input type="text"
             className='item1'
             value={prom} />
      <input type='button' className="item" onClick={()=>{setprom("")}} value="AC"/>
      <input type='button' onClick={()=>{let newpr=(prom.charAt(0)==='-')? prom.slice(1):'-'+prom;setprom(newpr)}} className="item" value="+/-"/>
      <input type='button' onClick={()=>setprom(prom+"%")} className="item" value="%"/>
      <input type='button' onClick={()=>setprom(prom+"/")} className="item op" value="/"/>
      <input type='button' onClick={()=>setprom(prom+"7")} className="item" value="7"/>
      <input type='button' onClick={()=>setprom(prom+"8")} className="item" value="8"/>
      <input type='button' onClick={()=>setprom(prom+"9")} className="item" value="9"/>
      <input type='button' onClick={()=>setprom(prom+"*")} className="item op" value="x"/>
      <input type='button' onClick={()=>setprom(prom+"4")} className="item" value="4"/>
      <input type='button' onClick={()=>setprom(prom+"5")} className="item" value="5"/>
      <input type='button' onClick={()=>setprom(prom+"6")} className="item" value="6"/>
      <input type='button' onClick={()=>setprom(prom+"-")} className="item op" value="-"/>
      <input type='button' onClick={()=>setprom(prom+"1")} className="item" value="1"/>
      <input type='button' onClick={()=>setprom(prom+"2")} className="item" value="2"/>
      <input type='button' onClick={()=>setprom(prom+"3")} className="item" value="3"/>
      <input type='button' onClick={()=>setprom(prom+"+")} className="item op" value="+"/>
      <input type='button' value="0" onClick={()=>prom+"0"} className='item2'/>
      <input type='button' className="item" onClick={()=>setprom(prom+"+")} value="."/>
      <input type='button' className="item op" onClick={()=>{setprom(eval(prom))}} value="="/>
    </div>
  );
}

export default App;
