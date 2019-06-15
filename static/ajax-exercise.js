"use strict";


// PART 1: SHOW A FORTUNE
// function fortune(response) {
//     //console.log(response);
//     $('#fortune-text').html(response);
// }


// function showFortune() {
//     $.get('/fortune', fortune);
// }
// or

function showFortune() {
    $.get('/fortune', (response) => $('#fortune-text').html(response));
}
$('#get-fortune-button').on('click', showFortune);

// PART 2: SHOW WEATHER

function forecast(response) {
    console.log(response);
    $('#weather-info').html(response.forecast);
}

function showWeather(evt) {
    evt.preventDefault();
    let url = "/weather.json";
    let formData = {"zipcode": $("#zipcode-field").val()};
    $.get(url, forecast);
}
    // TODO: request weather with that URL and show the forecast in #weather-info


$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


