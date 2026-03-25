import { ChevronIcon } from '../icons/ChevronIcon';

const DirectoryMenu: React.FC = () => {
  return (
    <div className="relative flex w-1/4 flex-col items-start gap-[15px]">
      <div className="relative h-[635px] w-full overflow-hidden rounded-[20px] shadow-[0px_10px_30px_#00000012]">
        <div className="flex h-full w-full rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)] bg-white">
          {/* <div className="mt-[22.3px] w-full h-[579.65px] mx-4 flex-col items-start gap-7 flex relative"></div> */}
          <div className="absolute top-[39px] left-[20px] inline-flex w-80 flex-col items-start justify-start gap-5">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="inline-flex items-center justify-start gap-2">
                <ChevronIcon className="relative h-6 w-6" />
                <div className="flex flex-1 items-start justify-start">
                  <div className="w-80 justify-start font-['Poppins'] text-sm leading-4 font-normal text-neutral-900">
                    Dirección de desarrollo tecnológico
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-2 pl-[30px]">
                <div className="inline-flex h-4 items-center justify-start gap-3">
                  <div className="flex flex-1 items-start justify-start">
                    <div className="w-80 justify-start font-['Poppins'] text-sm leading-4 font-normal text-neutral-900">
                      Financiero
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-4 items-center justify-start gap-3">
                  <div className="flex flex-1 items-start justify-start">
                    <div className="w-80 justify-start font-['Poppins'] text-sm leading-4 font-normal text-neutral-900">
                      Académico
                    </div>
                  </div>
                </div>
                <div className="inline-flex h-4 items-center justify-start gap-3">
                  <div className="flex flex-1 items-start justify-start">
                    <div className="w-80 justify-start font-['Poppins'] text-sm leading-4 font-normal text-neutral-900">
                      Plataforma
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                <div className="w-0 h-6 bg-zinc-300" />
                <div className="w-0 h-3 bg-black" />
                <div className="flex-1 flex justify-start items-start">
                  <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                    Financiero
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                <div className="w-0 h-6 bg-zinc-300" />
                <div className="w-0 h-3 bg-black" />
                <div className="flex-1 flex justify-start items-start">
                  <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                    Académico
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                <div className="w-0 h-6 bg-zinc-300" />
                <div className="w-0 h-3 bg-black" />
                <div className="flex-1 flex justify-start items-start">
                  <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                    Admisión
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                  <div className="w-0 h-6 bg-zinc-300" />
                  <div className="w-0 h-3 bg-white" />
                  <div className="flex-1 flex justify-start items-start">
                    <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                      Tesorería
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                  <div className="w-0 h-6 bg-zinc-300" />
                  <div className="w-0 h-3 bg-white" />
                  <div className="flex-1 flex justify-start items-start">
                    <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                      Recursos Humanos
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                  <div className="w-0 h-6 bg-zinc-300" />
                  <div className="w-0 h-3 bg-white" />
                  <div className="flex-1 flex justify-start items-start">
                    <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                      Nómina
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col justify-start items-start gap-2">
              <div className="self-stretch h-4 inline-flex justify-start items-center gap-3">
                <div className="w-0 h-6 bg-zinc-300" />
                <div className="w-0 h-3 bg-black" />
                <div className="flex-1 flex justify-start items-start">
                  <div className="w-80 justify-start text-neutral-900 text-sm font-normal font-['Poppins'] leading-4">
                    Investigación
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectoryMenu;
