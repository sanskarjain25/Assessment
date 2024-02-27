import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlighttask]'
})
export class HighlighttaskDirective implements OnInit {
  @Input('appHighlighttask') taskStatus: string;

  constructor(private el: ElementRef) {}

  ngOnInit() {
    switch (this.taskStatus) {
      case 'In Stock':
        this.el.nativeElement.style.backgroundColor = '#00cc00';
        break;
      case 'Out of Stock':
        this.el.nativeElement.style.backgroundColor = '#ff5050';
        break;
      default:
        this.el.nativeElement.style.backgroundColor = 'white';
    }
  }
}
