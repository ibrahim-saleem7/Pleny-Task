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
import { FormsModule } from '@angular/forms';
import { BarsComponent } from './components/bars/bars.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DividerComponent,
    LogoComponent,
    SidebarComponent,
    CardComponent,
    PaginationComponent,
    BarsComponent,
    UserHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    DividerComponent,
    LogoComponent,
    FooterComponent,
    SidebarComponent,
    CardComponent,
    PaginationComponent,
    BarsComponent,
    UserHeaderComponent
  ]
})
export class SharedModule { }
