const { allDownloads, enquireResponse } = require("../controller/index");

const router = require("express").Router();

router.route("/allFiles").get(allDownloads);


router.route("/sendEnquiry").post(enquireResponse)

module.exports = router;


