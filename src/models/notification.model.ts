import mongoose from 'mongoose';

export interface notificationT extends mongoose.Document {
    title: string;
    description: string;
}

const notificationSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
}, { timestamps: true });

const Notification = mongoose.model<notificationT>("Notification", notificationSchema);

export default Notification;
