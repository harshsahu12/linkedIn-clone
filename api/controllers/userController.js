import User from "../models/User.js";
import asyncHandler from "express-async-handler";

//@description     get all the User
//@route           GET /api/users
//@access          Public
export const getAllUser = asyncHandler(async (req, res, next) => {
  try {
    const users = await User.find();

    res.status(200).json({
      success: true,
      users,
    });
  } catch (err) {
    next({ message: err });
  }
});

//@description     get auth user details
//@route           GET /api/user/profile
//@access          Private
export const getUserProfile = asyncHandler(async (req, res, next) => {
  try {
    const user = await User.findById(req.body._id);

    res.status(200).json({ success: true, user });
  } catch (error) {
    next(error);
  }
});

export const updateProfile = asyncHandler(async (req, res, next) => {
    try {
        
    } catch (error) {
        
    }
})
