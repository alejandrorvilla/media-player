import MediaPlayer from "../MediaPlayer";
import { PluginPlayer } from "../model/model";

class AutoPause implements PluginPlayer{
  private threshold: number;
  private player: MediaPlayer;
  constructor() {
    this.threshold = 0.25;
  }

  run(player: MediaPlayer) {
    this.player = player;
    const observer = new IntersectionObserver(
      this.handlerIntersection.bind(this),
      {
        threshold: this.threshold,
      }
    );

    observer.observe(this.player.media);

    document.addEventListener(
      "visibilitychange",
      this.handlerVisibilityChange.bind(this)
    );
  }

  handlerIntersection(entries: IntersectionObserverEntry[]) {
    const entry = entries[0];
    this.pause(entry.intersectionRatio >= this.threshold);
  }

  handlerVisibilityChange() {
    this.pause(document.visibilityState === "visible");
  }

  pause(isVisible) {
    isVisible ? this.player.play() : this.player.pause();
  }
}

export default AutoPause;
