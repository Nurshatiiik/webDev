const tracks = [
    { title: "Бонни и Клайд", artist: "MiyaGi Эндшпиль", url: "soundss/track1.mp3", cover: "cover1.jpg" },
    { title: "ЛАБИРИНТ", artist: "FACE", url: "soundss/track2.mp3", cover: "cover2.jpg" },
    { title: "Not Like Us", artist: "Kendrick Lamar", url: "soundss/track3.mp3", cover: "cover3.jpg" },
    { title: "90HM", artist: "Trefuego", url: "soundss/track4.mp3", cover: "cover4.jpg" },
    { title: "Smarty", artist: "Lana Del Rey", url: "soundss/track5.mp3", cover: "cover5.jpg" },
    { title: "United in grief", artist: "Kendrick Lamar", url: "soundss/track6.mp3", cover: "cover6.jpg" }
  ];
  
  let currentTrackIndex = 0;
  let isPlaying = false;
  const audio = new Audio();
  
  const playPauseBtn = document.getElementById('play-pause-btn');
  const nextBtn = document.getElementById('next-btn');
  const prevBtn = document.getElementById('prev-btn');
  const playIcon = document.getElementById('play-icon');
  const pauseIcon = document.getElementById('pause-icon');
  const trackTitle = document.getElementById('track-title');
  const trackArtist = document.getElementById('track-artist');
  const trackCover = document.getElementById('track-cover');
  const progressBar = document.getElementById('progress-bar');
  const volumeSlider = document.getElementById('volume-slider');
  
  // Load the current track
  function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.url;
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    trackCover.src = track.cover;
    audio.load();
    isPlaying = false;
    updatePlayPauseIcon();  // Reset play/pause icon when loading a new track
  }
  
  // Update play/pause icon based on state
  function updatePlayPauseIcon() {
    if (isPlaying) {
      playIcon.style.display = 'none';
      pauseIcon.style.display = 'block';
    } else {
      playIcon.style.display = 'block';
      pauseIcon.style.display = 'none';
    }
  }
  
  // Play or pause the audio
  function togglePlayPause() {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    isPlaying = !isPlaying;
    updatePlayPauseIcon();
  }
  
  // Play the next track
  function playNextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    updatePlayPauseIcon();
  }
  
  // Play the previous track
  function playPrevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    updatePlayPauseIcon();
  }
  
// Handle playlist item click
function handlePlaylistClick(index) {
    currentTrackIndex = index;
    loadTrack(currentTrackIndex);
    audio.play();
    isPlaying = true;
    updatePlayPauseIcon();
  }
  
  // Populate the playlist
  tracks.forEach((track, index) => {
    const li = document.createElement('li');
    li.textContent = `${track.title} - ${track.artist}`;
    li.addEventListener('click', () => handlePlaylistClick(index));
    playlist.appendChild(li);
  });
  
  // Event listeners
  playPauseBtn.addEventListener('click', togglePlayPause);
  nextBtn.addEventListener('click', playNextTrack);
  prevBtn.addEventListener('click', playPrevTrack);
  
  // Initialize with the first track
  loadTrack(currentTrackIndex);