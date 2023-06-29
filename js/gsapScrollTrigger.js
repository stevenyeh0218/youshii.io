gsap.registerPlugin(ScrollTrigger);

const panelsSection = document.querySelector(".web");
const panelsContainer = document.querySelector(".web article");
const panels = gsap.utils.toArray(".web article .item");

gsap.set(panelsContainer, {
		width: `${
		panels.length * 100
	}%`
});

let tween;

function enableHorizontalScroll() {
	tween = gsap.to(panels, {
		xPercent: -100 * (panels.length - 1),
		ease: "none",
		scrollTrigger: {
			trigger: panelsSection,
			pin: true,
			start: "top top",
			scrub: 1,
			end: () => `+=${
				panelsContainer.offsetWidth - window.innerWidth - 1
			}`
		}
	});
}

function disableHorizontalScroll() {
	if (tween) {
		tween.kill();
		tween = null;
		gsap.set(panels, {clearProps: "all"});
	}
}

ScrollTrigger.create({trigger: panelsSection, start: "top top", onEnter: enableHorizontalScroll, onLeaveBack: disableHorizontalScroll});
