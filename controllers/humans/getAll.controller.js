const { response } = require("express");
const Human = require("../../models/humans");

const getAllHumans = async (req, res = response) => {
  const { page, limit = 10, value = "" } = req.query;
  const skip = page * limit;
  // const uid = req.uid;
  const query = {
    $or: [
      { name: { $regex: value, $options: "i" } },
      { phone: { $regex: value, $options: "i" } },
      { email: { $regex: value, $options: "i" } },
      { address: { $regex: value, $options: "i" } },
      { region: { $regex: value, $options: "i" } },
    ],
  };
  try {
    const humansCount = await Human.count();
    const humans = await Human.find(query)
      .skip(Number(value !== "" ? 0 : skip))
      .limit(Number(limit));

    if (humans)
      res.json({
        msg: "all humans in space",
        limit,
        page,
        humans: humans,
        total: humansCount,
      });
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllHumans;
