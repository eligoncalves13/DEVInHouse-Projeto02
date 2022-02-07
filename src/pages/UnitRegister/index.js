import React, { useState } from 'react';
//Libraries
import { toast } from 'react-toastify';
//Json Server consumer_unit
import UnitsService from '../../services/UnitsService';
//Components 
import ContainerMain from '../../components/ContainerMain';
import ContainerPage from '../../components/ContainerPage';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import InputForm from '../../components/InputForm';
import Checkbox from '../../components/Checkbox';
import ButtonForm from '../../components/ButtonForm';
//Styles
import { 
  Title, 
  FormRegister 
} from './styles';

const UnitRegister = () => {

  const initialUnitsState = {
    id: null, 
    nickname: "", 
    address: "",
    brand: "", 
    model: "",
    active: false,
  };

  const [units, setUnits] = useState(initialUnitsState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setUnits({ ...units, [name]: value });
  };

  const handleCheckBoxChange = event => {
    const { name, checked } = event.target;
    setUnits({ ...units, [name]: checked });
  }

  const saveUnits = (event) => {
    event.preventDefault();
    var data = {
      nickname: units.nickname, 
      address: units.address,
      brand: units.brand, 
      model: units.model,
      active: units.active,
    }

    if(!units.nickname || !units.address || !units.brand || !units.model){
      toast.error(`Todos os campos são obrigatórios!`)
    } else {
      UnitsService.create(data)
      .then(response => {
        setUnits({
          id: response.data.id,
          nickname: response.data.nickname, 
          address:  response.data.address,
          brand:  response.data.brand, 
          model:  response.data.model,
          active:  response.data.active,
        });
        toast.success(`Cadastro criado!`)
        setUnits(initialUnitsState);
      })
      .catch(e => {
        toast.e(e.response.data)
      });
    };
    }

  return (
    <ContainerPage>
      <Menu/>
      <Header
        title="Unidades"/>
      <ContainerMain>        
        <Title>Cadastro de Unidades Geradora</Title>
        <FormRegister onSubmit={saveUnits} > 
        <InputForm
          type="text"
          label='Apelido'
          placeholder='Painel 1'
          id="nickname"
          value={units.nickname}
          onChange={handleInputChange}
          name='nickname'
          required
        />
        <InputForm
          type="text"
          label='Local'
          placeholder='Rua Alberto 430'
          id="address"
          value={units.address}
          onChange={handleInputChange}
          name='address'
          required
        />    
        <InputForm
          type="text"
          label='Marca'
          placeholder='Resun'
          id="brand"
          value={units.brand}
          onChange={handleInputChange}
          name='brand'
          required
        />
        <InputForm
          type="text"
          label='Modelo'
          placeholder='155w'
          id="model"
          value={units.model}
          onChange={handleInputChange}
          name='model'
          required
        />
        <Checkbox
          label='Ativo'
          id="active"
          value={units.active}
          onChange={handleCheckBoxChange}
          name='active'
        ></Checkbox>
        <ButtonForm type='submit'>Salvar</ButtonForm>   
        </FormRegister>
     </ContainerMain>
    </ContainerPage>
  )
}
export default UnitRegister;