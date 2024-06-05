const Duty = require('../models/duty');
const User = require('../models/user');

const dutyAssign = async (req, res) => {
  const { mobileNumber, checkbox, startTime, endTime, selectedArea } = req.body;

  try {
    // Check if user exists
    const user = await User.findOne({ mobileNumber });

    if (!user) {
      return res.status(401).json({ message: 'Invalid mobile number' });
    }

    // Check if the selected area is part of the user's assigned areas
    if (!user.areas.includes(selectedArea)) {
      return res.status(403).json({ message: 'User is not assigned to the selected area' });
    }

    // Create and save the duty assignment
    const duty = new Duty({
      checkbox,
      startTime,
      endTime,
      assignedArea: selectedArea,
      assignedTo: user.mobileNumber,
    });

    await duty.save();

    res.status(200).json({ message: 'Assigned Successfully', duty });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = {
  dutyAssign,
};
