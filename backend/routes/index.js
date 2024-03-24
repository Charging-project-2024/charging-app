var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  res.json({ message: "Welcome to the API" });
});

router.get("/test", function (req, res) {
  res.json({ message: "test" });
});

router.post("/save-settings-firebase", async (req, res) => {
  try {
    const { maxPrice, chargeTime } = req.body;

    if (maxPrice == null || chargeTime == null) {
      return res
        .status(400)
        .json({ error: "Missing required fields: maxPrice and chargeTime" });
    }

    const db = req.app.locals.firebaseAdmin.firestore();
    const settingsDoc = db.collection("Settings").doc("SettingsDoc");
    await settingsDoc.set({ price: maxPrice, chargeTime });

    res.json({
      message: "Data saved successfully",
      savedData: { maxPrice, chargeTime },
    });
  } catch (error) {
    console.error("Error saving to Firebase:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
