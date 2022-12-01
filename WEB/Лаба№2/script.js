(function createDaysForMonth(){
    const mounthList = ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень",];
    const numberOfDays = [31,28,31,30,31,30,31,31,30,31,30,31,]

    let wrapper = document.querySelector(".wrapper");
    for (let index = 0; index < 12; index++) {
        const mounth = document.createElement("section");
        mounth.classList.add("wrapper-mounth");
        mounth.innerHTML += `<header class="title-month">
                                <span class="title_name">${mounthList[index]}</span>
                            </header>
                            <section class="container-days">

                            </section>`
        let containerDays = mounth.querySelector(".container-days");
        for (let i = 0; i < numberOfDays[index]; i++) {
            let day = `<section class="container-day">
            <span class="day_title">${i + 1}.${index + 1}.2022</span>
            <div class="info"></div>

            <textarea class="day-additional-information" name="" id="" cols="10" rows="10"> </textarea>
            </section> 
            `;
            containerDays.innerHTML += day;    
        }

        wrapper.appendChild(mounth);
    }



    let edits = document.querySelectorAll(".container-day");
    edits.forEach(item=>{
        item.addEventListener("click",(e)=>{
            item.classList.toggle("show-additional-information");
            let textArea =e.target.querySelector(".day-additional-information");
            console.log(textArea.value.length + " : " + 1);
            if(textArea.value.length > 1)
                item.querySelector(".info").classList.add("show"); 
            else
                item.querySelector(".info").classList.remove("show");            
        });

        let info = item.querySelector(".day-additional-information");
        if(info.textContent.trim() == "")
        {
           item.querySelector(".info").classList.remove("show");
        }
        else
        {
            item.querySelector(".info").classList.add("show");
        }          

        info.addEventListener("click",(e)=>{e.stopPropagation();})
    });
})();

let t = `        
<div class="edit">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
</div>

<section class="wrapper-mounth">
<header class="title-month">
    <span class="title_name">October</span>
</header>
<section class="container-days">

    <section class="container-day">
        <span class="day_title">090.08.2022</span>
        <div class="info"></div>

        <textarea class="day-additional-information" name="" id="" cols="10" rows="10">dfdf</textarea>
    </section>

</section>            
</section>
`

