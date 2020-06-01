const CANVAS        = document.getElementById('space');
      CANVAS.width  = window.innerWidth;
      CANVAS.height = window.innerHeight; 
      ctx           = CANVAS.getContext('2d');
      randomX       = Math.floor(Math.random() * CANVAS.width);
      randomY       = Math.floor(Math.random() * CANVAS.height);

      //function which draws a star and returns its position
let drawStar = function() {
    arrayOfStars = new Array(); 
    for (i = 0; i < 50; i++) {
    randomX       = Math.floor(Math.random() * CANVAS.width);
    randomY       = Math.floor(Math.random() * CANVAS.height);
    starPosition  = [randomX, randomY]
    ctx.fillStyle = 'red';
    ctx.beginPath()
    ctx.arc(randomX, randomY, 2, 0, Math.PI * 2);
    ctx.fill()
    ctx.closePath()
    arrayOfStars.push(starPosition)
    }
};
    drawStar()