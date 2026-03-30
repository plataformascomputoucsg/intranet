export interface SubunidadHija {
  codSubunidad: number;
  subunidad: string;
}

export interface Facultad {
  codSubunidadPadre: number;
  subunidadPadre: string;
  subunidadesHijas: SubunidadHija[];
}

export interface Unidad {
  codUnidad: number;
  facultades: Facultad[];
}

export interface Contact {
  nombres: string;
  apellidos: string;
  cargo: string;
  extension: string;
  correo: string;
  foto?: string;
  subunidad: string;
}
