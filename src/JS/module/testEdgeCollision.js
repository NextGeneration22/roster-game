export function testEdgeCollision() {
  const rostRect = roster.getBoundingClientRect(); 
  const mapRect = map.getBoundingClientRect(); 
  if ( 
    rostRect.left < mapRect.left || 
    rostRect.right > mapRect.right || 
    rostRect.top < mapRect.top || 
    rostRect.bottom > mapRect.bottom 
  ) { 
    alert('Collision!');
    window.location.reload()
  } 
}