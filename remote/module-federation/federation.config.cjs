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
    ...shareAll()
  }
});





