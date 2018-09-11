import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ApiDefinition } from 'apicurio-design-studio';

@Component({
  selector: 'apicurio-root',
  template: `
    <h1>apicurio editor goes here</h1>
    <api-editor
      [embedded]="true"
      [api]="apiDef"
      (onCommandExecuted)="onUserChange($event)">
    </api-editor>
  `,
  encapsulation: ViewEncapsulation.Native
})
export class ApicurioEditorComponent implements OnInit {

  apiDef: ApiDefinition;

  // onUserChange($event: Event) {
  //   console.log('did a change', $event);
  // }

  constructor() {}

  ngOnInit() {
    this.apiDef = new ApiDefinition();
    this.apiDef.createdBy = 'user1';
    this.apiDef.createdOn = new Date();
    this.apiDef.tags = [];
    this.apiDef.description = '';
    this.apiDef.id = 'api-1';
    this.apiDef.spec = {};
  }

  title = 'apicurio-wc-provider';

}
