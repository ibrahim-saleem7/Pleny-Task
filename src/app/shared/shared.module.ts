import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DividerComponent } from './components/divider/divider.component';
import { LogoComponent } from './components/logo/logo.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CardComponent } from './components/card/card.component';
import { CoreModule } from '../core/core.module';
import { PaginationComponent } from './components/pagination/pagination.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DividerComponent,
    LogoComponent,
    SidebarComponent,
    CardComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule
  ],
  exports: [
    HeaderComponent,
    DividerComponent,
    LogoComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
