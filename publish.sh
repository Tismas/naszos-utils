pnpm gen:docs
git add --all
git commit -m \"$1\"
git push
pnpm build
cd ./build
npm publish
cd ..