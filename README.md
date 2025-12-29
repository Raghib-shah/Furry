# Furryweb - Furry Art Commissions Platform

A complete MERN stack application for managing furry art commissions with a beautiful dark neon theme.

## Features

- 🎨 Dark neon theme with Tailwind CSS
- 🎭 Full-screen Typeform-style commission popup
- 💳 PayPal payment integration
- 🔐 Admin dashboard for managing inquiries and payments
- 📱 Responsive design
- ✨ Smooth animations with Framer Motion

## Tech Stack

- **Frontend**: React, React Router, Tailwind CSS, Framer Motion
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Payment**: PayPal integration

## Quick Start

**Windows Users:** Run the automated setup script:
```powershell
.\setup.ps1
```

**Manual Setup:** See [QUICKSTART.md](./QUICKSTART.md) for a 5-minute guide, or [SETUP.md](./SETUP.md) for detailed instructions.

### Quick Setup (5 Steps)

1. **Install dependencies:**
   ```bash
   npm run install-all
   ```

2. **Create backend `.env` file:**
   - Copy `backend/.env.example` to `backend/.env`
   - Update `MONGODB_URI` and `JWT_SECRET`

3. **Create admin user:**
   ```bash
   cd backend
   npm run create-admin
   ```

4. **Start development servers:**
   ```bash
   npm run dev
   ```

5. **Open browser:**
   - Frontend: http://localhost:3000
   - Admin: http://localhost:3000/admin (admin/admin123)

### Environment Variables

Create a `.env` file in the `backend` directory:

```
MONGODB_URI=mongodb://localhost:27017/furryweb
JWT_SECRET=your-secret-key-change-this
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret
PAYPAL_MODE=sandbox
```

## Project Structure

```
furryweb/
├── backend/
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── middleware/     # Auth middleware
│   └── server.js        # Express server
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── context/     # React context
│   │   └── App.js       # Main app component
│   └── public/          # Static files
└── package.json         # Root package.json
```

## Routes

### Frontend Routes
- `/` - Home page
- `/our-work` - Portfolio gallery
- `/services/refsheets` - Reference sheets service
- `/services/drawings` - Drawings service
- `/services/icons` - Icons service
- `/services/stickers` - Stickers service
- `/faq` - FAQ page
- `/pride` - Pride campaign page
- `/terms` - Terms of service
- `/privacy` - Privacy policy
- `/admin` - Admin login
- `/admin/dashboard` - Admin dashboard

### Backend API Routes
- `POST /api/inquiry/create` - Create new inquiry
- `POST /api/payments/create` - Create payment
- `POST /api/payments/verify` - Verify payment
- `POST /api/admin/login` - Admin login
- `GET /api/admin/inquiries` - Get all inquiries
- `GET /api/admin/payments` - Get all payments
- `GET /api/admin/payment/:id/receipt` - Download receipt

## Design System

The application uses a consistent dark neon color palette:

- `bgMain`: #050816
- `surface`: #0f172a
- `primary`: #8b5cf6
- `primarySoft`: #a855f7
- `accent`: #22d3ee
- `warning`: #facc15
- `textMain`: #f9fafb
- `textMuted`: #9ca3af
- `borderSoft`: #1f2937

## Commission Popup Flow

1. Welcome screen with sale banner
2. First name (alphabet only, no numbers)
3. Sona name (alphabet only)
4. Email (must end with valid domain)
5. Discord username
6. PayPal payment summary
7. Thank you screen

## Admin Access

To create an admin user, run:

```bash
cd backend
npm run create-admin [username] [password]
```

Example:
```bash
npm run create-admin admin mypassword123
```

If no arguments are provided, it defaults to:
- Username: `admin`
- Password: `admin123`

**Important**: Change the default password immediately after first login!

## License

MIT

