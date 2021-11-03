import { CommonModule } from '@angular/common';
import { Compiler, Component, NgModule, OnInit } from '@angular/core';
import { CounterModule } from './counter/counter.module';

const DYN_HTML = `
<p>Custom loaded HTML with an angular component</p>
<app-counter [start]="50" [step]="10"></app-counter>
`;

@Component({
  selector: 'app-root',
  template: `
    <h1>{{ title }}</h1>
    <ng-container *ngComponentOutlet="dynamicComponent; ngModuleFactory: dynamicModule"></ng-container>
  `,
})
export class AppComponent implements OnInit {
  title = 'ngss-html';

  dynamicComponent: any;
  dynamicModule: any;

  constructor(private compiler: Compiler) {}

  async ngOnInit() {
    [this.dynamicComponent, this.dynamicModule] = await this.createComponent(DYN_HTML);
  }

  private async createComponent(template: string) {
    const metadata = {
      template: template,
    };

    const cmpntCls = class DynamicComponent {};
    const decoratedCmpntCls = Component(metadata)(cmpntCls);

    @NgModule({
      imports: [CommonModule, CounterModule],
      declarations: [decoratedCmpntCls],
    })
    class RuntimeComponentModule {}

    const targetMdl = await this.compiler.compileModuleAsync(RuntimeComponentModule);

    return [decoratedCmpntCls, targetMdl];
  }
}
