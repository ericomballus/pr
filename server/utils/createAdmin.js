const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const User = require("../api/models/UserModel");
const Right = require("../api/models/Access_RightModel");
module.exports = async () => {
  try {
    let accessRightId;
    let role;
    let r = await Right.find({ role: 1 }).exec();
    if (r && r.length < 1) {
      const doc = new Right({ role: 1, description: "super admin" });
      const ri = await doc.save();
      accessRightId = ri._id;
      role = ri.role;
    } else {
      accessRightId = r[0]._id;
      role = r[0].role;
    }
    let admin = await User.find({ role: 1 }).exec();
    if (admin.length < 1) {
      bcrypt.hash("admin*", 10, async (err, hash) => {
        if (err) {
          console.log(err);
        }
        const user = new User({
          firstName: "admin",
          lastName: "admin",
          email: "adminwebsite@admin.com",
          password: hash,
          accessRightId: accessRightId,
          AccessRight: role,
        });
        let admin = await user.save();
        console.log(admin);
      });
    }
  } catch (error) {}
};
