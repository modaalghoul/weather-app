const APIkey = 'MOvOla3nQWBM4sqxX9V4n6E8bAiPZE9J'

const getCity = async(city) => {
    const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=${APIkey}&q=${city}`
    const response = await fetch(baseUrl + query)
    const data = await response.json()
    return data[0]
}

const getWeather = async(cityName) => {
    const baseUrl = 'https://dataservice.accuweather.com/currentconditions/v1/'
    const cityDetails = await getCity(cityName)
    const response = await fetch(baseUrl + cityDetails.Key + `?apikey=${APIkey}`)
    const weather = await response.json()
    return {...cityDetails, ...weather[0] }
}
