import styled from 'styled-components';

export const ThemeWrapper = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.colors.bg};
    color: ${props => props.theme.colors.text};
`