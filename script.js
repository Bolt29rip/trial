/* INTRO + MUSIC */

const intro=document.getElementById("intro");
const main=document.getElementById("mainContent");
const music=document.getElementById("bgMusic");

intro.addEventListener("click",()=>{
intro.classList.add("fade");

setTimeout(()=>{
intro.style.display="none";
main.classList.add("show");
music.play();
startConfetti();
},1500);
});


/* FLOATING HEARTS */

const heartContainer=document.querySelector(".hearts");

function createHeart(){
const heart=document.createElement("span");
heart.innerHTML="❤️";
heart.style.left=Math.random()*100+"vw";
heart.style.fontSize=(15+Math.random()*25)+"px";
heart.style.animationDuration=(5+Math.random()*5)+"s";
heartContainer.appendChild(heart);
setTimeout(()=>heart.remove(),10000);
}

setInterval(createHeart,400);


/* SLIDESHOW */

const images=[
"wedding.jpg",
"family.jpg",
"anniversary.jpg"
];

let index=0;
const slide=document.getElementById("slideImage");

setInterval(()=>{
index=(index+1)%images.length;
slide.src=images[index];
},4000);


/* CONFETTI EFFECT */

function startConfetti(){
const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let pieces=[];

for(let i=0;i<150;i++){
pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
size:Math.random()*6+2,
speed:Math.random()*3+2
});
}

function update(){
ctx.clearRect(0,0,canvas.width,canvas.height);

pieces.forEach(p=>{
ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
ctx.fillRect(p.x,p.y,p.size,p.size);
p.y+=p.speed;
if(p.y>canvas.height)p.y=0;
});

requestAnimationFrame(update);
}

update();
}
