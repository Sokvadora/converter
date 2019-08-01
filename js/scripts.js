// Для курсов валют
rates = {};

$(document).ready(function () {
    // Загружаем курсы валют
    $.ajax({
        url: 'https://www.cbr-xml-daily.ru/daily_json.js',
        crossDomain: true,
        dataType: 'json',
        success: function (data) {
            rates = data.Valute;
            console.log(rates);
            console.log(rates.USD.Value);
            console.log(Object.keys(rates));
            console.log(Object.getOwnPropertyNames(rates.USD));
        },
        error: function () {
            alert('Не удалось загрузить данные.');
        }
    });

    // При клике на кнопку "рассчитать"
    $('#calculate').click(function () {
        let inputRub = $("#rub"),
            inputUsd = $("#usd"),
            inputEur = $("#eur");

        // Вычисляем результат
        rubUsd = inputRub.val() / rates.USD.Value;
        inputUsd.val(rubUsd.toFixed(2));

        rubEur = inputRub.val() / rates.EUR.Value;
        inputEur.val(rubEur.toFixed(2));

    });

});




/*let inputRub = document.getElementById('rub'),
   inputUsd = document.getElementById('usd'),
   inputEur = document.getElementById('eur');

   //rub 
    inputRub.addEventListener('input', ()=>{
       let request = new XMLHttpRequest();
       //request.open(method,url,async,login,pass);
       request.open('GET','js/value.json');
       request.setRequestHeader('Content-type','application/json; charset=utf-8');
       request.send();

       request.addEventListener('readystatechange', function(){
           if (request.readyState === 4 && request.status == 200){
               let data = JSON.parse(request.response);

               inputUsd.value = (inputRub.value/data.usd).toFixed(4);
               //inputRub.value = (inputRub.value*data.usd).toFixed(4); 
           } else {
               inputUsd.value = "Что-то пошло не так!";
           }
       });
   });
*/