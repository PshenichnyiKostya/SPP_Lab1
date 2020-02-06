import mongoose from 'mongoose';

const taskSchema = mongoose.Schema({
    // customer: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    // price: {type: Number, default: null},
    // date: {type: Date, default: new Date()},
    // curLocation: {type: String, default: null},
    // neededLocations: [
    //     {type: String, default: null}
    // ],
    // review: {type: mongoose.Schema.Types.ObjectId, ref: 'review'},
    // typePay: {type: String, default: null}, // cash or numcard
    // status: {type: String, default: null}, // confirmed, canceled,in progress,awaiting
    // driver: {type: mongoose.Schema.Types.ObjectId, ref: "user"},
    // organization: {type: mongoose.Schema.Types.ObjectId, ref: "organization"},
    name: {type: String, default: null},
    status: {type: String, default: null},
    endDate: {type: Date, default: new Date()},
});


module.exports = mongoose.model('task', taskSchema);