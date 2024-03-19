module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
          blacklist: null, // Optional
          whitelist: null, // Optional
          safe: false, // Optional
          allowUndefined: true, // Optional
        },
      ],
    ],
  };
};
