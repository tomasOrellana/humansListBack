const { response } = require("express");
const Human = require("../../models/humans");

const CreateHuman = async (req, res = response) => {
  const { name, phone, email, address, region, country } = req.body;
  const human = new Human({ name, phone, email, address, region, country });

  await human.save();

  res.json({
    error: false,
    msg: "userCreated",
    human,
  });
};

module.exports = CreateHuman;
