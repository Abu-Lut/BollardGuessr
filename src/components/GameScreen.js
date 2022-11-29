import { useState } from 'react'
import { Option } from './Option'
import { NextButton } from './NextButton'

const GameScreen = () => {

    const bollardList = [
        {
            country: "Albania",
            type: "bollard",
            typeNo: 1,
            prevalence: "common",
            frontView: '../assets/albania1front.jpg',
            rearView: '../assets/albania1rear.jpg',
            continent: "Europe",
            colors: ["black", "red", "white"]
        },
        {
            country: "Andorra",
            type: "bollard",
            typeNo: 1,
            prevalence: "common",
            frontView: '../assets/andorra1front.png',
            rearView: '../assets/andorra1rear.png',
            continent: "Europe",
            colors: ["black", "red", "white"]
        },
        {
            country: "Argentina",
            type: "bollard",
            typeNo: 1,
            prevalence: "common",
            frontView: '../assets/argentina1front.png',
            rearView: '../assets/argentina1rear.png',
            continent: "South America",
            colors: ["black", "red", "white"]
        },
        {
            country: "Australia",
            type: "bollard",
            typeNo: 1,
            prevalence: "common",
            frontView: '../assets/australia1front.png',
            rearView: '../assets/australia1rear.png',
            continent: "Australia",
            colors: ["black", "red", "white"]
        },
    ]
    
    const [roundNo, setRoundNo] = useState(0)
    const [frontImg, setFImg] = useState(bollardList[roundNo].frontView)
    const [rearImg, setRImg] = useState(bollardList[roundNo].rearView)
    let answered = false

    function checkAnswer(){
        console.log("fired")
        // console.log(roundNo)
        const optionsArray = Array.from(document.querySelectorAll(".option"))
        optionsArray.forEach(option => {
            if (option.textContent === bollardList[roundNo].country){
                option.classList.add('correct')
            }
            else{
                option.classList.add('incorrect')   
            }
        answered = true
        })
    }

    function nextBollard(){
        if (roundNo === bollardList.length-1 || !answered) return 
        console.log("next fired")
        const optionsArray = Array.from(document.querySelectorAll(".option"))
        optionsArray.forEach(option => {
            if (option.textContent === bollardList[roundNo].country){
                option.classList.remove("correct")
            }
            else{
                option.classList.remove("incorrect")
            }
        })
        answered = false
        setRoundNo(roundNo + 1)
        
        setRoundNo(roundNo => {
            console.log(roundNo)
            setFImg(bollardList[roundNo].frontView)
            setRImg(bollardList[roundNo].rearView)
            
            return roundNo
        })  
        
    }
    
    return (
        <div id="gameScreen">

            <div id='imageContainer'>
                <div>
                    <img src={frontImg} alt='bollard front view'/>
                    <p>Front View</p>
                </div>
                <div>
                    <img src={rearImg} alt='bollard rear view'/>
                    <p>Rear View</p>
                </div>
            </div>

            <div id='optionsContainer'>
                <Option value="Albania" click={checkAnswer} />
                <Option value="Andorra" click={checkAnswer} />
                <Option value="Australia" click={checkAnswer} />
                <Option value="Argentina" click={checkAnswer} />
            </div>

            <NextButton click={nextBollard} />

        </div>
    )
}

export default GameScreen