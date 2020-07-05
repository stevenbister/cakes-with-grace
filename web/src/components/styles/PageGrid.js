import styled from 'styled-components'

const StyledArticle = styled.article`
    display: grid;
    grid-template-columns: 1fr minmax(300px, 3fr) 1fr;
    margin-bottom: 3rem;

    @media (min-width: 768px) {
      margin-bottom: 6rem;
    }

    > *:not(header) {
      grid-column: 2 / 3;
      width: 100%;
    }
`

export default StyledArticle;
