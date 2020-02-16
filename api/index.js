const headlessVisit = require('../helpers/headless-visit');
const {CARBON_URL, IMAGES_URL} = require('../helpers/globals');

export default async (req, res) => {
    // TODO: validate pareters
    const lang = req.query.lang || 'auto'; // optional, default = auto
    const code = req.query.code;

    // Fetch image
    const url = CARBON_URL + '?code=' + code + '&l=' + lang;
    console.log("URL", url);
    
    headlessVisit({
        url,
        IMAGES_URL
    });

    res.sendFile(IMAGES_URL + 'carbon.png');
}