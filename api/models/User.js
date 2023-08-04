import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "This name is already been used"],
    required: [true, "This field is required"],
  },
  email: {
    type: String,
    required: [true, "Please Enter Your Email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Enter Your Password"],
    minLength: [5, "Password should be greater than 5 characters"],
  },
  profilePic: {
    type: String,
    default: "https://www.flaticon.com/free-icon/user_149071"
  },
  bannerPic: {
    type: String,
    default: "https://imagetolink.com/ib/Gh1txxSL2N"
  },
  headline: {
    type: String,
    maxLength: [20, "It Contains only 20 words"]
  },
  location: {
    type: String,
  },
  about: {
    type: String,
    maxLength: [200, "It contains not more than 200 words"]
  },
  languages: {
    type: [String],
  },
  isStudent: {
    type: Boolean,
    default: false
  },
  posts: [
    {
        type: Schema.Types.ObjectId,
        ref: "Post"
    }
  ],
  following: [
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  ],
  follower: [
    {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
  ],
  skills: [String],
  experience: [
    {
        type: Schema.Types.ObjectId,
        ref: "Experience"
    }
  ],
  postedJob: [
    {
      type: Schema.Types.ObjectId,
      ref: "JobPost"
    }
  ],
  jobApplied: [
    {
      type: Schema.Types.ObjectId,
      ref: "JobApplied"
    }
  ]
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

export default mongoose.model("User", userSchema)
