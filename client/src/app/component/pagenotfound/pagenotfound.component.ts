import { Component } from '@angular/core';
import { Loading, Notify } from 'notiflix';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent {
  ngOnInit(): void {
    this.showLoadingAndNotify();
  }



  showLoadingAndNotify() {
    // Show loading notification
    Loading.circle('Loading...');

    // Remove loading after 500ms
    setTimeout(() => {
      Loading.remove(200); // Remove loading with a 200ms animation
      Notify.failure('Page Not Found', {
        timeout: 5000, // Notification will disappear after 5 seconds
      });
    }, 500); // Show loading for 500ms
  }
}
