import MediaPlayer from "../MediaPlayer";
import { PluginPlayer } from "../model/model";

class AutoPlay implements PluginPlayer {
	constructor() { }
	run(player: MediaPlayer) {
		player.media.muted = true;
		player.play();
	}
}


export default AutoPlay;