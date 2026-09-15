if [ "$#" -eq 0 ]; then
    echo "No arguments supplied"
else
    for name in "$@"; do
        mkdir -p "ex${name}"
    done
fi

# elif [ "$#" -gt 3  ]; then
#     echo "arg greater than 3"