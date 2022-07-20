const scrollTo = (element: Element, to: number, duration: number, direction?: "vertical" | "horizontal") => {
    const start = direction === "horizontal" ? element.scrollLeft : element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const easeInOutQuad = (time: number, startValue: number, change: number, duration: number) => {
        time /= duration/2;
        if (time < 1) return change/2*time*time + startValue;
        time--;
        return -change/2 * (time*(time-2) - 1) + startValue;
    }

    const animateScroll = () => {
        currentTime += increment;

        const val = easeInOutQuad(currentTime, start, change, duration);

        if (direction === "horizontal"){
            element.scrollLeft = val;
        }
        else{
            element.scrollTop = val;
        }
        if(currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };

    animateScroll();
}
