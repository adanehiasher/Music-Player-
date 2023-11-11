let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("P")){
        song.pause();
        ctrlIcon.classList.remove("P")
        ctrlIcon.classList.add("II")
        ctrlIcon.innerHTML = '<i class="fa-solid fa-pause"></i>'
    }else{
        song.play();
        ctrlIcon.classList.remove("II");
        ctrlIcon.classList.add("P");
        ctrlIcon.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

if(song.play()){

    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500);

    progress.onchange = function(){
        song.play();
        song.currentTime = progress.value;
        ctrlIcon.classList.remove("P");
        ctrlIcon.classList.add("II");
    }

}

