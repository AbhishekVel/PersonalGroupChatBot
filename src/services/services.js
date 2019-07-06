import config from '../config.js';
import _ from 'lodash';

const services = {
    "news": ["category ex(technology, business, entertainment, general, health, science, sports)"],
}

function send_list_of_services(thread_id, fb_api) {
    let services_msg = _.reduce(services, (result, value, key) => {
        result += `\n${config.BOT_NAME} ${key}`
        _.forEach(value, (param) => {
            result += ` [${param}]`;
        });
        return result;
    }, `${config.BOT_NAME} can handle the following messages:`);
    fb_api.sendMessage(services_msg, thread_id);
}


export default send_list_of_services;