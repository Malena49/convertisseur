import PropTypes from 'prop-types'

function Footer({data_currencies, currency_select, nombre_euros}) {
    const filter = data_currencies.filter((currency)=>currency.name===currency_select)
    return (
        <footer>
       <h3>{filter[0].rate*nombre_euros}</h3>
            <h4>
                {currency_select}
            </h4>
        </footer>
    )
}

Footer.propTypes = {
    data_currencies: PropTypes.arrayOf(
        PropTypes.shape({
            rate : PropTypes.number.isRequired
        }).isRequired
    ).isRequired
}

export default Footer

