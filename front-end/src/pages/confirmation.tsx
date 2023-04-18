import { useContext } from 'react';
import { ServiceContext } from '@/context/serviceContext'
import { Service } from '@/interfaces';
import { convertDate } from '@/utils/indext';


export default function Services() {
  const { payload } = useContext(ServiceContext)

  const { name, cpf, email, car, service, parts, orderDate } = payload as Service
  
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
