// BTC BUSD
// 29972.57
// 29809.94
async function process() {
    const axios = require("axios");
    const response = await axios.get("https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m");
    const candle = response.data[499];
    //console.log(candle);
    console.log(candle[4]); //valor de fechamento
}
setInterval(process, 1000);

process();