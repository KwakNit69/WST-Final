import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './digital-archive.html',
  styleUrls: ['./digital-archive.css']
})
export class DigitalArchiveComponent {
  user = {
    name: 'Alex Rivera',
    role: 'Senior UI/UX Designer',
    bio: 'Passionate about creating intuitive digital experiences and clean code.',
    status: 'online',
    skills: ['Angular', 'TypeScript', 'CSS3', 'Figma']
  };

  isFollowing: boolean = false;

  toggleFollow() {
    this.isFollowing = !this.isFollowing;
  }
}