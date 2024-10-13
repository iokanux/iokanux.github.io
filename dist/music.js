const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  // autoplay: true,
  audio: [
    {
      name: 'letter',
      artist: 'iris',
      url: 'http://music.163.com/song/media/outer/url?id=1853549512.mp3',
      cover: '/images/susan1.png',
    },


  ]
});

