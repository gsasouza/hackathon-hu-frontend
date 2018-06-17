import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Particles from 'react-particles-js';

import styled from 'styled-components';
import * as Yup from 'yup';
import { withFormik } from 'formik';


import { TextField, Button, withSnackbar } from '../common';
import LoginMutation from './mutation/LoginMutation';
import { login } from '../../security/security';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Digite um e-email válido')
    .required('Preencha o campo de e-mail'),
  password: Yup.string()
    .min(6, 'A senha deve ter no minímo 6 caracteres')
    .required('Preencha o campo de senha'),
});

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px
`;

const StyledCard = styled(Card)`
  width: 600px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Content = styled(CardContent)`
  width: 100%;
  height: 100%
`;

const Actions = styled(CardActions)`
  align-self: flex-end;
  margin: 10px;
`;

const StyledCardHeader = styled(CardHeader)`
  font-size: 36px;
  font-family: 'Montserrat', sans-serif;
  margin: 5px;
  border-bottom: 1px solid #9c9c9c; 
`;

class Login extends React.Component {

  handleSignUp = () => this.props.history.push('/auth/signup');

  render() {
    const { handleSubmit } = this.props;
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
        <StyledCard>
          <StyledCardHeader
            title={'Login'}
          />
          <Content>
            <FormContainer>
              <TextField name={'email'} label={'Email'}{...this.props} />
              <TextField name={'password'} label={'Senha'} {...this.props} />
            </FormContainer>
          </Content>
          <Actions>
            <Button color="primary" onClick={() => this.props.history.push('/')} style={{backgroundColor: 'rgb(62, 175, 154) !important'}}>
              Voltar
            </Button>
            {/*<Button color="secondary" onClick={this.handleSignUp}>*/}
              {/*Cadastrar*/}
            {/*</Button>*/}
            <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!!Object.keys(this.props.errors).length}>
              Entrar
            </Button>
          </Actions>
        </StyledCard>
      </div>
    )
  }
}

export default withSnackbar(
  withFormik({
    mapPropsToValues: () => ({ email: '', password: '' }),
    validationSchema: LoginSchema,
    handleSubmit: (values, formikBag) => {
      const { setSubmitting, props } = formikBag;
      const { password, email } = values;

      const input = {
        password,
        email
      };

      const onError = () => {
        props.showSnackbar({ fail: true, message: 'Ocorreu um erro ao realizar a operação' });
        setSubmitting(false);
      };

      const onCompleted = ({ LoginEmail: { token, error } }) => {
        if (error) return props.showSnackbar({  message: 'Email ou senha inválida' });
        login(token);
        setSubmitting(false);
        props.history.push('/');
      };

      LoginMutation.commit(input, onCompleted, onError);
    }
  })(Login)
);
