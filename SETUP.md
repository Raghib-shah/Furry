# Quick Setup Guide

Follow these steps to get your Furryweb platform running:

## Prerequisites

- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - Either:
  - Local MongoDB installed and running, OR
  - MongoDB Atlas account (free tier available)

## Step-by-Step Setup

### 1. Install All Dependencies

From the project root directory:

```bash
npm run install-all
```

This will install dependencies for:
- Root project (concurrently for running both servers)
- Backend (Express, MongoDB, etc.)
- Frontend (React, Tailwind, Framer Motion)

### 2. Set Up MongoDB

**Option A: Local MongoDB**
- Make sure MongoDB is installed and running
- Default connection: `mongodb://localhost:27017/furryweb`

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string
- Replace `localhost:27017` with your Atlas connection string

### 3. Create Backend Environment File

Create a `.env` file in the `backend/` directory:

```bash
cd backend
copy .env.example .env
```

Or manually create `backend/.env` with:

```env
MONGODB_URI=mongodb://localhost:27017/furryweb
JWT_SECRET=your-secret-key-change-this-to-something-random
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret
PAYPAL_MODE=sandbox
```

**Important**: 
- Change `JWT_SECRET` to a random string (for security)
- For development, PayPal credentials are optional (payment will redirect to a placeholder link)
- For production, get real PayPal credentials from [PayPal Developer](https://developer.paypal.com/)

### 4. Create Admin User

From the `backend/` directory:

```bash
cd backend
npm run create-admin
```

Or with custom credentials:

```bash
npm run create-admin myusername mypassword123
```

**Default credentials** (if no arguments provided):
- Username: `admin`
- Password: `admin123`

⚠️ **Change the default password immediately after first login!**

### 5. Start Development Servers

From the project root directory:

```bash
npm run dev
```

This will start:
- **Backend server** on `http://localhost:5000`
- **Frontend server** on `http://localhost:3000`

The frontend will automatically open in your browser.

## Verify Everything Works

1. **Frontend**: Open `http://localhost:3000` - You should see the homepage
2. **Backend API**: Open `http://localhost:5000` - Should show nothing (API only)
3. **Admin Panel**: Go to `http://localhost:3000/admin` and login with your admin credentials

## Troubleshooting

### MongoDB Connection Error

**Error**: `MongoDB connection error`

**Solutions**:
- Make sure MongoDB is running: `mongod` (for local) or check Atlas connection string
- Verify `.env` file has correct `MONGODB_URI`
- Check firewall settings if using cloud MongoDB

### Port Already in Use

**Error**: `Port 5000/3000 is already in use`

**Solutions**:
- Stop other applications using those ports
- Or change ports in:
  - Backend: `backend/server.js` (change `PORT`)
  - Frontend: Create `.env` in `frontend/` with `PORT=3001`

### Module Not Found

**Error**: `Cannot find module 'xyz'`

**Solution**: Run `npm run install-all` again

### Admin Login Fails

**Error**: `Invalid credentials`

**Solutions**:
- Make sure you created the admin user: `cd backend && npm run create-admin`
- Check that MongoDB is connected and the user was created
- Try creating a new admin user with different credentials

## Next Steps

- Replace image placeholders with actual artwork
- Configure PayPal credentials for real payments
- Customize colors/content to match your brand
- Add your own commission pricing

## Production Deployment

For production:
1. Set `NODE_ENV=production` in backend `.env`
2. Build frontend: `cd frontend && npm run build`
3. Serve frontend build folder with a static server
4. Use a process manager like PM2 for the backend
5. Set up proper MongoDB backups
6. Configure PayPal for live payments (not sandbox)

## Support

If you encounter issues:
1. Check that all dependencies are installed
2. Verify MongoDB is running and accessible
3. Check console logs for specific error messages
4. Ensure all environment variables are set correctly

