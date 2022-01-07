import styled from "styled-components"

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 240px;
  justify-content: space-between;
`

const DrumPadContainer = ({children}) => {
  return(
    <Container>
      {children}
    </Container>
  )
}

export default DrumPadContainer