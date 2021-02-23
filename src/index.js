const { resolve } = require('path')
const fs = require('fs').promises
const axios = require('axios').default;

let loaded = false;
let data = {};

const all = async ()=> {
  if(!loaded) {
    data[market] = await JSON.parse(fs.readFile(resolve(__dirname, '../json/data.json')));
    loaded = true;
  }
  return data || null;
}

const symbol = async (symbol)=>{
  if(!loaded) {
    data[market] = await JSON.parse(fs.readFile(resolve(__dirname, '../json/data.json')));
    loaded = true;
  }
  return data.dict[symbol] || null;
}

const build = async ()=>{
  const {data: {data: rawdata}} = await axios.get(`https://api.nasdaq.com/api/screener/stocks?tableonly=true&limit=25000&offset=0&download=true`);
  const final = {
    headers: rawdata.headers,
    dict: {}
  };
  for(const row of rawdata.rows){
    final.dict[row.symbol] = row;
  }
  try{await fs.mkdir(resolve(__dirname, '../json'));}finally{}
  await fs.writeFile(resolve(__dirname, '../json/data.json'), JSON.stringify(final));
  console.log(`Done Loading ${rawdata.rows.length} Stock Records`);

  loaded = true;
  data = final;

  return final;
}

module.exports = {
  all,
  symbol,
  build
}
