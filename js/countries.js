const allCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(data => loadCountryDetails(data))
}


const loadCountryDetails = countries => {
    //console.log(counties)
    const divELement = document.getElementById('all-countries')
    for (const country of countries) {
       
        
        const newDiv = document.createElement('div')
        newDiv.classList.add('country')
        newDiv.innerHTML = `
        <h2>country:${country.name.common} </h2>
        <p>capital:${country.capital ? country.capital[0] : 'no capital'}</p>
        <button onclick = "loadCountriesDisplay('${country.cca2}')">country details</btton>
        
        `
        divELement.appendChild(newDiv);
        //console.log(country)
        
    }
}

const loadCountriesDisplay = code => {
   const url = `https://restcountries.com/v3.1/alpha/${code}`
   //const url = 'https://restcountries.com/v3.1/alpha/{code}'
    fetch(url)
    .then(response => response.json())
    .then(data => displayCountries(data[0]))


}

const displayCountries = country => {
    console.log(country)


    const countryElement = document.getElementById('country')

    countryElement.innerHTML =`
    <h2>Name:${country.name.common}</h2>
    <img src = "${country.flags.png}">
    
    `

    
}
allCountries()