const herois = [
    'Iron - Wounded, captured and forced to build a weapon by …make the world a safer, better place as Iron Man.',
    'Thanos - The Mad Titan Thanos, a melancholy, brooding indiv…he became more powerful than any of his brethren.',
    'SpiderMan - Peter’s relatively normal life changed abruptly du…it escaped and bit Peter before it was destroyed.',
    'Thor - As the Norse God of thunder and lightning, Thor wi…never, ever stop fighting for a worthwhile cause.',
    'CaptainAmerica - Vowing to serve his country any way he could, youn… living, breathing symbol of freedom and liberty.'
]

const cardss = (item)=>{
    const ul = document.querySelector('ul')
    const div = document.createElement('div')
    div.classList.add('div-container')
    let split = item.split('-')
    div.innerHTML = `
        <li>    
            <h3>${split[0]}</h3>
           
            <div >${split[1]}</div>
        </li>`
    ul.appendChild(div)
}
herois.forEach(cardss)