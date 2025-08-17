# Push Your Pricing Table to GitHub

Follow these steps to push your embeddable pricing table project to GitHub.

## Prerequisites

- [Git](https://git-scm.com/downloads) installed on your computer
- [GitHub account](https://github.com/join) created

## Step 1: Create a GitHub Repository

1. **Go to GitHub** and log in to your account
2. **Click the "+" icon** in the top right corner
3. **Select "New repository"**
4. **Fill in repository details:**
   - Repository name: `embeddable-pricing-table` (or your preferred name)
   - Description: `Beautiful, embeddable pricing table with 3D effects and annual/monthly toggle`
   - Make it **Public** (so others can see your work)
   - **Don't** initialize with README, .gitignore, or license (we already have these files)
5. **Click "Create repository"**

## Step 2: Initialize Git in Your Project

Open your terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create your first commit
git commit -m "Initial commit: Complete embeddable pricing table with 3D effects"
```

## Step 3: Connect to GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Set the default branch name to main
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 4: Update Package.json (Optional)

Update your `package.json` file with the correct repository information:

```json
{
  "repository": {
    "type": "git",
    "url": "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
  },
  "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME",
  "bugs": {
    "url": "https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/issues"
  }
}
```

Then commit the changes:

```bash
git add package.json
git commit -m "Update repository information in package.json"
git push
```

## Step 5: Verify Upload

1. **Go to your GitHub repository** in your browser
2. **Verify all files are uploaded** - you should see:
   - All your component files
   - README.md with documentation
   - package.json
   - .gitignore
   - All other project files

## Step 6: Deploy to Vercel (Recommended)

1. **Go to [Vercel](https://vercel.com)** and sign up/log in
2. **Click "Import Project"**
3. **Select your GitHub repository**
4. **Configure project:**
   - Framework Preset: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Click "Deploy"**
6. **Get your deployment URL** (e.g., `https://your-project.vercel.app`)

## Step 7: Update Your README

Update your README.md with the actual deployment URL:

```bash
# Edit README.md and replace placeholder URLs with your actual URLs
# Then commit the changes:
git add README.md
git commit -m "Update README with actual deployment URLs"
git push
```

## Alternative Deployment Options

### GitHub Pages
```bash
# Enable GitHub Pages in repository settings
# Go to Settings > Pages > Source: GitHub Actions
# Your site will be available at: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

### Netlify
```bash
# Go to netlify.com
# Click "New site from Git"
# Select your GitHub repository
# Build command: npm run build
# Publish directory: dist
```

## Making Future Updates

When you make changes to your pricing table:

```bash
# Add your changes
git add .

# Commit with a descriptive message
git commit -m "Add hover effects to pricing buttons"

# Push to GitHub
git push

# Your deployment will automatically update (if using Vercel/Netlify)
```

## Sharing Your Pricing Table

Once deployed, you can embed your pricing table anywhere using:

### Iframe Method (Works Everywhere)
```html
<iframe 
  src="https://your-actual-domain.vercel.app" 
  width="100%" 
  height="1200px" 
  frameborder="0" 
  style="border: none;">
</iframe>
```

### Direct Link
Simply share your deployment URL: `https://your-actual-domain.vercel.app`

## Troubleshooting

### Common Issues:

**"Remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

**"Permission denied"**
- Make sure you're logged into the correct GitHub account
- Consider using SSH instead of HTTPS
- Check your GitHub access tokens

**"Build failed"**
- Make sure all dependencies are listed in package.json
- Check that your build commands are correct
- Review build logs for specific errors

## Success! 🎉

Your pricing table is now:
- ✅ Stored safely on GitHub
- ✅ Deployed and accessible worldwide
- ✅ Ready to embed in any website
- ✅ Easy to update and maintain

## Next Steps

1. **Star your repository** to make it easier to find
2. **Add topics/tags** like `pricing-table`, `react`, `embeddable`, `saas`
3. **Share it** with your team or community
4. **Create releases** for major updates
5. **Add issues/feature requests** for future improvements

---

**Need help?** Open an issue in your GitHub repository or check the GitHub documentation.