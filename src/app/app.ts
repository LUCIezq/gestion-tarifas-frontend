import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LayoutComponent } from "./shared/components/layout/layout.component";
import { SidebarComponent } from "./shared/components/layout/sidebar.component";
import { HeaderComponent } from "./shared/components/layout/header.component";
import { ContentComponent } from "./shared/components/layout/content.component";
import { Sidebar } from './shared/components/sidebar/sidebar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LayoutComponent, SidebarComponent, HeaderComponent, ContentComponent, Sidebar],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html'
})
export class App { }
