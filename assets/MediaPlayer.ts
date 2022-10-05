import { PluginPlayer } from "./model/model";

class MediaPlayer {
  media: HTMLVideoElement;
  private plugins: PluginPlayer[];
  constructor(config) {
    this.media = config.el;
    this.plugins = config.plugins || [];

    this.initPlugins();
  }
  private initPlugins() {
    this.plugins.forEach((plugin) => {
      plugin.run(this);
    });
  }
  play() {
    this.media.play();
  }
  pause() {
    this.media.pause();
  }
  toggleMute() {
    this.media.muted = !this.media.muted;
  }
}

export default MediaPlayer;
