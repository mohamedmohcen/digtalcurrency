const exchangeRates = {
    "USD": { "EUR": 0.85, "EGP": 15.70 },
    "EUR": { "USD": 1.18, "EGP": 18.47 },
    "EGP": { "USD": 0.064, "EUR": 0.054 },
    "GBP": { "USD": 1.39, "EUR": 1.17, "EGP": 21.32, "JPY": 153.00, "CAD": 1.75, "AED": 5.10, "SAR": 5.20 },
    "JPY": { "USD": 0.0091, "EUR": 0.0078, "EGP": 0.065, "GBP": 0.0065, "CAD": 0.012, "AED": 0.033, "SAR": 0.034 },
    "CAD": { "USD": 0.79, "EUR": 0.67, "EGP": 12.50, "GBP": 0.57, "JPY": 83.00, "AED": 3.04, "SAR": 3.06 },
    "AED": { "USD": 0.27, "EUR": 0.23, "EGP": 4.20, "GBP": 0.20, "JPY": 30.50, "CAD": 0.33, "SAR": 1.02 },
    "SAR": { "USD": 0.27, "EUR": 0.23, "EGP": 4.10, "GBP": 0.19, "JPY": 30.00, "CAD": 0.32, "AUD": 0.20, "CHF": 0.25, "CNY": 0.05, "INR": 0.005, "MXN": 0.02, "RUB": 0.005, "TRY": 0.005, "ZAR": 0.50, "HKD": 0.30, "NZD": 0.20, "SGD": 0.25, "NOK": 0.20, "SEK": 0.18, "DKK": 0.20 },
    "AUD": { "USD": 0.74, "EUR": 0.62, "EGP": 11.44, "GBP": 0.54, "JPY": 80.00, "CAD": 0.95, "CHF": 0.67, "CNY": 4.80, "INR": 54.50, "MXN": 14.80, "RUB": 55.00, "SAR": 0.20, "TRY": 0.20, "ZAR": 10.00, "HKD": 5.78, "NZD": 0.90, "SGD": 0.98, "NOK": 6.80, "SEK": 6.60, "DKK": 6.50 },
    "CHF": { "USD": 1.10, "EUR": 0.93, "EGP": 16.00, "GBP": 0.87, "JPY": 130.00, "CAD": 1.30, "AUD": 1.49, "CNY": 6.90, "INR": 75.00, "MXN": 19.00, "RUB": 70.00, "SAR": 0.25, "TRY": 0.25, "ZAR": 12.00, "HKD": 6.90, "NZD": 1.20, "SGD": 1.10, "NOK": 8.00, "SEK": 7.80, "DKK": 8.00 },
    "CNY": { "USD": 0.15, "EUR": 0.12, "EGP": 2.20, "GBP": 0.18, "JPY": 15.00, "CAD": 0.20, "AUD": 0.21, "CHF": 0.15, "INR": 10.00, "MXN": 3.00, "RUB": 12.00, "SAR": 0.05, "TRY": 0.05, "ZAR": 1.00, "HKD": 0.80, "NZD": 0.18, "SGD": 0.15, "NOK": 1.00, "SEK": 0.90, "DKK": 0.80 },
    "INR": { "USD": 0.013, "EUR": 0.011, "EGP": 0.20, "GBP": 0.014, "JPY": 1.30, "CAD": 0.015, "AUD": 0.018, "CHF": 0.013, "CNY": 0.10, "MXN": 0.30, "RUB": 1.20, "SAR": 0.005, "TRY": 0.005, "ZAR": 0.07, "HKD": 0.04, "NZD": 0.012, "SGD": 0.013, "NOK": 0.09, "SEK": 0.08, "DKK": 0.07 },
    "MXN": { "USD": 0.053, "EUR": 0.044, "EGP": 0.80, "GBP": 0.055, "JPY": 5.00, "CAD": 0.067, "AUD": 0.067, "CHF": 0.052, "CNY": 0.33, "INR": 3.30, "RUB": 1.50, "SAR": 0.02, "TRY": 0.02, "ZAR": 0.50, "HKD": 0.30, "NZD": 0.06, "SGD": 0.05, "NOK": 0.40, "SEK": 0.35, "DKK": 0.30 },
    "RUB": { "USD": 0.014, "EUR": 0.012, "EGP": 0.23, "GBP": 0.015, "JPY": 1.50, "CAD": 0.017, "AUD": 0.018, "CHF": 0.014, "CNY": 0.08, "INR": 0.80, "MXN": 0.25, "SAR": 0.005, "TRY": 0.005, "ZAR": 0.07, "HKD": 0.04, "NZD": 0.012, "SGD": 0.013, "NOK": 0.09, "SEK": 0.08, "DKK": 0.07 },
    "TRY": { "USD": 0.12, "EUR": 0.10, "EGP": 1.80, "GBP": 0.07, "JPY": 10.00, "CAD": 0.14, "AUD": 0.15, "CHF": 0.10, "CNY": 0.20, "INR": 0.20, "MXN": 0.10, "RUB": 0.10, "SAR": 0.02, "ZAR": 0.20, "HKD": 0.15, "NZD": 0.10, "SGD": 0.12, "NOK": 0.10, "SEK": 0.09, "DKK": 0.10 },
    "ZAR": { "USD": 0.068, "EUR": 0.056, "EGP": 1.00, "GBP": 0.065, "JPY": 9.00, "CAD": 0.075, "AUD": 0.10, "CHF": 0.083, "CNY": 0.15, "INR": 0.15, "MXN": 0.20, "RUB": 0.20, "SAR": 0.01, "TRY": 0.01, "HKD": 0.10, "NZD": 0.07, "SGD": 0.08, "NOK": 0.06, "SEK": 0.05, "DKK": 0.06 },
    "HKD": { "USD": 0.13, "EUR": 0.11, "EGP": 1.90, "GBP": 0.08, "JPY": 12.00, "CAD": 0.15, "AUD": 0.12, "CHF": 0.10, "CNY": 0.20, "INR": 0.20, "MXN": 0.15, "RUB": 0.15, "SAR": 0.02, "TRY": 0.02, "ZAR": 0.10, "NZD": 0.10, "SGD": 0.12, "NOK": 0.10, "SEK": 0.09, "DKK": 0.10 },
    "NZD": { "USD": 0.71, "EUR": 0.59, "EGP": 10.50, "GBP": 0.54, "JPY": 78.00, "CAD": 0.95, "AUD": 1.00, "CHF": 0.68, "CNY": 4.00, "INR": 50.00, "MXN": 12.00, "RUB": 50.00, "SAR": 0.20, "TRY": 0.20, "ZAR": 10.00, "HKD": 5.50, "SGD": 0.95, "NOK": 6.00, "SEK": 5.80, "DKK": 5.50 },
    "SGD": { "USD": 0.75, "EUR": 0.62, "EGP": 11.00, "GBP": 0.54, "JPY": 80.00, "CAD": 0.95, "AUD": 1.00, "CHF": 0.68, "CNY": 4.00, "INR": 50.00, "MXN": 12.00, "RUB": 50.00, "SAR": 0.20, "TRY": 0.20, "ZAR": 10.00, "HKD": 5.50, "NZD": 0.95, "NOK": 6.00, "SEK": 5.80, "DKK": 5.50 },
    "NOK": { "USD": 0.12, "EUR": 0.10, "EGP": 1.80, "GBP": 0.07, "JPY": 10.00, "CAD": 0.14, "AUD": 0.15, "CHF": 0.10, "CNY": 0.20, "INR": 0.20, "MXN": 0.10, "RUB": 0.10, "SAR": 0.02, "ZAR": 0.20, "HKD": 0.15, "NZD": 0.10, "SGD": 0.12, "SEK": 0.09, "DKK": 0.10 },
    "SEK": { "USD": 0.11, "EUR": 0.09, "EGP": 1.60, "GBP": 0.06, "JPY": 9.00, "CAD": 0.12, "AUD": 0.10, "CHF": 0.09, "CNY": 0.20, "INR": 0.20, "MXN": 0.10, "RUB": 0.10, "SAR": 0.02, "ZAR": 0.20, "HKD": 0.15, "NZD": 0.10, "SGD": 0.12, "NOK": 0.09, "DKK": 0.10 },
    "DKK": { "USD": 0.15, "EUR": 0.12, "EGP": 2.20, "GBP": 0.18, "JPY": 15.00, "CAD": 0.20, "AUD": 0.21, "CHF": 0.15, "CNY": 0.10, "INR": 10.00, "MXN": 3.00, "RUB": 12.00, "SAR": 0.05, "TRY": 0.05, "ZAR": 1.00, "HKD": 0.80, "NZD": 0.18, "SGD": 0.15, "NOK": 1.00, "SEK": 0.90, "DKK": 0.80 },
    "DZD": { "USD": 0.0074, "EUR": 0.0061, "EGP": 0.11, "GBP": 0.0055, "JPY": 0.80, "CAD": 0.0095, "AUD": 0.0092, "CHF": 0.0075, "CNY": 0.045, "INR": 0.50, "MXN": 0.12, "RUB": 0.50, "SAR": 0.02, "TRY": 0.02, "ZAR": 0.10, "HKD": 0.06, "NZD": 0.09, "SGD": 0.08, "NOK": 0.05, "SEK": 0.04, "DKK": 0.05 },
    "BHD": { "USD": 2.65, "EUR": 2.20, "EGP": 39.00, "GBP": 1.95, "JPY": 290.00, "CAD": 3.30, "AUD": 2.90, "CHF": 2.40, "CNY": 15.00, "INR": 200.00, "MXN": 50.00, "RUB": 200.00, "SAR": 0.50, "TRY": 0.50, "ZAR": 10.00, "HKD": 5.50, "NZD": 2.00, "SGD": 2.40, "NOK": 2.00, "SEK": 1.80, "DKK": 2.00 },
    "KWD": { "USD": 3.30, "EUR": 2.80, "EGP": 50.00, "GBP": 2.50, "JPY": 370.00, "CAD": 4.20, "AUD": 3.70, "CHF": 3.10, "CNY": 20.00, "INR": 250.00, "MXN": 60.00, "RUB": 250.00, "SAR": 0.60, "TRY": 0.60, "ZAR": 12.00, "HKD": 6.50, "NZD": 2.50, "SGD": 3.00, "NOK": 2.50, "SEK": 2.20, "DKK": 2.50 },
    "OMR": { "USD": 2.60, "EUR": 2.20, "EGP": 38.00, "GBP": 1.90, "JPY": 280.00, "CAD": 3.20, "AUD": 2.80, "CHF": 2.30, "CNY": 15.00, "INR": 200.00, "MXN": 50.00, "RUB": 200.00, "SAR": 0.50, "TRY": 0.50, "ZAR": 10.00, "HKD": 5.50, "NZD": 2.00, "SGD": 2.40, "NOK": 2.00, "SEK": 1.80, "DKK": 2.00 },
    "QAR": { "USD": 0.27, "EUR": 0.23, "EGP": 4.10, "GBP": 0.19, "JPY": 30.00, "CAD": 0.32, "AUD": 0.20, "CHF": 0.25, "CNY": 0.05, "INR": 0.005, "MXN": 0.02, "RUB": 0.005, "SAR": 0.005, "TRY": 0.005, "ZAR": 0.50, "HKD": 0.30, "NZD": 0.20, "SGD": 0.25, "NOK": 0.20, "SEK": 0.18, "DKK": 0.20 },
    "JOD": { "USD": 1.41, "EUR": 1.18, "EGP": 20.50, "GBP": 0.98, "JPY": 145.00, "CAD": 1.70, "AUD": 1.50, "CHF": 1.20, "CNY": 8.00, "INR": 100.00, "MXN": 25.00, "RUB": 100.00, "SAR": 0.25, "TRY": 0.25, "ZAR": 5.00, "HKD": 2.50, "NZD": 1.00, "SGD": 1.20, "NOK": 1.00, "SEK": 0.90, "DKK": 1.00 },
    "LYD": { "USD": 0.21, "EUR": 0.18, "EGP": 3.20, "GBP": 0.15, "JPY": 22.00, "CAD": 0.25, "AUD": 0.22, "CHF": 0.18, "CNY": 1.20, "INR": 15.00, "MXN": 4.00, "RUB": 15.00, "SAR": 0.02, "TRY": 0.02, "ZAR": 0.30, "HKD": 0.20, "NZD": 0.25, "SGD": 0.20, "NOK": 0.15, "SEK": 0.12, "DKK": 0.15 },
    "MAD": { "USD": 0.10, "EUR": 0.09, "EGP": 1.60, "GBP": 0.05, "JPY": 8.00, "CAD": 0.12, "AUD": 0.10, "CHF": 0.09, "CNY": 0.60, "INR": 8.00, "MXN": 2.00, "RUB": 8.00, "SAR": 0.01, "TRY": 0.01, "ZAR": 0.20, "HKD": 0.10, "NZD": 0.10, "SGD": 0.10, "NOK": 0.10, "SEK": 0.08, "DKK": 0.10 },
    "TND": { "USD": 0.34, "EUR": 0.29, "EGP": 5.00, "GBP": 0.25, "JPY": 35.00, "CAD": 0.40, "AUD": 0.35, "CHF": 0.30, "CNY": 2.00, "INR": 25.00, "MXN": 6.00, "RUB": 25.00, "SAR": 0.03, "TRY": 0.03, "ZAR": 0.50, "HKD": 0.30, "NZD": 0.30, "SGD": 0.30, "NOK": 0.30, "SEK": 0.25, "DKK": 0.30 },
    "YER": { "USD": 0.004, "EUR": 0.0033, "EGP": 0.05, "GBP": 0.0025, "JPY": 0.35, "CAD": 0.0045, "AUD": 0.004, "CHF": 0.0035, "CNY": 0.022, "INR": 0.30, "MXN": 0.07, "RUB": 0.30, "SAR": 0.0005, "TRY": 0.0005, "ZAR": 0.005, "HKD": 0.003, "NZD": 0.004, "SGD": 0.004, "NOK": 0.003, "SEK": 0.0025, "DKK": 0.003 }
};

document.getElementById('convertButton').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if (isNaN(amount)) {
        document.getElementById('result').innerText = 'Please enter a valid amount.';
        return;
    }

    if (!exchangeRates[fromCurrency] || !exchangeRates[fromCurrency][toCurrency]) {
        document.getElementById('result').innerText = 'No exchange rate found for the selected currency.';
        return;
    }

    const rate = exchangeRates[fromCurrency][toCurrency];
    const convertedAmount = (amount * rate).toFixed(2);
    document.getElementById('result').innerText = `Converted amount: ${convertedAmount} ${toCurrency}`;
});

// Add animation effects
const convertButton = document.getElementById('convertButton');
convertButton.addEventListener('mouseenter', () => {
    convertButton.style.transform = 'scale(1.05)';
});
convertButton.addEventListener('mouseleave', () => {
    convertButton.style.transform = 'scale(1)';
});
