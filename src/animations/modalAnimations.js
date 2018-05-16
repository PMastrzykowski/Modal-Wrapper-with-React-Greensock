import {TimelineMax, Power4} from "gsap";

const duration = 0.5;
const easeing = Power4.easeInOut;
const animateModal = {
    show(background, target, content, close){
        var tl = new TimelineMax();
        return tl
        .to(target, 0,
        {
            width: content.offsetWidth
        })
        .to(target, 0,
        {
            height: content.offsetHeight
        })
        .to(background, 0, 
            {
                display: 'initial',
            },
        )
        .from(background, duration, 
            {
                opacity: 0,
                ease: easeing,
            },
            0)
        .from(target, duration, 
            {
                top: -target.offsetHeight,
                ease: easeing,
            },
        0)
        
    },
    hide(background, target, content, close, cb){
        var tl = new TimelineMax();
        return tl
        .to(target, duration, 
        {
            top: -target.offsetHeight,
            ease: easeing,
        })
        .to(background, duration, 
            {
                opacity: 0,
                ease: easeing,
            },0
        )
        .to(background, 0, 
            {
                display: 'none',
            },
        )
        .call(cb)
    },
    resize(target, content){
        var tl = new TimelineMax();
        return tl
        .to(target, duration/5,
        {
            width: content.offsetWidth,
        })
        .to(target, duration/5,
        {
            height: content.offsetHeight
        })
        .to(content, duration/5,
            {
                opacity: 1,
            })
    },
    resize2(target, content){
        var tl = new TimelineMax();
        return tl
        .to(target, 0,
        {
            width: content.offsetWidth,
            height: content.offsetHeight,
            top: '50%',
            left: '50%',
        })
    },
    changeContent(content, cb){
        var tl = new TimelineMax();
        return tl
        .to(content, duration/5,
            {
                opacity: 0,
            })
        .call(cb)
    }
}

export default animateModal