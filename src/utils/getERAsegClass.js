export const getERAsegClass = (state) => {
  let className = [];
  switch (state) {
    case "AC":
      className = {
        chirp:
          "flex justify-left items-center pl-2 pr-3 py-1 bg-[#F0FDF4] text-[#4ADE80] fill-[#4ADE80] rounded-[3px] text-[13px] mb-1",
        chirpGold: 
          "flex justify-left items-center pl-2 pr-3 py-1 bg-[#FFFAE5] text-[#7c6900] fill-[#FFD700] rounded-[3px] text-[13px] mb-1",
        text: "text-[#166534]",
        textGold: "text-[7c6900]",
        lm: "flex justify-center items-center w-[40px] h-full bg-[#F0FDF4]",
        stroke: "#4ADE80",
        gold: "flex justify-center items-center w-[40px] h-full bg-[#FFFAE5]",
        strokeGold : "#FFD700"
      };
      break;
    case "AF":
      className = {
        chirp:
          "flex justify-left items-center pl-2 pr-3 py-1 bg-[#FEF2F2] text-[#F87171] rounded-[3px] text-[13px] mb-1",
        text: "text-[#B91C1C]",
        lm: "flex justify-center items-center w-[40px] h-full bg-[#FEF2F2]",
        stroke: "#F87171",
      };
      break;
    case "DE":
      className = {
        chirp:
          "flex justify-left items-center pl-2 pr-3 py-1 text-[#334155] bg-[#F1F5F9] rounded-[3px] text-[13px] mb-1",
        text: "text-blue-gray-700",
        lm: "flex justify-center items-center w-[40px] h-full bg-[#F1F5F9]",
        stroke: "#334155",
      };
      break;
    case "PL":
      className = {
        chirp:
          "flex justify-left items-center pl-2 pr-3 py-1 bg-[#F0FDF4] text-[#4ADE80] rounded-[3px] text-[13px] mb-1",
        text: "text-[#166534]",
        lm: "flex justify-center items-center w-[40px] h-full bg-[#F0FDF4]",
        stroke: "#4ADE80",
      };
      break;
    case "RE":
      className = {
        chirp:
          "flex justify-left items-center pl-2 pr-3 py-1 text-[#334155] bg-[#F1F5F9] rounded-[3px] text-[13px] mb-1",
        text: "text-blue-gray-700",
        lm: "flex justify-center items-center w-[40px] h-full bg-[#F1F5F9]",
        stroke: "#334155",
      };
      break;
    case "SM":
      className = {
        chirp:
          "flex justify-left items-center pl-2 pr-3 py-1 text-[#FACC15] bg-[#FEFCE8] rounded-[3px] text-[13px] mb-1",
        text: "text-[#854D0E]",
        lm: "flex justify-center items-center w-[40px] h-full bg-[#FEFCE8]",
        stroke: "#FACC15",
      };
      break;
    case "SD":
      className = {
        chirp:
          "flex justify-left items-center pl-2 pr-3 py-1 text-[#FACC15] bg-[#FEFCE8] rounded-[3px] text-[13px] mb-1",
        text: "text-[#854D0E]",
        lm: "flex justify-center items-center w-[40px] h-full bg-[#FEFCE8]",
        stroke: "#FACC15",
      };
      break;
  }
  return className;
};
