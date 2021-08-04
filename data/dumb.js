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
    for (let point of chartData) {
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
        price: '438.72',
        up: true,
        stats: {
            open: '439.35',
            high: '441.03',
            low: '439.26',
            yearHigh: '441.03',
            yearLow: '319.64',
            volume: '43.72M',
            avgVolume: '76.86M',
            aum: '381.00B',
            peRatio: '33.51',
            yield: '1.20',
            expenseRatio: '0.09',
            todaysVolume: '43,718,721'
        },
        news: [
            {
                datetime: "1d",
                headline: "AMC Makes A Trend Change For The Bulls, Options Traders Hammer Calls",
                source: "Benzinga",
                url: "https://cloud.iexapis.com/v1/news/article/3VbYugoKyXv5HdNA5yvqFI4byII1S066RFpRpFprzWFQ",
                summary: "AMC Entertainment Inc (NYSE: AMC ) became the top holding in Millennial and Gen Z accounts in the second quarter, up from sixth place in the first quarter according to Apex Clearing. AMC is also the top holding in the iShares Russell 2000 ETF (NYSE: IWM ) at 0.78%. The stock has, so far, struggled to rebound back toward its June 2 high of $72.62, which could be partly due to the Russell 2000 being unable to make a new all-time high. Unlike the SPDR S&P 500 (NYSE: SPY ) and the Nasdaq, which both reached new all-time highs on Monday, the Russell 2000 has lagged its counterparts by failing to break above $234.53 and get a blue sky run. On Monday AMC was trading up over 6% but struggled at a resistance level near the $40 mark. The stock is currently in a daily uptrend and needs to clear $46.55 to put in its next higher high. Options traders believe AMC will jump above the resistance level in the coming weeks and months with a few even betting AMC could reach $100 or higher by December. Together the traders purchased well over $3.16 million worth of bullish call contracts.",
                related: "SPY",
                image: "https://cloud.iexapis.com/v1/news/image/3VbYugoKyXv5HdNA5yvqFI4byII1S066RFpRpFprzWFQ",
                lang: "en",
                hasPaywall: false
            },
            {
                datetime: '3d',
                headline: "Key Events This Very Busy Week: Fed, GDP, Earnings Gallore And Much More",
                source: "Zero Hedge",
                url: "https://cloud.iexapis.com/v1/news/article/bijiWmaD29XxtLNZJeYP5fAEwLQ8UfHhrCZ3PQfEdA0",
                summary: "Key Events This Very Busy Week: Fed, GDP, Earnings Gallore And Much More Cutting to the chase, its a very busy week, perhaps the most important week for markets this summer. Clearly the Federal Reserves decision on Wednesday is likely to be the focal point. As well as that, there are a number of key data releases, including the first look at Q2s GDP reading for the US (Thursday) and the Euro Area (Friday), whilst earnings reports will include Tesla (today), Alphabet, Apple, Microsoft (all tomorrow), and Facebook (Wednesday). So get ready for a barrage of early week tech earnings after a good start to the US season. Looking at some of the highlights in more detail lets start with the Fed. As DB''s Jim Reid writes, at last meeting in June the FOMC undertook a hawkish shift by moving their median dot to show two rate hikes in 2023, compared to none before. Meanwhile inflation data has continued to surprise to the upside since then, with the latest CPI reading at +5.4%, and core CPI at +4.5%, which is the highest for the latter since 1991.",
                related: "SPY",
                image: "https://cloud.iexapis.com/v1/news/image/bijiWmaD29XxtLNZJeYP5fAEwLQ8UfHhrCZ3PQfEdA0",
                lang: "en",
                hasPaywall: false
            },
        ],
        relatedLists: [
            "100 Most Popular",
            "Size based ETFs"
        ],
        about: `
        SPY tracks a market-cap-weighted index of US large- and midcap stocks selected by the S&P Committee. The listed name for SPY is SPDR S&P 500 ETF Trust.
        `
    },
    {
        ticker: 'AAPL',
        name: 'Apple',
        intradayData: getChartDataPoints(appleIntraday),
        price: '148.65',
        up: true,
        stats: {
            open: '148.27',
            high: '149.83',
            low: '147.70',
            yearHigh: '150.00',
            yearLow: '93.25',
            volume: '72.43M',
            avgVolume: '101.82M',
            marketCap: '2.49T',
            peRatio: '33.43',
            yield: '0.56',
            todaysVolume: '72,431,185'
        },
        news: [
            {
                datetime: '23m',
                headline: "iPad mini 6 will have 8.3-inch screen without mini-LED, display analyst reports",
                source: "Benzinga",
                url: "https://cloud.iexapis.com/v1/news/article/37BpaQupcuqngRf9N4tMVBiiPBqwh0NwuMjewRZRmZkk",
                summary: "Apple is anticipated to refresh its iPad mini line later this year with several upgrades to its performance and technical specs. The upcoming tablet is also expected to launch with a drastic design change, and more sources",
                related: "AAPL",
                image: "https://cloud.iexapis.com/v1/news/image/37BpaQupcuqngRf9N4tMVBiiPBqwh0NwuMjewRZRmZkk",
                lang: "en",
            },
            {
                datetime: '2h',
                headline: "Apple Reportedly Placed Massive A15 Order, But Are They All For iPhone 13?",
                source: "Benzinga",
                url: "https://cloud.iexapis.com/v1/news/image/3ou7e7pFI8L58SaQBz0QkPA631oPi7wczuY2iCsRStD0",
                summary: "Titled the Apple Watch Loop, this concept by Felipe Duarte does two things  it brings variety to Apples smartwatch offering and adds a beautifully-basic Air variant in Apples watch lineup, just like with their other products like the iPhone Mini, iPad Air, and MacBook Air. Apples always fervently stuck to the square-shaped watch. They [] The post Circular Apple Watch Air concept adds a budget-friendly option to Apples smartwatch catalog appeared first on TECHTELEGRAPH .",
                related: "AAPL",
                image: "https://cloud.iexapis.com/v1/news/image/3tZI3KKwj8GUhYdddA32JVC67qwWp4zJxAngnda9GwJz",
                lang: "en",
            },
            {
                datetime: '3h',
                headline: "Circular Apple Watch Air concept adds a budget-friendly option to Apples smartwatch catalog",
                source: "Bloomberg",
                url: "https://cloud.iexapis.com/v1/news/article/2Xf36L5iIPMkp9Bo9zpDIFIUQBdmKBokz5yuCpcZYvXF",
                summary: "Callable Multi Barrier Reverse Convertible auf Alphabet, Amazon.com, Apple, Facebook, Netflix / Logitech, Taiwan Semiconductor Manufacturing , VAT / Microsoft, SAP, Zoom Video Communications / Alphabet, Crowdstrike Holdings, Microsoft",
                related: "AAPL",
                image: "https://cloud.iexapis.com/v1/news/image/2Xf36L5iIPMkp9Bo9zpDIFIUQBdmKBokz5yuCpcZYvXF",
                lang: "en",
            }
        ],
        analystRatings: {
            buy: '75%',
            hold: '20%',
            sell: '5%',
            number: '44',
            bullsSay: `
            Between greater smartphone penetration in emerging markets and repeat sales to current 
            customers, Apple has plenty of opportunity to reap the rewards of its iPhone business.

            Apple's iPhone and iOS operating system have consistently been rated at the head of 
            the pack in terms of customer loyalty, engagement, and security, which bodes well for long-term customer retention.

            We think Apple is still innovating with introductions of Apple Pay, Apple Watch, 
            Apple TV, and AirPods; each of these could drive incremental revenue, but more crucially help to retain iPhone users over time.
            `,
            bearsSay: `
            Apple’s decisions to maintain a premium pricing strategy may help fend off gross 
            margin compression but could limit unit sales growth, as devices may be unaffordable for many customers.

            If Apple were to ever launch a buggy software update or subpar services, it could 
            diminish the firm's reputation for building products that "just work."

            Apple is believed to be behind firms like Google and Amazon in artificial intelligence, 
            or AI, development (notably Siri voice recognition), which could be problematic as tech 
            firms look to integrate AI in order to deliver premium services to customers.
            `
        },
        earnings: {
            expectedInOrder: [
                '2.04',
                '0.70',
                '1.41',
                '0.99',
                '1.00'
            ],
            actualInOrder: [
                '2.58',
                '0.73',
                '1.68',
                '1.40'
            ],
            yCoordinePoint: [
                '2.77',
                '2.02',
                '1.26',
                '0.51'
            ]
        },
        relatedLists: [
            '100 Most Popular',
            'Hardware',
            'Software',
            'Upcoming Earnings'
        ],
        about: {
            description: `
            Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal 
            computers, tablets, wearables and accessories, and other variety of related 
            services. It operates through the following geographical 
            segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. 
            The Americas segment includes North and South America. The Europe segment 
            consists of European countries, as well as India, the Middle East, and Africa. 
            The Greater China segment comprises of China, Hong Kong, and Taiwan. 
            The Rest of Asia Pacific segment includes Australia and Asian countries. 
            Its products and services include iPhone, Mac, iPad, AirPods, Apple TV, 
            Apple Watch, Beats products, Apple Care, iCloud, digital content stores, 
            streaming, and licensing services. The company was founded by Steven Paul Jobs,
             Ronald Gerald Wayne, and Stephen G. Wozniak in 1977 and is headquartered in 
             Cupertino, CA. The listed name for AAPL is Apple Inc. Common Stock.
            `,
            ceo: 'Timothy Donald Cook',
            headquarters: 'Cupertino, California',
            founded: '1976',
            employees: '147,000'
        }
    },
    {
        ticker: 'NVDA',
        name: 'NVIDIA',
        intradayData: getChartDataPoints(nvidiaIntraday),
        price: '191.10',
        up: false,
        stats: {
            open: '193.29',
            high: '194.40',
            low: '189.17',
            yearHigh: '208.75',
            yearLow: '102.09',
            volume: '20.39M',
            avgVolume: '45.10M',
            marketCap: '480.81B',
            peRatio: '91.35',
            yield: '0.08',
            todaysVolume: '20,393,029'
        },
        news: [
            {
                datetime: '2h',
                headline: "First Look at NVIDIAs Alias-Free GAN, an Incredible Face Generator AI",
                source: "Reuters",
                url: "https://cloud.iexapis.com/v1/news/article/Y3knEMRH95PyTkYoEVTuIeHBzWwxUPhVbtia6ahgJJ0",
                summary: "StyleGAN2 may be one of the most well known face generator AI systems, but when using it, small details like facial hair and wrinkles did not move organically. These froze in the same spots, but with NVIDIA''s Alias-Freen GAN, all of these small details transform coherently, and the same applies when",
                related: "NVDA",
                image: "https://cloud.iexapis.com/v1/news/image/Y3knEMRH95PyTkYoEVTuIeHBzWwxUPhVbtia6ahgJJ0",
                lang: "en",
            },
            {
                datetime: '4h',
                headline: "NVIDIAs ARM acquisition faces delay, IPO rumors swirl",
                source: "Benzinga",
                url: "https://cloud.iexapis.com/v1/news/article/3fcHmwz2GJcA3oeHTAFeFaMJJWrdBzPDjKQAYdJFi7ME",
                summary: "Source: Harish Jonnalagadda / Windows Central Back in June 2021, the word on the street was that NVIDIA hadnt produced the key paperwork necessary for its acquisition of ARM to be cleared by EU regulators. The fear then was that if NVIDIA didnt act fast, summer vacation would creep up, and the company would have [] The post NVIDIAs ARM acquisition faces delay, IPO rumors swirl appeared first on TECHTELEGRAPH .",
                related: "NVDA",
                image: "https://cloud.iexapis.com/v1/news/image/3fcHmwz2GJcA3oeHTAFeFaMJJWrdBzPDjKQAYdJFi7ME",
                lang: "en",
            },
        ],
        analystRatings: {
            buy: '83%',
            hold: '12%',
            sell: '5%',
            number: '41'
        },
        earnings: {
            expectedInOrder: [
                '1.97',
                '2.57',
                '2.81',
                '3.28',
                '-'
            ],
            actualInOrder: [
                '2.18',
                '2.91',
                '3.10',
                '3.66'
            ],
            yCoordinePoint: [
                '3.83',
                '3.15',
                '2.48',
                '1.80'
            ]
        },
        relatedLists: [
            '100 Most Popular',
            'Hardware',
        ],
        about: {
            description: `
            NVIDIA Corp. engages in the design and manufacture of computer graphics
             processors, chipsets, and related multimedia software. It operates through 
             the following segments: Graphics Processing Unit (GPU), Tegra Processor, and 
             All Other. The GPU segment comprises of product brands, which aims specialized 
            markets including GeForce for gamers; Quadro for designers; Tesla and DGX for 
            AI data scientists and big data researchers; and GRID for cloud-based visual 
            computing users. The Tegra Processor segment integrates an entire computer onto 
            a single chip, and incorporates GPUs and multi-core CPUs to drive supercomputing 
            for autonomous robots, drones, and cars, as well as for consoles and mobile 
            gaming and entertainment devices. The All Other segment refers to the stock-based 
            compensation expense, corporate infrastructure and support costs, 
            acquisition-related costs, legal settlement costs, and other non-recurring 
            charges. The company was founded by Jen Hsun Huang, Chris A. Malachowsky, and 
            Curtis R. Priem in January 1993 and is headquartered in Santa Clara, CA. 
            The listed name for NVDA is NVIDIA Corporation Common Stock.
            `,
            ceo: 'Jen Hsun Huang',
            headquarters: 'Santa Clara, California',
            founded: '1993',
            employees: '18,975'
        }
    },
    {
        ticker: 'UBER',
        name: 'Uber',
        intradayData: getChartDataPoints(uberIntraday),
        price: '46.75',
        up: false,
        stats: {
            open: '47.04',
            high: '47.59',
            low: '46.37',
            yearHigh: '64.05',
            yearLow: '28.48',
            volume: '12.50M',
            avgVolume: '16.00M',
            marketCap: '92.08B',
            peRatio: '-',
            yield: '-',
            todaysVolume: '12,496,472'
        },
        news: [
            {
                datetime: '1h',
                headline: "Companies - Insider Weekly: Uber''s mass exodus - We found Larry Page - Exclusive salary database",
                source: "Reuters",
                url: "https://cloud.iexapis.com/v1/news/article/1E3wfayQGkpHwS3AtBzFpDoQWDXDhbKSh8Y4ugjhW2qV",
                summary: "StyleGAN2 may be one of the most well known face generator AI systems, but when using it, small details like facial hair and wrinkles did not move organically. These froze in the same spots, but with NVIDIA''s Alias-Freen GAN, all of these small details transform coherently, and the same applies when",
                related: "UBER",
                image: "https://cloud.iexapis.com/v1/news/image/Y3knEMRH95PyTkYoEVTuIeHBzWwxUPhVbtia6ahgJJ0",
                lang: "en",
            },
        ],
        analystRatings: {
            buy: '88%',
            hold: '10%',
            sell: '2%',
            number: '41'
        },
        earnings: {
            expectedInOrder: [
                '-1.02',
                '-0.66',
                '-0.50',
                '-0.51',
                '-'
            ],
            actualInOrder: [
                '-0.97',
                '-0.64',
                '-0.50',
                '0.03'
            ],
            yCoordinePoint: [
                '0.04',
                '-0.35',
                '-0.73',
                '-1.12'
            ]
        },
        relatedLists: [
            '100 Most Popular',
            'Consumer Services & Retail',
        ],
        about: {
            description: `
            Uber Technologies, Inc. operates as a technology platform for people and things mobility. 
            The firm offers multi-modal people transportation, restaurant food delivery, and connecting 
            freight carriers and shippers. It operates through the following segments: Rides, Eats, 
            Freight, Other Bets and ATG and Other Technology Programs. The Rides segment refers to 
            products that connect consumers with Rides Drivers who provide rides in a variety of 
            vehicles, such as cars, auto rickshaws, motorbikes, minibuses, or taxis. The Eats segment 
            allows consumers to search for and discover local restaurants, order a meal, and either
            pick-up at the restaurant or have the meal delivered. The Freight segment 
            leverages proprietary technology, brand awareness, and experience revolutionizing industries
             to connect carriers with shippers on its platform, and gives carriers upfront, transparent
              pricing and the ability to book a shipment. The Other Bets segment consists of multiple 
              investment stage offerings. The ATG and Other Technology Programs segment primarily responsible 
              for the development and commercialization of autonomous vehicle and ridesharing technologies, 
              as well as Uber Elevate. The company was founded by Oscar Salazar Gaitan, Travis Kalanick and 
              Garrett Camp in 2009 and is headquartered in San Francisco, CA. The listed name for UBER is 
              Uber Technologies, Inc.
            `,
            ceo: 'Dara Khosrowshahi',
            headquarters: 'San Francisco, California',
            founded: '2009',
            employees: '22,800'
        }
    },
    {
        ticker: 'GME',
        name: 'GameStop',
        intradayData: getChartDataPoints(gameStopIntraday),
        price: '183.77',
        up: true,
        stats: {
            open: '180.63',
            high: '186.03',
            low: '178.84',
            yearHigh: '483.00',
            yearLow: '3.92',
            volume: '1.26M',
            avgVolume: '2.73M',
            marketCap: '21.65B',
            peRatio: '-',
            yield: '-',
            todaysVolume: '1,260,592'
        },
        news: [
            {
                datetime: '1h',
                headline: "Regulators Consider Payment for Order Flow and the Gamification of Trading After GameStop",
                source: "Benzinga",
                url: "https://cloud.iexapis.com/v1/news/article/2ExLRXE6Wn2nWE7gMGWJQT3kofEehjJJJbLuezVUrUc",
                related: "GME",
                image: "https://cloud.iexapis.com/v1/news/image/2ExLRXE6Wn2nWE7gMGWJQT3kofEehjJJJbLuezVUrUc",
                lang: "en",
            },
            {
                datetime: '3h',
                headline: "PS5 Restock Update for GameStop, Target, Walmart, Antonline, Best Buy and More",
                source: "Reuters",
                url: "https://cloud.iexapis.com/v1/news/article/1T0oIcFCRnjJepN5TfZp3KwAkir34rnUjc6BH7Shao8o",
                related: "GME",
                image: "https://cloud.iexapis.com/v1/news/image/1T0oIcFCRnjJepN5TfZp3KwAkir34rnUjc6BH7Shao8o",
                lang: "en",
            },
        ],
        analystRatings: {
            buy: '0%',
            hold: '33%',
            sell: '67%',
            number: '6'
        },
        earnings: {
            expectedInOrder: [
                '-1.57',
                '-0.60',
                '1.59',
                '-0.59',
                '-'
            ],
            actualInOrder: [
                '-1.62',
                '-0.57',
                '1.59',
                '-0.55'
            ],
            yCoordinePoint: [
                '1.63',
                '0.53',
                '-0.58',
                '-1.68'
            ],
            date: 'Expected on 9/7'
        },
        relatedLists: [
            '100 Most Popular',
            'Hardware',
        ],
        about: {
            description: `
            GameStop Corp. engages in the retail of multichannel video game, 
            consumer electronics, and wireless services. It operates through the 
            following segments: United States, Canada, Australia, and Europe. 
            The United States segment includes the retail operations and electronic 
            commerce websites www.gamestop.com and www.thinkgeek.com, Game Informer
            magazine, and Kongregate. The Canada segment comprises of retail and e-commerce 
            business. The Australia segment refers to the retail and e-commerce operations in 
            Australia and New Zealand. The Europe segment pertains to the retail and e-commerce
             operations in the European countries. The company was founded by Daniel A. 
            DeMatteo in 1996 and is headquartered in Grapevine, TX. The listed name for 
            GME is GameStop Corp. Class A.
            `,
            ceo: 'Matthew Furlong',
            headquarters: 'Grapevine, Texas',
            founded: '1996',
            employees: '12,000'
        }
    },
    {
        ticker: 'TSLA',
        name: 'Tesla',
        intradayData: getChartDataPoints(teslaIntraday),
        price: '673.25',
        up: true,
        stats: {
            open: '650.77',
            high: '668.20',
            low: '647.11',
            yearHigh: '900.40',
            yearLow: '273.00',
            volume: '25.34M',
            avgVolume: '21.09M',
            marketCap: '633.51B',
            peRatio: '658.21',
            yield: '-',
            todaysVolume: '25,335,637'
        },
        news: [
            {
                datetime: '1h',
                headline: "TSLA Stock Up 1%, Tesla Makes History with Its Q2 Net Profit Exceeding $1B",
                source: "Benzinga",
                url: "https://cloud.iexapis.com/v1/news/article/33hAI6KiAxCItHuYwXKjLHmmtr4Z6QEMUxvqAXmeh5wQ",
                related: "TSLA",
                image: "https://cloud.iexapis.com/v1/news/image/33hAI6KiAxCItHuYwXKjLHmmtr4Z6QEMUxvqAXmeh5wQ",
                lang: "en",
            },
            {
                datetime: '3h',
                headline: "Musk criticises Apple as Tesla posts record profit",
                source: "Reuters",
                url: "https://cloud.iexapis.com/v1/news/article/1LFa2TXKfy3igjfRM2djQG01nyNAxLtK7D6hxqhwDmXt",
                related: "TSLA",
                image: "https://cloud.iexapis.com/v1/news/image/1LFa2TXKfy3igjfRM2djQG01nyNAxLtK7D6hxqhwDmXt",
                lang: "en",
            },
        ],
        analystRatings: {
            buy: '41%',
            hold: '38%',
            sell: '21%',
            number: '39',
            bullsSay: `
            Tesla has the potential to disrupt the automotive and 
            power generation industries with its technology for EVs, 
            AVs, batteries, and solar generation systems.

            Tesla will see higher profit margins as the company achieves its plan to
            reduce battery costs by 56% over the next several years.

            Through the combination of its industry-leading technology and unique 
            Supercharger network, Tesla offers the best function of any EV on the market, 
            which will result in the company maintaining its market leader status as EV adoption increases.
            `,
            bearsSay: `
            Traditional automakers are investing heavily in the development of 
            electric vehicles, which will result in Tesla losing market share and seeing 
            a deceleration in sales growth due to increased competition.

            EV adoption is driven largely by government initiatives, such as regulations and subsidies, 
            which will limit long-term market growth for Tesla.

            Solar panel and battery prices will decline faster than Tesla can reduce costs, 
            resulting in little to no profits for the energy generation and storage business
            `
        },
        earnings: {
            expectedInOrder: [
                '-0.31',
                '0.56',
                '0.63',
                '0.59',
                '0.61'
            ],
            actualInOrder: [
                '2.37',
                '0.59',
                '0.57',
                '0.61',
                '1.00'
            ],
            yCoordinePoint: [
                '2.41',
                '1.49',
                '0.58',
                '-0.34'
            ]
        },
        relatedLists: [
            '100 Most Popular',
            'Automotive',
        ],
        about: {
            description: `
            Tesla, Inc. engages in the design, development, manufacture, and sale of fully electric vehicles, 
            energy generation and storage systems. It also provides vehicle service centers, supercharger 
            station, and self-driving capability. The company operates through the following segments: 
            Automotive and Energy Generation and Storage. The Automotive segment includes the design, development, 
            manufacture and sale of electric vehicles. The Energy Generation and Storage segment includes 
            the design, manufacture, installation, sale, and lease of stationary energy storage products and 
            solar energy systems, and sale of electricity generated by its solar energy systems to customers. 
            It develops energy storage products for use in homes, commercial facilities and utility sites. 
            The company was founded by Jeffrey B. Straubel, Elon Reeve Musk, Martin Eberhard, and Marc 
            Tarpenning on July 1, 2003 and is headquartered in Palo Alto, CA. The listed name for TSLA is 
            Tesla, Inc. Common Stock
            `,
            ceo: 'Elon Reeve Musk',
            headquarters: 'Palo Alto, California',
            founded: '2003',
            employees: '70,757'
        }
    }
]