console.log("hey bro!");
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let audioElement = new Audio('songs/1.mp3');
let myProgressBar = document.getElementById('myProgressBar');
let songs = [
    {
        songName: 'Kesariya',
        filepath: 'songs/1.mp3',
        coverpath: 'covers/1.jpg'
    },
    {
        songName: 'Kesariya',
        filepath: 'songs/2.mp3',
        coverpath: 'covers/2.jpg'
    },
    {
        songName: 'Kesariya',
        filepath: 'songs/3.mp3',
        coverpath: 'covers/3.jpg'
    },
    {
        songName: 'Kesariya',
        filepath: 'songs/4.mp3',
        coverpath: 'covers/4.jpg'
    },
    {
        songName: 'Kesariya',
        filepath: 'songs/5.mp3',
        coverpath: 'covers/5.jpg'
    },
    {
        songName: 'Kesariya',
        filepath: 'songs/6.mp3',
        coverpath: 'covers/6.jpg'
    },
    {
        songName: 'Kesariya',
        filepath: 'songs/1.mp3',
        coverpath: 'covers/1.jpg'
    }

]

masterPlay.addEventListener(
    'click', () => {
        if (audioElement.paused || audioElement.currentTime <= 0) {
            audioElement.play();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        else {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');

        }
    });

myProgressBar.addEventListener(
    'timeupdate', () => {
        console.log('timeupdate');
    }
)




