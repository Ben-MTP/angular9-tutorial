import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDemoComponent } from './component-demo/component-demo.component';
import { ComponentIfComponent } from './component-if/component-if.component';
import { BindingWayComponent } from './binding-way/binding-way.component';
import { FormsModule } from '@angular/forms';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ComponentPipeComponent } from './component-pipe/component-pipe.component';
import { ComponentRoutingComponent } from './component-routing/component-routing.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemoComponent,
    ComponentIfComponent,
    BindingWayComponent,
    EventBindingComponent,
    ComponentPipeComponent,
    ComponentRoutingComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
