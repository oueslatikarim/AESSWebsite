import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

    this.loadExternalScript('../assets/js/jquery.slicknav.min.js').then(() => {
      // The script has been loaded, you can now use its functionality.
      console.log('Script loaded successfully');
    }).catch(() => {
      // There was an error loading the script.
      console.error('Error loading script');
    });
  }

  private loadExternalScript(src: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const script = this.renderer.createElement('script');
      script.type = 'text/javascript';
      script.src = src;
      script.onload = () => {
        resolve();
      };
      script.onerror = () => {
        reject();
      };
      this.renderer.appendChild(document.body, script);
    });
  }
}
