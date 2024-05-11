export const getERAsegClass = (state) => {
  let className = [];
  switch (state) {
    case "AC":
      className = {
        chirp:
          "flex justify-left items-center h-[26px] pr-[14px] pl-[6px] bg-[#F0FDF4] text-[#4ADE80] fill-[#4ADE80] rounded-[3px] text-[14px] mb-[6px]",
        chirpGold:
          "flex justify-left items-center h-[26px] pr-[14px] pl-[6px] bg-[#FFFAE5] text-[#7c6900] fill-[#FFD700] rounded-[3px] text-[14px] mb-[6px]",
        text: "text-[#166534]",
        textGold: "text-[7c6900]",
        lm: "flex justify-center items-center w-[52px] bg-[#F0FDF4] rounded-[2px]",
        stroke: "#4ADE80",
        gold: "flex justify-center items-center w-[52px] bg-[#FFFAE5] rounded-[2px]",
        strokeGold: "#FFD700",
      };
      break;
    case "AF":
      className = {
        chirp:
          "flex justify-left items-center h-[26px] pr-[14px] pl-[6px] bg-[#FEF2F2] text-[#F87171] fill-[#F87171] rounded-[3px] text-[14px] mb-[6px]",
        text: "text-[#B91C1C]",
        lm: "flex justify-center items-center w-[52px] bg-[#FEF2F2] rounded-[2px]",
        stroke: "#F87171",
      };
      break;
    case "DE":
      className = {
        chirp:
          "flex justify-left items-center h-[26px] pr-[14px] pl-[6px] text-[#334155] bg-[#F1F5F9] rounded-[3px] text-[14px] mb-[4px]",
        text: "text-blue-gray-700",
        lm: "flex justify-center items-center w-[52px] bg-[#F1F5F9] rounded-[2px]",
        stroke: "#334155",
      };
      break;
    case "PL":
      className = {
        chirp:
          "flex justify-left items-center h-[26px] pr-[14px] pl-[6px] bg-[#F0FDF4] text-[#4ADE80] fill-[#4ADE80] rounded-[3px] text-[14px] mb-[6px]",
        text: "text-[#166534]",
        lm: "flex justify-center items-center w-[40px] h-full bg-[#F0FDF4]",
        stroke: "#4ADE80",
      };
      break;
    case "RE":
      className = {
        chirp:
          "flex justify-left items-center h-[26px] pr-[14px] pl-[6px] text-[#334155] bg-[#F1F5F9] rounded-[3px] text-[14px] mb-[6px]",
        text: "text-blue-gray-700",
        lm: "flex justify-center items-center w-[52px] bg-[#F1F5F9] rounded-[2px]",
        stroke: "#334155",
      };
      break;
    case "SM":
      className = {
        chirp:
          "flex justify-left items-center h-[26px] pr-[14px] pl-[6px] text-[#FACC15] bg-[#FEFCE8] fill-[#FACC15] rounded-[3px] text-[14px] mb-[6px]",
        text: "text-[#854D0E]",
        lm: "flex justify-center items-center w-[52px] bg-[#FEFCE8] rounded-[2px]",
        stroke: "#FACC15",
      };
      break;
    case "SD":
      className = {
        chirp:
          "flex justify-left items-center h-[26px] pr-[14px] pl-[6px] text-[#FACC15] bg-[#FEFCE8] fill-[#FACC15] rounded-[3px] text-[14px] mb-[6px]",
        text: "text-[#854D0E]",
        lm: "flex justify-center items-center w-[52px] bg-[#FEFCE8] rounded-[2px]",
        stroke: "#FACC15",
      };
      break;
  }
  return className;
};
