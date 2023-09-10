import Link from 'next/link';
import React from 'react';

export default function TitleInfoISO() {
  return (
    <>
      <div className='lg:absolute lg:left-[-120px] text-left ml-5 mt-[-180px]'>
        <p className='text-[#606981] text-[14px] mb-4 pr-[190px]'>Установка приложения</p>
        <div className='lg:mt-[-27px] lg:ml-[370px] text-[18px] w-full lg:w-[600px] h-auto lg:h-[44px]'>
          <div className='lg:ml-[250px] lg:w-[600px] mb-10 pr-2'>
            <p className='lg:mb-[9px] text-black text-[14px] mb-2'>Приложение ВТБ Онлайн недоступно для скачивания и обновления в магазине App Store.</p>
            <p className='text-black text-[14px]'>Воспользуйтесь веб-версией – она такая же, как приложение, только удобнее: ее не надо скачивать и обновлять.</p>
          </div>
          <div className='border-b-[1px] lg:mt-[75px] w-full lg:w-[1180px] lg:ml-[-320px] text-lineVtb'></div>
        </div>
      </div>
      <div className=' lg:mt-[240px] mt-6 w-full h-auto lg:h-[100px] lg:relative lg:left-[-65px] '>
        <p className='text-start  ml-4 mb-2 text-[#606981] text-[14px]'>Как добавить ВТБ Онлайн на стартовый экран <br/> телефона</p>
        <ol className='lg:ml-[98px] pl-4 text-black text-[14px]'>
          <li className='mb-[10px] text-[14px]'>1.&nbsp; В браузере Safari перейти по <Link href='https://online.vtb.ru/login' className='text-border_blue hover:text-btnVtb'>ссылке.</Link></li>
          <li className='mb-[10px] text-[14px] lg:w-[550px]'>2.&nbsp; В нижнем меню нажмите на иконку «Поделиться», &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;а затем выберите «Добавить на экран Домой»</li>
          <li className='mb-[10px] text-[14px]'>3.&nbsp; Нажмите «Добавить». Иконка появится на экране &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;смартфона.</li>
          <li className='mb-[10px] text-[14px] border-l-4 rounded pl-3 border-[#19AEDE] text-[#19AEDE]'>
            Подключите вход по биометрии, и вы сможете входить в ВТБ Онлайн за 1 клик.</li>
        </ol>
      </div>
    </>
  );
}