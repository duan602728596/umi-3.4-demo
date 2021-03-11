addEventListener('message', function(event) {
  postMessage({
    text: 'worker'
  }, '*')
});
