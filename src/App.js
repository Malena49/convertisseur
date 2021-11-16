
import currencies from './data/currencies';
import Header from './components/Header';
import Body from './components/Body';
import {useState} from 'react';
import Footer from './components/Footer';

function App() {
 const [currency_select, setcurrency_select] = useState("Australian Dollar")
  return (
    <div className="App">
<Header />
<Body data_currencies ={currencies} currency_select={currency_select} setcurrency_select={setcurrency_select}/>
   <Footer data_currencies ={currencies} currency_select={currency_select}/>
    </div>
  );
}

export default App;
