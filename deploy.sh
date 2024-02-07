set -e

npm run build

cd .vuepress/dist

git init
git add -A

git commit -m "docs deploy"

git push -f git@github.com:wjwhch/hc-blog.github.io.git master:gh-pages

cd -