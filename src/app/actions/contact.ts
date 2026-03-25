'use server';

import { Contact } from '../../types/directory';

export async function filterContacts(
  codUnidad: number,
  codPadre: number,
  codHija?: number
): Promise<Contact[]> {
  try {
    let url = `${process.env.API_URL}/api/directorio/contactos?unidad=${codUnidad}&padre=${codPadre}`;
    if (codHija) {
      url += `&hija=${codHija}`;
    }

    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      throw new Error('Failed to fetch contacts');
    }

    const contacts: Contact[] = await res.json();
    return contacts;
  } catch (error) {
    console.error('Error filtering contacts:', error);
    return [];
  }
}
