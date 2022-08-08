import axios from 'axios';

const API_BASE_URL = 'https://api.hive.blog';
const API_TIMEOUT = 120000;

export const api = axios.create({
    timeout: API_TIMEOUT,
    baseURL: API_BASE_URL,
    headers: {
        Accept: 'application/json'
    },
    transformResponse: [
        function transformResponse(data) {
            if (typeof data === 'string') {
                try {
                    if (!String.prototype.trim) {
                        // eslint-disable-next-line
                        String.prototype.trim = function () {
                            return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                        };
                    }
                    data = JSON.parse(data.trim(''));
                    // eslint-disable-next-line no-empty
                } catch (e) {
                }
            }
            return data;
        },
    ],
});
