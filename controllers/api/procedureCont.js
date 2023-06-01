const Procedure = require('../../models/procedureMod');

async function index(req, res) {
  try {
    const procedures = await Procedure.find();
    res.status(200).json(procedures);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;
    const procedure = await Procedure.findById(id);
    if (!procedure) {
      return res.status(404).json({ msg: 'Procedure not found' });
    }
    res.status(200).json(procedure);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
}

module.exports = {
  index,
  show
};
