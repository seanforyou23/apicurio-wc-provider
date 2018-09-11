import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ApicurioEditorModule, ApicurioCommonComponentsModule } from 'apicurio-design-studio';
import { ApicurioEditorComponent } from './editor.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    ApicurioEditorModule,
    ApicurioCommonComponentsModule
  ],
  declarations: [ApicurioEditorComponent],
  entryComponents: [ApicurioEditorComponent]
})
export class ApicurioModule {
  // ngDoBootstrap() {}
}
