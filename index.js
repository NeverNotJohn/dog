let cat_p = 0;
let jo_p = 0;
let score = 0;

function correct(button) {
    let test = window.getComputedStyle(button);
    let color = test.backgroundColor;

    if (color != 'rgb(0, 128, 0)')
    {
        button.style.backgroundColor = 'green';
        score++;
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