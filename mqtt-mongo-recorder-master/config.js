var config = {};

config.debug = process.env.DEBUG || false;

config.mqtt  = {};
config.mqtt.namespace = process.env.MQTT_NAMESPACE || 'Pomo/#';
config.mqtt.hostname  = process.env.MQTT_HOSTNAME  || '192.168.1.83';
config.mqtt.port      = process.env.MQTT_PORT      || 1883;

config.mongodb = {};
config.mongodb.hostname   = process.env.MONGODB_HOSTNAME   || '192.168.1.83';
config.mongodb.port       = process.env.MONGODB_PORT       || 27017;
config.mongodb.database   = process.env.MONGODB_DATABASE   || 'Pomo';
config.mongodb.collection = process.env.MONGODB_COLLECTION || 'status';

module.exports = config;
