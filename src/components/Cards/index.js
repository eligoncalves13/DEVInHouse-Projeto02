import React from 'react';
//Styles
import { 
  CardItem 
} from './styles';

function Cards({title, amount}) {
  return (
    <CardItem>
      <h2>{title}</h2>
      <span>{amount}</span>
    </CardItem>
  );
}
export default Cards;