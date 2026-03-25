import { Accordion, AccordionItem, Selection } from '@heroui/react';
import { ChevronIcon } from '../icons/ChevronIcon';
import { Unidad } from '../../../types/directory';

interface SidebarAccordionProps {
  items: Unidad[];
  onFilter: (unidad: number, padre: number, hija?: number) => void;
}

export const SidebarAccordion = ({ items, onFilter }: SidebarAccordionProps) => {
  const itemClasses = {
    base: 'w-full',
    title: 'text-neutral-900 text-sm font-normal font-["Poppins"] text-left',
    trigger:
      'px-2 py-0 data-[hover=true]:bg-default-100 rounded-lg h-14 flex items-center flex-row-reverse gap-3',
    indicator: 'text-medium',
    content: 'text-sm px-2',
  };

  const getCategoryName = (codUnidad: number) => {
    switch (codUnidad) {
      case 1:
        return 'FACULTADES';
      case 2:
        return 'ADMINISTRACIÓN';
      case 3:
        return 'INVESTIGACIÓN';
      default:
        return '';
    }
  };

  const handleSelectionChange = (keys: Selection, codUnidad: number) => {
    // keys is a Set of strings/numbers. We only care about the first one for single selection behavior or the most recently selected.
    // However, HeroUI Selection can be 'all'.
    if (keys !== 'all') {
      const selectedKey = Array.from(keys)[0];
      if (selectedKey) {
        onFilter(codUnidad, Number(selectedKey));
      }
    }
  };

  return (
    <div className="flex w-full max-w-[350px] flex-col gap-4">
      <Accordion
        showDivider={false}
        className="flex w-full flex-col gap-1 p-2"
        itemClasses={itemClasses}
      >
        {items.map((unidad) => (
          <AccordionItem
            key={unidad.codUnidad}
            aria-label={getCategoryName(unidad.codUnidad)}
            title={getCategoryName(unidad.codUnidad)}
            indicator={({ isOpen }) => (
              <ChevronIcon className={isOpen ? 'rotate-90' : '-rotate-90'} />
            )}
          >
            <Accordion
              showDivider={false}
              className="flex w-full flex-col gap-1 p-2 pl-4"
              itemClasses={itemClasses}
              onSelectionChange={(keys) => handleSelectionChange(keys, unidad.codUnidad)}
            >
              {unidad.facultades.map((item) => (
                <AccordionItem
                  key={item.codSubunidadPadre}
                  aria-label={item.subunidadPadre}
                  title={item.subunidadPadre}
                  indicator={({ isOpen }) => (
                    <ChevronIcon className={isOpen ? 'rotate-90' : '-rotate-90'} />
                  )}
                >
                  <div className="flex gap-1 pl-2">
                    <div className="w-[18px] shrink-0" />
                    <div className="flex flex-col gap-2">
                      {item.subunidadesHijas.map((child) => (
                        <span
                          key={child.codSubunidad}
                          className="text-default-500 hover:text-primary cursor-pointer font-['Poppins'] text-sm font-normal text-neutral-900"
                          onClick={() =>
                            onFilter(unidad.codUnidad, item.codSubunidadPadre, child.codSubunidad)
                          }
                        >
                          {child.subunidad}
                        </span>
                      ))}
                    </div>
                  </div>
                </AccordionItem>
              ))}
            </Accordion>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
