const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`)

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error(`Unable to get puzzle`)
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    return getCountry(location.country)  
}

const getCountry = async (countryCode) => {
    const response = await fetch(`https://restcountries.com/v3.1/all`)

    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.cca2 === countryCode)
        
    } else {
        throw new Error(`Unable to fetch the country`)
    }
}

const getLocation = async () => {
    const response = await fetch(`https://ipinfo.io/json?token=f2dbd0c3ab529e`)

    if (response.status === 200) {
        const data = await response.json()
        return data
    } else {
        throw new Error(`Unable to fetch data`)
    }
}

