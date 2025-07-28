function openLetter() {
    const flap = document.querySelector('.flap');
    const envelope = document.querySelector('.envelope');
    const letterText = document.querySelector('.letter p');
  
    // Animate the flap
    flap.style.transform = 'rotateX(180deg)';
  
    // Fade out the letter text
    letterText.style.opacity = '0';
  
    // Wait, then hide envelope and show message
    setTimeout(() => {
      envelope.style.display = 'none';
      document.getElementById('message').classList.add('show');
    }, 1000);
  }
  