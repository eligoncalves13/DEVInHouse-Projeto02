import React, { useEffect, useState } from 'react';
//Libraries
import {toast} from 'react-toastify';
import { useParams } from 'react-router-dom';
//Json Server consumer_unit
import UnitsService from '../../services/UnitsService';
//Components 
import ContainerPage from '../../components/ContainerPage';
import ContainerMain from '../../components/ContainerMain';
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

const UnitEdit = () => {

    const initialUnitsState = {
        id: null, 
        nickname: "", 
        address: "",
        brand: "", 
        model: "",
        active: false,
    };

    const [units, setUnits] = useState(initialUnitsState);
 
    useEffect(() => {
        getUnits();
    }, []);

    const {id} = useParams();


    const getUnits = () => {
        UnitsService.get(id)
        .then((response) => setUnits(response.data))
        console.log(id)
    }

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUnits({ ...units, [name]: value });
    };

    const handleCheckBoxChange = event => {
        const { name, checked } = event.target;
        setUnits({ ...units, [name]: checked });
      }

    const updateUnits = (event) => {
        event.preventDefault();
        UnitsService.update(id, units)
        .then(response => {
            console.log(response.data);
            toast.success(`Cadastro editado!`)
            setUnits(initialUnitsState);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <ContainerPage>
        <Menu/>
            <Header
            title="Unidades"/>
            <ContainerMain>        
            <Title>Edição de Unidades Geradora</Title>
                <FormRegister onSubmit={updateUnits} > 
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
                />
                <ButtonForm type='submit'>Salvar</ButtonForm>
                </FormRegister>
            </ContainerMain>
        </ContainerPage>
    )
}
export default UnitEdit;