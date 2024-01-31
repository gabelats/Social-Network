const router = requier("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

router.use("/api", apiRoutes);

router.use((req, res) => {
  return res.send("wrong route!");
});
router.use("/user", userRoutes);
router.use("/thought", thoughtRoutes);
module.exports = router;
