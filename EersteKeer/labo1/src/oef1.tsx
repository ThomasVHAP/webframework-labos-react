import cherry from "./assets/cherry.png";
import lemon from "./assets/lemon.png";
import melon from "./assets/melon.png";
import plum from "./assets/plum.png";
import seven from "./assets/seven.png";

const BasicSlot = () => {
    let slotImages = [
        cherry,
        lemon,
        melon,
        plum,
        seven
    ]    

    const getRandomSlot = (number: number) => {
        const slot : number[] = Array.from({length: number}, (_, i) => Math.floor(Math.random() * 5))
        return slot;
    }

    let slots = getRandomSlot(3);
    let winning = slots.every((slot) => slot === slots[0])

    return (
        <>
            <h3>SlotBasic</h3>

            <div>
                {
                    slotImages.map((v, i) => (
                        <img src={v} alt={v} key={i} width={`50px`}/>
                    ))
                }
            </div>
            <div>
                {
                    winning === true ? <p>Je hebt gewonnen!</p> : <p>Je hebt verloren</p>
                }
            </div>
            <div>
                {
                    slots.map((v) => (
                        <img src={slotImages[v]} alt="" width={50}/>
                    ))
                }
            </div>
        </>
    )
}

export default BasicSlot;