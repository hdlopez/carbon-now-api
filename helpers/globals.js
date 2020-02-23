const SCOPE = process.env.SCOPE || null;

const API_URL = 'https://carbon-now-api.herokuapp.com/api/';
const IMAGES_URL = SCOPE ? 'https://carbon-now-api.herokuapp.com/public/' : 'http://localhost:3000/public/';
const CARBON_URL = 'https://carbon.now.sh/'; // URL to CARBON project
const PUBLIC_PATH = '/tmp'

module.exports = {
	API_URL,
	IMAGES_URL,
	CARBON_URL,
	PUBLIC_PATH
};