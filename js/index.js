window.onload = () => {
  

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.getElementById('canvas')
    const ctx = canvas.getContext('2d')
    const road = new Image()
      road.src = "./../images/road.png"
    const car = new Image()
      car.src = "./../images/car.png"
    car.onload = () => {
      console.log('loading')
      ctx.drawImage(car,233,600,30,75)
      ctx.beginPath();
      ctx.stroke();
    }
    road.onload = () => {
      console.log("loading")
      ctx.drawImage(road, 0, 0 , 500 ,700);
      ctx.beginPath();
      ctx.stroke();
  }
};

}
