export const CONSTANTS = {
    defaultLocations: {
        winstonSalem: '27105',
        columbusOhio: '43215'
    },
    urls: {
        weatherEndpoint: {
            url: 'https://api.weather.gov/points/',
            headers: {
                'User-Agent': '(weatherApp-WeatherCloud, gonzalez.ger@tutanota.com)'
            }
        },
        zipToGeo: {
            url: 'https://api.noyfb.dev/zipcode/',
            headers: {
                'x-api-key': 'iuEwEylm1p4WMmjF8COu25tJg0jQZizh58hntRvi'
            }
        }
    },
    errorCorrection : 0.00
}
