// BTC BUSD
// 31880.57
// 31200.94
function calcRSI(closes){
    let gains = 0;
    let losses = 0;

    for (let i = closes.length - 14; i < closes.length; i++) {
        const diff = closes[i] - closes[i - 1];
    
        if (diff >=0)
            gains += diff;
        else
            losses -= diff;
    }

    const strength = gains / losses;
    return 100 - (100 / (1 + strength));
}
let bougth = false; //se estou comprado
// pode criar outros controles
// para saber o quanto lucrou por exemplo
// preço de compra e de venda
// uma de lucros acumulados

// Esse é apena 1 das dezenas de indicadores técnicos 
// Ex:SMA Médias Móveis Simples
// Fórmula = (k1 + K2 +...+Kn) / n = preço médio do ativo
// Onde você apenas via juntar um numero de candles
// Somar os seus preços e dividir pelo total de candles


async function process() {
    const axios = require("axios");
    const response = await axios.get("https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m");
    
    const closes = response.data.map(candle =>parseFloat(candle[4]));
    const rsi = calcRSI(closes);

    //const price = closes[0];
    console.log(rsi); 
    if(rsi > 70 && bougth)
        console.log("Sobrecomprado!");
        bougth = false;
    else if(rsi < 30 && !bougth)
        console.log("Sobrevendido!");
        bougth = true;
}
setInterval(process, 60000);

process();