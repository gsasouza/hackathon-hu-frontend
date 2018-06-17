import React from 'react';
import styled from 'styled-components';
import CardContent from '@material-ui/core/CardContent';
import Card from "@material-ui/core/Card/index";
import CardHeader from "@material-ui/core/CardHeader";
import Particles from 'react-particles-js';

import Button from '../../components/common/Button';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: #dbdbdb;
`;

const Content = styled(CardContent)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100% 
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

const StyledCard = styled(Card)`
  width: 600px;
  height: 300px;
  display: flex;
  align-items: center;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  flex-direction: column;
`;

const StyledCardHeader = styled(CardHeader)`
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  margin: 5px;
  border-bottom: 1px solid #9c9c9c; 
`;

export default class Auth extends React.Component {
  render() {
    const { history } = this.props;
    return (
      <div>
        <Particles
          params={{
            "particles": {
              "number": {
                "value": 57,
                "density": {
                  "enable": true,
                  "value_area": 552.4033491425909
                }
              },
              "color": {
                "value": "#ffffff"
              },
              "shape": {
                "type": "edge",
                "stroke": {
                  "width": 0,
                  "color": "#000000"
                },
                "polygon": {
                  "nb_sides": 5
                },
                "image": {
                  "src": "img/github.svg",
                  "width": 100,
                  "height": 100
                }
              },
              "opacity": {
                "value": 1,
                "random": false,
                "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
                }
              },
              "size": {
                "value": 1,
                "random": true,
                "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
                }
              },
              "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
              },
              "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
                }
              }
            },
            "interactivity": {
              "detect_on": "canvas",
              "events": {
                "onhover": {
                  "enable": true,
                  "mode": "repulse"
                },
                "onclick": {
                  "enable": true,
                  "mode": "push"
                },
                "resize": true
              },
              "modes": {
                "grab": {
                  "distance": 400,
                  "line_linked": {
                    "opacity": 1
                  }
                },
                "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
                },
                "repulse": {
                  "distance": 200,
                  "duration": 0.4
                },
                "push": {
                  "particles_nb": 4
                },
                "remove": {
                  "particles_nb": 2
                }
              }
            },
            "retina_detect": true
          }}
          style={{
            backgroundColor: 'rgb(62, 175, 154)',
            width: "100%",
            height: "100%"
          }}
        />
        <Wrapper>
          <StyledCard>
            <StyledCardHeader
              title={'HuMesh'}
            />
            <Content>
              <FormContainer>
                <Button variant="contained" color="primary" onClick={() => history.push('/sign')}>
                  Assinar Feed
                </Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/auth/signup')}>
                  Cadastrar
                </Button>
                <Button variant="contained" color="primary" onClick={() => history.push('/auth')}>
                  Entrar
                </Button>
              </FormContainer>
            </Content>
          </StyledCard>
        </Wrapper>
      </div>
    )
  }
}
