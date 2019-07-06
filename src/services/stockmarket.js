import config from '../config';
import rp from 'request-promise-native';


const usage = ["price [stock_name]", "buy_stock [stock_name] [quantity]", "sell_stock [stock_name] [quantity]"]

function get_stock_price_promise(stock) {
    let url = `https://cloud.iexapis.com/stable/stock/${stock}/quote?token=${config.IEX_API_KEY}`
    return rp(url, { json: true});
}

function send_stock_price({ stock='goog' }, thread_id, fb_api) {
    get_stock_price_promise(stock).then((body) => {
        fb_api.sendMessage(`${stock} : $${body.latestPrice}`, thread_id);
    }).catch((err) => {
        fb_api.sendMessage(`${stock} : ${err.error}`, thread_id);
    });
}


export default {
    name:'Stock Market Game',
    usage,
    send_stock_price
}
