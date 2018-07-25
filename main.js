var currentColor = '';
var colors = ['#ffffff', '#c0c0c0', '#808080', '#000000', '#ff0000', '#800000', '#ffff00', '#808000', '#00ff00', '#008000', '#00ffff', '#008080', '#00bfff', '#0000ff', '#000080', '#ff00ff', '#800080']
var row = ['white']
var currentColorBox =[];

    for (let i = 0; i < 962; i++){
        var div = document.createElement('div');
        div.style.backgroundColor = 'white';
        div.style.width = '30px';
        div.style.height = '30px';
        div.style.border = '1px solid black';
        div.style.paddingTop = '0px';
        div.style.paddingBottom = '0px';
        div.style.display= 'inline-block';
        div.style.backgroundColor = row[i];
        div.addEventListener('click', paintColor);

        document.querySelector('#paletteContainer').appendChild(div);
}


for (let i = 0; i < colors.length; i++){
    var div = document.createElement('div');
    div.style.width = '55px';
    div.style.height = '55px';
    div.style.paddingLeft = '10px';
    div.style.display= 'inline-block';
    div.style.border = 'thin solid black';
    div.style.backgroundColor = colors[i];
    div.addEventListener('click', changeColor);


    document.querySelector('#paletteContainer').appendChild(div);
        
}
for (let i = 0; i < 1; i++){
    var div = document.createElement('div');
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.border = 'thin solid black';
    div.style.backgroundColor = colors[i];
    div.addEventListener('click', colorUsing);


    document.querySelector('#paletteContainer').appendChild(div);
        
}




function changeColor(event){
    currentColor = event.target.style.backgroundColor;
}

function paintColor(event){
    event.target.style.backgroundColor = currentColor;
}
function colorUsing(event){
    currentColorBox = event.target.style.backgroundColor;
}