document.querySelector('button').addEventListener('click', flipCoin)


async function flipCoin() {
    let flipping = true

    let result = await fetch('localhost:5000/coinflip')

    if (result === "heads") {
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
