'use client';

import { useState, useMemo, useDeferredValue } from 'react';
import Header from '../components/layout/Header';
import Navbar from '../components/layout/NavBar';
import TopBar from '../components/layout/TopBar';
import HeaderTitle from '../components/ui/HeaderTitle';
import { SidebarAccordion } from '../components/directory/SidebarAccordion';
import ContactCard from '../components/directory/ContactCard';
import { ScrollShadow } from '@heroui/scroll-shadow';
import SearchInput from '../components/ui/SearchInput';
import { Unidad, Contact } from '../../types/directory';

import { filterContacts } from '../actions/contact';

import { Spinner } from '@heroui/react';
import { WaveBackground } from '../components/layout/WaveBackground';
import Footer from '../components/layout/Footer';

interface ContactClientProps {
  directory: Unidad[];
  contacts: Contact[];
}

export default function ContactClient({
  directory,
  contacts: initialContacts,
}: ContactClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [isLoading, setIsLoading] = useState(false);

  const deferredSearchQuery = useDeferredValue(searchQuery);
  const isSearching = deferredSearchQuery.trim().length > 0;

  const filteredContacts = useMemo(() => {
    if (!isSearching) return contacts;

    const lowerQuery = deferredSearchQuery.toLowerCase();
    return initialContacts.filter((contact) => {
      const fullName = `${contact.nombres} ${contact.apellidos}`.toLowerCase();
      return fullName.includes(lowerQuery);
    });
  }, [contacts, initialContacts, isSearching, deferredSearchQuery]);

  const handleFilter = async (codUnidad: number, codPadre: number, codHija?: number) => {
    setIsLoading(true);
    try {
      // Artificial delay to ensure spinner visibility
      await new Promise((resolve) => setTimeout(resolve, 500));

      const data = await filterContacts(codUnidad, codPadre, codHija);
      setContacts(data);
    } catch (error) {
      console.error('Error filtering contacts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative z-0 flex min-h-screen w-full flex-col font-sans`}>
      <WaveBackground />
      <TopBar />
      <Header />
      <Navbar />

      <div className="relative mx-[10%] flex items-start gap-[22px]">
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
                  <div className="grid grid-cols-3 gap-7 self-stretch p-8">
                    {isLoading ? (
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
                    ) : (
                      filteredContacts.map((contact, index) => (
                        <ContactCard key={index} contact={contact} />
                      ))
                    )}
                  </div>
                </div>
              </ScrollShadow>
            </div>
          </div>
        </div>
      </div>

      <div className="relative top-22 w-full">
        <Footer />
      </div>
    </div>
  );
}
