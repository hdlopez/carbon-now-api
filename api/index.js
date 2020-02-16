const headlessVisit = require('../helpers/headless-visit');
const {CARBON_URL, IMAGES_URL} = require('../helpers/globals');

export default async (req, res) => {
    const { body, query } = req

    // TODO: validate pareters
    const lang = query.lang || body.lang || 'auto'; // optional, default = auto
    const code = query.lang || body.code;

    // Fetch image
    const url = CARBON_URL + '?code=' + code + '&l=' + lang;
    console.log("URL", url);
    
    headlessVisit({
        url,
        IMAGES_URL
    });

    res.sendFile(IMAGES_URL + 'carbon.png');
}