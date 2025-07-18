import mongoose from 'mongoose';

const PaymentSchema = new mongoose.Schema({
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  tournament: { type: mongoose.Schema.Types.ObjectId, ref: 'Tournament', required: true },
  amount: { type: Number, required: true },
  paymentMode: { type: String, default: 'UPI' }, // UPI, Card, etc.
  status: { type: String, default: 'success' }, // success, pending, failed
  transactionId: { type: String },
  date: { type: Date, default: Date.now }
}, { timestamps: true });

const Payment = mongoose.model('Payment', PaymentSchema);

export default Payment;
