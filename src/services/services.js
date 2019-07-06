import config from '../config.js';
import _ from 'lodash';
import news from './news';
import dice from './dice';
import stock_market from './stockmarket';

const services = {
    dice,
    news,
    stock_market
}

function send_list_of_services(thread_id, fb_api) {
    let services_msg = _.reduce(services, (result, service) => {
        result += '\n*****' + service.name + '*****';
        _.forEach(service.usage, (usage) => {
            result += `\n${usage}`;
        });
        return result;
    }, `${config.BOT_NAME} can handle the following messages (Note: * means optional):`);
    fb_api.sendMessage(services_msg, thread_id);
}

export {
    services,
    send_list_of_services
};
