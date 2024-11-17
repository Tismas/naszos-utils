pnpm gen:docs
pnpm build
cd ./build
npm publish
cd ..

git add --all
git commit -m \"$1\"
git push