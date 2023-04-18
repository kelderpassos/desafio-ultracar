import { ServiceContext } from '@/context/serviceContext'
import { Service } from '@/interfaces';
import { useContext } from 'react';


export default function Services() {
  const { payload, sendService } = useContext(ServiceContext)

  const { name, cpf, email, car, service, parts, orderDate } = payload as Service
  
  const convertDate = (date: Date) => {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    const year = date.getFullYear();
  
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
  
    return [day, month, year].join("/");
  };

  console.log(typeof orderDate);
  
  
  const teste = orderDate ? convertDate(orderDate) : ''
  console.log(teste);

  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{cpf}</li>
        <li>{email}</li>
        <li>{car}</li>
        <li>{service}</li>
        <li>{parts ? parts : 'sem peças extras'}</li>
        <li>{orderDate ? convertDate(orderDate) : ''}</li>
        <li>{}</li>
      </ul>
    </div>
  );
}
