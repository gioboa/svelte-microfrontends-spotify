const {
  withNativeFederation,
  shareAll,
} = require("@softarc/native-federation/build");

module.exports = withNativeFederation({
  name: "remote",
  exposes: {
    "./remote-mediaplayer": "./src/MediaPlayer.svelte"
  },
  shared: {
    ...shareAll({
      singleton: true, // single version of the shared module
      strictVersion: true, // reject the shared module if version is not valid
      requiredVersion: "auto", // takes the version defined in your package.json
      includeSecondaries: false, // secondary entry points are added too. xxx/common & xxx/common/http
    }),
  },

});

