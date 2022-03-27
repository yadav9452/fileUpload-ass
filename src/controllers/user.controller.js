const express = require("express");
const User = require("../models/user.model");
const uploads = require("../middleware/uploads");

const router = express.Router();

router.get("", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        return res.status(200).send(users);
    } catch (err) {
        return res.status(500).send("Something went wrong ..try again");
    }
});
//single file uplaod
router.post("", uploads.single("ProfilePic"), async (req, res) => {
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            ProfilePic: req.file.path,
        });
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send("Something went wrong ..try again");
    }
});

// multiple file uploads
router.post("/multiple", uploads.any("ProfilePic"), async (req, res) => {
    try {
        const filePaths = req.files.map((file) => {
            return file.path;
        });
        const user = await User.create({
            firstName: req.body.firstName,
            ProfilePic: filePaths,
        })
        return res.status(200).send(user);
    } catch (err) {
        return res.status(500).send("Something went wrong ..try again");
    }
});
module.exports = router;
