import { Component, OnInit, Injector } from '@angular/core';

@Component({
  selector: 'app-dynamic-test3',
  templateUrl: './dynamic-test3.component.html',
  styleUrls: ['./dynamic-test3.component.css']
})
export class DynamicTest3Component implements OnInit {
  public params: any;
  public id: number;
  public name: string;
  constructor(
    private _injector: Injector
  ) {
    this.id = this._injector.get('id');
    this.name = this._injector.get('name');
    this.params = this._injector.get('params');
  }



  ngOnInit() {

  }

}
