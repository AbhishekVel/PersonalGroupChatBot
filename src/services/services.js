import config from '../config.js';
import _ from 'lodash';
import news from './news';
import dice from './dice';

const services = {
    dice,
    news,
}

function send_list_of_services(thread_id, fb_api) {
    console.log('hello');
    let services_msg = _.reduce(services, (result, service) => {
        result += `\n${service.usage}`;
        return result;
    }, `${config.BOT_NAME} can handle the following messages (Note: * means optional):`);
    fb_api.sendMessage(services_msg, thread_id);
}

export {
    services,
    send_list_of_services
};