document.querySelector('button').addEventListener('click', flipCoin)

async function flipCoin() {
    let flipping = true

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
        flipping = false
        console.log('heads!')
    } else {
        //flip coin to tails up
        flipping = false
        console.log('tails!')
    }
    return null
}
