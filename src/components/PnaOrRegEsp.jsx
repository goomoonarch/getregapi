const PnaOrRegEsp = () => {
  return (
    <div className="flex">
        <div id="userinfoheader" className="flex justify-center items-center w-[40px] h-full bg-[#EFF6FF]">
        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="#60A5FA"  strokeWidth="1.75"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-medical-cross-off"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17.928 17.733l-.574 -.331l-3.354 -1.938v4.536a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-4.536l-3.928 2.268a1 1 0 0 1 -1.366 -.366l-1 -1.732a1 1 0 0 1 .366 -1.366l3.927 -2.268l-3.927 -2.268a1 1 0 0 1 -.366 -1.366l1 -1.732a1 1 0 0 1 1.366 -.366l.333 .192m3.595 -.46v-2a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v4.535l3.928 -2.267a1 1 0 0 1 1.366 .366l1 1.732a1 1 0 0 1 -.366 1.366l-3.927 2.268l3.927 2.269a1 1 0 0 1 .366 1.366l-.24 .416" /><path d="M3 3l18 18" /></svg>
        </div>
        <div className="flex mb-2">
            <div className="flex flex-col pl-2 w-[300px]">
                <div id="chirp" className="flex">
                    <div className="flex justify-left items-center pl-2 pr-3 py-1 bg-[#EFF6FF] text-[#1D4EDA] fill-[#60A5FA] rounded-[3px] text-[13px] mb-1">
                    <svg viewBox="0 0 24 24" strokeWidth={1.0} className="w-4 animate-pulse" xmlns="http://www.w3.org/2000/svg"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg>    
                    <div>No asgurado o RegESP</div>
                    </div>
                </div>
                <div className="text-[15px] text-[#1d1d1d] leading-4">POBRE NO ASEGURADO O DEL REGIMEN ESPECIAL</div>
                <div className="font-light text-[14px] text-[#6c6c6e]">Especial y excepción • Pobre no asegurado</div>
            </div>
        </div>
    </div>
  )
}

export default PnaOrRegEsp