// BTC BUSD
// 31880.57
// 31200.94
async function process() {
    const axios = require("axios");
    const response = await axios.get("https://api.binance.com/api/v3/klines?symbol=BTCBUSD&interval=1m");
    const candle = response.data[499];
    const price = parseFloat(candle[4]);
    if(price>=31880.57)
        console.log("Vender!");
    else if(price>=31200.94)
        console.log("comprar!");
    else
        console.log("aguardar...");
}
setInterval(process, 1000);

process();