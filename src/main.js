import { filterObj } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/harrypotter/data.js';
// import data from './data/rickandmorty/rickandmorty.js';
const character = data.characters;
const contenedortarjetas= document.getElementById("contenedorcards");

const selectedhouse =document.getElementById("selectedhouse");
const button_charactergriffindor= document.getElementById("charactergriffindor");
const button_characterslytherin= document.getElementById("characterslytherin");
const button_characterravenclaw= document.getElementById("characterravenclaw");
const button_characterhufflepuff= document.getElementById("characterhufflepuff");

const button_home =document.getElementById("inicio");
const section_books= document.getElementById("section-books");
const section_potions=document.getElementById("section-potions");
const section_spell = document.getElementById("section-spell")
const section_houses = document.getElementById("section-houses")
const section_characters = document.getElementById("section-characters")
const section_home = document.getElementById("categories")
const button_characters = document.getElementById("personajes")
const button_houses = document.getElementById("casas")
const button_spell = document.getElementById("hechizos")
const button_books = document.getElementById("libros");
const button_potions=document.getElementById("pociones"); 
const potion1=document.getElementById("potion1-name");
const potion2=document.getElementById("potion2-name");
const potion_instructions = document.getElementById("potion-instructions");

const griffindor = "Gryffindor";
const slytherin = "Slytherin";
const ravenclaw = "Ravenclaw";
const hufflepuff = "Hufflepuff";

button_charactergriffindor.addEventListener("click", FilterCharacter(griffindor));
button_characterslytherin.addEventListener("click", FilterCharacter(slytherin));
button_characterravenclaw.addEventListener("click", FilterCharacter(ravenclaw ));
button_characterhufflepuff.addEventListener("click", FilterCharacter(hufflepuff));


button_characters.addEventListener("click", SectionCharacters);
button_books.addEventListener("click", SectionBooks);
button_potions.addEventListener("click", SectionPotions);
button_houses.addEventListener("click", SectionHouses);
button_spell.addEventListener("click", SectionSpell);
button_home.addEventListener("click", SectionHome);


SectionHome();

//inyectar color a characters


function SectionHome(){
    section_home.style.display = "block";
    section_characters.style.display = "none";
    section_houses.style.display = "none";
    section_spell.style.display = "none";
    section_books.style.display="none";
    section_potions.style.display="none";
}

let newcharacters = character;
function SectionCharacters(){
    section_potions.style.display="none";
    section_spell.style.display = "none";
    section_books.style.display="none";
    section_houses.style.display = "none";
    section_home.style.display = "none";
    section_characters.style.display = "block";

  const getColor = function( p ){
     if(p.house === 'Gryffindor') {
      const colors = "#271313";
      return colors;
    } else if(p.house === 'Slytherin') {
      const colors = "#112514";
      return colors;
    } else if(p.house === 'Ravenclaw') {
      const colors = "#0C1127";
      return colors;
    } else if(p.house === 'Hufflepuff') {
      const colors = "#3C370B";
      return colors;
    } else {
      const colors = "#9e9cac";
      return colors;
    }
  };

  const getShield = function( p ){
    if(p.house === 'Gryffindor') {
     const escudos = "gryffindor.png";
     return escudos;
   } else if(p.house ==='Slytherin') {
     const escudos = "slytherin.png";
     return escudos;
   } else if(p.house ==='Ravenclaw') {
     const escudos = "ravenclaw.png";
     return escudos;
   } else if(p.house === 'Hufflepuff') {
     const escudos = "hufflepuff.png";
     return escudos;
   } else {
     const escudos = "casas.png";
     return escudos;
   }
 };

 const getImg = function( p ){
  if(p.name === 'Bellatrix Lestrang') {
   const Image = "belatrix_720.png";
   return Image;
 } else if(p.name === 'Rubeus Hagrid') {
   const Image  = "hagrid.png";
   return Image ;
 } else if(p.name === 'Minerva McGonagall') {
   const Image  = "minerva_720.png";
   return Image ;
 } else if(p.name === 'Severus Snape') {
   const Image  = "severus.png";
   return Image ;
 } else if(p.name === 'Ronald Weasley') {
   const Image  = "ronweasly.png";
   return Image ;
}  else if(p.name === 'Sirius Black') {
   const Image  = "sirius_black.png";
   return Image ;
}  else if(p.name === 'Tom Riddle (Voldemort)') {
   const Image  = "voldemort.png";
   return Image ;
}  else if(p.name === 'Dobby') {
   const Image  = "dobby.png";
   return Image ;
}  else {
   const Image  = "noimg.png";
   return Image ;
 }
};
  newcharacters.forEach(p => {
  p.color = getColor(p);
  p.shield = getShield(p);
  p.img = getImg(p);
}); 
ShowCharacters(newcharacters);
return newcharacters
}

var sheet = document.createElement('style')


function ShowCharacters(array){
  array.forEach((p) => {
  let optioncharacter =  
  `<section class="p${p.id}">
    <div class="bottom-card">  
      <div class="nombresection">
        <h3>${p.name}</h3>
        <div class="escudo">
        <img src="data/Images/${p.shield}" width="90px" height="84px">
        </div> 
      </div>
      <img id="harry" src="data/Images/${p.img}" width="144.47px" height="213.94px">
    </div>
  </section>    
    `

sheet.innerHTML += `.p${p.id} {
    width: 234.86px;
    height: 198.17px;
    border-radius: 30px;
    border:0;
    background: ${p.color}}`;
contenedortarjetas.innerHTML += optioncharacter;
document.head.appendChild(sheet);
})}

function FilterCharacter(house){
  return function () {
    contenedortarjetas.innerHTML=""
    const objectfiltrated = filterObj(newcharacters, house);
    ShowCharacters(objectfiltrated)
    selectedhouse.innerHTML= house.toUpperCase() +" 🠋";
  }
} 


function SectionHouses(){

    section_potions.style.display="none";
    section_spell.style.display = "none";
    section_books.style.display="none";
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_houses.style.display = "block";
}


function SectionSpell(){
    section_spell.style.display = "block";
    section_books.style.display="none";
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_houses.style.display = "none";
    section_potions.style.display="none";
     
    
}
function SectionBooks(){
    section_houses.style.display = "none";
    section_spell.style.display = "none";
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_books.style.display="block";
    section_potions.style.display="none"
}

function SectionPotions(){
    const potion1_description= "A potion that, depending on the amount taken, ages the drinker to various ages";
    const potion2_description= "A potion from the Alihotsy plant; causes hysterical laughter.";
    potion1.addEventListener("click", CambioDescripcion(potion1_description));
    potion2.addEventListener("click", CambioDescripcion(potion2_description));
    section_houses.style.display = "none";
    section_spell.style.display = "none";
    section_home.style.display = "none";
    section_characters.style.display = "none";
    section_books.style.display="none";
    section_potions.style.display="block";
    potion_instructions.innerHTML="Seleccione una pocion";
    
}
function CambioDescripcion(description){
  return function () {
    potion_instructions.innerHTML=description;
  };
}
