export function dogsObCreator(map, dogNum){
  for(let i=0; i < dogNum; i++){
    const dog = document.createElement('img')
    dog.src ="image/eskimo_dog-removebg-preview.png"
    dog.classList.add('obstacle')
    dog.style.left= Math.floor(Math.random()*100) + 'vw'
    dog.style.top= Math.floor(Math.random()*100) +'vh'
    map.appendChild(dog)
    console.log( 
      `Adding obstacle at ${dog.style.left}, ${dog.style.top}` 
    );
  }
}