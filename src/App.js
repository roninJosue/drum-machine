import styled from "styled-components";
import DrumMachine from "./components/DrumMachine/DrumMachine";
import Heading from "./components/Heading";

const Main = styled.main`
  background: linear-gradient(#155592, #1c7ed6);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

function App() {
  return (
    <Main>
      <Heading text='Drum Machine' />
      <DrumMachine />
    </Main>
  );
}

export default App;
