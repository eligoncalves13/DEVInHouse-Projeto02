import React, { useEffect, useState } from 'react';
//Libraries
import { toast } from 'react-toastify';
//Json Server 
import ConsumptionService from '../../services/ConsumptionService';
import UnitsService from '../../services/UnitsService';
//Components
import ContainerMain from '../../components/ContainerMain';
import ContainerPage from '../../components/ContainerPage';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import InputDate from '../../components/InputDate';
import InputForm from '../../components/InputForm';
import Select from '../../components/Select';
import ButtonForm from '../../components/ButtonForm';
//Styles
import { 
  FormRelease 
} from './styles';

const MonthlyConsumption = () => {

  const [consumption, setConsumption] = useState([])
  const [date, setDate] = useState(new Date());
  const [energy, setEnergy] = useState('');
  const [id, setId] = useState('');

  useEffect(() => {
    getUnits();
  }, []);
 
  const getUnits = () => {
      UnitsService.getAll()
      .then((response) => {
        setConsumption(response.data)
      })
    }

  const saveConsumption = (event) => {
    event.preventDefault();

    if(!id || !energy || !date){
      toast.error(`Todos os campos são obrigatórios!`)
    } else {
      ConsumptionService.create({
        unit_id: id,
        kw: energy,
        date: date
      })
      toast.success(`Lançamento Criado`)
    }
  }

  return (
    <ContainerPage>
      <Menu/>
      <Header
      title="Lançamento de geração mensal">
      </Header>
      <ContainerMain>
        <FormRelease >
          <Select 
            label='Unidade Geradora'
            value={id}
            onChange={(e) => {setId(e.target.value) }}
            options={consumption.map((unit) => {
              return <option value={unit.id}>{unit.nickname}</option>
            })}
            description="Selecione uma unidade"
            required
          ></Select>
          <InputDate
            label="Mês/ano"
            selected={date}
            onChange={(date) => setDate(date)}
            selectsStart
            dateFormat="MM/yyyy"
            showMonthYearPicker
            required
        />
          <InputForm
          type="number"
          label='Total kw gerado'
          placeholder='80'
          id="kw"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
          name='kw'
          required>
          </InputForm>
          <ButtonForm onClick={saveConsumption}>Cadastrar</ButtonForm>
        </FormRelease>
      </ContainerMain> 
    </ContainerPage>
  )
}

export default MonthlyConsumption;