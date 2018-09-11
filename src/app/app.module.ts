import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { ApicurioModule } from './apicurio-editor/editor.module';
import { ApicurioEditorComponent } from './apicurio-editor/editor.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApicurioModule
  ],
  providers: [],
  entryComponents: [
    ApicurioEditorComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const appElement = createCustomElement(ApicurioEditorComponent, {injector: this.injector});
    customElements.define('apicurio-wc', appElement);
  }
}
