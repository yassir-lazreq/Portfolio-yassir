# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS (Tailwind), and vanilla JavaScript.

## Features

- ✨ Clean and modern design
- 📱 Fully responsive layout
- 🎨 Dark theme with indigo accents
- ⚡ Smooth scroll animations
- 📧 Contact form with validation
- 🎯 Accessible and SEO-friendly
- 🚀 No build tools required - just open and run!

## Quick Start

1. **Clone or download** this repository
2. **Open `index.html`** in your web browser
3. That's it! The site will run locally.

## Customization

### Update Your Information

Replace the following placeholders in `index.html`:

- `Your Name` - Your actual name
- `your.email@example.com` - Your email address
- `https://linkedin.com/in/yourprofile` - Your LinkedIn URL
- `https://github.com/yourusername` - Your GitHub URL
- Update the profile photo URL (line ~105)
- Update project links and descriptions
- Update education/certification details

### Update Contact Form

The contact form is ready to send you emails via Formspree!

**Quick Setup (5 minutes):**

1. Go to **https://formspree.io/** and create a free account
2. Create a new form and enter your email address
3. Copy your form ID (looks like: `mrbzkdaw`)
4. Open `main.js` and replace `YOUR_FORM_ID` with your actual ID:
   ```javascript
   const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mrbzkdaw';
   ```
5. Save and test!

📖 **Detailed instructions**: See `SETUP_EMAIL.md`

**Free tier includes:**
- 50 submissions/month
- Email notifications to your inbox
- Spam filtering
- No credit card required

**Alternative Options:**
1. Sign up at https://www.emailjs.com/
2. Follow their documentation to integrate
3. Update the submission function accordingly

**Option 3: Build Your Own Backend**
- Create an API endpoint that receives form data
- Update the fetch URL in the submission function

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── main.js            # JavaScript functionality
├── styles.css         # Custom CSS styles
└── README.md          # This file
```

## Technologies Used

- **HTML5** - Structure and semantics
- **Tailwind CSS** - Utility-first styling (via CDN)
- **Vanilla JavaScript** - Interactivity and animations
- **Lucide Icons** - Beautiful icon set

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## Performance Tips

For production deployment:

1. **Self-host Tailwind CSS** instead of using CDN
2. **Optimize images** - compress and use appropriate formats
3. **Add a favicon** to `index.html`
4. **Consider using a bundler** (Vite, Parcel) for better performance
5. **Enable caching** on your web server

## Deployment

### GitHub Pages
1. Push code to GitHub
2. Go to Settings → Pages
3. Select your branch and save
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify/Vercel
1. Create account
2. Connect your repository
3. Deploy with one click

### Traditional Hosting
1. Upload all files via FTP
2. Point your domain to the hosting

## License

Feel free to use this template for your own portfolio!

## Support

If you encounter any issues or have questions, feel free to open an issue or contact me.

---

**Built with ❤️ using Tailwind CSS**
