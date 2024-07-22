let fromCurrency = document.getElementById('fromCurrency');
let toCurrency = document.getElementById('toCurrency');


async function currencies() {
    try {
        let response = await fetch(
            'https://v6.exchangerate-api.com/v6/10201773d16e709e256d0115/codes'
        );
        let data = await response.json();
        for (let i = 0; i < data.supported_codes.length; i++) {
            console.log(data.supported_codes[i][0]);

            let optionFrom = document.createElement('option');
            optionFrom.value = data.supported_codes[i][0];
            optionFrom.text = data.supported_codes[i][0];
            fromCurrency.appendChild(optionFrom);

            let optionTo = document.createElement('option');
            optionTo.value = data.supported_codes[i][0];
            optionTo.text = data.supported_codes[i][0];
            toCurrency.appendChild(optionTo);


        }
        let btn = document.getElementById('btn').addEventListener('click', () => {
            let optionsTo = toCurrency.value;
            let optionsFrom = fromCurrency.value;
            let amount = document.getElementById('amount').value;
            currencyConverter(optionsFrom, optionsTo, amount);


        });

    } catch (err) {
        console.log(err);
    }
}

async function currencyConverter(from, to, amount) {
    try {
        let response = await fetch('https://v6.exchangerate-api.com/v6/10201773d16e709e256d0115/pair/' + from + "/" + to + "/" + amount);

        let data = await response.json();
        let results = document.getElementById('result')
        let conversionRate = data.conversion_rate;
        let convertedAmount = amount * conversionRate;
        results.innerText = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
    } catch (err) {
        console.log(err);
    }
}


currencies();