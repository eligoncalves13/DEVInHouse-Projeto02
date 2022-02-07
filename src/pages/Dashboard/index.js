import React, { useEffect, useState } from 'react';
//Libraries
import BigNumber from "bignumber.js";
//Json server
import UnitsService from '../../services/UnitsService';
import ConsumptionService from '../../services/ConsumptionService';
//Components
import ContainerPage from '../../components/ContainerPage';
import ContainerMain from '../../components/ContainerMain';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Cards from '../../components/Cards';
import Graphic from '../../components/Graphic';
//Styles
import {
  ContainerCards, 
} from './styles';

const Dashboard = () => {

  const [units, setUnits] = useState([]);
  const [active, setActive] = useState([]);
  const [inactive, setInactive] = useState([]);
  const [averageEnergy, setAverageEnergy] = useState([]);

  useEffect(() => {
    getUnits();
    getEnergy();
    getActives();
    getInactive();
  }, []);
 
  const getUnits = () => {
      UnitsService.getAll()
      .then((response) => {
        setUnits(response.data)
      })
    }
   
    const getActives = () => {
        UnitsService.getAll()
        .then((response) => {
          const unitsFilter = response.data.filter(
          (units) => units.active === true
          )
          setActive(unitsFilter)
        })
      }

      const getInactive = () => {
          UnitsService.getAll()
          .then((response) => {
            const unitsFilter = response.data.filter(
            (units) => units.active === false
            )
            setInactive(unitsFilter)
          })
        }
       
        const getEnergy = () => {
            ConsumptionService.getAll()
            .then((response) => {
              const BigNumber = require('bignumber.js');
              const unitsFilter = response.data.map(units => 
              parseFloat(units.kw)).reduce((a, units) => 
              ((units + a)))
              const avarage = BigNumber((unitsFilter/units.length)).toFixed(1)
              setAverageEnergy(avarage)
            })
          }

  return (
    <ContainerPage>
      <Menu/>
      <Header
        title="Dashbord"/>
      <ContainerMain>
        <ContainerCards>
          <Cards
            title="Total unidades"
            amount={units.length}
          />
          <Cards
            title="Unidades Ativas"
            amount={active.length}
          />
          <Cards
            title="Unidades inativas"
            amount={inactive.length}
          />
          <Cards
            title="Media de energia"
            amount={averageEnergy}
          />
          
        </ContainerCards>
        <Graphic>

        </Graphic>
      </ContainerMain>
    </ContainerPage>
  );
}

export default Dashboard;