let container = document.querySelector("#container");

container.setAttribute("style","maxWidth:fill-content;margin:auto;border:4px solid black;");

let TOTAL_SIZE=800;  //done as total size is assumed as 800px * 800px

let btn = document.querySelector("#btn");

//helps with getting random colors
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }
  
//initial page grid
for(let i=0;i<16;i++)
{
    let div = document.createElement("div");
    div.setAttribute("style","height:50px;width:800px;display:flex");

    for(let j=0;j<16;j++)
    {
        let div2 = document.createElement("div");
        div2.setAttribute("style","height:50px;width:50px;opacity:0");
        div2.setAttribute("class","individual");
        div.appendChild(div2);
    }

    container.appendChild(div);
}

//button functionality, grid resizing
btn.addEventListener('click',(event)=>{
    let number=0;
    do
    {
        number = prompt('Enter number of squares per side for the grid (between 1 and 100): ');
    }
    while(number<0||number>100);

    while(container.firstChild)
    {
        container.removeChild(container.lastChild);
    }
    let side = Math.floor(TOTAL_SIZE/number);


    for(let i=0;i<number;i++)
    {
        let div = document.createElement("div");
        div.setAttribute("style",`height:${side}px;width:800px;display:flex`);
        
        for(let j=0;j<number;j++)
        {
            let div2 = document.createElement("div");
            div2.setAttribute("style",`height:${side}px;width:${side}px;opacity:0`);
            div2.setAttribute("class","individual");
            div.appendChild(div2);
        }
        
        container.appendChild(div);
    }
});


//the coloring and the transitioning aspect of the button
container.addEventListener('mouseover',(event)=>{
    let target = event.target;

    if(target.className=='individual')
    {
        target.style.backgroundColor=`rgb(${getRandomIntInclusive(0,255)},${getRandomIntInclusive(0,255)},${getRandomIntInclusive(0,255)})`;
        if(target.style.opacity<1){
            let newopacity = ((+target.style.opacity)*10 +1)/10;
            target.style.opacity=newopacity;
        }
    }
});