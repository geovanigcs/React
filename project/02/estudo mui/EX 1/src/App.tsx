import { Button } from "@mui/material"
import { useState } from "react"

export const App = () => {
const [currentTime, setCurrentTime] = useState(new Date().getHours())
console.log(currentTime)
let saudacao
if (currentTime >= 6 && currentTime < 12){
  saudacao = "Bom dia"
} else if (currentTime >= 12 && currentTime < 18){
  saudacao = "Boa tarde"
} else if (currentTime >= 18 || currentTime < 6){
  saudacao = "Boa noite"
}


  return (
    <>
      <Button onClick={() => {
        if (currentTime === 23 ){
          setCurrentTime(0)
        } else {
        setCurrentTime(currentTime + 1)
        }
      } }> Some aqui</Button>
      <h1 className='horas'>{saudacao}</h1>
    <Button onClick={() => { 
      if(currentTime === 0){
        setCurrentTime(23)
      } else {
      setCurrentTime(currentTime - 1) 
      }
    }}> Subtraia aqui</Button>
    </>
  )
}