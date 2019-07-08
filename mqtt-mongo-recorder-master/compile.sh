while true; do
    read -p "Do you wish to clean Docker?" yn
    case $yn in
        [Yy]* ) docker stop mqtt_recorder; docker rm mqtt_recorder; docker system prune;  break;;
        [Nn]* ) break;;
        * ) echo "Please answer yes or no.";;
    esac
done
docker build -t js_app .
echo "Build Complete"

docker run -it --restart unless-stopped --name mqtt_recorder js_app
echo "Docker Running"


