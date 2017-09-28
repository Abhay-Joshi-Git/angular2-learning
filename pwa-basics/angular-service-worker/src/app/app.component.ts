
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>
    test app - 
    {{someVal}}
  </div>`
})
export class MyAppComponent {
  public someVal = 20;
}