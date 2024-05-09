import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

import { MainService } from '../main.service';

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  public static staticTabIndex: number = 0;
  
  route: ActivatedRoute = inject(ActivatedRoute);
  mainService: MainService = inject(MainService);

  file: Blob = new Blob();
  dataUltimoCaricamento: string | null;
  sidenavOpened!: boolean;

constructor() {
    if(localStorage.getItem("DataUltimoCaricamento") != null) 
      this.dataUltimoCaricamento = localStorage.getItem("DataUltimoCaricamento");
    else
      this.dataUltimoCaricamento = null;
  }

  get staticTabIndex(): number {
    return ToolbarComponent.staticTabIndex;
  }

  set tabIndex(tabIndex: number) {
    ToolbarComponent.staticTabIndex = tabIndex;
  }

  fileChanged(event: any) {
    this.file = event.target.files[0];
    let fileReader = new FileReader();

    fileReader.onload = () => {
      this.mainService.uploadData(fileReader.result);
    }
    
    fileReader.readAsArrayBuffer(this.file)
    
    window.location.reload();
  }
  
  onTabClick(index: number): void {
      this.tabIndex = index;
  }
}