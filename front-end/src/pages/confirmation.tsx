import { ServiceContext } from '@/context/serviceContext'
import { Service } from '@/interfaces';
import { useContext } from 'react';


export default function Services() {
  const { payload } = useContext(ServiceContext)

  const { name, cpf, email, car, service, parts, orderDate } = payload as Service
  
  const convertDate = (date: Date) => {
    let month = "" + (date.getMonth() + 1);
    let day = "" + date.getDate();
    const year = date.getFullYear();
  
    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;
  
    return [day, month, year].join("/");
  };

  return (
    <div className='h-screen flex flex-col items-center justify-center font-bold'>
      <ul className='bg-[#202b57] text-white rounded-2xl
        h-[40%] w-[30%] flex flex-col items-center justify-center'>
        <li className='mt-2'>{name}</li>
        <li className='mt-2'>{cpf}</li>
        <li className='mt-2'>{email}</li>
        <li className='mt-2'>{car}</li>
        <li className='mt-2'>{service}</li>
        <li className='mt-2'>{parts ? parts : 'sem peças extras'}</li>
        <li className='mt-2'>{orderDate ? convertDate(orderDate) : ''}</li>
      </ul>
    </div>
  );
}
