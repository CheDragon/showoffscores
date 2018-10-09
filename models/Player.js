import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Player = new Schema({
    id: {
        type: Number
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    aka: {
        type: String
    },
    score: {
        type: Number,
        default: 0
    }
});

export default mongoose.model('Player', Player);
