import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss'],
})
export class FooterComponentComponent {
  @Input() showFooter : boolean = true;
}
