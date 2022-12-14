import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'pm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() pageTitle: string = '';

  constructor() {}

  ngOnInit(): void {}
}
