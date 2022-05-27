document.querySelector('button').addEventListener('click', flipCoin)

async function flipCoin() {
    const head = document.querySelector('.head')
    const tail = document.querySelector('.tail')

    head.style.transform = 'rotateY(0deg)'
    tail.style.transform = 'rotateY(180deg)'

    await new Promise(r => setTimeout(r, 1000))
    
    let result,data;
    try {
    data = await fetch('http://localhost:5000/coinflip', {
        "method": "GET"
    })
    result = await data.json()
    } catch(err) {
        console.log(err)
    }

    if (result.message === "heads") {
        //flip coin to heads up
        head.style.transform = 'rotateY(720deg)'
        tail.style.transform = 'rotateY(900deg)'
        console.log('heads!')
    } else {
        //flip coin to tails up
        tail.style.transform = 'rotateY(1440deg)'
        head.style.transform = 'rotateY(1260deg)'
        console.log('tails!')
    }
    return null
}
