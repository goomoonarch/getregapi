/* eslint-disable react/prop-types */
import { useState } from "react";
import { copyFunction } from "../utils";

export const UserBar = ({ userInfo }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    copyFunction(userInfo);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2500); // Cambiar a la duración deseada en milisegundos
  };

  return (
    <div className="flex items-center justify-center w-[358] mb-[18px]">
      <div className="flex items-center justify-start bg-[#EFEFEF] w-[314px] h-[40px] rounded-[4px]">
        <div className="pl-[14px] pr-[24px]">
          <svg
            width="24"
            height="19"
            viewBox="0 0 24 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.15578 18.5025H20.5427C22.6533 18.5025 23.6985 17.4673 23.6985 15.3969V3.11557C23.6985 1.04523 22.6533 0 20.5427 0H3.15578C1.05528 0 0 1.04523 0 3.11557V15.3969C0 17.4673 1.05528 18.5025 3.15578 18.5025ZM3.17587 16.8844C2.17085 16.8844 1.61809 16.3517 1.61809 15.3066V3.20603C1.61809 2.1608 2.17085 1.61809 3.17587 1.61809H20.5226C21.5175 1.61809 22.0804 2.1608 22.0804 3.20603V15.3066C22.0804 16.3517 21.5175 16.8844 20.5226 16.8844H3.17587Z"
              fill="#292929"
              fillOpacity="0.85"
            />
            <path
              d="M14.2211 5.9397H19.7086C20.0603 5.9397 20.3317 5.66835 20.3317 5.31659C20.3317 4.97488 20.0603 4.70353 19.7086 4.70353H14.2211C13.8594 4.70353 13.588 4.97488 13.588 5.31659C13.588 5.66835 13.8594 5.9397 14.2211 5.9397ZM14.2211 9.87937H19.7086C20.0603 9.87937 20.3317 9.59799 20.3317 9.24619C20.3317 8.90451 20.0603 8.6432 19.7086 8.6432H14.2211C13.8594 8.6432 13.588 8.90451 13.588 9.24619C13.588 9.59799 13.8594 9.87937 14.2211 9.87937ZM14.2211 13.8091H19.7086C20.0603 13.8091 20.3317 13.5478 20.3317 13.206C20.3317 12.8543 20.0603 12.5729 19.7086 12.5729H14.2211C13.8594 12.5729 13.588 12.8543 13.588 13.206C13.588 13.5478 13.8594 13.8091 14.2211 13.8091ZM3.7488 13.8091H11.598C11.9297 13.8091 12.0905 13.588 12.0905 13.2864C12.0905 12.3417 10.6734 9.90956 7.6684 9.90956C4.66338 9.90956 3.25635 12.3417 3.25635 13.2864C3.25635 13.588 3.41715 13.8091 3.7488 13.8091ZM7.6684 9.20605C8.89453 9.21609 9.86939 8.1809 9.86939 6.80402C9.86939 5.51759 8.89453 4.45227 7.6684 4.45227C6.45232 4.45227 5.4674 5.51759 5.4674 6.80402C5.4674 8.1809 6.45232 9.20605 7.6684 9.20605Z"
              fill="#292929"
              fillOpacity="0.85"
            />
          </svg>
        </div>

        <div className="flex">
          <div className="text-[#292929]">Información de Usuario</div>
        </div>
      </div>
      <button
        onClick={handleCopy}
        className="w-[40px] h-[40px] rounded-[5px] bg-[#EFEFEF] flex justify-center items-center ml-[4px] hover:bg-[#F6F6F6] hover:border"
      >
        {copied ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-jump animate-duration-250"
            >
              <path
                d="M19 9.5C19 14.6988 14.6427 19 9.50001 19C4.30118 19 0 14.7362 0 9.5C0 4.30118 4.30118 0 9.50001 0C14.7175 0 19 4.28251 19 9.5ZM12.8662 5.29233L8.32186 11.6132L6.02167 9.12594C5.81595 8.92024 5.51674 8.73322 5.12403 8.73322C4.46949 8.73322 3.94586 9.23813 3.94586 9.9114C3.94586 10.1733 4.03938 10.5098 4.26378 10.7529L7.42422 14.2313C7.66734 14.4931 8.06005 14.624 8.35926 14.624C8.77068 14.624 9.1447 14.4558 9.3504 14.1752L14.7737 6.63872C14.942 6.39568 15.0354 6.13381 15.0354 5.92811C15.0354 5.27351 14.4931 4.76859 13.8574 4.76859C13.4271 4.76859 13.0906 4.97445 12.8662 5.29233Z"
                fill="#4ADE80"
              />
            </svg>
        ) : (
          <svg
            width="26"
            height="25"
            viewBox="0 0 26 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[22px] animate-fade"
          >
            <g clipPath="url(#clip0_177_64)">
              <path
                d="M19.1133 3.65625V5.44922H17.2266V3.76172C17.2266 2.54297 16.5703 1.91016 15.4102 1.91016H3.70312C2.53125 1.91016 1.88672 2.54297 1.88672 3.76172V15.4102C1.88672 16.6289 2.53125 17.2617 3.70312 17.2617H5.68359V19.1484H3.67969C1.21875 19.1484 0 17.9297 0 15.5156V3.65625C0 1.24219 1.21875 0.0234375 3.67969 0.0234375H15.4453C17.8828 0.0234375 19.1133 1.24219 19.1133 3.65625Z"
                fill="#292929"
                fillOpacity="0.85"
              />
              <path
                d="M9.36328 24.5742H21.1289C23.5664 24.5742 24.7969 23.3555 24.7969 20.9414V9.08203C24.7969 6.66797 23.5664 5.44922 21.1289 5.44922H9.36328C6.90234 5.44922 5.68359 6.65625 5.68359 9.08203V20.9414C5.68359 23.3555 6.90234 24.5742 9.36328 24.5742ZM9.38672 22.6875C8.22656 22.6875 7.57031 22.0547 7.57031 20.8359V9.1875C7.57031 7.96875 8.22656 7.33594 9.38672 7.33594H21.0938C22.2539 7.33594 22.9102 7.96875 22.9102 9.1875V20.8359C22.9102 22.0547 22.2539 22.6875 21.0938 22.6875H9.38672Z"
                fill="#292929"
                fillOpacity="0.85"
              />
            </g>
            <defs>
              <clipPath id="clip0_177_64">
                <rect width="25.1484" height="24.5742" fill="white" />
              </clipPath>
            </defs>
          </svg>
        )}
      </button>
    </div>
  );
};