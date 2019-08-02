// Для курсов валют
rates = {};
usd = {};
eur = {};

$(document).ready(function () {

    let inputRub = $("#rub"),
        inputUsd = $("#usd"),
        inputEur = $("#eur");

    // Загружаем курсы валют
    $.ajax({
        url: 'https://www.cbr-xml-daily.ru/daily_json.js',
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            rates = data.Valute;
            usd = rates.USD.Value;
            eur = rates.EUR.Value;
            console.log(rates);
            console.log(usd);
            console.log(eur);
        },
        error: function () {
            alert('Не удалось загрузить данные.');
        }
    });


    //вводим рубль
    $('#rub').bind({
        keyup: function () {

            rubUsd = inputRub.val() / usd;
            inputUsd.val(rubUsd.toFixed(4));

            rubEur = inputRub.val() / eur;
            inputEur.val(rubEur.toFixed(4));
        },
        click: function () {
            $('#rub').val('');
            $('#usd').val('');
            $('#eur').val('');
        }
    });


    //вводим доллар
    $('#usd').bind({
        keyup: function () {

            usdRub = inputUsd.val() * usd;
            inputRub.val(usdRub.toFixed(4));

            usdEur = usd / eur * inputUsd.val();
            inputEur.val(usdEur.toFixed(4));
        },
        click: function () {
            $('#rub').val('');
            $('#usd').val('');
            $('#eur').val('');
        }
    });


    //вводим евро
    $('#eur').bind({
        keyup: function () {

            eurRub = inputEur.val() * eur;
            inputRub.val(eurRub.toFixed(4));

            eurUsd = eur / usd * inputEur.val();
            inputUsd.val(eurUsd.toFixed(4));
        },
        click: function () {
            $('#rub').val('');
            $('#usd').val('');
            $('#eur').val('');
        }
    });


});