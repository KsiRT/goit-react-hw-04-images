import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const options = {
  key: '38240980-4df59bc1d913ce2e5ea997aeb',
  image_type: 'photo',
  orientation: 'horizontal',
  safeSearch: true,
  per_page: 12,
  page: 3,
};

export const fetchImages = async params => {
  try {
    const { data } = await axios.get('', {
      params: { ...options, ...params },
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
