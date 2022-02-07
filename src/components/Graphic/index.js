import React from 'react';
//Libraries
import { Line } from 'react-chartjs-2';
//Styles
import { 
    ContainerGraphic
} from './styles';

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
    },
    title: {
      display: true,
      text: 'Consumo mensal ',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agosto'];
export const data = {
  labels,
  datasets: [
    {
      label: 'Total de energia',
      data: [],
      borderColor: '#4C5DF1',
      backgroundColor: '#4C5DF1',
    },
  ],
};

const Graphic = () => {
  return (
      <ContainerGraphic>
        {/* <Line options={options} data={data} />; */}
      </ContainerGraphic>
  );
}

export default Graphic;