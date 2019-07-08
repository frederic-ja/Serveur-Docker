while true; do
    read -p "Do you wish to clean Docker?" yn
    case $yn in
        [Yy]* ) docker stop mongodb; docker rm mongodb; docker system prune -a ; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

docker run --restart always -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4
echo "Docker Running"
