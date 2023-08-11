const { allDownloads, enquireResponse } = require("../controller/index");

const router = require("express").Router();

router.route("/allFiles").get(allDownloads);


router.route("/sendEnquiry").post(enquireResponse)

// router.route("/sendEnquiry").post(enquireResponse)
// git config --global user.name "Your New Username"


module.exports = router;


