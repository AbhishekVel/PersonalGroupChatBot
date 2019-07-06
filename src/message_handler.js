import config from './config';
import {services, send_list_of_services} from './services/services';

export default function (msg, thread_id, fb_api) {
    let msg_split = msg.split(' ');
    if (msg_split[0].toLowerCase() == config.BOT_NAME.toLowerCase()) {
        if (msg_split.length == 1) {
            send_list_of_services(thread_id, fb_api);
        } else {
            let cmd = msg_split[1];
            switch (cmd) {
                case 'news':
                    services.news.send_random_news({ news_type: msg_split[2] }, thread_id, fb_api);
                    break;
                case 'dice':
                    services.dice.dice_roll( { max_value: msg_split[3]}, thread_id, fb_api);
                    break;
                default:
                    console.log('invalid command')
                    break;
            }
        }
    }
}