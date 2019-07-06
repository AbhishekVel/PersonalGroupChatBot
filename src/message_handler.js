 import send_random_news from './services/news';
 
 export default function(msg, thread_id, fb_api) {
    let msg_split = msg.split(' ');
    if (msg_split[0].toLowerCase() == 'jaffa') {
        if (msg_split.length == 1) {
            // return a list of the commands for the bot
        } else {
            let cmd = msg_split[1];
            switch(cmd) {
                case 'news':
                    send_random_news({news_type: msg_split[2]}, thread_id, fb_api);
                    break;
                default:
                    console.log('invalid command')
                    break;
            }
        }
    }
}