const haikuLines = {
    possibleLine1: ["House under attack", "Yarrrr! said the pirate", "Raising rates again?", "Twenty years and more"],
    possibleLine2: ["Taliban woodpecker creep", "Proudly protects the forest", "Sailing on the seven seas", "I have a kid to raise, man!"],
    possibleLine3: ["Need napalm strike now!", "Donuts in his beard.", "you are all douche bags", "fucking cable guy."]
}

const generateHaiku = () => {
    let line1 = haikuLines.possibleLine1[Math.floor(Math.random() * haikuLines.possibleLine1.length)]
    let line2 = haikuLines.possibleLine2[Math.floor(Math.random() * haikuLines.possibleLine2.length)]
    let line3 = haikuLines.possibleLine3[Math.floor(Math.random() * haikuLines.possibleLine1.length)]
    let newHaiku= [line1, line2, line3]
    newHaiku.forEach(line => {
        console.log(line)
    })
    return newHaiku
}

generateHaiku(haikuLines)