import PropTypes from 'prop-types'
import Option from './Option'
function Body({data_currencies, currency_select,setcurrency_select}) {
const handleChange =(e) =>{
    setcurrency_select(e.target.value)
}
    return (
        <form>
      <label>Currencies</label>
        <select size="5" onChange={handleChange} value={currency_select}>
                {data_currencies.map((monnaie)=><Option key={monnaie.name} {...monnaie}/>)}
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
