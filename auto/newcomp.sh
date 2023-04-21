#!/bin/bash

if [ $# -eq 0 ]; then
    echo "Error: No arguments supplied."
    exit 1
fi


mkdir -p "./client/src/components/$1"
touch "./client/src/components/$1/$1.tsx"
touch "./client/src/components/$1/$1.css"

echo "import './$1.css';

function ${1^} () {
  return (
  <div className=\"$1-container\">
  
  </div>
  );
}

export default ${1^};" > "./client/src/components/$1/$1.tsx"

echo "${1^} component successfully created!"