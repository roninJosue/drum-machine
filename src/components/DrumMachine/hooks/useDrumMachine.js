import {useState} from "react"

const drumPadsArr = [
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    id: 'Header-1',
    keyTrigger: 'Q',
    keyCode: 81,
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    id: 'Header-2',
    keyTrigger: 'W',
    keyCode: 87,
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    id: 'Header-3',
    keyTrigger: 'E',
    keyCode: 69,
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    id: 'Header-4',
    keyTrigger: 'A',
    keyCode: 65,
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    id: 'Clap',
    keyTrigger: 'S',
    keyCode: 83,
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    id: 'Open-HH',
    keyTrigger: 'D',
    keyCode: 68,
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    id: "Kick-n'-Hat",
    keyTrigger: 'Z',
    keyCode: 90,
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    id: 'Kick',
    keyTrigger: 'X',
    keyCode: 88,
  },
  {
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    id: 'Closed-HH',
    keyTrigger: 'C',
    keyCode: 67,
  }
]

const useDrumMachine = () => {
  const [drumPads, setDrumPads] = useState(drumPadsArr)

  return {
    drumPads
  }
}

export default useDrumMachine