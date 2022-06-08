// BTC BUSD
// 29972.57
// 29809.94
async function process() {
    const axios = require("axios");
    const response = await axios.get("https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m");
    //console.log(response.data); // mostra os 500 ultimos candle
    const candle = response.data[499];
    console.log(candle);
    console.log("tempo de abertura = ");
    console.log(candle[0]);
    console.log("valor de abertura = ");
    console.log(candle[1]);
    console.log("máxima da vela = ");
    console.log(candle[2]);
    console.log("mínima da vela = ");
    console.log(candle[3]);
    console.log("valor de fechamento ou atual = ");
    console.log(candle[4]);
}
process();