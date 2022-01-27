import axios from 'axios';

const BASE_URL = 'https://api.skilla.ru';
const TOKEN = 'qwerty123';

axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.common.Authorization = `Bearer ${TOKEN}`;

const contactsData = async (dStart, dEnd) => {
    try {
        const { data } = await axios.post(
            `mango/getList?date_start=${dStart}&date_end=${dEnd}`,
        );
        return data;
    } catch (error) {
        console.log(error.message);
    }
};

export default contactsData;
