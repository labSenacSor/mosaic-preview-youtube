// Base referente os parâmetros do vídeo: https://codepen.io/iounini/pen/mdWVJLB      
// e https://developers.google.com/youtube/player_parameters?hl=pt    
// Padrão NETFLIX : https://codepen.io/cb2307/pen/XYxyeY

function Listener() {  
        var navegador = navigator.userAgent;
        if (navegador.indexOf("Edg") == -1) {
            Swal.fire("Recomenda-se a utilização do navegador Microsoft EDGE para uma melhor experiência dos recursos.");            
        }

}

function extractVideoId(videoLink) {
  var videoId = "";
  var match = videoLink.match(/youtube\.com\/watch\?v=([^\&\?\/]+)/);
  if (match) {
    videoId = match[1];
  } else {
    match = videoLink.match(/youtube\.com\/embed\/([^\&\?\/]+)/);
    if (match) {
      videoId = match[1];
    } else {
      match = videoLink.match(/youtube\.com\/v\/([^\&\?\/]+)/);
      if (match) {
        videoId = match[1];
      } else {
        match = videoLink.match(/youtu\.be\/([^\&\?\/]+)/);
        if (match) {
          videoId = match[1];
        } else {
          match = videoLink.match(/youtube\.com\/shorts\/([^\&\?\/]+)/);
          if (match) {
            videoId = match[1];
          } else {                
          alert("O link '" + videoLink + "' não é um link válido do YouTube.");
        }
      }
    }
  }
  return videoId;
}
}      

function preview() {
  var videoLinks = document.getElementById("video-links").value.split("\n");
  if (!videoLinks) {
    alert("Insira pelo menos um link de vídeo do YouTube.");
    return;
  }

  var html = "";
  for (var i = 0; i < videoLinks.length; i++) {
    var videoId = extractVideoId(videoLinks[i]);
    if (videoId != "") {
      // TAG HTML Funcional abaixo, mas os vídeos paravam ao chegarem ao final
      // html += '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1&loop=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&autoplay=1" frameborder="0"></iframe>';
      // Implementada mudança com a adição de &playlist=' + videoId ao final do URL do iframe. Isso garante que o vídeo reinicie automaticamente ao chegar ao fim.
      html += '<iframe src="https://www.youtube.com/embed/' + videoId + '?autoplay=1&mute=1&loop=1&rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&color=white&controls=0&disablekb=1&playlist=' + videoId + '" frameborder="0"></iframe>';
    }
  }
  var newWindow = window.open();
  newWindow.document.write("<!DOCTYPE html><html><head><title>Mosaic</title><link rel=\"stylesheet\" type=\"text/css\" href=\"./css/mosaic.css\" /></head><body>" + html + "</body></html>");
}   