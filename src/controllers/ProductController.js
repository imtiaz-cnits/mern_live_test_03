const ProductModel = require("../models/ProductModel");

exports.create = async (req, res) => {
  try {
    let reqBody = req.body;
    await ProductModel.create(reqBody);

    res.json({ status: "success", message: "Create Completed" });
  } catch (err) {
    res.json({ status: "fail", message: err });
  }
};

exports.read = async (req, res) => {
  try {
    let { id } = req.params;
    let data = await ProductModel.find({ _id: id });

    res.json({ status: "success", message: data });
  } catch (err) {
    res.json({ status: "fail", message: err });
  }
};

exports.delete = async (req, res) => {
  try {
    let { id } = req.params;
    await ProductModel.deleteOne({ _id: id });

    res.json({ status: "success", message: "Delete Completed" });
  } catch (err) {
    res.json({ status: "fail", message: err });
  }
};

exports.update = async (req, res) => {
  try {
    let { id } = req.params;
    let reqBody = req.body;
    await ProductModel.updateOne({ _id: id }, reqBody);

    res.json({ status: "success", message: "Update Completed" });
  } catch (err) {
    res.json({ status: "fail", message: err });
  }
};
