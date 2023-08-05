particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 250,
        "density": {
          "enable": true,
          "value_area": 900
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0.1,
          "color": "#ffffff"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 50,
          "height": 50
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.5,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2.6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 800,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
  
  gsap.to(".typing1", {
    text: " Учитель",
    duration: 2.5,
    repeat: -1,
    repeatDelay: .01,
    ease: "power1.in",
    yoyo: true
})
gsap.to(".typing2", {
  text: " Учитель",
  duration: 3,
  repeat: -1,
  repeatDelay: .01,
  ease: "power1.in",
  yoyo: true
})

function show(){
  document.querySelector('.hamburger').classList.toggle('open')
  document.querySelector('.navigation').classList.toggle('active')
}


const back =  document.querySelector('.previous');
const next = document.querySelector('.next');

const photos = ['./photo/2.jpg','./photo/3.jpg','./photo/4.jpg','./photo/5.jpg','./photo/6.jpg','./photo/7.jpg','./photo/1.jpg'];

let i =0;

next.addEventListener('click',()=> {
    i++;
    if(i>photos.length-1){
        i=0;
    }
    document.querySelector('#pictures').src = photos[i]; 
});


back.addEventListener('click',()=>{
    i--;
    if(i<0){
        i=photos.length-1;
    }
    document.querySelector('#pictures').src= photos[i];
});


// text.innerHTML = text.innerHTML.split("").map(
//   (char, i) => 
//   `<span style ="transform:rotate(${i * 8}deg)">${char}</span>`
// ).join("")