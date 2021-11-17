function Header({nombre_euros, setnombre_euros, useToggle,openCur}) {
    const handleChange =(e) =>{
        setnombre_euros(e.target.value)
    }

    const className = openCur === true ? "toggler" : "toggler toggler--open"
    return (
        <header>
            <h1>
            Converter
            </h1>
            <div className="flex">
        <input type="number" value={nombre_euros} onChange={handleChange}/>
            <h2>euros</h2></div>
            <button onClick={useToggle} className={className} type="button">=</button>
        </header>
    )
}

export default Header
