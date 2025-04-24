// models/Switch.js
const mongoose = require("mongoose");

const SwitchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ip: { type: String, required: true },
  ports: [
    {
      port: String,
      status: String,
      vlan: String,
      connected_to: {
        port: String,
        ip: String,
        device: String,
      },
    },
  ],
  vlans: [
    {
      id: Number,
      name: String,
      status: String,
      ports: [String],
      ip: String,
    },
  ],
});

const Switch = mongoose.model("Switch", SwitchSchema);

module.exports = Switch;
