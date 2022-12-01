

SetCheckBox();
SetOnClick();

function SetCheckBox(){
    const checkboxAll = document.querySelectorAll(".checkbox");
    for(let item of checkboxAll){
       const input = item.querySelector("input");
        if(input.checked)
            item.classList.add("active");
        else
            item.classList.remove("active");        
            
        item.onclick = ()=>{          
            item.classList.toggle("active");
            const input = item.querySelector("input");

            if(item.classList.contains("active")){
                input.checked = true;
            }
            else{
                input.checked = false;
            } 
            /*               
            console.log(input)
            const t = document.querySelectorAll("input");
            console.log(t[0].checked + " : " + t[1].checked)
            */
        }
    }
}

function SetOnClick(){
    const spiderPoint = document.querySelector(".spiderPoint");
    const toggleSpider = document.querySelector("#spiderShow");
    
    toggleSpider.parentElement.addEventListener("click",()=>{

        if(toggleSpider.checked)
        {
            spiderPoint.classList.add("spider-show");
            const spiders = spiderPoint.querySelectorAll(".spider-property");
            for(let spider of spiders){
                spider.classList.add("spider-show");
            }
        }
        else
        {
            spiderPoint.classList.remove("spider-show");
            const spiders = spiderPoint.querySelectorAll(".spider-property");
            for(let spider of spiders){
                spider.classList.remove("spider-show");
            }
        }
    });

    spiderPoint.onclick = ()=>{
        spiderPoint.classList.remove("spider-show");

        if(!spiderPoint.classList.contains("spider-show")){
            toggleSpider.checked = false;
            toggleSpider.parentElement.classList.remove("active");

        }
        const allSpider = spiderPoint.querySelectorAll(".spider-property");
        allSpider.forEach(spider=>{spider.classList.toggle("spider-show")})
    } 
}