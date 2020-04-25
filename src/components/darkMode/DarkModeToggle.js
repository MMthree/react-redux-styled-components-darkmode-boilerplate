import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from '../../actions/themeActions';
import styled, { keyframes } from 'styled-components';

// Icons
import { Sun, Moon } from '../icons';

// Styled Components
const slideLeft = keyframes`
 0% { transform: translateX(30px); }
 100% { transform: translateX(0px); }
`;

const slideRight = keyframes`
 0% { transform: translateX(0px); }
 100% { transform: translateX(30px); }
`;

const Pill = styled.div`
    position: relative;
    height: 28px;
    width: 58px;
    background-color: ${props => props.isDark ? props.theme.colors.light : "#FED022" };
    border-radius: 1000px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
    border: ${props => props.isDark ? "1px solid #2E3639" : "1px solid #FED022"};
    cursor: pointer;
`;
const Ball = styled.div`
    position: absolute;
    top: 2px;
    left: 2px;
    height: 22px;
    width: 22px;
    background-color: white;
    border-radius: 1000px;
    box-shadow: 9px 0px 9px -7px rgba(0,0,0,0.45);

    animation-name: ${props => props.slide ? slideLeft : slideRight};
    animation-duration: .5s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
    animation-iteration-count: initial;
`;

const DarkModeToggle = ({ isDark, toggleTheme }) => {

    return (
        <Pill isDark={isDark} onClick={() => toggleTheme()}>
            
            <Sun size={18} fill="#e6b217" />

            <Moon size={16} fill="#2E3639" />
            
            <Ball slide={isDark}></Ball>

        </Pill>
    )
}

const mapStateToProps = state => ({
    isDark: state.theme.isDark
});

export default connect(mapStateToProps, { toggleTheme })(DarkModeToggle)