console.log("Welcome to spotify");
//Initialized the veriables
let songIndex=0;
let masterPlay=document.getElementById("masterPlay");
let audioElement=new Audio('musiclist/1.mp3');
let myProgressBar=document.getElementById("myProgressBar");
let gifImg=document.getElementById("gifImg");
let songItems=Array.from(document.getElementsByClassName("songItem"))
let masterSongName=document.getElementById("masterSongName");

let songs=[
    {songName:"Jine laga hu",filePath:"musiclist/0.mp3",coverPath:"coverimg/1cover.png"},
    {songName:"Matlabi ho ja jara",filePath:"musiclist/1.mp3",coverPath:"coverimg/2cover.png"},
    {songName:"Subha hone na de",filePath:"musiclist/2.mp3",coverPath:"coverimg/3cover.png"},
    {songName:"Ham tere bin ",filePath:"musiclist/3.mp3",coverPath:"coverimg/4cover.png"},
    {songName:"teri meri prem ",filePath:"musiclist/4.mp3",coverPath:"coverimg/5cover.png"},
    {songName:"tu mera hamsafar ",filePath:"musiclist/5.mp3",coverPath:"coverimg/6cover.png"},
    {songName:"Agar tum sath ho",filePath:"musiclist/6.mp3",coverPath:"coverimg/7cover.png"},
    {songName:"badi lambiya si ",filePath:"musiclist/7.mp3",coverPath:"coverimg/8cover.png"},
]

//Set song list
songItems.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
    
});

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0) {
        audioElement.play();
        gifImg.style.opacity=1;  
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");      
        songInfoName.innerText=songs[songIndex].songName;
        
    }
    else{
        audioElement.pause();
        gifImg.style.opacity=0;  
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play"); 
        songInfoName.innerText=songs[songIndex].songName;

    }
})

//Audio Updation code
audioElement.addEventListener("timeupdate",()=>{
    //Update seekbar
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
        
    })  
}

//Play song from list
Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        console.log(e.target);
        makeAllPlay();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.src=`musiclist/${songIndex}.mp3`;
        audioElement.play();
        gifImg.style.opacity=1;  
        audioElement.currentTime=0;
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");  
        console.log("song is playing")
        
    })
})


//Handle Next button
document.getElementById("next").addEventListener("click",()=>{
    console.log("next apply")
    if(songIndex>=7){
        songIndex=0;
    
    }
    else{
        songIndex+=1;
    }
    audioElement.src=`musiclist/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    gifImg.style.opacity=1;  
    audioElement.currentTime=0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");  
    console.log("song is playing")
    
    
})


//Handle previous button
document.getElementById("previous").addEventListener("click",()=>{
    if(songIndex<0){
        songIndex=7;
    }
    else{
        songIndex-=1;
    }
    audioElement.src=`musiclist/${songIndex}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.play();
    gifImg.style.opacity=1;  
    audioElement.currentTime=0;
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");  
    console.log("song is playing")
})


