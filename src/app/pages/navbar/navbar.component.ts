import { Component, computed, inject, input, OnInit, signal } from '@angular/core';
import { Router, RouterLink  ,RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent   {


}