const CANVAS        = document.getElementById('space');
      CANVAS.width  = window.innerWidth;
      CANVAS.height = window.innerHeight; 
      ctx           = CANVAS.getContext('2d');
      randomX       = Math.floor(Math.random() * CANVAS.width);
      randomY       = Math.floor(Math.random() * CANVAS.height);

      //function which draws a star and returns its position
let drawStar = function() {
    randomX       = Math.floor(Math.random() * CANVAS.width);
    randomY       = Math.floor(Math.random() * CANVAS.height);
    starPosition  = [randomX, randomY]
    ctx.fillStyle = 'red';
    ctx.beginPath()
    ctx.arc(randomX, randomY, 2, 0, Math.PI * 2);
    ctx.fill()
    ctx.closePath()
    return starPosition;
    };
let arrayOfStars = new Array(); 
for(i = 0; i < 50; i++){
    arrayOfStars[i] = drawStar()
}; 

    // drawStar()