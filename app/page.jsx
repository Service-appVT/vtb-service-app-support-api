'use client'
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from './components/Logo'
import BtnApp from './components/BtnApp'
import Link from 'next/link'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
const navigation = [
  { name: 'Частным лицам', href: '#', current: true },
  { name: 'Самозанятым', href: '#', current: false },
  { name: 'Малый и средний бизнес', href: '#', current: false },
  { name: 'Крупный бизнес', href: '#', current: false },
  // { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className=" min-h-full">
        <Disclosure as="nav" className="bg-white fixed w-full z-50">
          {({ open }) => (
            <>
              <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center  justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      {/* <img
                        className="h-8 w-8"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                        alt="Your Company"
                      /> */}
                      <div className="h-8 w-8">
                      <Logo />
                      </div>
                    </div>
                    <div className=" hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="block">
                    <div className=" relative left-[90px] flex items-center  md:ml-6">
                      
                      {/* <button
                        type="button"
                        className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                      >
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                      </button> */}
                       <button
              type="button"
              className="flex text-btnVtb border-2 border-btnVtb  hover:bg-[#dde2ed]
              focus:ring-4 focus:outline-none focus:ring-blue-300 
              font-medium rounded-lg text-[14px] px-4 py-[5px] text-center 
             dark:bg-blue-600 dark:hover:bg-blue-700 
              dark:focus:ring-blue-800 h-[34px] w-[157px] "
            >
                 <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="text-btnVtb mr-2"
          >
            <path
              d="M10.3 7.7C9.91 8.09 9.91 8.71 10.3 9.1L12.2 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H12.2L10.3 14.9C9.91 15.29 9.91 15.91 10.3 16.3C10.69 16.69 11.31 16.69 11.7 16.3L15.29 12.71C15.68 12.32 15.68 11.69 15.29 11.3L11.7 7.7C11.31 7.31 10.69 7.31 10.3 7.7ZM20 19H13C12.45 19 12 19.45 12 20C12 20.55 12.45 21 13 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H13C12.45 3 12 3.45 12 4C12 4.55 12.45 5 13 5H20V19Z"
              fill="currentColor"
            ></path>
          </svg>
          <Link target="_blank" href='https://online.vtb.ru/login'>
              ВТБ ОНЛАЙН
          </Link>
            </button>


                      {/* Profile dropdown */}
                      {/* <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="absolute -inset-1.5" />
                            <span className="sr-only">Open user menu</span>
                            <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95"
                        >
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    className={classNames(
                                      active ? 'bg-gray-100' : '',
                                      'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                  >
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu> */}
                    </div>
                  </div>
    <div className="-mr-2 flex md:hidden">
      {/* Mobile menu button */}
      <Disclosure.Button className=" fixed top-[1000px] right-[20px] inline-flex 
      items-center justify-center rounded-md bg-white p-2 text-gray-400
        hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2
        focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
        <span className="absolute   -inset-0.5" />
        <span className="sr-only">Open main menu</span>
        {/* {open ? (
          <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
        ) : (
          <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
        )} */}
      </Disclosure.Button>
    </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                    </div>
                    <div className="ml-3">
                    </div>
                    <button
                      type="button"
                      className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    >
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <header className="bg-[#f3f7fa] pt-14">
          <div className="mx-auto  max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
              <Link target="blank" href='https://www.vtb.ru/personal/online-servisy/'>
            <p className="flex text-[12.5px] tracking-tight text-[#2e4598]">
            <svg class="" width="16px" height="16px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.1 16.91 15.1 16.28 14.71 15.89L10.83 12L14.71 8.12003C15.1 7.73003 15.1 7.10003 14.71 6.71003C14.32 6.32003 13.69 6.32003 13.3 6.71003L8.70998 11.3C8.31998 11.68 8.31998 12.32 8.70998 12.71Z" fill="currentColor"></path>
            </svg>
            &nbsp;Онлайн-Сервисы
              </p>
              </Link>
          </div>
        </header>
        <main className='bg-[#f3f7fa]'>
        <div className=" px-4 mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
{/* Your content */}
<h2 className='text-[#2F3441] leading-none text-[34px] w-[200px] tracking-[-3px] h-[68px]'>Приложение ВТБ Онлайн</h2>
<p className='text-[#2F3441] text-[14px] mt-1'>Финансовая суперсила твоего смартфона</p>
            </div>
            <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
{/* Your content */}
<BtnApp/>
            </div>
            <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
{/* Your content */}

            </div>
            <div className=" mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
{/* Your content */}

<div className=" bg-white mt-[400px] pl-5 pt-3 text-start text-black">
    <h2 className='text-[22px] cursor-pointer'>1000</h2>
    <span className=' text-[10px] text-[#606981] font-[300] '>Бесплатно с мобильного</span>
    <h2 className='text-[22px]  mt-[10px] cursor-pointer'>8(800)100-24-24</h2>
    <span className=' text-[10px] text-[#606981]'>Бесплатный звонок по России</span>
    <h2 className='text-[22px] mt-[2px] cursor-pointer'>8(495)785-53-05</h2>
    <span className=' text-[10px] text-[#606981]'>для звонков за пределами России</span>
</div>
<nav className=" bg-white">
            <ul className='text-start pt-5 '>
                <li className='text-[#0A2896] cursor-pointer mb-[16px] 
                pl-5 text-[14px] hover:text-btnVtb '>
                    <Link target="_blank" href='https://www.vtb.ru/about/offices/'>
                    Отделения и банкоматы
                    </Link>
                    </li>
                <li className='text-[#0A2896] cursor-pointer mb-[16px] 
                pl-5 text-[14px] hover:text-btnVtb '><Link target="_blank" href='https://www.vtb.ru/personal/platezhi-i-perevody/obmen-valjuty/'>
                    Курсы валют
                    </Link>
                    </li>
                <li className='text-[#0A2896] cursor-pointer  
                pl-5 text-[14px] hover:text-btnVtb '>
                    <Link target="_blank" href='https://www.vtb.ru/about/contacts/'>
                    Контакты
                    </Link>
                    </li>
            </ul>
        </nav>
        <nav className="bg-white pt-8 sm:mt-0">
  <ul className='flex flex-row sm:flex-row pl-5 mb-[15px]'>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/about/bank/'>
                    О банке
                    </Link>
                    </li>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/about/'>
                        О группе
                        </Link>
                        </li>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/about/bank/general/'>
                    Реквизиты
                    </Link>
                    </li>
                <li className='text-[14px] text-[#606981] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/akcii/'>
                    Акции и скидки
                    </Link>
                    </li>
            </ul>
            <ul className="flex pl-5 mb-[15px]">
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/tarify/'>
                    Тарифы и документы
                    </Link>
                    </li>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/about/press/'>
                    Пресс-служба
                    </Link>
                    </li>
            </ul>
            <ul className="flex pl-5 mb-[15px]">
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link  target="_blank" href='https://www.vtb.ru/ir/disclosure/'>
                    Раскрытие информации
                    </Link>
                    </li>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/about/bank/partners/'>
                    Партнерам
                    </Link>
                    </li>
            </ul>
            <ul className="flex pl-5 mb-[15px]">
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/about/bank/insurance/'>
                    Страховым компаниям
                    </Link>
                    </li>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/articles/'>
                    Статьи
                    </Link>
                    </li>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/personal/kredit/'>
                    Кредиты
                    </Link>
                    </li>
            </ul>
            <ul className="flex pl-5 mb-[15px]">
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/personal/karty/'>
                    Карты
                    </Link>
                    </li>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/personal/ipoteka/'>
                    Ипотека
                    </Link>
                    </li>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/personal/avtokredity/'>
                    Автокредиты
                    </Link>
                    </li>
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                    <Link target="_blank" href='https://www.vtb.ru/personal/vklady-i-scheta/'>
                    Вклады
                    </Link>
                    </li>
            </ul>
            <ul className="flex pl-5 ">
                <li className='text-[14px] text-[#606981] pr-[15px] cursor-pointer hover:text-btnVtb'>
                   <Link target="_blank" href='https://learn.vtb.ru/fingram/'>
                    Финансовая грамотность
                   </Link>
                    </li>
            </ul>
        </nav>

        <div className="bg-white pt-7 pl-5 flex flex-col md:flex-row md:mt-0">
  <div className="flex items-center mb-2 md:mb-0 md:mr-4">
    <span className="darkFooter"></span>
    <p className="text-[#0A2896] text-[14px] cursor-pointer hover:text-btnVtb">Темная тема</p>
  </div>
  <div className="flex pl-2 items-center">
    <span className="flagFooter mr-2 cursor-pointer"></span>
    <p className="text-[#0A2896] text-[14px] cursor-pointer hover:text-btnVtb">English</p>
  </div>
<div className="bg-white border-b-[1px] w-full mt-4"></div>
</div>
{/* three footer */}
<section className="bg-white flex flex-col items-center md:flex-row ml-2 
md:ml-[200px] space-y-6 md:space-y-0 md:space-x-6">
  <div className="text-center">
      <Link href='/'>
    <div className="flex border mt-11 p-6 w-[342px] h-[87px] rounded-[10px]">
    <svg
      className=""
      width="38px"
      height="38px"
      viewBox="0 0 56 56"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 21.4261C0 13.9263 0 10.1763 1.45956 7.31178C2.74343 4.79204 4.79204 2.74343 7.31178 1.45956C10.1763 0 13.9263 0 21.4261 0H34.5739C42.0737 0 45.8237 0 48.6882 1.45956C51.208 2.74343 53.2566 4.79204 54.5404 7.31178C56 10.1763 56 13.9263 56 21.4261V34.5739C56 42.0737 56 45.8237 54.5404 48.6882C53.2566 51.208 51.208 53.2566 48.6882 54.5404C45.8237 56 42.0737 56 34.5739 56H21.4261C13.9263 56 10.1763 56 7.31178 54.5404C4.79204 53.2566 2.74343 51.208 1.45956 48.6882C0 45.8237 0 42.0737 0 34.5739V21.4261Z" fill="url(#footer-blocks-applications__paint_linear_app-9327)"></path><path d="M45.043 17.6521H18.7158L16.8162 22.826H43.1434L45.043 17.6521Z" fill="white"></path><path d="M42.4182 25.4128H16.0909L14.1913 30.5868H40.52L42.4182 25.4128Z" fill="white"></path><path d="M39.1355 33.1738H13.4205L11.5651 38.3477H37.28L39.1355 33.1738Z" fill="white"></path><defs><linearGradient id="footer-blocks-applications__paint_linear_app-9327" x1="0" y1="28" x2="56" y2="28" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#0037FF"></stop><stop offset="0.75" stopColor="#0085FF"></stop></linearGradient></defs>
      </svg>

    <div className=" text-black pl-4 ">
      <h2 className="text-[22px] mt-[-5px] md:text-[32px] ">ВТБ Онлайн</h2>
      <p className="text-[10px] mt-[-5px] md:text-[14px]">Банк там, где вам удобно</p>
    </div>
    </div>
    </Link>
    <Link
    target="_blank"
      href="https://www.vtb.ru/personal/online-servisy/"
      className="flex mt-4 md:mt-6 text-[14px] md:text-[14px] text-[#0A2896] hover:text-btnVtb"
    >
      Все приложения банка
      <svg
              width="16px"
              height="22px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00707 8.41421L14.9055 16.3126H7.00409C6.45255 16.3126 6 16.7651 6 17.3167C6 17.8682 6.44548 18.3137 6.99702 18.3137L17.3167 18.3137C17.8682 18.3137 18.3137 17.8682 18.3137 17.3167L18.3278 6.99702C18.3278 6.44548 17.8824 6 17.3308 6C16.7793 6 16.3338 6.44548 16.3338 6.99702L16.3197 14.8984L8.42128 7C8.03237 6.61109 7.39598 6.61109 7.00707 7C6.61816 7.38891 6.61816 8.0253 7.00707 8.41421Z"
                fill="currentColor"
              ></path>
            </svg>
    </Link>
  </div>
  <div className="mt-6 ml-[-115px] md:mt-0 text-center">
    <ul className="text-[14px] text-[#606981]">
      <li className="flex hover:text-btnVtb cursor-pointer mb-4">
      <svg className='mr-[7px] pt-[3px]' width="28px" height="28px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M2.00401 22L3.35601 17.032C2.46515 15.5049 1.99711 13.768 2.00001 12C2.00001 6.477 6.47701 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C10.2328 22.0029 8.49667 21.5352 6.97001 20.645L2.00401 22ZM8.39101 7.308C8.26188 7.31602 8.13569 7.35003 8.02001 7.408C7.91153 7.46943 7.81251 7.54622 7.72601 7.636C7.60601 7.749 7.53801 7.847 7.46501 7.942C7.09542 8.423 6.89662 9.01342 6.90001 9.62C6.90201 10.11 7.03001 10.587 7.23001 11.033C7.63901 11.935 8.31201 12.89 9.20101 13.775C9.41501 13.988 9.62401 14.202 9.84901 14.401C10.9524 15.3725 12.2673 16.073 13.689 16.447L14.258 16.534C14.443 16.544 14.628 16.53 14.814 16.521C15.1053 16.506 15.3896 16.4271 15.647 16.29C15.813 16.202 15.891 16.158 16.03 16.07C16.03 16.07 16.073 16.042 16.155 15.98C16.29 15.88 16.373 15.809 16.485 15.692C16.568 15.606 16.64 15.505 16.695 15.39C16.773 15.227 16.851 14.916 16.883 14.657C16.907 14.459 16.9 14.351 16.897 14.284C16.893 14.177 16.804 14.066 16.707 14.019L16.125 13.758C16.125 13.758 15.255 13.379 14.724 13.137C14.668 13.1126 14.608 13.0987 14.547 13.096C14.4786 13.089 14.4095 13.0967 14.3443 13.1186C14.2791 13.1405 14.2193 13.1761 14.169 13.223V13.221C14.164 13.221 14.097 13.278 13.374 14.154C13.3325 14.2098 13.2754 14.2519 13.2098 14.2751C13.1443 14.2982 13.0733 14.3013 13.006 14.284C12.9409 14.2666 12.877 14.2445 12.815 14.218C12.691 14.166 12.648 14.146 12.563 14.109L12.558 14.107C11.9859 13.8572 11.4562 13.5198 10.988 13.107C10.862 12.997 10.745 12.877 10.625 12.761C10.2316 12.3842 9.88873 11.958 9.60501 11.493L9.54601 11.398C9.50364 11.3342 9.46937 11.2653 9.44401 11.193C9.40601 11.046 9.50501 10.928 9.50501 10.928C9.50501 10.928 9.74801 10.662 9.86101 10.518C9.9551 10.3983 10.0429 10.2738 10.124 10.145C10.242 9.955 10.279 9.76 10.217 9.609C9.93701 8.925 9.64701 8.244 9.34901 7.568C9.29001 7.434 9.11501 7.338 8.95601 7.319C8.90201 7.313 8.84801 7.307 8.79401 7.303C8.65972 7.29633 8.52515 7.29766 8.39101 7.307V7.308Z"
        fill="currentColor"></path>
        </svg>
        <Link target="_blank" href="https://api.whatsapp.com/send/?phone=%2B74957772424&text&type=phone_number&app_absent=0">
          Помощник ВТБ в WhatsApp
        </Link>
      </li>
      <li className="flex hover:text-btnVtb cursor-pointer mb-4">
      <svg className='mr-[7px] pt-[3px]' width="28px" height="28px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM16.7688 8.50284C16.8555 7.52019 15.8151 7.92481 15.8151 7.92481C15.0468 8.242 14.2544 8.56434 13.4535 8.89016C10.9704 9.90033 8.40502 10.944 6.2197 11.9711C5.03473 12.4046 5.72837 12.8381 5.72837 12.8381L7.60699 13.4161C8.47404 13.6763 8.93647 13.3872 8.93647 13.3872L12.9827 10.6416C14.4278 9.65891 14.081 10.4682 13.7342 10.815L10.6995 13.7052C10.237 14.1098 10.4683 14.4566 10.6706 14.63C11.2439 15.1345 12.6542 16.0575 13.27 16.4606C13.4304 16.5655 13.5369 16.6352 13.5607 16.6531C13.7053 16.7687 14.4856 17.289 15.0058 17.1734C15.5261 17.0578 15.5839 16.393 15.5839 16.393L16.2775 11.8554C16.3816 11.0676 16.5009 10.3104 16.5962 9.7056C16.6862 9.1345 16.7548 8.69936 16.7688 8.50284Z" fill="currentColor"></path>
        </svg>
        <Link target="_blank" href="https://t.me/vtd_help_bot">
          Помощник ВТБ в Телеграме
        </Link>
      </li>
      <li className="flex hover:text-btnVtb cursor-pointer mb-4">
      <svg className='mr-[7px] pt-[3px]' width="28px" height="28px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M19.7423 3.95064C19.2183 3.49208 17.1005 2.03416 12.3834 2.01435C12.3834 2.01435 6.82062 1.69624 4.10887 4.05508C2.59935 5.48689 2.06833 7.58193 2.01232 10.1794C1.95631 12.7768 1.88384 17.6445 6.8317 18.9644H6.83645L6.83328 20.9784C6.83328 20.9784 6.80163 21.7938 7.36778 21.96C7.93931 22.1283 8.31379 21.7246 8.80209 21.198C8.89888 21.0937 9.00015 20.9845 9.10832 20.8739C9.46718 20.5072 9.96276 19.9685 10.3362 19.5568C13.7201 19.8269 16.3227 19.2096 16.6182 19.1183C16.6792 19.0996 16.7656 19.0787 16.8728 19.0529C17.9661 18.7893 21.2238 18.0037 21.7965 13.5712C22.4456 8.55428 21.4826 5.38095 19.7423 3.95064ZM18.7012 4.96422C18.2581 4.58249 16.3457 3.44298 12.3555 3.42648C12.3555 3.42648 7.63072 3.13207 5.33702 5.10227C4.0601 6.2976 3.63003 8.07513 3.58224 10.2446C3.58067 10.3159 3.57889 10.3894 3.57706 10.4648C3.52322 12.6832 3.42832 16.5936 7.47471 17.6596C7.47471 17.6596 7.45857 20.736 7.45635 21.0064C7.45635 21.1955 7.488 21.3248 7.60193 21.3515C7.68421 21.3704 7.80668 21.3302 7.91142 21.2315C8.58011 20.5944 10.7219 18.144 10.7219 18.144C13.596 18.322 15.8821 17.7839 16.128 17.7076C16.1855 17.6902 16.2683 17.6719 16.3712 17.6492L16.3713 17.6491C17.304 17.4431 19.8936 16.8712 20.3727 13.2112C20.9243 9.01986 20.1733 6.15955 18.7012 4.96422ZM17.0952 11.2733C17.0248 11.2732 16.9572 11.2468 16.9073 11.1998C16.8573 11.1527 16.829 11.0889 16.8284 11.0221C16.816 9.47569 16.3464 8.29447 15.3926 7.41156C14.4502 6.54125 13.2596 6.09469 11.8536 6.08508C11.8186 6.08497 11.7839 6.07831 11.7516 6.06548C11.7193 6.05266 11.6899 6.03393 11.6652 6.01035C11.6154 5.96274 11.5875 5.89829 11.5878 5.83119C11.588 5.7641 11.6164 5.69984 11.6666 5.65257C11.7168 5.60529 11.7847 5.57887 11.8555 5.5791H11.8577C13.4058 5.58991 14.7204 6.08448 15.7651 7.04963C16.8097 8.01477 17.3483 9.35264 17.3623 11.0191C17.3628 11.0862 17.3352 11.1507 17.2856 11.1985C17.236 11.2462 17.1684 11.2734 17.0977 11.2739L17.0952 11.2733ZM15.6879 10.7541H15.6942C15.764 10.754 15.831 10.728 15.8808 10.6816C15.9306 10.6352 15.9593 10.5721 15.9607 10.506C15.9841 9.51831 15.6654 8.67742 15.0246 8.01268C14.3837 7.34795 13.4825 6.97072 12.3454 6.89179C12.2747 6.88689 12.2049 6.90882 12.1513 6.95275C12.0977 6.99668 12.0646 7.059 12.0595 7.12602C12.0543 7.19304 12.0774 7.25926 12.1238 7.3101C12.1701 7.36095 12.2358 7.39227 12.3065 7.39717C13.3169 7.46739 14.0749 7.7795 14.6312 8.3551C15.1875 8.93071 15.448 9.63085 15.4274 10.4955C15.4258 10.5625 15.4523 10.6274 15.5012 10.6759C15.55 10.7244 15.6172 10.7526 15.6879 10.7541ZM14.1415 10.2494C14.191 10.2941 14.2568 10.319 14.3251 10.319H14.3384C14.3734 10.3173 14.4077 10.3092 14.4394 10.2949C14.471 10.2807 14.4994 10.2607 14.5229 10.2361C14.5464 10.2114 14.5646 10.1826 14.5764 10.1514C14.5882 10.1201 14.5933 10.0869 14.5916 10.0537C14.5327 8.93249 13.8941 8.31037 12.7454 8.25035C12.6758 8.24846 12.6082 8.27241 12.557 8.3171C12.5058 8.3618 12.4751 8.42369 12.4713 8.48958C12.4676 8.55547 12.4911 8.62014 12.5369 8.66981C12.5827 8.71947 12.6472 8.7502 12.7166 8.75543C13.5871 8.79985 14.0137 9.2203 14.059 10.0789C14.0624 10.1437 14.0919 10.2047 14.1415 10.2494ZM13.3606 13.2486C13.1587 13.4845 12.7837 13.4545 12.7837 13.4545C10.0428 12.791 9.30929 10.1581 9.30929 10.1581C9.30929 10.1581 9.27638 9.8025 9.52638 9.61103L10.0216 9.2377C10.2672 9.05824 10.4239 8.62278 10.1739 8.19753C9.98211 7.87833 9.77361 7.56843 9.54917 7.269C9.33113 6.9866 8.82321 6.4083 8.82131 6.4065C8.57637 6.1325 8.21624 6.06888 7.83648 6.25644C7.83534 6.25644 7.83376 6.25693 7.83225 6.25739L7.83224 6.25739C7.83084 6.25783 7.82949 6.25824 7.82857 6.25824C7.45087 6.46462 7.1103 6.7268 6.8197 7.03492C6.81871 7.0368 6.81772 7.0377 6.81672 7.0386C6.81582 7.03942 6.81491 7.04024 6.814 7.04182C6.5794 7.31032 6.44511 7.57351 6.41115 7.8314C6.40409 7.86943 6.40165 7.90809 6.40387 7.94664C6.40261 8.06053 6.42088 8.17384 6.45798 8.28216L6.47096 8.29057C6.58931 8.68911 6.88552 9.35294 7.5292 10.4597C7.89738 11.0999 8.322 11.7094 8.79852 12.2817C9.03727 12.5686 9.29318 12.8422 9.56499 13.1013L9.57475 13.1106L9.57479 13.1106C9.58121 13.1168 9.58759 13.1229 9.59411 13.1289L9.62322 13.1565L9.65234 13.1841L9.68145 13.2117C9.95464 13.4695 10.2432 13.7122 10.5457 13.9386C11.1492 14.3905 11.7921 14.7932 12.4673 15.1423C13.634 15.7527 14.3347 16.0336 14.7543 16.1459L14.7632 16.1582C14.8774 16.1934 14.9969 16.2109 15.117 16.2098C15.1576 16.2116 15.1984 16.2092 15.2385 16.2026C15.5109 16.172 15.7882 16.0448 16.0705 15.8211C16.0721 15.8203 16.073 15.8194 16.0739 15.8186C16.0748 15.8176 16.0758 15.8167 16.0778 15.8157C16.4027 15.5401 16.6792 15.2171 16.8971 14.859L16.8972 14.8577L16.8978 14.8555L16.8978 14.8555C16.8982 14.8541 16.8987 14.8526 16.8987 14.8515C17.0964 14.4914 17.0294 14.1498 16.7388 13.9173C16.7385 13.9173 16.7148 13.8988 16.6747 13.8674L16.6746 13.8674C16.51 13.7387 16.0688 13.394 15.8293 13.227C15.5139 13.0142 15.1874 12.8165 14.8512 12.6346C14.4024 12.3975 13.9442 12.5461 13.7543 12.779L13.3606 13.2486Z" fill="currentColor"></path>
        </svg>
        <Link target="_blank" href="https://invite.viber.com/?g2=AQB9kvP34f%2BPn0lbH0MH%2BLXzBarvvRi%2FJ8KWVUQEDttzzBQczdHXoDgyiS11zLEA&lang=ru">
          Помощник ВТБ в Viber
        </Link>
      </li>
      <li className="flex hover:text-btnVtb cursor-pointer mb-4">
      <svg className='mr-[7px] pt-[3px]' width="28px" height="28px" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C4.47713 20 0 15.5229 0 10C0 4.47713 4.47713 0 10 0C15.5229 0 20 4.47713 20 10C20 15.5229 15.5229 20 10 20ZM5.421 13.2275C6.1388 13.9418 8.0512 14.3708 10 14.3783C11.9488 14.3708 13.8612 13.9419 14.579 13.2275C16.3627 11.4526 12.027 4.653 10.0021 4.64313C7.973 4.65293 3.63733 11.4526 5.421 13.2275Z" 
                fill="currentColor"></path></svg>
        <Link target="_blank"  href="https://dialogs.yandex.ru/store/skills/09e0eca4-testirovanie-vtb">
          Помощник ВТБ в Алисе
        </Link>
      </li>
    </ul>
  </div>
  <div className="mt-6 md:mt-0 text-center">
    <p className="text-[14px] md:text-[18px] text-[#2f3441]">© ВТБ, 2023</p>
    <p className="text-[14px] md:text-[18px] text-[#2f3441] mb-2">
      Генеральная лицензия Банка России №1000
    </p>
    <p className="text-[14px] md:text-[18px] mb-10 text-[#2f3441]">
      Действует с 25 февраля 2019 года
    </p>
  </div>
</section>

            </div>
            <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
{/* Your content */}



            </div>

        </main>
      </div>
    </>
  )
}
