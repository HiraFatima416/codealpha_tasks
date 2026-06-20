const songs = [
  {
    title: "Song1",
    file: "music/song1.mp3"
  },
  {
    title: "Song 2",
    file: "music/song2.mp3"
  },
  {
    title: "Song 3",
    file: "music/song3.mp3"
  }
];

let currentSong = 0;

const audio = document.getElementById("audio");
const title = document.getElementById("title");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const volume = document.getElementById("volume");
const time = document.getElementById("time");

function loadSong(index){
  audio.src = songs[index].file;
  title.textContent = songs[index].title;
}

loadSong(currentSong);

playBtn.addEventListener("click",()=>{

  if(audio.paused){
    audio.play();
    playBtn.textContent="⏸";
  }else{
    audio.pause();
    playBtn.textContent="▶";
  }

});

nextBtn.addEventListener("click",()=>{

  currentSong++;

  if(currentSong>=songs.length){
    currentSong=0;
  }

  loadSong(currentSong);
  audio.play();
  playBtn.textContent="⏸";

});

prevBtn.addEventListener("click",()=>{

  currentSong--;

  if(currentSong<0){
    currentSong=songs.length-1;
  }

  loadSong(currentSong);
  audio.play();
  playBtn.textContent="⏸";

});

audio.addEventListener("timeupdate",()=>{

  const percent=(audio.currentTime/audio.duration)*100;

  progress.value=percent || 0;

  let current=format(audio.currentTime);
  let total=format(audio.duration);

  time.textContent=current+" / "+total;

});

progress.addEventListener("input",()=>{

  audio.currentTime=(progress.value/100)*audio.duration;

});

volume.addEventListener("input",()=>{

  audio.volume=volume.value;

});

audio.addEventListener("ended",()=>{
  nextBtn.click();
});

function format(sec){

  if(isNaN(sec)) return "0:00";

  let m=Math.floor(sec/60);
  let s=Math.floor(sec%60);

  if(s<10) s="0"+s;

  return m+":"+s;

}
