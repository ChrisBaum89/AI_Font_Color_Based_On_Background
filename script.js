const net = new brain.NeuralNetwork()

data = [{"input":{"r":0,"g":0,"b":0},"output":[1]},
{"input":{"r":1,"g":1,"b":1},"output":[0]},
{"input":{"r":0.11283322873992963,"g":0.7226695996753199,"b":0.4795795526144382},"output":[0]},
{"input":{"r":0.2506651300619802,"g":0.8672515027756309,"b":0.9349407486000632},"output":[0]},
{"input":{"r":0.8385947830725686,"g":0.3511871546817895,"b":0.6999562068255099},"output":[1]},
{"input":{"r":0.3371884508646623,"g":0.19390724075897503,"b":0.4551408381488713},"output":[1]},
{"input":{"r":0.7036869456115573,"g":0.8929006029894562,"b":0.42308476427309705},"output":[0]},
{"input":{"r":0.996437724586291,"g":0.6199101274467373,"b":0.4160552076760671},"output":[0]},
{"input":{"r":0.1013101254938662,"g":0.3660440663093434,"b":0.9285540179988694},"output":[1]}
,{"input":{"r":0.5926313585192664,"g":0.6881464469068395,"b":0.6260959542617939},"output":[0]},
{"input":{"r":0.5390600681172493,"g":0.15287626469755966,"b":0.44531343731325945},"output":[1]},
{"input":{"r":0.5013937752111453,"g":0.4052916269757829,"b":0.6375943741940648},"output":[1]},
{"input":{"r":0.21660661117441338,"g":0.4567041250995807,"b":0.9386570098922289},"output":[1]},
{"input":{"r":0.5742309203520994,"g":0.7888935407386526,"b":0.3851745391416461},"output":[0]},
{"input":{"r":0.5059936246374892,"g":0.1547805986151758,"b":0.28288029809115045},"output":[1]},
{"input":{"r":0.8963450838410598,"g":0.4053295603370366,"b":0.38101636024562424},"output":[1]},
{"input":{"r":0.19066980039925596,"g":0.13816135474797786,"b":0.2765226761604245},"output":[1]},
{"input":{"r":0.5406029149607667,"g":0.211392400181317,"b":0.9034736581150942},"output":[1]},
{"input":{"r":0.2709260455859246,"g":0.4774492990264878,"b":0.883433445025452},"output":[1]},
{"input":{"r":0.20077522632506972,"g":0.11767504332450929,"b":0.7923669701584382},"output":[1]},
{"input":{"r":0.005386809654863045,"g":0.44785460509493746,"b":0.02527385472785526},"output":[1]},
{"input":{"r":0.4612392200165085,"g":0.7287319651323636,"b":0.7342531044952174},"output":[0]},
]

net.train(data)

const colorEl = document.getElementById('color');
const guessEl = document.getElementById('guess');

const whiteButton = document.getElementById('white-button');
const blackButton = document.getElementById('black-button');
const printButton = document.getElementById('print-button');

setRandomColor()

whiteButton.addEventListener('click', () => {
    chooseColor(1)
})

blackButton.addEventListener('click', () => {
    chooseColor(0)
})

printButton.addEventListener('click', print)

function chooseColor(value){
    data.push({
        input: color,
        output: [value]
    })
    setRandomColor()
}

function print() {
    console.log(JSON.stringify(data))
}

function setRandomColor() {
    color = {
        r: Math.random(),
        g: Math.random(),
        b: Math.random(),
    }
    const guess = net.run(color)[0]
    guessEl.style.color = guess > .5 ? '#FFF' : '#000'
    colorEl.style.backgroundColor = `rgba(${color.r * 255}, ${color.g * 255}, ${color.b * 255})`
}