import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      default: "",
    },
    lastName: {
      type: String,
      required: true,
      default: "",
    },
    email: {
      type: String,
      required: true,
      default: "",
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", UserSchema);

export default User;
