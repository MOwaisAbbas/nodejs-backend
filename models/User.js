import mongoose from "mongoose";

const { Schema } = mongoose;
const UserSchema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true
    },
    email: {
        type: Schema.Types.String,
        required: true,
        unique: true
    },
    phone: {
        type: Schema.Types.Number,
    },
    password: {
        type: Schema.Types.String,
        required: true
    }
}, {
    timestamps: {
        createdAt: 'create',
        updatedAt: 'update'
    }
})

const User = mongoose.model('User', UserSchema);

export default User;