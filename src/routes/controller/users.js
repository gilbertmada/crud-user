import UserModel from "../../model/user.js";
export const createUser = async (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  //console.log( firstName,lastName, email );

  const existemail = await UserModel.findOne({ email });

  if (existemail) {
    console.log("Email alread exist");
  }

  var userDoc = new UserModel({ firstName, lastName, email });
  await userDoc.save();
  //res.status(200).send(userDoc);
  console.log(userDoc);
};
export const getUser = async (req, res) => {
  const name = await UserModel.findOne({ _id: req.params.id });
  res.send(name);
};

export const getListUser = async (req, res) => {
  const userList = await UserModel.find({});

  res.status(200).send(JSON.stringify(userList));
};

export const updateUser = async (req, res) => {
  const userId = req.params.id;
  const user = await UserModel.findById(userId);
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.email = req.body.email;
  await user.save();
  res.status(200).send(user);
};
export const deleteUser = async (req, res) => {
  const userDelete = await UserModel.findByIdAndDelete({
    _id: req.params.id,
  });
  console.log("delete");
  res.status(200).send(JSON.stringify(userDelete));
};
