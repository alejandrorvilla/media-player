import MediaPlayer from "../MediaPlayer";

export interface PluginPlayer {
	run: (player: MediaPlayer) => void
}