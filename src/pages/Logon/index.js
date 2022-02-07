import React, { useState } from 'react';
//Images
import LogonImage from "../../assets/logon.jpeg";
import Logo from "../../assets/logo1.png";
//Components
import InputLogon from '../../components/InputLogon'
import ButtonLogon from '../../components/ButtonLogon';
//Icons 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
//Styles
import { 
  Container, 
  ContainerImage, 
  ContainerLogin
} from './styles';

const Logon = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    let currentErrors = [];

    if (!email || !password) {
      if (!email) {
        currentErrors.email = 'Email obrigatório';
      } 
      if (!password) {
        currentErrors.password = 'Senha obrigatória';
      }
    } else{
      history('/dashboard');
    }
    setErrors(currentErrors);
  }

  return (
    <Container>
      <ContainerImage>
        <img src={LogonImage} alt='Imagem Painel Solar'/>
      </ContainerImage>
      <ContainerLogin onSubmit={handleSubmit} > 
        <img src={Logo} alt="Imagem Logo"/>
        <h2>Seja bem vindo</h2>
        <InputLogon
          placeholder='E-mail'
          type='email'
          icon={faEnvelope}
          value={email}
          onChange={(event) => {
          setEmail(event.target.value)}}
          errorMessage={errors.email}
        />
        <InputLogon
          placeholder='Senha'
          type='password'
          icon={faLock}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value)
            console.log(event.target.value)}}
          errorMessage={errors.password}
        />
        <ButtonLogon
          type='submit'
        >Entrar</ButtonLogon>
      </ContainerLogin>
    </Container>
  
  )
}

export default Logon;