const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

class Component{
  constructor(width,height,x,y,source,scale){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.image = new Image();
    this.image.src = source;
  }

  draw(){
    ctx.drawImage(this.image, this.x, this.y, this.image.width / this.scale, this.image.height / this.scale);
  }

  update() {
    if (this.image) {
      ctx.drawImage(this.image, this.x, this.y, this.image.width / this.scale, this.image.height / this.scale);
    }
  }
}

const player = new Component(30,75,233,600,"./../images/car.png",4)


function startGame() {
  const road = new Image()
  road.src = "./../images/road.png"
  road.onload = () => {
    ctx.drawImage(road, 0, 0 , canvas.width ,canvas.height);
    player.draw();
  }

};

window.onload = () => {
  

  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  

 
}

/*
*/


console.log(player)