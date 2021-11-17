
import currencies from './data/currencies';
import Header from './components/Header';
import Body from './components/Body';
import {useState} from 'react';
import Footer from './components/Footer';

function App() {
 const [currency_select, setcurrency_select] = useState("Australian Dollar")
 const [nombre_euros, setnombre_euros] = useState(1)
 const [type_monnaie, settype_monnaie] = useState("")
 const [openCur, setButtonOpen] = useState(true)

 const useToggle = () => {
   setButtonOpen(!openCur)
 }

 console.log(openCur)

  return (
    <div className="App">
<Header nombre_euros={nombre_euros} setnombre_euros={setnombre_euros} useToggle={useToggle} openCur={openCur}/>
<Body data_currencies ={currencies} currency_select={currency_select} setcurrency_select={setcurrency_select} type_monnaie={type_monnaie} settype_monnaie={settype_monnaie} openCur={openCur}/>
   <Footer data_currencies ={currencies} currency_select={currency_select} nombre_euros={nombre_euros}/>
    </div>
  );
}

export default App;
