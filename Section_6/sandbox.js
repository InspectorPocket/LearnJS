const copy = document.querySelector('.copy-me');
const box = document.querySelector('.box');

copy.addEventListener('copy', () => console.log('OI m8 ill fukin spark u out kiddo, wen my dad gets out of prison hes gonna fuk ur dad up'));

box.addEventListener('mousemove', e => {
    // console.log(`x-pos: ${e.offsetX}. y-pos: ${e.offsetY}`);
    box.textContent = `x-pos: ${e.offsetX} y-pos: ${e.offsetY}`;
});

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});
