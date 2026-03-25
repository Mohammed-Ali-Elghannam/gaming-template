
const movieList = [
        'videos/hero-1.mp4',
        'videos/hero-2.mp4',
        'videos/hero-3.mp4',
        'videos/hero-4.mp4'
];

let index = 0;
const heroVideo = document.getElementById("heroVideo");
const miniVideo = document.getElementById("miniVideo");
const transitionVideo = document.getElementById("transitionVideo");

miniVideo.addEventListener("click", () => {
        index = (index + 1) % movieList.length;
        const nextIndex = (index + 1) % movieList.length;
        const newSrc = movieList[index];
        transitionVideo.src = newSrc;
        transitionVideo.currentTime = 0;
        transitionVideo.style.opacity = 1;
        transitionVideo.play();
        const tl = gsap.timeline();
        tl.fromTo(transitionVideo,
                {
                        scale: 0.3,
                        opacity: 0,
                        transformOrigin: "center center",
                        borderRadius: "20px"
                },
                {
                        scale: 1,
                        opacity: 1,
                        borderRadius: "0px",
                        duration: 1,
                        ease: "power1.inOut"
                }
        );

        tl.fromTo(heroVideo,
                {
                        scale: 1,
                        opacity: 1,
                        filter: "blur(20px)",
                        borderRadius: "0px"
                },
                {
                        scale: 0.3,
                        opacity: 0,
                        borderRadius: "20px",
                        filter: "blur(0px)",
                        duration: 1,
                        ease: "power1.inOut"
                }
        );

        tl.to(heroVideo, {
                transformOrigin: "center center",
                opacity: 0,
                duration: 1,
                ease: "power1.inOut"
        }, "<");

        tl.add(() => {
                heroVideo.src = newSrc;
                heroVideo.load();
                heroVideo.play();

                miniVideo.src = movieList[nextIndex];
                miniVideo.load();

        });

});
