cd dist/

files=(
  "index.js"
)

for file in ${files[@]}; do
  npx uglifyjs $file -o $file
done
