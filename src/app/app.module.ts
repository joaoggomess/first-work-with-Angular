import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello.component';
import { MenuComponent } from './components/menu.component';
import { MyButton } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    MyButton,
    EntryDataComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
