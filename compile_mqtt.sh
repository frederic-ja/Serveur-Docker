while true; do
    read -p "Do you wish to clean Docker?" yn
    case $yn in
        [Yy]* ) docker stop eclipse-mosquitto; docker rm eclipse-mosquitto; docker system prune -a ; break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done

docker run --restart always -it -p 1883:1883 -p 9001:9001 eclipse-mosquitto
echo "Docker Running"
