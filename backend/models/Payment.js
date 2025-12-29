const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  inquiryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Inquiry',
    required: true
  },
  paymentId: {
    type: String,
    required: true,
    unique: true
  },
  paypalInfo: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  },
  receiptFilePath: {
    type: String,
    default: null
  },
  status: {
    type: String,
    enum: ['PENDING', 'PAID', 'FAILED'],
    default: 'PENDING'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Payment', paymentSchema);

