import config from '../config.js';
import NewsAPIModule from 'newsapi';
import { getRandomInt } from '../utils';


const newsapi = new NewsAPIModule(config.NEWS_API_KEY);

const usage = ["news [*category ex(technology, business, entertainment, general, health, science, sports)]"];

const send_random_news = ({ news_type }, thread_id, fb_api) => {
    newsapi.v2.topHeadlines({
        category: news_type,
        language: 'en',
        country: 'us'
    }).then(response => {
        let num_articles = response['articles'].length;
        if (num_articles > 0) {
            let article = response['articles'][getRandomInt(num_articles)];
            let title = article['title'];
            let url = article['url'];

            fb_api.sendMessage(title, thread_id);
            fb_api.sendMessage(url, thread_id);
        }
    });
}

export default {
    name:'news',
    usage,
    send_random_news
};
