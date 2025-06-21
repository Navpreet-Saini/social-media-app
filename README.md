Social Media Platform
A modern, responsive social media platform built with Next.js, MongoDB Atlas, and NextAuth.js.
Users can sign up, create profiles, post text and images, like (clap) posts, comment, and more—all in a beautiful, mobile-friendly UI.

🚀 Live Demo
https://social-media-app-3pa4.vercel.app/auth/login

📸 Screenshots
![Home](./public/screenshots/home.png)

![Login](./public/screenshots/login.png)

![Sign-Up](./public/screenshots/signup.png)

![Profile](./public/screenshots/profile.png)

![Post](./public/screenshots/post.png)

![ Toggle](./public/screenshots/darkMode.png)

User Authentication: Secure signup, login, and logout with NextAuth.js

User Profiles: Edit name, username, bio, and upload profile avatar (Cloudinary or avatar generator)

Post Creation: Share text and images with the community

Global Feed: See posts from all users (only visible when logged in)

Likes (Claps): Like/clap posts as many times as you want, Medium-style

Comments: Comment on posts and see all comments instantly

Edit/Delete Posts: Authors can edit or delete their own posts

Dark Mode: Toggle light/dark theme from the navbar

Responsive Design: Looks great on mobile and desktop

Protected Routes: Feed and post creation are only for authenticated users

🛠️ Tech Stack
Frontend: Next.js (App Router), React, Tailwind CSS

Backend: Next.js API routes (RESTful), Node.js

Authentication: NextAuth.js (credentials provider)

Database: MongoDB Atlas (Mongoose ODM)

Image Uploads: Cloudinary (for avatars and post images)

📦 Project Structure
text
app/
  api/           # API routes (auth, posts, comments, etc.)
  components/    # Navbar, DarkModeToggle, etc.
  profile/       # Profile page and edit form
  page.js        # Main feed (protected)
  auth/          # Login and signup pages
models/          # Mongoose models (User, Post)
lib/             # Database and Cloudinary config
public/          # Static assets, favicon
styles/          # Tailwind CSS config
⚡ Getting Started
1. Clone the repository
bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
2. Install dependencies
bash
npm install
3. Set up environment variables
Create a .env.local file with:

text
MONGODB_URI=your-mongodb-atlas-uri
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-key
CLOUDINARY_API_SECRET=your-cloudinary-secret
NEXTAUTH_SECRET=your-random-secret
NEXTAUTH_URL=http://localhost:3000
4. Run the development server
bash
npm run dev
Visit http://localhost:3000 to use the app.

🌐 Deployment
Deploy to Vercel for the best Next.js experience.

Set all environment variables in your Vercel dashboard.

📝 Known Issues / Limitations
Only post authors can edit/delete their own posts.

No email verification or password reset (can be added as an enhancement).

Real-time updates (e.g., for comments/likes) require a page refresh.

No user following/feed filtering (bonus features possible).

🙏 Credits
Next.js

MongoDB Atlas

NextAuth.js

Cloudinary

Tailwind CSS

