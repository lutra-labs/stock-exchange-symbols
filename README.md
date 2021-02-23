# Stock Exchange Symbols

📈 Fetch and get details of symbols from nasdaq, nyse and amex.

## Usage

### API

The API is exported as a module. You can access it normally using require as:
```
const {build, all, symbol} = require('@lutra-labs/stock-exchange-symbol-info');
```

Note that all the API methods return promises (They are async functions)!

| API  | Parameters Expected | Description |
| ------------- | ------------- | ------------- |
| build  | -  | Pull data from NASDAQ and store them for later use  |
| all  | -  | Return all the available data as an object of shape: {headers: {...data about the shape of symbol data}, dict: {[symbol: {...data}], ...}}  |
| symbol  | symbol - ticker symbol to get data for  | Returns data for the particular symbol  |

At the time of publishing, the headers look like:
```json
{
    "symbol":"Symbol",
    "name":"Name",
    "lastsale":"Last Sale",
    "netchange":"Net Change",
    "pctchange":"% Change",
    "marketCap":"Market Cap",
    "country":"Country",
    "ipoyear":"IPO Year",
    "volume":"Volume",
    "sector":"Sector",
    "industry":"Industry",
    "url":"Url"
}
```
### Initializing the Stock Data
You can either initialize the stock data manually or through an API.
1. Manual Method: Run the build script from bin using `node ./bin/build.js` or using `npm build`.
2. API: await on the `build` API method.s


## LICENSE

MIT

## Authors
- [Vaishnav S Menon](https://github.com/vaishnavsm)
- Heavily modified from [Joe McCann's](https://twitter.com/joemccann) [original repository](https://github.com/joemccann/stock-exchange-symbols) 
