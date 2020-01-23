var config = {};

config.debug = process.env.DEBUG || false;

config.mqtt  = {};
config.mqtt.namespace = process.env.MQTT_NAMESPACE || '/Pomo/#';
config.mqtt.hostname  = process.env.MQTT_HOSTNAME  || ${{ secrets.IP_Server }}
config.mqtt.port      = process.env.MQTT_PORT      || 1883;

config.mongodb = {};
config.mongodb.hostname   = process.env.MONGODB_HOSTNAME   || '212.195.57.153';
config.mongodb.port       = process.env.MONGODB_PORT       || 27034;
config.mongodb.database   = process.env.MONGODB_DATABASE   || 'Pomo';
config.mongodb.collection = process.env.MONGODB_COLLECTION || 'status';

module.exports = config;
