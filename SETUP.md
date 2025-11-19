# YappText Setup Guide

## ✅ Completed So Far

- [x] Installed dependencies (Clerk, Prisma, Stripe)
- [x] Created database schema (User, UsageLog models)
- [x] Set up environment variable templates

---

## 🔧 Required Setup Steps (Before Continuing)

### 1. Create Clerk Account (5 minutes)

**Authentication provider - handles Google/Apple OAuth**

1. Go to [https://dashboard.clerk.com/sign-up](https://dashboard.clerk.com/sign-up)
2. Create a new application
3. Select **Google** and **Apple** as OAuth providers
4. Copy your API keys from the dashboard
5. Add to `.env.local`:
   ```bash
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

**Why Clerk?**
- Drop-in React components (15 min setup)
- Google/Apple OAuth built-in
- Free up to 10,000 monthly active users
- Perfect for Next.js

---

### 2. Create Database (10 minutes)

**PostgreSQL database for user data & subscriptions**

**Option A: Vercel Postgres** (Recommended - already on Vercel)
1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Storage** → **Create Database** → **Postgres**
4. Copy the `DATABASE_URL` from the connection string
5. Add to `.env.local`:
   ```bash
   DATABASE_URL=postgres://...
   ```

**Option B: Neon** (Free tier is generous)
1. Go to [https://neon.tech](https://neon.tech)
2. Create a new project
3. Copy the connection string
4. Add to `.env.local`

---

### 3. Create Stripe Account (10 minutes)

**Payment processing for subscriptions**

1. Go to [https://dashboard.stripe.com/register](https://dashboard.stripe.com/register)
2. Create an account (use **Test Mode** for development)
3. Go to **Developers** → **API Keys**
4. Copy your keys:
   ```bash
   STRIPE_SECRET_KEY=sk_test_...
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   ```

**Don't create products yet** - we'll do that together in the code.

---

## 📋 Next Steps (After Setup Complete)

Once you've added the keys to `.env.local`:

1. **Run Prisma migration** to create database tables:
   ```bash
   npx prisma migrate dev --name init
   npx prisma generate
   ```

2. **Verify setup**:
   - Database connected ✓
   - Clerk configured ✓
   - Stripe keys added ✓

3. **Continue building**:
   - Clerk middleware & auth pages
   - Stripe products & pricing
   - Paywall system
   - Usage tracking

---

## ❓ Questions?

**Q: Do I need a credit card for Clerk/Neon/Stripe test mode?**
A: No! All three have generous free tiers for development.

**Q: Can I use a different database (MySQL, MongoDB)?**
A: Yes, but PostgreSQL is recommended for Prisma + Vercel.

**Q: What if I already have a Stripe account?**
A: Perfect! Just grab your test mode keys and add them to `.env.local`.

---

## 🚀 Current Progress

```
[████████░░░░░░░░░░] 40% Complete

✅ Dependencies installed
✅ Database schema created
✅ Environment templates ready
⏳ Waiting for: Clerk + Database + Stripe setup
⬜ Clerk auth integration
⬜ Stripe payment system
⬜ Paywall & usage tracking
⬜ Testing & launch
```

**Estimated time to launch: 4-5 days** (after setup complete)
