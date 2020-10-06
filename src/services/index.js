import axios from 'axios';

const URL_BASE = 'https://ncs-node.herokuapp.com/';

export const URL_LIST = `${URL_BASE}/article_list`;

export const URL_DATA = `${URL_BASE}/article_data`;

export const get = (url) => axios.get(url);
