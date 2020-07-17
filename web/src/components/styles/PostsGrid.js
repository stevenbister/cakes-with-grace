import styled from 'styled-components'

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem 2rem;
  padding-top: ${ props => props.theme.gridPaddingTop };
`

export default StyledList