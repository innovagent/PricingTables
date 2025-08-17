# 🚀 Step-by-Step: Push Your Pricing Table to GitHub

Follow these exact steps to get your pricing table on GitHub:

## Step 1: Create GitHub Repository

1. **Go to GitHub.com** and log in to your account
2. **Click the "+" icon** in the top right corner → "New repository"
3. **Fill in repository details:**
   - Repository name: `embeddable-pricing-table` (or your preferred name)
   - Description: `Beautiful, embeddable pricing table with 3D effects and annual/monthly toggle`
   - Set to **Public** (so others can see your work)
   - **DO NOT** check "Initialize with README" (we already have files)
4. **Click "Create repository"**

## Step 2: Open Terminal/Command Prompt

Navigate to your project folder where all your files are located.

```bash
# Navigate to your project directory
cd /path/to/your/pricing-table-project
```

## Step 3: Initialize Git Repository

```bash
# Initialize git repository
git init

# Add all files to staging area
git add .

# Create your first commit
git commit -m "Initial commit: Complete embeddable pricing table with 3D effects and deployment setup"
```

## Step 4: Connect to Your GitHub Repository

**Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:**

```bash
# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Set the default branch name to main
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 5: Verify Upload

1. **Go to your GitHub repository** in your browser
2. **Check that all files are uploaded:**
   - ✅ All component files (PricingTable.tsx, EmbeddablePricingTable.tsx)
   - ✅ Documentation files (README.md, EMBEDDING_GUIDE.md, etc.)
   - ✅ Configuration files (package.json, vite.config.ts)
   - ✅ Deployment scripts (deploy.sh, setup-github.sh)
   - ✅ UI components folder
   - ✅ Styles folder with globals.css

## Step 6: Deploy to Vercel (Recommended)

1. **Go to [vercel.com](https://vercel.com)** and sign up/log in with GitHub
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure deployment:**
   - Framework Preset: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `./` (leave as default)
5. **Click "Deploy"**
6. **Wait for deployment** (usually takes 1-2 minutes)
7. **Get your live URL** (e.g., `https://your-project-name.vercel.app`)

## Step 7: Update Documentation with Live URL

Once deployed, update your README.md with the actual deployment URL:

```bash
# Edit your README.md file and replace placeholder URLs
# Then commit and push the changes:

git add README.md
git commit -m "Update README with live deployment URL"
git push
```

## Quick Copy-Paste Commands

Here are the commands you can copy and paste (replace placeholders):

```bash
# Initialize and commit
git init
git add .
git commit -m "Initial commit: Complete embeddable pricing table with 3D effects and deployment setup"

# Connect to GitHub (REPLACE YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## What You'll Have After This

✅ **GitHub Repository** - All your code safely stored and version controlled  
✅ **Live Deployment** - Working pricing table accessible worldwide  
✅ **Embeddable Widget** - Ready to embed in any website  
✅ **Complete Documentation** - Setup guides and embedding instructions  
✅ **Deployment Scripts** - Easy updates and maintenance  

## Example Embedding (After Deployment)

Once deployed, you can embed your pricing table anywhere:

```html
<!-- Iframe Method (works everywhere) -->
<iframe 
  src="https://your-actual-deployment-url.vercel.app" 
  width="100%" 
  height="1200px" 
  frameborder="0" 
  style="border: none;">
</iframe>
```

## Troubleshooting Common Issues

### "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### "Permission denied (publickey)"
- Make sure you're logged into the correct GitHub account
- Consider using personal access token instead of password
- Or set up SSH keys for GitHub

### "nothing to commit"
```bash
# Check git status
git status

# If files aren't staged, add them:
git add .
git commit -m "Initial commit"
```

### Build fails on Vercel
- Check that all dependencies are in package.json
- Verify build commands are correct
- Check build logs for specific errors

## Success! 🎉

Your pricing table is now:
- ✅ **Safely stored** on GitHub
- ✅ **Live and accessible** to the world
- ✅ **Embeddable** in any website
- ✅ **Professional** with complete documentation
- ✅ **Maintainable** with proper version control

## Next Steps

1. **⭐ Star your repository** to make it easier to find
2. **📝 Add topics** like `pricing-table`, `react`, `tailwind`, `embeddable`
3. **📢 Share** your deployment URL with others
4. **🔄 Set up automatic deployments** (already done with Vercel)
5. **📈 Add analytics** to track usage of your embedded pricing table

---

**Need help?** Open an issue in your GitHub repository or refer to the GitHub documentation.