export function testObstacleCollision() {
  const rostRect = roster.getBoundingClientRect(); 
  const obstacles = document.getElementsByClassName('obstacle'); 
  for (let i = 0; i < obstacles.length; i++) { 
    const obstacleRect = obstacles[i].getBoundingClientRect(); 
    if ( 
      rostRect.left < obstacleRect.right && 
      rostRect.right > obstacleRect.left && 
      rostRect.top < obstacleRect.bottom && 
      rostRect.bottom > obstacleRect.top 
    ) { 
      alert('you\'ve got eaten by a dog'); 
      window.location.reload()
    } 
  } 
}