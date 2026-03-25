import { Unidad, Contact } from '../../types/directory';
import ContactClient from './ContactClient';

async function getDirectory(): Promise<Unidad[]> {
  try {
    const res = await fetch(`${process.env.API_URL}/api/directorio/unidades`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const unidades: Unidad[] = await res.json();
    return unidades;
  } catch (error) {
    console.error('Error fetching directory:', error);
    return [];
  }
}

async function getContacts(): Promise<Contact[]> {
  try {
    const res = await fetch(`${process.env.API_URL}/api/directorio/contactos`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch contacts');
    }

    const contacts: Contact[] = await res.json();
    return contacts;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return [];
  }
}

export default async function ContactPage() {
  const directory = await getDirectory();
  const contacts = await getContacts();

  return <ContactClient directory={directory} contacts={contacts} />;
}
