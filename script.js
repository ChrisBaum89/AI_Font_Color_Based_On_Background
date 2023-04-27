const net = new brain.NeuralNetwork()

const diagram = document.getElementById('diagram')
diagram.innerHTML = brain.utilities.toSVG(net)