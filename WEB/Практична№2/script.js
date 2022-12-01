let arg2 = [1,6,3,8,9,4,6,5,23];
let arg1 = [3,25,12,6,40,6,15,32];
const speedMin = 150;
const speedMax = 200;
const speedSound = 1236;
const hearDrone = 20;

(function Math()
    {
        for (let i = 0; i < arg1.length; i++) {
            let outData = document.querySelector(".out-data");
            let elementIn = document.createElement("div");

            const timeMax = arg1[i] / speedMin;
            const timeMin = arg1[i] / speedMax;
            let element = document.createElement("div");
            element.classList.add("box");
            console.log("Min flight time: " + timeMin + " hours.\n Max time fly: " + timeMax + " hours.");

            if(arg1[i] < hearDrone)
            {
                const hear = arg1[i] / speedSound;
                element.innerText = `Distance: ${arg1[i]}
                                    Min flight time:  ${timeMin} hours.
                                    Max flight time: ${timeMax} hours.
                                    Hear dron for time (hours): ${hear}`;
                console.log("Hear dron for time: " + hear);
            }
            else 
            {
                console.log("The drone is too far away");
                element.innerText = `Distance: ${arg1[i]}
                                    Min flight time:  ${timeMin} hours. 
                                    Max flight time: ${timeMax} hours. 
                                    The drone is too far away`;
            }
            outData.appendChild(element);                     
        }
    }
)();