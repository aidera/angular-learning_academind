import {Directive, HostBinding, HostListener, ElementRef, Renderer2, AfterViewInit} from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective implements AfterViewInit {

  // Биндим класс для родительского компонента по умолчанию
  @HostBinding('class.show') isOpen = false;

  // Вызываем функцию бинда
  @HostListener('document:click', ['$event']) toggleOpen(event: Event): void {
    this.isOpen = this.el.nativeElement.contains(event.target) ? !this.isOpen : false;
    this.setActiveClassToChildElements();
  }

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  // При инициализации тоже должны быть верные значения
  ngAfterViewInit(): void {
    this.setActiveClassToChildElements();
  }

  // Биндим классы для дочерних компонент
  setActiveClassToChildElements(): void {
    const button = this.el.nativeElement.querySelector('.dropdown-toggle');
    const ul = this.el.nativeElement.querySelector('.dropdown-menu');
    if (this.isOpen) {
      this.renderer.addClass(button, 'show');
      this.renderer.addClass(ul, 'show');
    } else {
      this.renderer.removeClass(button, 'show');
      this.renderer.removeClass(ul, 'show');
    }
  }
}
