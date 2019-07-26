echo "Let's set up this repo!"
echo

MY_DIR=${PWD##*/}

git init

git config user.name youshy
git config user.email devilyoushy@gmail.com

echo "# ${MY_DIR}" >> README.md

git add README.md

git commit -m "first commit"
git remote add origin git@github.com:youshy/${MY_DIR}.git
git push -u origin master

