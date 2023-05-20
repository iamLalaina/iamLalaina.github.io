let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudio Ingeniería en Sistemas Computacionales y en ocasiones comparto mis conocimientos sobre diferentes áreas <3')
  .pauseFor(200)
  .deleteChars(10)
  .start();
