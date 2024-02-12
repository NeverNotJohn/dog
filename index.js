let cat_p = 0;
let jo_p = 0;
let score = 0;
let index = 0;

// Cat

cat_brittney = document.getElementById('cat_brittney');
cat_frances = document.getElementById('cat_frances');
cat_george = document.getElementById('cat_george');
cat_carlos = document.getElementById('cat_carlos');
cat_nick = document.getElementById('cat_nick');
cat_nylah = document.getElementById('cat_nylah');
cat_mana = document.getElementById('cat_mana');
cat_ray = document.getElementById('cat_ray');
cat_trescal = document.getElementById('cat_trescal');
cat_nando = document.getElementById('cat_nando');

// Jo

jo_brittney = document.getElementById('jo_brittney');
jo_frances = document.getElementById('jo_frances');
jo_george = document.getElementById('jo_george');
jo_carlos = document.getElementById('jo_carlos');
jo_nick = document.getElementById('jo_nick');
jo_nylah = document.getElementById('jo_nylah');
jo_mana = document.getElementById('jo_mana');
jo_ray = document.getElementById('jo_ray');
jo_trescal = document.getElementById('jo_trescal');
jo_nando = document.getElementById('jo_nando');

function start() {

    index++;
}

function correct(button) {
    let test = window.getComputedStyle(button);
    let color = test.backgroundColor;

    if (color != 'rgb(0, 128, 0)')
    {
        button.style.backgroundColor = 'green';
        score++;
    }

    switch (index) {
        case 1:
            
            break;
        case 2:
            
            break;
        case 3:
            
            break;
        case 4:
            
            break;
        case 5:
            
            break;
        case 6:
            
            break;
        case 7:
            
            break;
        case 8:
            
            break;
        case 9:
            
            break;
        case 10:
            
            break;
    
        default:
            break;
    }

}

function incorrect(button) {
    let test = window.getComputedStyle(button);
    let color = test.backgroundColor;

    if (color != 'rgb(128, 0, 0)')
    {
        button.style.backgroundColor = 'red';
        score--;
    }

}