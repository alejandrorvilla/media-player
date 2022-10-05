import MediaPlayer from "./MediaPlayer";
import AutoPause from "./plugins/AutoPause";
import AutoPlay from "./plugins/AutoPlay";
import LoremIpsum from "./LoremIpsum.js";
import Singleton from "./singleton";

const video = document.querySelector("video");
const btnPlay = document.getElementById("play");
const btnMute = document.getElementById("mute");
const btnCancel = document.getElementById("cancelLoad");

//const loremIpsum = new LoremIpsum(document.getElementById("lorempIpsum"));
//loremIpsum.render();

const player = new MediaPlayer({
  el: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

(btnPlay as HTMLElement).onclick = () => {
  player.media.paused ? player.play() : player.pause();
};

(btnMute as HTMLElement).onclick = () => {
  player.toggleMute();
};

(btnCancel as HTMLElement).onclick = () => {
	//loremIpsum.cancelLoad();
}

if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch(error => {
		console.error(error.message);
	})
}

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log("a === b?", a === b)
