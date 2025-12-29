# Furryweb Setup Script for Windows PowerShell

Write-Host "🎨 Furryweb Setup Script" -ForegroundColor Cyan
Write-Host ""

# Step 1: Install dependencies
Write-Host "Step 1: Installing dependencies..." -ForegroundColor Yellow
npm run install-all
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to install dependencies" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Dependencies installed" -ForegroundColor Green
Write-Host ""

# Step 2: Create .env file
Write-Host "Step 2: Creating .env file..." -ForegroundColor Yellow
if (Test-Path "backend\.env") {
    Write-Host "⚠️  .env file already exists, skipping..." -ForegroundColor Yellow
} else {
    if (Test-Path "backend\.env.example") {
        Copy-Item "backend\.env.example" "backend\.env"
        Write-Host "✅ Created .env from .env.example" -ForegroundColor Green
        Write-Host "⚠️  Please edit backend\.env and update MONGODB_URI and JWT_SECRET" -ForegroundColor Yellow
    } else {
        # Create .env file manually
        $envContent = @"
MONGODB_URI=mongodb://localhost:27017/furryweb
JWT_SECRET=your-secret-key-change-this
PAYPAL_CLIENT_ID=your-paypal-client-id
PAYPAL_CLIENT_SECRET=your-paypal-client-secret
PAYPAL_MODE=sandbox
"@
        $envContent | Out-File -FilePath "backend\.env" -Encoding utf8
        Write-Host "✅ Created backend\.env file" -ForegroundColor Green
        Write-Host "⚠️  Please edit backend\.env and update MONGODB_URI and JWT_SECRET" -ForegroundColor Yellow
    }
}
Write-Host ""

# Step 3: Create admin user
Write-Host "Step 3: Creating admin user..." -ForegroundColor Yellow
Write-Host "⚠️  Make sure MongoDB is running before proceeding!" -ForegroundColor Yellow
$createAdmin = Read-Host "Create admin user now? (y/n)"
if ($createAdmin -eq "y" -or $createAdmin -eq "Y") {
    cd backend
    npm run create-admin
    cd ..
    Write-Host "✅ Admin user created" -ForegroundColor Green
} else {
    Write-Host "⏭️  Skipping admin user creation" -ForegroundColor Yellow
    Write-Host "   Run manually later: cd backend && npm run create-admin" -ForegroundColor Gray
}
Write-Host ""

# Summary
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Edit backend\.env and update:" -ForegroundColor White
Write-Host "   - MONGODB_URI (your MongoDB connection)" -ForegroundColor Gray
Write-Host "   - JWT_SECRET (any random string)" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Make sure MongoDB is running" -ForegroundColor White
Write-Host ""
Write-Host "3. Start the development servers:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Yellow
Write-Host ""
Write-Host "4. Open http://localhost:3000 in your browser" -ForegroundColor White
Write-Host ""
Write-Host "Admin Panel: http://localhost:3000/admin" -ForegroundColor Cyan
Write-Host "   Default: admin / admin123" -ForegroundColor Gray
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

