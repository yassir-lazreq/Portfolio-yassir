# 📧 Email Contact Form Setup Guide

Your contact form is now configured to send you emails! Follow these simple steps:

## Step 1: Create a Formspree Account (FREE)

1. Go to **https://formspree.io/**
2. Click **"Get Started"** or **"Sign Up"**
3. Create a free account (you can use your GitHub or Google account)

## Step 2: Create a New Form

1. After logging in, click **"+ New Form"**
2. Give your form a name (e.g., "Portfolio Contact Form")
3. Enter the email where you want to receive messages: **yassir.lazreq@example.com** (or your actual email)
4. Click **"Create Form"**

## Step 3: Get Your Form ID

After creating the form, you'll see a URL like:
```
https://formspree.io/f/mrbzkdaw
```

The part after `/f/` is your **Form ID** (e.g., `mrbzkdaw`)

## Step 4: Update Your Code

1. Open `main.js` in your code editor
2. Find this line (around line 210):
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID';
   ```
3. Replace `YOUR_FORM_ID` with your actual form ID:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrbzkdaw';
   ```
4. Save the file

## Step 5: Test It!

1. Open your `index.html` in a browser
2. Scroll to the Contact section
3. Fill out the form and click "Send Message"
4. **IMPORTANT**: The first submission will require email confirmation
   - Check your email (yassir.lazreq@example.com)
   - Click the confirmation link from Formspree
5. After confirmation, all future submissions will arrive automatically!

## What Happens When Someone Contacts You?

✅ You'll receive an email at your configured address
✅ The email will contain:
   - Sender's name
   - Sender's email address
   - Their message
   - Timestamp

✅ You can reply directly to their email
✅ Free plan includes 50 submissions per month

## Alternative: Use Your Own Email Directly

If you prefer, you can also update the form to use `mailto:` (no backend needed):

In `index.html`, change the form tag to:
```html
<form id="contactForm" action="mailto:yassir.lazreq@example.com" method="POST" enctype="text/plain">
```

**Note**: This method opens the user's email client, which is less user-friendly than Formspree.

## Troubleshooting

### "Form not found" error
- Double-check your Form ID is correct
- Make sure you've saved `main.js` after updating

### No emails arriving
- Check your spam folder
- Verify the email address in Formspree settings
- Make sure you confirmed the first test submission

### Form shows an error
- Check browser console (F12) for error messages
- Verify internet connection
- Try refreshing the page

## Free Plan Limits

- ✅ 50 submissions per month
- ✅ Unlimited forms
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (up to 10MB)

Need more? Upgrade to a paid plan on Formspree.

---

**That's it!** Your contact form will now send you emails automatically. 🎉
