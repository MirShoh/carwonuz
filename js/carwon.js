document.addEventListener('DOMContentLoaded', () => {
	const main = document.querySelector('.main');
	const header = document.querySelector('.header');

	const headerFixed = () => {
		let scrollTop = window.scrollY;
		let mainCenter = main.offsetHeight / 2;

		if (scrollTop >= mainCenter) {
			header.classList.add('fixed')
			main.style.marginTop = '${header.offsetHeight}px';
		} else{
			header.classList.remove('fixed')
			main.style.marginTop = '0px';
		}
	};

	//headerFixed();
	window.addEventListener('scroll', () => {
	//headerFixed();
	});
});

const animItems = document.querySelectorAll('._anim-items');

if(animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(){
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if(animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('_active');
			} else {
				if (!animItem.classList.contains('_anim-no-hide')){ // 1 раз работаеть анимация!!!
					animItem.classList.remove('_active');
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft, 
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft } 
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

/*const wow = new WOW({
  boxClass: 'wow', 
  animateClass: 'animate__animated', 
  offset: 30, 
  mobile: true, 
  live: true ,
})
wow.init(); */





var myVideo = document.getElementById("video1"); 

function playPause() { 
    if (myVideo.paused) 
        myVideo.play('<i class="fas fa-pause-circle"></i>'); 
    else 
        myVideo.pause(); 
} 



document.addEventListener("DOMContentLoaded", function(event) {
  
  // Get all videos
  var videos = document.getElementsByClassName("video__play-button");
  var video_fullscreen = document.getElementsByClassName("video__fullscreen-button");
  
  // Loop through all videos
  for (var i = 0; i < videos.length; i++) {
    // On click play button
    videos[i].onclick = function() {
      
      // Find video element
      video = this.nextElementSibling;
      video_wrapper = this.parentElement;
      console.log(video_wrapper);
      console.log(video);
      
      // Play video
      if (video.paused == true) {
        // Play the video
        video.play();
        video.setAttribute('data-state','play');
        video.setAttribute('data-state-reload','false');
        video_wrapper.setAttribute('data-state','play');

        // Update the button text to 'Pause'
        // this.innerHTML = "Pause";
        this.setAttribute('data-button-state','play');
        this.setAttribute('data-button-state-reload','false');
      } else {
        // Pause the video
        video.pause();
        video.setAttribute('data-state','pause');
        video_wrapper.setAttribute('data-state','pause');

        // Update the button text to 'Play'
        // this.innerHTML = "Play";
        this.setAttribute('data-button-state','pause');
      }
      
      // When video is ended
      video.onended = (event) => {
        // Pause the video
        video.setAttribute('data-state','pause');
        video.setAttribute('data-state-reload','true');

        // Update the button text to 'Play'
        this.setAttribute('data-button-state','pause');
        this.setAttribute('data-button-state-reload','true');
      };
      
    }
    
  }
  
  
  // Loop through all videos
  for (var i = 0; i < video_fullscreen.length; i++) {
    // On click play button
    video_fullscreen[i].onclick = function() {
      
      // Find video element
      video = this.nextElementSibling.nextElementSibling;
      
      if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
      } else if (video.webkitRequestFullScreen) {
        video.webkitRequestFullScreen();
      }
      
    }
    
  }

});



const buttons = document.querySelectorAll('.project');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay__inner img');

function open(e) {
  overlay.classList.add('open');
  const src= e.currentTarget.querySelector('img').src;
  /*overlayImage.src = src;*/
};

function close() {
  overlay.classList.remove('open');
};

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);


 $('#zoom_01').elevateZoom({
    zoomType: "inner",
    cursor: "crosshair",
    zoomWindowFadeIn: 500,
    zoomWindowFadeOut: 750
   });
  
//initiate the plugin and pass the id of the div containing gallery images
$("#zoom_03").elevateZoom({gallery:'gallery_01', cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: true, loadingIcon: 'https://www.elevateweb.co.uk/spinner.gif'}); 

//pass the images to Fancybox
$("#zoom_03").bind("click", function(e) {  
  var ez =   $('#zoom_03').data('elevateZoom'); 
  $.fancybox(ez.getGalleryList());
  return false;
});



document.addEventListener('DOMContentLoaded', () => { 
  // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
  const player = new Plyr('#player');
  
  // Expose
  window.player = player;

  // Bind event listener
  function on(selector, type, callback) {
    document.querySelector(selector).addEventListener(type, callback, false);
  }
});






