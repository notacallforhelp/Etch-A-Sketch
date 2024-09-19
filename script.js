let container = document.querySelector("#container");

container.setAttribute("style","maxWidth:fill-content;margin:auto;");

let TOTAL_HEIGHT=800;
let TOTAL_WIDTH=800;

let btn = document.querySelector("#btn");

btn.addEventListener('click',(event)=>{
    let number = prompt('Enter number of squares per side for the grid: ');
});

for(let i=0;i<16;i++)
{
    let div = document.createElement("div");
    div.setAttribute("style","height:50px;width:800px;border:1px solid red;display:flex");

    for(let j=0;j<16;j++)
    {
        let div2 = document.createElement("div");
        div2.setAttribute("style","height:50px;width:50px;border:1px solid blue;");
        div2.setAttribute("class","individual");
        div.appendChild(div2);
    }

    container.appendChild(div);
}

container.addEventListener('mouseover',(event)=>{
    let target = event.target;

    if(target.className=='individual')
    {
        target.style.backgroundColor='black';
    }
});