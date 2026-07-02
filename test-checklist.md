# 🧪 Chemistry Simulator - Testing Checklist

## 📋 PRE-LAUNCH TESTING

### 1. FREE FEATURES (No Login Required)
- [ ] Open `index.html` in browser
- [ ] Switch between all 7 main tabs (REACTIONS, FLAME, TITRATION, etc.)
- [ ] Select 5 random ion reactions (should work freely)
- [ ] Try 6th random reaction (should show premium lock popup)
- [ ] Click "Go Back to Freemium" on lock popup (should close)
- [ ] Flame tests: Select each cation, verify flame colours
- [ ] Titration: Run HCl vs NaOH (FREE), verify valve tap works
- [ ] Titration: Try selecting option 3+ (should revert to FREE)
- [ ] Gas Tests: Run O₂ test (FREE), verify splint animation
- [ ] Gas Tests: Try selecting H₂, CO₂, etc. (should show premium lock)
- [ ] Cation Tests: Verify all reference cards display
- [ ] Enthalpy: Run NaOH + HCl (FREE), verify graph draws
- [ ] Enthalpy: Try selecting options 1+ (should revert to FREE)
- [ ] Solubility: Run KNO₃ curve (FREE), verify heating works
- [ ] Solubility: Try selecting other salts (should revert to FREE)
- [ ] Practice Questions: Answer all 5 (should work freely)
- [ ] Ions Guide: Verify all cations/anions display
- [ ] Radicals: Verify redox simulator option 0 works (FREE)
- [ ] Radicals: Try options 1+ (should show premium lock)
- [ ] Complex Ions: Try selecting a cation (should show premium lock)
- [ ] Precipitates Guide: Verify all cards display
- [ ] Footer tabs: Test Copyright, Terms, Privacy (open/close)
- [ ] Safari Softwares link: Tap 4 times (should open website)
- [ ] Header badges: Click each (Practical, Syllabus, Ions, etc.)
- [ ] Equation mode toggle: Switch between Word/Ionic equations

### 2. UPGRADE PAGE
- [ ] Open `upgrade.html`
- [ ] Verify price shows KES 350
- [ ] Verify features list is complete
- [ ] Enter test key: `SAF-TEST-FREE-0001`
- [ ] Enter password: `test1234`
- [ ] Click "Activate Premium Now"
- [ ] Should show green success message
- [ ] Click "Open Simulator" link
- [ ] Verify premium features are now unlocked in simulator
- [ ] Try expired key: `SAF-TEST-FREE-0003` / `test9012`
- [ ] Should show "expired" error
- [ ] Try wrong password: `SAF-TEST-FREE-0001` / `wrong`
- [ ] Should show "incorrect password" error
- [ ] Try invalid key: `SAF-XXXX-XXXX-XXXX` / anything
- [ ] Should show "invalid key" error

### 3. 2-DEVICE LIMIT
- [ ] Activate key on Device 1 (browser 1)
- [ ] Open simulator on Device 1 → verify premium is active
- [ ] Activate same key on Device 2 (browser 2 or incognito)
- [ ] Open simulator on Device 2 → verify premium is active
- [ ] Try activating same key on Device 3 (different browser)
- [ ] Should show "already activated on 2 devices" error
- [ ] Go to admin dashboard → reset devices for that key
- [ ] Try Device 3 again → should now work

### 4. PREMIUM FEATURES (After Activation)
- [ ] Ion reactions: Run 10+ random reactions (no limit)
- [ ] All 12 cations should be selectable
- [ ] Titration: All 10 experiments should be accessible
- [ ] Gas Tests: All 8 gases should run with animations
- [ ] Complex Ions: All 6 cations should work with drops
- [ ] Enthalpy: All 5 experiments should work
- [ ] Solubility: All 7 curves should plot
- [ ] Practice Questions: 10 questions (not just 5)
- [ ] Redox Simulator: All 6 reactions should work
- [ ] No premium lock popups anywhere

### 5. ADMIN DASHBOARD
- [ ] Open `admin-login.html`
- [ ] Enter wrong password → verify error message
- [ ] Enter wrong password 5 times → verify lockout
- [ ] Wait or clear sessionStorage to reset
- [ ] Enter correct password: `SafariAdmin2026!`
- [ ] Should show 2FA code prompt
- [ ] Open `totp-helper.html` in another tab
- [ ] Copy the 6-digit code
- [ ] Enter code in admin login
- [ ] Should redirect to `admin.html`
- [ ] Dashboard: Verify stats show correctly
- [ ] Generate Key: Create a test key
- [ ] Verify key appears in All Keys table
- [ ] Edit key: Change student name, save, verify
- [ ] Delete key: Delete a test key, verify removed
- [ ] Payments: Add a payment record
- [ ] Devices: View device activations
- [ ] Reset devices for a key
- [ ] Bulk Generate: Create 5 keys at once
- [ ] Export CSV: Download and verify
- [ ] Export Backup: Download JSON backup
- [ ] Settings: Change price, save
- [ ] Activity Log: Verify actions are logged
- [ ] Logout: Click logout, verify redirect to login

### 6. STATIC PAGES
- [ ] 404.html: Visit a non-existent URL → verify custom 404
- [ ] privacy-policy.html: Verify content displays
- [ ] terms-of-use.html: Verify content displays
- [ ] contact.html: Verify WhatsApp link works
- [ ] README.md: Renders correctly on GitHub

### 7. MOBILE RESPONSIVENESS
- [ ] Test on phone (portrait mode)
- [ ] Test on tablet
- [ ] Test tube visualization should scale
- [ ] Gas test simulator should be usable
- [ ] Titration valve should be tappable
- [ ] All buttons should be finger-friendly (min 44px)

### 8. OFFLINE TESTING
- [ ] Load simulator online first (to cache)
- [ ] Turn off internet
- [ ] Reload page → should still work (if service worker registered)
- [ ] Premium status should persist offline

### 9. BROWSER COMPATIBILITY
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)
- [ ] Safari (if available)
- [ ] Opera Mini (popular in Kenya)

### 10. PERFORMANCE
- [ ] Page load time < 3 seconds
- [ ] No console errors (F12 → Console)
- [ ] No broken images or missing resources
- [ ] localStorage usage < 1MB