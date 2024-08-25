import {Component, HostListener} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  priceForm = this.fb.group( {
    name: ['',Validators.required],
    phone: ['',Validators.required],
    car: ['',Validators.required]
  })
  constructor(private:FormBuilder) {
  }

    goScroll(target: HTMLElement, car?: any) {
      target.scrollIntoView({behavior: "smooth"});
      if (car) {
        this.priceForm.patchValue({car: car.name});
}
trans: any;
@HostListener('document:mousemove', ['$event'])
onMouseMove(e: MouseEvent) {
  this.trans = {transform: 'translate3d(' + ((e.clientX * 0.3) / 8) + 'px,' + ((e.clientY * 0.3) / 8) + 'px,0px)'};
}

bgPos: any;
@HostListener('document:scroll', ['$event'])
onScroll() {
  this.bgPos = {backgroundPositionX: '0' + (0.3 * window.scrollY) + 'px'};
}
onSubmit() {
  if (this.priceForm.valid) {
    alert('Спасибо за заявку! мы свяжемся с вами в ближайшее время!');
    this.priceForm.reset();
  }
  }
}

