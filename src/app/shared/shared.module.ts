import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DividerComponent } from './components/divider/divider.component';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DividerComponent,
    LogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    DividerComponent,
    LogoComponent,
    FooterComponent
  ]
})
export class SharedModule { }
