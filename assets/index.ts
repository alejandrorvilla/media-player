import MediaPlayer from "./MediaPlayer";
import AutoPause from "./plugins/AutoPause";
import AutoPlay from "./plugins/AutoPlay";
import LoremIpsum from "./LoremIpsum.js";
import Singleton from "./singleton";

const video = document.querySelector("video");
const btnPlay = document.querySelector("#play");
const btnMute = document.querySelector("#mute");
const btnCancel = document.querySelector("#cancelLoad");

const loremIpsum = new LoremIpsum(document.querySelector("#lorempIpsum"));
loremIpsum.render();

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
	loremIpsum.cancelLoad();
}

/*if('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').catch(error => {
		console.error(error.message);
	})
}*/

const a = Singleton.getInstance()
const b = Singleton.getInstance()

console.log("------------ Test Singleton ------------");
console.log(`Instancia a === Instancia b? ${a === b}`);
console.log("----------------------------------------");
