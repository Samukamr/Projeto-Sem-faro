function changeImg(filename, name) {
    document.querySelector('.images').setAttribute('src','./images/'+filename);
    document.querySelector('.images').setAttribute('data-name', name);
}

function vermelho() {
    document.querySelector('.images').setAttribute('src','./images/vermelho.png');
}
function amarelo() {
    document.querySelector('.images').setAttribute('src','./images/amarelo.png');
}
function verde() {
    document.querySelector('.images').setAttribute('src','./images/verde.png');
}

function automatic() {
    setTimeout(vermelho, 1000);
    setTimeout(amarelo,3000);
    setTimeout(verde, 6000);
    setTimeout(amarelo, 8000);
    setTimeout(vermelho,11000)
    setTimeout(amarelo, 13000);
    setTimeout(verde, 16000);
    setTimeout(amarelo, 19000);
};