'use client';

import { useState, useMemo, useCallback } from 'react';
import { Contact } from '@/types/directory';
import { filterContacts } from '@/app/actions/contact';

export type FilterState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; message: string };

export interface UseContactFilterReturn {
  contacts: Contact[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterState: FilterState;
  filteredContacts: Contact[];
  handleFilter: (codUnidad: number, codPadre: number, codHija?: number) => Promise<void>;
}

export function useContactFilter(initialContacts: Contact[]): UseContactFilterReturn {
  const [contacts, setContacts] = useState<Contact[]>(initialContacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterState, setFilterState] = useState<FilterState>({ status: 'idle' });

  const handleFilter = useCallback(
    async (codUnidad: number, codPadre: number, codHija?: number) => {
      setFilterState({ status: 'loading' });
      try {
        const fetched = await filterContacts(codUnidad, codPadre, codHija);
        setContacts(fetched);
        setFilterState({ status: 'idle' });
      } catch (error) {
        const message =
          error instanceof Error ? error.message : 'Error desconocido al filtrar contactos';
        setFilterState({ status: 'error', message });
      }
    },
    []
  );

  const filteredContacts = useMemo(() => {
    if (!searchQuery) return contacts;
    const lowerQuery = searchQuery.toLowerCase();
    return contacts.filter(
      (contact) =>
        contact.nombres.toLowerCase().includes(lowerQuery) ||
        contact.apellidos.toLowerCase().includes(lowerQuery) ||
        contact.cargo.toLowerCase().includes(lowerQuery) ||
        contact.correo.toLowerCase().includes(lowerQuery)
    );
  }, [contacts, searchQuery]);

  return {
    contacts,
    searchQuery,
    setSearchQuery,
    filterState,
    filteredContacts,
    handleFilter,
  };
}
