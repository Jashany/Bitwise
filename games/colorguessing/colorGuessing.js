//  access to divs via variables
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const div5 = document.getElementById('div5');
const div6 = document.getElementById('div6');

// access to the top container
const top_container = document.getElementById('top-container');
const bottom_container = document.getElementById('bottom-container');

//  The number of correct color guessing turns 
let correctTurns = 0;

//  Access to headline via variable
const headline = document.getElementById('GtC');

let wrongMove = 0;

//  By loading the page the generateColor function generates six random Hexadecimal color values
window.addEventListener('load', function generateColor(){
      let color1 = '#';
    const colorArray1 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray1.length)];
        color1 += colorArray1[mathRandom]; 
    }
    let color2 = '#';
    const colorArray2 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray2.length)];
        color2 += colorArray2[mathRandom]; 
    }
    let color3 = '#';
    const colorArray3 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray3.length)];
        color3 += colorArray3[mathRandom]; 
    }
    let color4 = '#';
    const colorArray4 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray4.length)];
        color4 += colorArray4[mathRandom]; 
    }
    let color5 = '#';
    const colorArray5 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray5.length)];
        color5 += colorArray5[mathRandom]; 
    }
    let color6 = '#';
    const colorArray6 = ['a','b','c','d','e','f','1','2','3','4','5','6','7','8','9','0'];
    for( let i=0; i<6; i++){
        const mathRandom = [Math.floor(Math.random() * colorArray6.length)];
        color6 += colorArray6[mathRandom]; 
    }

//  All of these hex color values ​​have their own div in which they change the color
    div1.style.background = color1;
    div2.style.background = color2;
    div3.style.background = color3;
    div4.style.background = color4;
    div5.style.background = color5;
    div6.style.background = color6;

//  We put these six colors in an array in which the randCol function randomly takes on a color
    function randCol(){
        randomColors = [color1, color2, color3, color4, color5, color6];
        return randomColors[Math.floor(Math.random() * randomColors.length)];
    }

//  We use the function which gives us just one hex color value of the six divs on the top container
    top_container.style.background = randCol();
  
    const divs = document.querySelectorAll('.colorDiv');

    divs.forEach(el => el.addEventListener('click', () => {
    /*
        If the color we choose have the same color as the top container, the generateColor
        function generates new six colors and this happens after any correct click
    */
                if(top_container.style.background === el.style.background){
                    generateColor(); 
                }
        }))
    });

    const divs = document.querySelectorAll('.colorDiv');

    divs.forEach(el => el.addEventListener('click', () => {
    /*
        If the color we choose have the same color as the top container, correctTurns will increment by 1.
    */
                if(top_container.style.background === el.style.background){
                    correctTurns++;
                    headline.innerHTML = `<h1>${correctTurns}</h1>`;
                }

            // Outside the counter, counting is all the more accurate

                if(top_container.style.background !== el.style.background){
                    wrongMove++;
                    console.log(wrongMove);
                }

            // with 5 wrong turns, the game is over

                if(wrongMove == 5){
                    div1.remove();
                    div2.remove();
                    div3.remove();
                    div4.remove();
                    div5.remove();
                    div6.remove();
                    bottom_container.remove();
                    headline.innerHTML = ` you have ${correctTurns} points `;
                }          
            }));





