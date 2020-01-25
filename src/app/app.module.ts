import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MultiSelectComponent } from './shared/components/multi-select/multi-select.component';
import { ListFilterPipe } from './shared/components/multi-select/list-filter.pipe';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MultiSelectComponent,
    ListFilterPipe,
    ClickOutsideDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
