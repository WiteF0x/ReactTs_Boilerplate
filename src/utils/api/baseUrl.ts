import config from '../../config/config.json';

export const serverUrl = config[process.env.NODE_ENV].serverURL;
export const apiUrl = `${serverUrl}/api`;

