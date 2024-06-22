const tMain = gsap.timeline()
const tAbousUs = gsap.timeline()

gsap.registerPlugin(ScrollTrigger) 


// Banner

gsap.from('.banner', {
    scrollTrigger: {
        trigger: '.banner',
        start: 'top bottom',
    },
    opacity: '0', duration: 0.5, delay: 0.4,})

gsap.from('.title__banner', {
    scrollTrigger: {
        trigger: '.title__banner',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.6, delay: 0.7,})

gsap.from('.date_banner', {
    scrollTrigger: {
        trigger: '.date_banner',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.6, delay: 1,})  

gsap.from('.timer-content', {
    scrollTrigger: {
        trigger: '.timer-content',
        start: 'top bottom',
    },
    opacity: '0', duration: 0.8, delay: 1.4,})  



// Greeting

gsap.from('.title__greeting', {
    scrollTrigger: {
        trigger: '.title__greeting',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.5, delay: 0.4,})


gsap.from('.description__greeting', {
    scrollTrigger: {
        trigger: '.description__greeting',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.5, delay: 0.6,})

gsap.from('.icon-heart', {
    scrollTrigger: {
        trigger: '.icon-heart',
        start: 'top bottom',
    },
    width: '0%', y: 100, duration: 0.5, delay: 1.1,})


gsap.from('.img-block#small', {
    scrollTrigger: {
        trigger: '.img-block#small',
        start: 'top bottom',
    },
    opacity: '0', duration: 0.8, delay: 0.4,})

gsap.from('.img-block#medium', {
    scrollTrigger: {
        trigger: '.img-block#medium',
        start: 'top bottom',
    },
    opacity: '0', duration: 0.8, delay: 0.8,})


gsap.from('.img-block#big', {
    scrollTrigger: {
        trigger: '.img-block#big',
        start: 'top bottom',
    },
    opacity: '0', duration: 0.8, delay: 1.2,})



// Faq

gsap.from('.icon-faq', {
    scrollTrigger: {
        trigger: '.icon-faq',
        start: 'top bottom',
    },
    opacity: '0', y: 100, x: -100, duration: 0.5, delay: 1,})

gsap.from('.title__faq', {
    scrollTrigger: {
        trigger: '.title__faq',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.5, delay: 0.4,})


gsap.from('.title__block#dress-code', {
    scrollTrigger: {
        trigger: '.title__block#dress-code',
        start: 'top bottom',
    },
    opacity: '0', y: -100, duration: 0.5, delay: 0.8,})

gsap.from('.title__block#gift', {
    scrollTrigger: {
        trigger: '.title__block#gift',
        start: 'top bottom',
    },
    opacity: '0', y: -100, duration: 0.5, delay: 1,})

gsap.from('.dress-block .description', {
    scrollTrigger: {
        trigger: '.dress-block .description',
        start: 'top bottom',
    },
    opacity: '0', duration: 1, delay: 1.4,})



// Plan day

gsap.from('.icon-plan-day', {
    scrollTrigger: {
        trigger: '.icon-plan-day',
        start: 'top bottom',
    },
    opacity: '0', y: 100, x: -100, duration: 0.5, delay: 0.4,})

gsap.from('.title__plan-day', {
    scrollTrigger: {
        trigger: '.title__plan-day',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.5, delay: 0.4,})

gsap.from('.block  .time', {
    scrollTrigger: {
        trigger: '.block  .time',
        start: 'top bottom',
    },
    opacity: '0', x: -50, duration: 0.5, delay: 0.6,})

gsap.from('.block  .point', {
    scrollTrigger: {
        trigger: '.block  .point',
        start: 'top bottom',
    },
    opacity: '0', x: -50, duration: 0.5, delay: 0.8,})

gsap.from('.block  .data .title__block', {
    scrollTrigger: {
        trigger: '.block  .data .title__block',
        start: 'top bottom',
    },
    opacity: '0', y: -100, duration: 0.5, delay: 1,})

gsap.from('.block  .data .geolocation', {
    scrollTrigger: {
        trigger: '.block  .data .geolocation',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.5, delay: 1.4,})



// Place registration

gsap.from('.title__place-registration', {
    scrollTrigger: {
        trigger: '.title__place-registration',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.5, delay: 0.4,})

gsap.from('.line', {
    scrollTrigger: {
        trigger: '.line',
        start: 'top bottom',
    },
    width: '0%', duration: 0.5, delay: 0.8,})

gsap.from('.address', {
    scrollTrigger: {
        trigger: '.address',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.5, delay: 1,})

gsap.from('.map', {
    scrollTrigger: {
        trigger: '.map',
        start: 'top bottom',
    },
    opacity: '0', duration: 1, delay: 1.4,})



// Place banquet

gsap.from('.title__place-banquet', {
    scrollTrigger: {
        trigger: '.title__place-banquet',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.5, delay: 0.4,})



// Form guest

gsap.from('.form-guest .title', {
    scrollTrigger: {
        trigger: '.form-guest .title',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.5, delay: 0.4,})

gsap.from('.content__form-quest input', {
    scrollTrigger: {
        trigger: '.content__form-quest input',
        start: 'top bottom',
    },
    opacity: '0', x: -100, duration: 0.5, delay: 0.7,})

gsap.from('.content__form-quest button', {
    scrollTrigger: {
        trigger: '.content__form-quest button',
        start: 'top bottom',
    },
    opacity: '0', y: 100, duration: 0.2, delay: 0.8,})



// Footer

gsap.from('footer p', {
    scrollTrigger: {
        trigger: 'footer p',
        start: 'top bottom',
    },
    opacity: '0', x: -100, duration: 0.5, delay: 0.4,})