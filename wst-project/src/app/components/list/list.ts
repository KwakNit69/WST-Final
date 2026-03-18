import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink], 
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class ListComponent {
  title = 'wstproject';

 
  presidents = [
    { id: 'aguinaldo', name: 'Emilio Aguinaldo', era: 'First Republic', years: '1899 – 1901', republic: 'First Philippine Republic', image: 'agauinaldo.jpg' },
    { id: 'quezon', name: 'Manuel L. Quezon', era: 'Commonwealth', years: '1935 – 1944', republic: 'The Commonwealth', image: 'manuel quazon.jpg' },
    { id: 'laurel', name: 'José P. Laurel', era: 'Second Republic', years: '1943 – 1945', republic: 'The Second Republic', image: 'jose laurel.jpg' },
    { id: 'osmena', name: 'Sergio Osmeña', era: 'Commonwealth', years: '1944 – 1946', republic: 'The Commonwealth', image: 'osmena.jpg' },
    { id: 'roxas', name: 'Manuel Roxas', era: 'Third Republic', years: '1946 – 1948', republic: 'The Third Republic', image: 'roxas.jpg' },
    { id: 'quirino', name: 'Elpidio Quirino', era: 'Third Republic', years: '1948 – 1953', republic: 'The Third Republic', image: 'quirino.jpg' },
    { id: 'magsaysay', name: 'Ramon Magsaysay', era: 'Third Republic', years: '1953 – 1957', republic: 'The Third Republic', image: 'magsaysay.jpg' },
    { id: 'garcia', name: 'Carlos P. Garcia', era: 'Third Republic', years: '1957 – 1961', republic: 'The Third Republic', image: 'garcia.jpg' },
    { id: 'macapagal', name: 'Diosdado Macapagal', era: 'Third Republic', years: '1961 – 1965', republic: 'The Third Republic', image: 'macapagal.jpg' },
    { id: 'marcos', name: 'Ferdinand Marcos', era: 'Fourth Republic', years: '1965 – 1986', republic: 'The Fourth Republic', image: 'ferdinand marcos.jpg' },
    { id: 'aquino', name: 'Corazon C. Aquino', era: 'Fifth Republic', years: '1986 – 1992', republic: 'The Fifth Republic', image: 'corazon aquino.jpg' },
    { id: 'ramos', name: 'Fidel Ramos', era: 'Fifth Republic', years: '1992 – 1998', republic: 'The Fifth Republic', image: 'ramos.jpg' },
    { id: 'estrada', name: 'Joseph Estrada', era: 'Fifth Republic', years: '1998 – 2001', republic: 'The Fifth Republic', image: 'estrada.jpg' },
    { id: 'arroyo', name: 'Gloria Macapagal Arroyo', era: 'Fifth Republic', years: '2001 – 2010', republic: 'The Fifth Republic', image: 'aroyo.jpg' },
    { id: 'pnoy', name: 'Benigno Aquino III', era: 'Fifth Republic', years: '2010 – 2016', republic: 'The Fifth Republic', image: 'aquino.jpg' },
    { id: 'duterte', name: 'Rodrigo Duterte', era: 'Fifth Republic', years: '2016 – 2022', republic: 'The Fifth Republic', image: 'duterte.jpg' },
    { id: 'bbm', name: 'Ferdinand R. Marcos Jr.', era: 'Fifth Republic', years: '2022 – present', republic: 'The Fifth Republic', image: 'BBM.jpg' }
  ];
} 