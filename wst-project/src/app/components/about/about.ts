import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class AboutComponent {
  // Data for the Timeline Section
  timeline = [
    { year: '1937', title: 'The Foundation', desc: 'The Commonwealth office of records was established to preserve executive orders...' },
    { year: '1946', title: 'Post-War Recovery', desc: 'Following the liberation of Manila, efforts began to salvage and catalog surviving documents...' },
    { year: '1986', title: 'Modern Transition', desc: 'The Archive was formally reorganized to provide public access to historic presidential records.' },
    { year: '2010', title: 'The Digital Initiative', desc: 'Launched the Presidential Digital Repository to modernize access for scholars and students.' }
  ];

  // Data for the Team Section
  team = [
    { name: 'Light Yagami', role: 'Chief Curator', image: 'light.jpg' },
    { name: 'Senku Ishigami', role: 'Lead Historian', image: 'Senku ishigami.jpg' },
    { name: 'Kiyotaka Ayanokoji', role: 'Digital Archivist', image: 'ayanokouji.jpg' }
  ];
}