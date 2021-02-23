const {build, symbol} = require('../src/index');
build().then(()=>{
    symbol('GOOGL').then(console.log);
    symbol('AAPL').then(console.log);
});
