$('.change-location').submit(async(e) => {
    e.preventDefault()
    try {
        const city = $('input[name="city"]').val().trim()
        const weather = await getWeather(city)
        console.log(weather)
        updateUI(weather)
        $('input[name="city"]').val('')
        $('div.card').removeClass("d-none")
    } catch (e) {
        $('.error-message').css("visibility", "visible")
        setTimeout(() => {
            $('.error-message').css("visibility", "hidden")
        }, 2000)
    }
})

function updateUI(weather) {
    console.log(weather)
    $('.details').html(`
        <h5 class="my-3">${weather.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;${weather.Temperature.Metric.Unit}</span>
        </div>
    `)
    const dayTime = weather.IsDayTime ? 'day' : 'night'
    $('img.time').attr("src", `img/${dayTime}.svg`)
    $('.icon>img').attr("src", `img/icons/${weather.WeatherIcon}.svg`)
}