import PropTypes from 'prop-types'
import Option from './Option'
function Body({data_currencies, currency_select,setcurrency_select, type_monnaie, settype_monnaie, openCur}) {
const handleChange =(e) =>{
    setcurrency_select(e.target.value)
}

const handleRecherche =(e)=>{
    settype_monnaie(e.target.value)
}
const filtre = type_monnaie.toLowerCase();
const filter = data_currencies.filter((currency)=>currency.name.toLowerCase().includes(filtre))
/*
const valuemonnaie = type_monnaie.charAt(0).toUpperCase() + type_monnaie.slice(1);
const filter = data_currencies.filter((monnaie) => monnaie.name.slice(0,type_monnaie.length) === valuemonnaie)*/
    return (
        <form className={openCur===true?"":"noshow"}>
      <input type="string" value={type_monnaie} placeholder="Recherche" onChange={handleRecherche}/>
        <select size="5" onChange={handleChange} value={currency_select}>

                {
                    type_monnaie==="" ? data_currencies.map((monnaie)=><Option key={monnaie.name} {...monnaie}/>)
                    :
                    filter.map((monnaie)=><Option key={monnaie.name} {...monnaie}/>)
                    }
        </select>
        </form>
    )
}

Body.propTypes ={
    data_currencies: PropTypes.arrayOf(
        PropTypes.shape({
            name : PropTypes.string.isRequired,
        }).isRequired
    ).isRequired
}

export default Body
