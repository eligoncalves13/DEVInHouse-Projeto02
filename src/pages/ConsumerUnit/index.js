import React, { useState, useEffect } from "react";
//Json Server consumer_unit
import UnitsService from '../../services/UnitsService';
//Libraries
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
//Components
import ContainerMain from '../../components/ContainerMain';
import ContainerPage from '../../components/ContainerPage';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import ButtonTable from '../../components/ButtonTable';
import ButtonForm from "../../components/ButtonForm";
//Styles
import {
  Title, 
  Table, 
  THeader, 
  TBody, 
  Row, 
  RowItem 
} from './styles';

const ConsumerUnit = () => {
  const [units, setUnits] = useState([]);

  const history = useNavigate();

  useEffect(() => {
    getUnits();
  }, []);

  const getUnits = () => {
    UnitsService.getAll()
      .then((response) => {
        setUnits(response.data); 
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openUnitEdit = (id) => {
    history("/consumer_unit/" + id);
  };

  const deleteUnit = (id) => {
    UnitsService.remove(id) 
      .then((response) => {
        toast.error(`Cadastro removido!`)
        getUnits();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const openUnitRegister = (event) => {
    event.preventDefault();
    history('/unit_register');
  }

  return (
    <ContainerPage>
      <Menu/>
        <Header
        title="Unidades">
        </Header> 
        <ContainerMain>
        <Title>Lista de unidades</Title>
        <Table>
          <THeader>
            <th>ID</th>
            <th>Apelido</th>
            <th>Local</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th></th>
            <th></th>
          </THeader>
          {units && units.map((t) => ( 
              <TBody > 
              <Row key={t.id}>
                <RowItem>{t.id}</RowItem>
                <RowItem>{t.nickname}</RowItem>
                <RowItem>{t.address}</RowItem>
                <RowItem>{t.brand}</RowItem>
                <RowItem>{t.model}</RowItem>
                <RowItem><ButtonTable edit onClick={() => openUnitEdit(t.id)}>Editar</ButtonTable></RowItem>
                <RowItem><ButtonTable onClick={() => deleteUnit(t.id)}>Remover</ButtonTable></RowItem>
              </Row>
            </TBody>
              ))}
        </Table>
        <ButtonForm type='submit' onClick={openUnitRegister}>Nova Unidade</ButtonForm>
        </ContainerMain>
    </ContainerPage>
  )
}
export default ConsumerUnit;