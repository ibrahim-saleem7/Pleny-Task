import { Component } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent {


  toggleSidebar(): void {
    const sidebar = document.querySelector('#sidebar');
    sidebar?.classList.toggle('sidebar-toggable-open');
    
  }
}
