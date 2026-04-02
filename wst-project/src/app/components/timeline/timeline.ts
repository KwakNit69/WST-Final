import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  era: 'Spanish' | 'American' | 'Commonwealth' | 'Republic' | 'Modern';
}

@Component({
  selector: 'app-timeline',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timeline.html',
  styleUrls: ['./timeline.css']
})
export class TimelineComponent {
history: TimelineEvent[] = [
  { 
    year: '1899', 
    title: 'First Philippine Republic', 
    description: 'Emilio Aguinaldo is inaugurated in Malolos, marking the birth of the first democracy in Asia.',
    era: 'Republic' 
  },
  { 
    year: '1935', 
    title: 'Commonwealth Government', 
    description: 'Manuel L. Quezon becomes the first President to occupy Malacañan Palace as the official residence.',
    era: 'Commonwealth' 
  },
  { 
    year: '1943', 
    title: 'Second Republic', 
    description: 'The Japanese-sponsored republic under Jose P. Laurel during WWII.',
    era: 'Republic' 
  },
  { 
    year: '1946', 
    title: 'Third Republic', 
    description: 'The Philippines gains full sovereignty from the United States with Manuel Roxas as President.',
    era: 'Republic' 
  },
  { 
    year: '1965 - 1986', 
    title: 'The Fourth Republic', 
    description: 'The era of the New Society and Martial Law under Ferdinand Marcos Sr.',
    era: 'Republic' 
  },
  { 
    year: '1986', 
    title: 'People Power Revolution', 
    description: 'A historic non-violent revolution restores democracy and installs Corazon Aquino.',
    era: 'Modern' 
  },
  { 
    year: '1987 - 2010', 
    title: 'Fifth Republic Foundation', 
    description: 'Presidencies of Ramos, Estrada, and Arroyo focus on economic recovery and reform.',
    era: 'Modern' 
  },
  { 
    year: '2010 - 2022', 
    title: 'Contemporary Era', 
    description: 'The administrations of Benigno Aquino III and Rodrigo Duterte navigate globalization and social shifts.',
    era: 'Modern' 
  },
  { 
    year: '2022 - Present', 
    title: 'Current Administration', 
    description: 'Ferdinand Marcos Jr. assumes office, focusing on national unity and post-pandemic recovery.',
    era: 'Modern' 
  }
];
}