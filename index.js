document.addEventListener('DOMContentLoaded', () => {
    function createIndexTextDisplay() {
        const textDisplay = document.createElement('div');
        textDisplay.id = 'index-text-display';
        document.body.appendChild(textDisplay);
        return textDisplay;
    }

    const welcomeText = `Welcome to my site,\n 
      My name is Vitor Barbosa\n 
      I'm a Computer Engineering Master's student \n
       at ISCTE.\n 
      Hope you enjoy your stay here!\n 
      \n 
  
      <a href="assets/cv/VitorBarbosaCV.pdf" download="VitorBarbosaCV">Download CV</a>  |  <a href="https://www.linkedin.com/in/vitorsantosbarbosa/" target="_blank">LinkedIn Profile</a> <br><br>
      <a href="https://bonviniv.github.io/projects.html" class="game-link">Other Projects</a>`;

    const textElement = createIndexTextDisplay();
    textElement.innerHTML = welcomeText.replace(/\n/g, '<br>');
});
