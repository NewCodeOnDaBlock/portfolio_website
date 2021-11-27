const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: [true, "First name is required"],
            minlength: [1, "Last name must be at least 1 characters long"]
            },
        lastName:{
            type: String,
            required: [true, "Last name is required"],
            minlength: [1, "Last name must be at least 1 characters long"]
            },
        email:{
            type: String,
            required: [true, "Email is required"],
            minlength: [1, "Email must be at least 1 characters long"]
            },
        phonenumber:{
            type: String,
            minlength: [1, "Phone number must be at least 1 characters long"]
            },
    },
        { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;