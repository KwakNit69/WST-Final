import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-digital-archive', // Standardize selector
  standalone: true,
  imports: [CommonModule],
  templateUrl: './digital-archive.html',
  styleUrls: ['./digital-archive.css']
})
export class DigitalArchiveComponent {
  collections = [
    {
      title: 'Founding of the Republic',
      president: 'Emilio Aguinaldo',
      year: '1899-1901',
      docs: ['Malolos Constitution', 'Pact of Biak-na-Bato', 'Decree of June 18'],
      status: 'Digitized'
    },
    {
      title: 'Commonwealth Era',
      president: 'Manuel L. Quezon',
      year: '1935-1944',
      docs: ['Commonwealth Act No. 1', 'EO 134 (National Language)', 'Woman Suffrage Act'],
      status: 'Restored'
    },
    {
      title: 'Post-War Reconstruction',
      president: 'Manuel Roxas / Elpidio Quirino',
      year: '1946-1953',
      docs: ['Treaty of Manila', 'Bell Trade Act Records', 'Magna Carta of Labor'],
      status: 'Archived'
    },
    {
      title: 'Golden Age of Diplomacy',
      president: 'Ramon Magsaysay / Carlos P. Garcia',
      year: '1953-1961',
      docs: ['SEATO Conference Minutes', 'Filipino First Policy', 'Land Reform Act of 1955'],
      status: 'Digitized'
    },
    {
      title: 'The New Society Records',
      president: 'Ferdinand Marcos Sr.',
      year: '1965-1986',
      docs: ['Proclamation 1081', '1973 Constitution', 'Tadhana: History of the Filipino People'],
      status: 'Restored'
    },
    {
      title: 'Democratic Restoration',
      president: 'Corazon Aquino / Fidel V. Ramos',
      year: '1986-1998',
      docs: ['1987 Constitution', 'PEZA Establishment Records', 'Final Peace Agreement (MNLF)'],
      status: 'Digitized'
    },
    {
      title: 'Turn of the Millennium',
      president: 'Estrada / Arroyo / Benigno Aquino III',
      year: '1998-2016',
      docs: ['EDSA II Archives', 'K-12 Education Reform', 'Panty-Pamilyang Pilipino Program'],
      status: 'Archived'
    },
    {
      title: 'Contemporary Governance',
      president: 'Rodrigo Duterte / Ferdinand Marcos Jr.',
      year: '2016-Present',
      docs: ['Build, Build, Build Records', 'Bagong Pilipinas Manifesto', 'Executive Order No. 1 (2022)'],
      status: 'Digitized'
    }
  ];
}