const menuToggle=document.querySelector('#menu-toggle');
const menu=document.querySelector('#nav-menu');
menuToggle.addEventListener('click',()=>{const open=menu.hidden;menu.hidden=!open;menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.hidden=true;menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','Open navigation')}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'){menu.hidden=true;menuToggle.setAttribute('aria-expanded','false')}});
// A low-contrast text field gives the hero the technical texture of a live signal.
const alphabet='0101010011001100HACKONX<>/{}[]';
let seed=41;
const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
const rows=Array.from({length:54},()=>Array.from({length:140},()=>alphabet[Math.floor(random()*alphabet.length)]).join('')).join('\n');
document.querySelector('#data-field').textContent=rows;
