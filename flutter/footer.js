(function() {
  var span = document.querySelector('footer>span');
  if (span) {
    span.innerText = 'Flutter 1.9.1+hotfix.5 • 2019-10-17 16:48 • 1aedbb1835 • stable';
  }
  var sourceLink = document.querySelector('a.source-link');
  if (sourceLink) {
    sourceLink.href = sourceLink.href.replace('/master/', '/1aedbb1835/');
  }
})();
