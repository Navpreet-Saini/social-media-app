const fs = require('fs');
const path = require('path');

const structure = [
  'app/api/auth/.gitkeep',
  'app/api/users/.gitkeep',
  'app/api/posts/.gitkeep',
  'app/profile/.gitkeep',
  'app/posts/.gitkeep',
  'app/search/.gitkeep',
  'app/layout.js',
  'app/page.js',
  'components/AuthForm.js',
  'components/ProfileForm.js',
  'components/PostCard.js',
  'components/CreatePostForm.js',
  'components/LikeButton.js',
  'lib/mongodb.js',
  'lib/auth.js',
  'models/User.js',
  'models/Post.js',
  'public/images/.gitkeep',
  'styles/globals.css',
  '.env.local',
  'package.json',
  'next.config.js',
  'README.md',
];

structure.forEach(file => {
  const dir = path.dirname(file);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(file)) fs.writeFileSync(file, '');
});

console.log('✅ Folder and file structure created!');
