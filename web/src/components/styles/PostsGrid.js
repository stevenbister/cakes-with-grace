import styled from 'styled-components'

const StyledList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 3rem 2rem;
  /* TODO: set this as a global var */
  padding-top: calc(3.1875rem + 1.5rem);
`

export default StyledList