import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../core/auth.service';

@Component({
  selector: 'tfg-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }
}


