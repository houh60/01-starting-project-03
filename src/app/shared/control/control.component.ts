import {
  Component,
  ElementRef,
  HostBinding,
  inject,
  input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: { class: 'control', '(click)': 'onClick()' },
})
export class ControlComponent implements OnInit {
  label = input.required<string>();
  labelFor = input.required<string>();
  private el = inject(ElementRef);

  ngOnInit(): void {}

  onClick() {
    console.log('clicked!');
  }
}
