"use client";

import { useState } from "react";
import TitleInfoAndroid from "./TitleInfoAndroid";
import TitleInfoISO from "./TitleInfoISO";
import TitleInfoRuSdesk from "./TitleInfoRuSdesk";

function BtnApp() {
  const [activeButton, setActiveButton] = useState(null); // Изменено: начальное значение null
  const [showComponent, setShowComponent] = useState(true);
  const [showComponentSupport, setShowComponentSupport] = useState(false);
  const [showComponentANDROED, setShowComponentANDROED] = useState(false);

  const handleAddComponent = () => {
    setActiveButton(1);
    setShowComponent(true);
    setShowComponentANDROED(false); // Изменено: скрываем другие компоненты
    setShowComponentSupport(false);
  };

  const handleAddComponentTWO = () => {
    setActiveButton(2);
    setShowComponentANDROED(true);
    setShowComponent(false); // Изменено: скрываем другие компоненты
    setShowComponentSupport(false);
  };

  const handleAddComponentTre = () => {
    setActiveButton(3);
    setShowComponentSupport(true);
    setShowComponent(false); // Изменено: скрываем другие компоненты
    setShowComponentANDROED(false);
  };

  return (
    <div className="flex  justify-center ">
      <div className="flex ">
        <button
          className={`border-[1px] mr-2 border-[#b6b8bd] text-[#606981] 
          p-3 rounded-[8px] w-[120px] h-[59px] 
          hover:border-[#30498f] hover:border-[4px]
          ${
            activeButton === 1 ? 'border-[4px] border-[#30498f]' : 'border-[#b6b8bd]'
          }
          `}
          onClick={handleAddComponent}
        >
          Android
        </button>
        <button
          className={`border-[1px]  mr-2 border-[#b6b8bd] text-[#606981] 
             rounded-[8px] w-[75px]
            h-[59px] transition-all duration-300
            hover:border-[#30498f] hover:border-[4px]
            ${
              activeButton === 2 ? 'border-[4px] border-[#30498f]' : 'border-[#b6b8bd]'
            }
          
          `}
          onClick={handleAddComponentTWO}
        >
          IOS
        </button>
        <div
          className={`border-highlight  rounded-[8px] ${
            activeButton === 2 ? "right" : "left"
          }`}
        />
      <button
        onClick={handleAddComponentTre}
        className={`border  text-[#606981] border-[#b6b8bd]
          rounded-[8px] w-[150px] h-[59px]
          hover:border-[#30498f] hover:border-[4px]
          ${
            activeButton === 3 ? 'border-[4px] border-[#30498f]' : 'border-[#b6b8bd]'
          }
          `
        }
      >
        Поддержка ВТБ
      </button>
      </div>
      <div className="absolute top-[540px]">
        {showComponent && <TitleInfoAndroid />}
        {showComponentANDROED && <TitleInfoISO />}
        {showComponentSupport && <TitleInfoRuSdesk />}
      </div>
    </div>
  );
}

export default BtnApp;