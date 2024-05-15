import { Component } from '@angular/core';
import { TopNavComponent } from '../../components/top-nav/top-nav.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [TopNavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
