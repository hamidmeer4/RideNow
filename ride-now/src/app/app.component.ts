import { Component } from '@angular/core';
import {ChangeDetectionStrategy} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { filter } from 'rxjs';
import { SidebarComponent } from './components/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, HeaderComponent, FooterComponent,CommonModule,SidebarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
showHeaderFooter = false;
showSidebar = false;

constructor(private router: Router) {
  this.router.events.pipe(
    filter(event => event instanceof NavigationEnd)
  ).subscribe((event) => {
    const navEndEvent = event as NavigationEnd;

    const hideHeaderFooterOn = ['/login', '/register', '/dashboard','/driver'];
    this.showHeaderFooter = !hideHeaderFooterOn.some(path => navEndEvent.urlAfterRedirects.startsWith(path));

    const showSidebarOn = ['/dashboard','/driver'];
    this.showSidebar = showSidebarOn.some(path => navEndEvent.urlAfterRedirects.startsWith(path));
  });
}




    }
