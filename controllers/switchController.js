const Switch = require("../models/Switch");

// GET all switches
exports.getSwitches = async (req, res) => {
  try {
    const switches = await Switch.find();
    res.json(switches);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// POST new switch
exports.addSwitch = async (req, res) => {
  try {
    const newSwitch = new Switch(req.body);
    await newSwitch.save();
    res.status(201).json(newSwitch);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to add switch", details: error.message });
  }
};

// PUT update switch by ID
exports.updateSwitch = async (req, res) => {
  try {
    const updatedSwitch = await Switch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedSwitch)
      return res.status(404).json({ error: "Switch not found" });
    res.json(updatedSwitch);
  } catch (error) {
    res
      .status(400)
      .json({ error: "Failed to update switch", details: error.message });
  }
};

// DELETE switch by ID
exports.deleteSwitch = async (req, res) => {
  try {
    const deletedSwitch = await Switch.findByIdAndDelete(req.params.id);
    if (!deletedSwitch)
      return res.status(404).json({ error: "Switch not found" });
    res.json({ message: "Switch deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to delete switch", details: error.message });
  }
};
