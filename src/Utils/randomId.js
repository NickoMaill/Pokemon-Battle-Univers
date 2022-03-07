export default function RandomId(j, max) {
    
    const arrayTemp = [];
    for (let i = 0; i < j; i++) {

        const poke = Math.floor(Math.random() * max) + 1;
        arrayTemp.push(poke)

        
    }
    console.log(arrayTemp);
    return arrayTemp
}