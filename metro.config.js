const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Add this line to tell Expo Router to look inside `src`
config.projectRoot = __dirname;
config.watchFolders = [__dirname + "/src"];

module.exports = config;
