date
cd dist
git init

git config user.name "Travis CI"
git config user.email "gordon2012@users.noreply.github.com"

git add .
git commit -m "Deploy to GitHub Pages"

git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
