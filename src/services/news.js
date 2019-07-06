import config from '../config.js';
import NewsAPIModule from 'newsapi';


const newsapi = new NewsAPIModule(config.NEWS_API_KEY);

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

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

export default send_random_news;
