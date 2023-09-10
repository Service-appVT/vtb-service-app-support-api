import Link from "next/link";

export default function ButtonVTB() {
  return (
    <>
      <Link target="_blank" href="https://online.vtb.ru/login">
        <button
          className="lg:relative top-[-21px] lg:flex md:flex md:w-[153px] md:mt-[5px] sm:flex sm:w-[153px] sm:mt-[5px] border-2 border-btnVtb 
    md:h-[33.2px] rounded-[8px] tracking-[-0.4px] hover:bg-[#dde2ed]"
        >
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="text-btnVtb m-1"
          >
            <path
              d="M10.3 7.7C9.91 8.09 9.91 8.71 10.3 9.1L12.2 11H3C2.45 11 2 11.45 2 12C2 12.55 2.45 13 3 13H12.2L10.3 14.9C9.91 15.29 9.91 15.91 10.3 16.3C10.69 16.69 11.31 16.69 11.7 16.3L15.29 12.71C15.68 12.32 15.68 11.69 15.29 11.3L11.7 7.7C11.31 7.31 10.69 7.31 10.3 7.7ZM20 19H13C12.45 19 12 19.45 12 20C12 20.55 12.45 21 13 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3H13C12.45 3 12 3.45 12 4C12 4.55 12.45 5 13 5H20V19Z"
              fill="currentColor"
            ></path>
          </svg>
          <span className="text-btnVtb w-[110.3px] h-[21.6px]  text-[18px] pt-[1px]">
            ВТБ ОНЛАЙН
          </span>
        </button>
      </Link>
    </>
  );
}