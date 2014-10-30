var $ = document.querySelector.bind(document);

var initQuotes = function(quotes, header, download) {
  download.text = "Save it, you... " + quotes[Math.floor(Math.random() * quotes.length)];
  header.innerHTML = quotes[Math.floor(Math.random() * quotes.length)];
}

document.addEventListener('DOMContentLoaded', function() {
  var canvasEl = $('#canvas'), canvas = canvasEl.getContext('2d'),
      text = $('#text'), form = $('#change-text'),
      header = $('#header'), download = $('#download');

  initQuotes(quotes, header, download);

  var haddock = new Image();
  haddock.src = '../img/empty-haddock.png';

  haddock.addEventListener('load', function() {
    canvas.drawImage(haddock, 0, 0);
  });

  text.addEventListener('keyup', function() {
    canvas.drawImage(haddock, 0, 0);
    text.value.split('\n').forEach(function(line, i) {
      canvas.fillText(line, 223, 27 + i * 15);
    });
  });

  download.addEventListener('click', function() {
    var dt = canvasEl.toDataURL('image/png');
    this.href = dt.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
  });
});