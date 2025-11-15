import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-allprojects',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './allprojects.component.html',
  styleUrl: './allprojects.component.css'
})
export class AllprojectsComponent {

}
