import axios from 'axios';

export const URL_LIST = 'https://raw.githubusercontent.com/vhoangbk/craw-node/master/list.json';

export const URL_DATA = 'https://raw.githubusercontent.com/vhoangbk/craw-node/master/data.json';

export const get = (url) => axios.get(url);
