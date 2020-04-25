import React from 'react';
import { connect } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';
import { ThemeWrapper, Button } from './shared';
import DarkModeToggle from './components/darkMode/DarkModeToggle';
import reactLogo from './assets/icons/react.png';
import reduxLogo from './assets/icons/redux.png';
import githubDark from './assets/icons/github_dark.png';
import githubLight from './assets/icons/github_light.png';
import styledComponentsLogo from './assets/icons/styled-components.png';

import './App.css';


const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.column ? "column" : "row"};
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
 margin-top: ${props => props.mt ? props.mt : "0"};
 margin-bottom: ${props => props.mb ? props.mb : "0"};
 margin-right: ${props => props.mr ? props.mr : "0"};
 margin-left: ${props => props.ml ? props.ml : "0"};
 text-align: center;
`;

const StyledText = styled.p`
  display: inline-block;
  margin: 0;
  font-weight: ${props => props.bold ? 500 : 400};
`;
const StyledImage = styled.img`
  height: 75px;
  width: 75px;
  margin: ${props => props.spacing ? "30px 20px" : "0"};
  transition: transform .5s;
  &:hover {
    transform: ${props => props.enlarge ? "scale(1.2)" : "none"};
  }
`;
const StyledLink = styled.a`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
`;

const StyledCode = styled.code`
  margin-bottom: 10px;
`;

function App({ theme, isDark }) {
  console.log(isDark)
  return (
      <ThemeProvider theme={theme} >
          <ThemeWrapper>

            <FlexContainer column>

              <FlexContainer>
                <StyledLink href="https://reactjs.org/" target="_blank">
                  <StyledImage spacing enlarge src={reactLogo} />
                </StyledLink>

                <StyledLink href="https://react-redux.js.org/" target="_blank">
                  <StyledImage spacing enlarge src={reduxLogo} />
                </StyledLink>

                <StyledLink href="https://styled-components.com/" target="_blank">
                  <StyledImage spacing enlarge src={styledComponentsLogo} />
                </StyledLink>
              </FlexContainer>

              <StyledDiv mt="30px" mb="30px" ml="30px" mr="30px">
                <h1 style={{fontWeight: 500}}>
                  A React, Redux, and Styled-Components boilerplate with dark mode
                </h1>
              </StyledDiv>

              <StyledDiv>
                <DarkModeToggle />
              </StyledDiv>

              <StyledDiv mt="30px">
                <Button>
                  Button
                </Button>

                <Button secondary>
                  Button
                </Button>
              </StyledDiv>

              <StyledDiv mt="30px">
                <FlexContainer column>
                  <StyledCode>
                    {`<SourceCode />`}
                  </StyledCode>

                  <StyledLink href="https://github.com/MMthree/react-redux-styled-components-darkmode-boilerplate" target="_blank">
                    <StyledImage src={isDark ? githubLight : githubDark} />
                  </StyledLink>
                </FlexContainer>
                
              </StyledDiv>

              <StyledDiv mt="30px">
                <StyledText>Made by</StyledText>
                {" "}
                <StyledText bold>
                  <StyledLink href="https://mariomiramontes.com/" target="_blank">
                    Mario Miramontes
                  </StyledLink>
                </StyledText>
              </StyledDiv>

            </FlexContainer>

          </ThemeWrapper>
      </ThemeProvider>
  );
}

const mapStateToProps = state => ({
  theme: state.theme.theme,
  isDark: state.theme.isDark
});

export default connect(mapStateToProps)(App);
