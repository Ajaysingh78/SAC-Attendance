let currentsong = new Audio();
async function getSongs() {
    let a = await fetch("http://127.0.0.1:5500/spotyproject/songs/");
    let response = await a.text();
    console.log(response);
    let div = document.createElement("div");
    div.innerHTML = response;
    let as = div.getElementsByTagName("a");
    let songs = [];

    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split("/songs/")[1])

        }

    }
    return songs;



}
const playMusic = (Track) => {
    // let audio = new Audio("/songs/" + track)
    currentsong.src = "/songs/" + Track
    currentsong.play();
    play.src="pause.svg"
    document.querySelector(".songinfo").innerHTML=""
    document.querySelector(".songtime").innerHTML="00:00/00:00";

}

async function main() {
    //get the list of all the song....

    let songs = await getSongs();

    let songul = document.querySelector(".songlist").getElementsByTagName("ul")[0]
    for (const song of songs) {
        songul.innerHTML = songul.innerHTML + `
        <li><img class="invert" width="34" src="music.svg" alt="">
                            <div class="info"> 
                                <div>${song.replaceAll("%20 ", " ")}</div>
                                <div>Ajay</div>
                              
                             </div>
                             <div class="playnow">
                                    <span>Play Now</span>
                                       <img class="invert"  src="playbar.svg" alt="palybar">
                            </div>
                           
                        
                        
        
        
        
        
        </li>`;
    }
    //play the first song here...
    // var audio = new Audio(songs[0]);
    // // audio.play();
    // audio.addEventListener("loadeddata",()=>{
    //     let duration=audio.duration;
    //     console.log(audio.duration,audio.currentSrc,audio.currentTime);
    // });
    Array.from(document.querySelector(".songlist").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            console.log(e.querySelector(".info").firstElementChild.innerHTML);
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })





    })

}
main();

