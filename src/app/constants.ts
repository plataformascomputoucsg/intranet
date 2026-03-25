import { CalendarDay, Event, NewsItem } from './types';
import pic from '@/assets/images/pic.png';

export const COLORS = {
  primary: 'bg-ucsg-primary', // Rojo oscuro tipo UCSG
  secondary: 'text-ucsg-secondary', // Rosa/Rojo titulos
  bgGradient: 'bg-gradient-to-b from-white via-pink-50 to-gray-100',
};

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 1,
    slug: 'taller-interactivo-ingles-frances-1',
    image: pic,
    category: 'EDUCACIÓN',
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description:
      'La Carrera de Negocios Internacionales organizó un taller interactivo de inglés y francés dirigido a postulantes, con palabras de bienvenida a cargo de su directora...',
    isFeatured: true,
    highlight:
      'Vintage meets vogue is the only way to describe this serif typeface. Neue World encompasses the mode high-fashion aesthetic of the 1960s with a commercial take.',
    details: `Mauris fermentum faucibus risus a efficitur. Morbi sit amet arcu turpis. Ut nisl velit, mattis at augue vel, molestie egestas justo. Aliquam elementum nibh neque, eu ornare nunc feugiat sed. Aliquam erat volutpat. Praesent vitae orci blandit, semper felis ac, interdum lacus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nunc urna, id lobortis elit dapibus et. Etiam ultricies leo justo, nec vehicula augue auctor et. Sed finibus volutpat dui. Nunc vitae urna dictum tellus luctus tincidunt quis feugiat dolor. Aliquam malesuada tristique urna, quis ornare diam venenatis quis. Nunc ligula lectus, posuere sit amet ultrices ut, porttitor efficitur mauris. Aliquam bibendum vitae turpis sed molestie. Donec massa lorem, semper vel pellentesque ut, ultrices in enim. Sed fringilla, mi porttitor sodales vehicula, felis enim gravida nisi, at mollis ante leo et ligula. Quisque non aliquam eros, in aliquet tellus. Mauris ullamcorper quam erat, vehicula rhoncus velit interdum eget.

Mauris fermentum faucibus risus a efficitur. Morbi sit amet arcu turpis. Ut nisl velit, mattis at augue vel, molestie egestas justo. Aliquam elementum nibh neque, eu ornare nunc feugiat sed. Aliquam erat volutpat. Praesent vitae orci blandit, semper felis ac, interdum lacus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nunc urna, id lobortis elit dapibus et. Etiam ultricies leo justo, nec vehicula augue auctor et. Sed finibus volutpat dui. Nunc vitae urna dictum tellus luctus tincidunt quis feugiat dolor. Aliquam malesuada tristique urna, quis ornare diam venenatis quis. Nunc ligula lectus, posuere sit amet ultrices ut, porttitor efficitur mauris. Aliquam bibendum vitae turpis sed molestie. Donec massa lorem, semper vel pellentesque ut, ultrices in enim. Sed fringilla, mi porttitor sodales vehicula, felis enim gravida nisi, at mollis ante leo et ligula. Quisque non aliquam eros, in aliquet tellus. Mauris ullamcorper quam erat, vehicula rhoncus velit interdum eget.

Proin pulvinar quam at aliquet sagittis. Quisque laoreet luctus bibendum. Aenean in dignissim orci. Suspendisse at augue eget neque dictum vestibulum eu ac orci. Integer imperdiet lectus nec urna mollis euismod. Proin et risus nulla. Cras at diam in risus feugiat accumsan. Nulla sit amet blandit mi, a convallis mauris. Quisque lacus dolor, cursus ac quam ac, tempus ultrices sem. Ut porttitor.

Mauris fermentum faucibus risus a efficitur. Morbi sit amet arcu turpis. Ut nisl velit, mattis at augue vel, molestie egestas justo. Aliquam elementum nibh neque, eu ornare nunc feugiat sed. Aliquam erat volutpat. Praesent vitae orci blandit, semper felis ac, interdum lacus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis nunc urna, id lobortis elit dapibus et. Etiam ultricies leo justo, nec vehicula augue auctor et. Sed finibus volutpat dui. Nunc vitae urna dictum tellus luctus tincidunt quis feugiat dolor. Aliquam malesuada tristique urna, quis ornare diam venenatis quis. Nunc ligula lectus, posuere sit amet ultrices ut, porttitor efficitur mauris. Aliquam bibendum vitae turpis sed molestie. Donec massa lorem, semper vel pellentesque ut, ultrices in enim. Sed fringilla, mi porttitor sodales vehicula, felis enim gravida nisi, at mollis ante leo et ligula. Quisque non aliquam eros, in aliquet tellus. Mauris ullamcorper quam erat, vehicula rhoncus velit interdum eget.`,
  },
  {
    id: 2,
    slug: 'taller-interactivo-ingles-frances-2',
    image: pic,
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description: 'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false,
  },
  {
    id: 3,
    slug: 'taller-interactivo-ingles-frances-3',
    image: pic,
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description: 'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false,
  },
  {
    id: 4,
    slug: 'taller-interactivo-ingles-frances-4',
    image: pic,
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description: 'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false,
  },
  {
    id: 5,
    slug: 'taller-interactivo-ingles-frances-5',
    image: pic,
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description: 'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false,
  },
  {
    id: 6,
    slug: 'taller-interactivo-ingles-frances-6',
    image: pic,
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description: 'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false,
  },
  {
    id: 7,
    slug: 'taller-interactivo-ingles-frances-7',
    image: pic,
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description: 'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false,
  },
  {
    id: 8,
    slug: 'taller-interactivo-ingles-frances-8',
    image: pic,
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    description: 'La Carrera de Negocios Internacionales organizó un taller interactivo...',
    isFeatured: false,
  },
];

export const CALENDAR_DAYS: CalendarDay[] = [
  { day: 'LUN', date: '21', active: false },
  { day: 'LUN', date: '21', active: true }, // Activo según diseño
  { day: 'LUN', date: '21', active: false },
  { day: 'LUN', date: '21', active: false },
  { day: 'LUN', date: '21', active: false },
];

export const EVENT_ITEM: Event = {
  id: '1',
  slug: 'taller-interactivo-ingles-frances',
  title: 'Taller interactivo de Inglés y Francés',
  date: '15 Nov, 2023',
  image:
    'https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  description:
    'La Carrera de Negocios Internacionales organizó un taller interactivo de inglés y francés dirigido a postulantes...',
};

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    slug: 'taller-interactivo-ingles-frances',
    title: 'Taller interactivo de Inglés y Francés',
    date: '15 Nov, 2023',
    location: 'Aula Magna',
    description:
      'La Carrera de Negocios Internacionales organizó un taller interactivo de inglés y francés para fortalecer las habilidades lingüísticas de los estudiantes.',
    image: pic,
    category: 'Académico',
  },
  {
    id: '2',
    slug: 'conferencia-inteligencia-artificial',
    title: 'Conferencia de Inteligencia Artificial',
    date: '20 Nov, 2023',
    location: 'Auditorio Principal',
    description: 'Expertos internacionales discuten el futuro de la IA en la educación superior.',
    image: pic,
    category: 'Tecnología',
  },
];
