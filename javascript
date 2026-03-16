/* DARK / LIGHT MODE */

function toggleMode(){
document.body.classList.toggle("light");
}


/* TYPING ANIMATION */

const text = "Thimira | Frontend Developer";
let i = 0;

function typing(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typing,120);

}

}

typing();


/* SCROLL ANIMATION */

window.addEventListener("scroll", function(){

const reveals = document.querySelectorAll(".reveal");

for(let i = 0; i < reveals.length; i++){

const windowHeight = window.innerHeight;

const revealTop = reveals[i].getBoundingClientRect().top;

if(revealTop < windowHeight - 100){

reveals[i].classList.add("active");

}

}

});


/* PARTICLES BACKGROUND */

particlesJS("particles-js",{
particles:{
number:{value:80},
size:{value:3},
move:{speed:2}
}
});


/* GITHUB PROJECTS AUTO LOAD */

fetch("https://api.github.com/users/Thimira0927/repos")

.then(res => res.json())

.then(data => {

const container = document.getElementById("github-projects");

data.slice(0,3).forEach(repo => {

container.innerHTML += `

<div class="project-card">

<h3>${repo.name}</h3>

<p>${repo.description || "GitHub Project"}</p>

<a href="${repo.html_url}" class="btn">View Code</a>

</div>

`;

});

});
