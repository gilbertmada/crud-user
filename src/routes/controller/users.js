import UserModel from "../../model/user.js";
export const createUser = async (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  //console.log( firstName,lastName, email );
  try {
    var userDoc = new UserModel({ firstName, lastName, email });
    const existemail = await UserModel.findOne({ email });

    if (existemail) {
      res.status(409);
      throw new Error("Email already exist.");
    }

    await userDoc.save();
    //res.status(200).send(userDoc);
    console.log(userDoc);
  } catch (error) {
    next(error);
  }
};
export const getUser = async (req, res, next) => {
  try {
    const name = await UserModel.findOne({ _id: req.params.id });
    if (!name) {
      const error = new Error("Name does not exist");
      return next(error);
    }

    res.json(name);
  } catch (error) {
    next(error);
  }
};

export const getListUser = async (req, res, next) => {
  try {
    const userList = await UserModel.find({});

    res.status(200).send(JSON.stringify(userList));
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    // const userId = req.params.id;
    // const doc = await UserModel.findOne({ email }); /*.populate("email")*/
    const user = await UserModel.findOne({ _id: req.params.id });
    if (!user) {
      return next();
    }
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.email = req.body.email;
    /* if (user.email === doc.email) {
      console.log("Email already exist.");
      throw new Error("Email already exist.");
    }*/

    await user.save();
    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
};
export const deleteUser = async (req, res, next) => {
  try {
    const userDelete = await UserModel.findByIdAndDelete({
      _id: req.params.id,
    });
    console.log("delete");
    res.status(200).send(JSON.stringify(userDelete));
  } catch (error) {
    next(error);
  }
};
