const { response } = require("express");
const Human = require("../../models/humans");

const DeleteHuman = async (req, res = response) => {
  const { id } = req.body;
  try {
    if (id)
      Human.findByIdAndRemove(id, () => {
        console.log(id);
        res.json({
          error: false,
          msg: "delete Human",
        });
      });
    else {
      res.status(500).json({
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: true,
    });
  }
};

module.exports = DeleteHuman;
