import styled from 'styled-components'

export const Container = styled.div`
    padding-top: ${props => (props.width >= 920) ? '100px' : '65px'};
`;