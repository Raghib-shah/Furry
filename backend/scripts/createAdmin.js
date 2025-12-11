const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const AdminUser = require('../models/AdminUser');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/furryweb';

async function createAdmin() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    const username = process.argv[2] || 'admin';
    const password = process.argv[3] || 'admin123';

    // Check if admin already exists
    const existingAdmin = await AdminUser.findOne({ username });
    if (existingAdmin) {
      console.log('Admin user already exists. Updating password...');
      existingAdmin.passwordHash = await bcrypt.hash(password, 10);
      await existingAdmin.save();
      console.log('Admin password updated successfully!');
    } else {
      const passwordHash = await bcrypt.hash(password, 10);
      const admin = new AdminUser({
        username,
        passwordHash
      });
      await admin.save();
      console.log('Admin user created successfully!');
    }

    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
}

createAdmin();

