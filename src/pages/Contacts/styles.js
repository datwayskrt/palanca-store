import styled from 'styled-components'

export const Container = styled.div`
    padding-top: ${props => (props.width >= 920) ? '100px' : '65px'};
`;

export const Empty = styled.div`
    min-height: 100vh;
    background-color: gray;
`;