document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('audioPlayer');
    const playBtn = document.getElementById('playBtn');
    const pauseBtn = document.getElementById('pauseBtn');
    const stopBtn = document.getElementById('stopBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const songDurationDisplay = document.getElementById('songDuration');
    const songProgressDisplay = document.getElementById('songProgress');
    let currentSongIndex = 0; // Índice de la canción actual
    const songs = ['oye-gelda-lo-mas-escuchado.mp3', 'real-gone.mp3']; // Lista de canciones

    function playSong() {
        audio.src = songs[currentSongIndex];
        audio.play();
        updateSongDuration();
        setInterval(updateSongProgress, 1000); // Actualiza el progreso de la canción cada segundo
    }

    function updateSongDuration() {
        audio.addEventListener('loadedmetadata', function() {
            const durationMinutes = Math.floor(audio.duration / 60);
            const durationSeconds = Math.floor(audio.duration % 60);
            songDurationDisplay.textContent = `Duration: ${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;
        });
    }

    function updateSongProgress() {
        const currentTimeMinutes = Math.floor(audio.currentTime / 60);
        const currentTimeSeconds = Math.floor(audio.currentTime % 60);
        songProgressDisplay.textContent = `Progress: ${currentTimeMinutes}:${currentTimeSeconds < 10 ? '0' : ''}${currentTimeSeconds}`;
    }

    playBtn.addEventListener('click', function() {
        playSong();
    });

    pauseBtn.addEventListener('click', function() {
        audio.pause();
    });

    stopBtn.addEventListener('click', function() {
        audio.pause();
        audio.currentTime = 0;
    });

    nextBtn.addEventListener('click', function() {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            currentSongIndex = 0; // Vuelve al principio si llega al final
        }
        playSong();
    });

    prevBtn.addEventListener('click', function() {
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = songs.length - 1; // Vuelve al final si llega al principio
        }
        playSong();
    });
});
