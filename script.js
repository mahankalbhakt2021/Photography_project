document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', () => {
      const fullScreenDiv = document.getElementById('fullscreen');
      const fullImage = document.getElementById('full-image');
      fullImage.src = img.src; // Set full-screen image source
      fullScreenDiv.style.display = 'flex';
    });
  });
  
  document.getElementById('close-btn').addEventListener('click', () => {
    document.getElementById('fullscreen').style.display = 'none';
  });