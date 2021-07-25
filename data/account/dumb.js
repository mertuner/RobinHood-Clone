const todayData = require('./today.json');
const weekData = require('./week.json');
const monthData = require('./month.json');
const threeMonthsData = require('./threemonths.json');
const yearData = require('./year.json');
const allData = require('./all.json');


const getChartDataPoints = (data) => {
    let chartString = JSON.stringify(data);
    let chartData = JSON.parse(chartString);
    let chartDataPoints = [];
    for(let point of chartData) {
        chartDataPoints.push(point.close);
    }
    return chartDataPoints
}


export const accountData = {
    today: {
        chartDataPoints: getChartDataPoints(todayData)
    },
    week: {
        chartDataPoints: getChartDataPoints(weekData)
    },
    month: {
        chartDataPoints: getChartDataPoints(monthData)
    },
    threeMonths: {
        chartDataPoints: getChartDataPoints(threeMonthsData)
    },
    year: {
        chartDataPoints: getChartDataPoints(yearData)
    },
    all: {
        chartDataPoints: getChartDataPoints(allData)
    }
}