const spyIntraday = require('./intraday/spy.json');
const appleIntraday = require('./intraday/apple.json');
const nvidiaIntraday = require('./intraday/nvidia.json');
const teslaIntraday = require('./intraday/tesla.json');
const gameStopIntraday = require('./intraday/gameStop.json');
const uberIntraday = require('./intraday/uber.json');
const bitcoinIntraday = require('./intraday/btc.json');
const dogeIntraday = require('./intraday/doge.json');


const getChartDataPoints = (data) => {
    let chartString = JSON.stringify(data);
    let chartData = JSON.parse(chartString);
    let chartDataPoints = [];
    for(let point of chartData) {
        chartDataPoints.push(point.close);
    }
    return chartDataPoints
}






export const cyrptoData = [
    {
        ticker: 'btc',
        name: 'Bitcoin',
        intradayData: getChartDataPoints(bitcoinIntraday),
        price: '34,350.10',
        up: false
    },
    {
        ticker: 'doge',
        name: 'Dogecoin',
        intradayData: getChartDataPoints(dogeIntraday),
        price: '0.234636',
        up: true
    }
]


export const stockData = [
    {
        ticker: 'SPY',
        name: 'SPDR S&P 500 ETF',
        intradayData: getChartDataPoints(spyIntraday),
        price: '427.13',
        up: true,
    },
    {
        ticker: 'AAPL',
        name: 'Apple',
        intradayData: getChartDataPoints(appleIntraday),
        price: '134.61',
        up: true
    },
    {
        ticker: 'NVDA',
        name: 'NVIDIA',
        intradayData: getChartDataPoints(nvidiaIntraday),
        price: '798.33',
        up: true
    },
    {
        ticker: 'UBER',
        name: 'Uber',
        intradayData: getChartDataPoints(uberIntraday),
        price: '51.15',
        up: false
    },
    {
        ticker: 'GME',
        name: 'GameStop',
        intradayData: getChartDataPoints(gameStopIntraday),
        price: '214.10',
        up: false
    },
    {
        ticker: 'TSLA',
        name: 'Tesla',
        intradayData: getChartDataPoints(teslaIntraday),
        price: '686.40',
        up: true
    }
]