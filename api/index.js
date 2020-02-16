const headlessVisit = require('../helpers/headless-visit');
const {CARBON_URL, IMAGES_URL} = require('../helpers/globals');

export default async (req, res) => {
    const { body } = req

    // TODO: validate pareters
    const lang = body.lang || 'auto'; // optional, default = auto
    const code = body.code;

    // Fetch image
    const url = CARBON_URL + '?code=' + code + '&l=' + lang;
    console.log("URL", url);
    
    headlessVisit({
        url,
        IMAGES_URL
    });

    res.sendFile(IMAGES_URL + 'carbon.png');
}