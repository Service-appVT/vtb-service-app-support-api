import Link from "next/link";

export default function TitleInfoAndroid() {
  return (
    <>
      <div className="text-center mb-4 mt-[-180px] ">
        <p className="text-[#606981] text-[14px] pr-[190px]">Установка приложения</p>
        <div className="mt-[10px]  max-w-[600px]">
          <p className="text-black  text-[14px] ">
            Установите ВТБ Онлайн через магазин приложений <br/>или с сайта ВТБ – по нашей инструкции.
          </p>
          <div className="border-b-[1px] mt-[40px]  border-lineVtb"></div>
        </div>
      </div>
      <div className="mt-5 ">
        <p className="text-[14px] mb-3 text-[#606981]">Скачать приложение</p>
        <ul className="lg:ml-0 text-[14px]">
          <li className="flex text-[#26469f] mb-1 cursor-pointer lg:mb-8 hover:text-btnVtb">
            <Link target="_blank" href='https://www.vtb.ru/personal/online-servisy/vtb-online-android/'>
              Установить по инструкции с сайта
            </Link>
            <svg
              width="18px"
              height="20px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00707 8.41421L14.9055 16.3126H7.00409C6.45255 16.3126 6 16.7651 6 17.3167C6 17.8682 6.44548 18.3137 6.99702 18.3137L17.3167 18.3137C17.8682 18.3137 18.3137 17.8682 18.3137 17.3167L18.3278 6.99702C18.3278 6.44548 17.8824 6 17.3308 6C16.7793 6 16.3338 6.44548 16.3338 6.99702L16.3197 14.8984L8.42128 7C8.03237 6.61109 7.39598 6.61109 7.00707 7C6.61816 7.38891 6.61816 8.0253 7.00707 8.41421Z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
          <li className="flex mb-1 text-[#26469f] cursor-pointer  lg:mb-8 hover:text-btnVtb">
            <Link target="_blank" href='https://galaxystore.samsung.com/error/4002?cc=UKR'>
              Galaxy Store
            </Link>
            <svg
              width="18px"
              height="20px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00707 8.41421L14.9055 16.3126H7.00409C6.45255 16.3126 6 16.7651 6 17.3167C6 17.8682 6.44548 18.3137 6.99702 18.3137L17.3167 18.3137C17.8682 18.3137 18.3137 17.8682 18.3137 17.3167L18.3278 6.99702C18.3278 6.44548 17.8824 6 17.3308 6C16.7793 6 16.3338 6.44548 16.3338 6.99702L16.3197 14.8984L8.42128 7C8.03237 6.61109 7.39598 6.61109 7.00707 7C6.61816 7.38891 6.61816 8.0253 7.00707 8.41421Z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
          <li className="flex mb-1 text-[#26469f] cursor-pointer  lg:mb-8 hover:text-btnVtb">
            <Link target="_blank" href='https://appgallery.huawei.com/app/C102312137'>
              AppGallery
            </Link>
            <svg
              width="18px"
              height="20px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00707 8.41421L14.9055 16.3126H7.00409C6.45255 16.3126 6 16.7651 6 17.3167C6 17.8682 6.44548 18.3137 6.99702 18.3137L17.3167 18.3137C17.8682 18.3137 18.3137 17.8682 18.3137 17.3167L18.3278 6.99702C18.3278 6.44548 17.8824 6 17.3308 6C16.7793 6 16.3338 6.44548 16.3338 6.99702L16.3197 14.8984L8.42128 7C8.03237 6.61109 7.39598 6.61109 7.00707 7C6.61816 7.38891 6.61816 8.0253 7.00707 8.41421Z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
          <li className="flex  text-[#26469f] cursor-pointer hover:text-btnVtb">
            <Link target="_blank" href='https://apps.rustore.ru/app/ru.vtb24.mobilebanking.android'>
              RuStore
            </Link>
            <svg
             width="18px"
             height="20px"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00707 8.41421L14.9055 16.3126H7.00409C6.45255 16.3126 6 16.7651 6 17.3167C6 17.8682 6.44548 18.3137 6.99702 18.3137L17.3167 18.3137C17.8682 18.3137 18.3137 17.8682 18.3137 17.3167L18.3278 6.99702C18.3278 6.44548 17.8824 6 17.3308 6C16.7793 6 16.3338 6.44548 16.3338 6.99702L16.3197 14.8984L8.42128 7C8.03237 6.61109 7.39598 6.61109 7.00707 7C6.61816 7.38891 6.61816 8.0253 7.00707 8.41421Z"
                fill="currentColor"
              ></path>
            </svg>
          </li>
        </ul>
      </div>
    </>
  );
}
