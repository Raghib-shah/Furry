# 🚀 Quick Start Guide

Get your Furryweb platform running in 5 minutes!

## Prerequisites Check

- ✅ Node.js installed (check with `node --version`)
- ✅ MongoDB running locally OR MongoDB Atlas account

## Setup Commands

### 1️⃣ Install Dependencies
```bash
npm run install-all
```

### 2️⃣ Create Backend .env File

**Windows (PowerShell):**
```powershell
cd backend
Copy-Item .env.example .env
```

**Mac/Linux:**
```bash
cd backend
cp .env.example .env
```

Then edit `backend/.env` and update:
- `MONGODB_URI` - Your MongoDB connection string
- `JWT_SECRET` - Any random string (e.g., `my-super-secret-key-123`)

### 3️⃣ Create Admin User
```bash
cd backend
npm run create-admin
```

Default login:
- Username: `admin`
- Password: `admin123`

### 4️⃣ Start Everything
```bash
npm run dev
```

✅ Backend: http://localhost:5000  
✅ Frontend: http://localhost:3000  
✅ Admin: http://localhost:3000/admin

## That's It! 🎉

Your platform is now running. Open http://localhost:3000 in your browser.

## Common Issues

**MongoDB Error?**
- Make sure MongoDB is running
- Check your `.env` file has correct `MONGODB_URI`

**Port Already in Use?**
- Stop other apps using ports 3000 or 5000
- Or change ports in the config files

**Can't Login to Admin?**
- Make sure you ran `npm run create-admin`
- Check MongoDB is connected

For detailed setup, see [SETUP.md](./SETUP.md)

