import styled from 'styled-components';

export const Button = styled.button`
    
    background-color: ${props => {
        if (props.theme.isDark) {
            return props.theme.colors.bg
        } else if (props.secondary) {
            return props.theme.colors.secondary
        } else {
            return props.theme.colors.primary
        }
    }};

    border: ${props => {
        if (props.theme.isDark) {
            if (props.secondary) {
                return `2px solid ${props.theme.colors.secondary}`
            } else {
                return `2px solid ${props.theme.colors.primary}`
            }
        } else {
            return "none"
        } 
    }};

    color: ${(props) => {
        if (props.theme.isDark) {
            if (props.secondary) {
                return props.theme.colors.secondary
            } else {
                return props.theme.colors.primary
            }
        } else {
            return props.theme.colors.light
        } 
    }};

    border-radius: 3px;
    font-size: 14px;
    padding: 10px 16px;
    margin: 10px;
    cursor: pointer;
    text-transform: uppercase;
    
    transition: filter 300ms;
    font-weight: 500;
    &:hover {
        filter: brightness(120%);
    }

    &:focus {
        outline: none;
    }
`