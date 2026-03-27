'use client';

import HeaderTitle from '@/app/components/ui/HeaderTitle';
import { SidebarAccordion } from '@/app/components/directory/SidebarAccordion';
import ContactCard from '@/app/components/directory/ContactCard';
import { ScrollShadow } from '@heroui/scroll-shadow';
import SearchInput from '@/app/components/ui/SearchInput';
import { Unidad, Contact } from '@/types/directory';
import { Spinner } from '@heroui/react';
import { useContactFilter } from '@/hooks/useContactFilter';

interface ContactClientProps {
  directory: Unidad[];
  contacts: Contact[];
}

export default function ContactClient({ directory, contacts }: ContactClientProps) {
  const { searchQuery, setSearchQuery, filterState, filteredContacts, handleFilter } =
    useContactFilter(contacts);

  return (
    <>
      <div className="relative flex w-full items-start gap-[22px]">
        <div className="relative flex w-1/4 flex-col items-start gap-[15px]">
          <div className="flex h-11 w-full items-center">
            <HeaderTitle
              titleFirstWorld="Biblioteca de"
              titleSecondWorld="CONTACTO"
              viewAll={false}
            />
          </div>
          <div className="relative h-[635px] w-full overflow-hidden rounded-[20px] shadow-[0px_10px_30px_#00000012]">
            <div className="flex h-full w-full rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)] bg-white">
              <ScrollShadow className="h-full w-full" size={40} hideScrollBar>
                <div className="inline-flex w-full flex-col items-start justify-start gap-5 px-2 py-4">
                  <SidebarAccordion items={directory} onFilter={handleFilter} />
                </div>
              </ScrollShadow>
            </div>
          </div>
        </div>
        <div className="relative flex w-3/4 flex-col items-start gap-[15px]">
          <div className="flex h-11 w-full items-center justify-end">
            <div className="h-full w-1/2">
              <SearchInput
                value={searchQuery}
                onChange={setSearchQuery}
                className="h-full w-full px-3"
              />
            </div>
          </div>
          <div className="relative h-[635px] w-full overflow-hidden rounded-[20px] shadow-[0px_10px_30px_#00000012]">
            <div className="h-auto w-full rounded-[0px_0px_var(--demo-edublink-co-radius-4)_var(--demo-edublink-co-radius-4)] bg-white">
              <ScrollShadow className="h-[635px] w-full overflow-y-auto" size={40} hideScrollBar>
                <div className="relative inline-flex h-auto w-full flex-col items-start justify-start gap-5">
                  {filterState.status === 'error' && (
                    <div
                      role="alert"
                      aria-live="polite"
                      className="w-full px-8 pt-8 text-sm text-red-600"
                    >
                      {filterState.message}
                    </div>
                  )}
                  <div className="grid grid-cols-3 gap-7 self-stretch p-8">
                    {filterState.status === 'loading' ? (
                      <div className="col-span-3 flex h-64 w-full items-center justify-center">
                        <Spinner
                          size="lg"
                          label="Cargando contactos..."
                          color="danger"
                          classNames={{
                            label: "font-['Poppins']",
                          }}
                        />
                      </div>
                    ) : filteredContacts.length === 0 ? (
                      <div className="col-span-3 flex h-64 w-full items-center justify-center text-gray-500">
                        No se encontraron contactos
                      </div>
                    ) : (
                      filteredContacts.map((contact, index) => (
                        <ContactCard key={`${contact.correo}-${index}`} contact={contact} />
                      ))
                    )}
                  </div>
                </div>
              </ScrollShadow>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
