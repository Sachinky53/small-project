
const btn = document.querySelector("#throttle");

// Throttling Function
const throttleFunction = (func, delay) => {

    // Previously called time of the function
    let prev = 0;
    return (...args) => {
        // Current called time of the function
        let now = new Date().getTime();



        // If difference is greater
        // than delay call
        // the function again.
        if (now - prev > delay) {
            prev = now;

            // "..." is the spread
            // operator here 
            // returning the function with the 
            // array of arguments
            return func(...args);
        }
    }
}
document.querySelector("#center")
    .addEventListener("mousemove",
        throttleFunction((dets) => {
            // Your slow code take more time 
            // har baar ek div banao
            var div = document.createElement("div")
            div.classList.add("imagediv")
            div.style.left = dets.clientX + "px";
            div.style.top = dets.clientY + "px";


            // image div creating
            let imgg = document.createElement("img");
            imgg.setAttribute("src", "https://images.unsplash.com/photo-1670021049209-51740f5fb9fa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")

            div.appendChild(imgg);

            document.body.appendChild(div);

            gsap.to(imgg, {

                y: "0",
                duration: 6,
                ease:"power1"
                })

            gsap.to(imgg,{
                y:"100%",
delay:.6,
ease:"power2"

            })

            setTimeout(function () {
                div.remove();
            }, 2000)



        }, 500));
