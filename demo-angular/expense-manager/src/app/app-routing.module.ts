import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BindingWayComponent } from './binding-way/binding-way.component';
import { ComponentDemoComponent } from './component-demo/component-demo.component';
import { ComponentIfComponent } from './component-if/component-if.component';
import { ComponentPipeComponent } from './component-pipe/component-pipe.component';
import { ComponentRoutingComponent } from './component-routing/component-routing.component';
import { EventBindingComponent } from './event-binding/event-binding.component';

const routes: Routes = [
  {path: 'eventbinding', component: EventBindingComponent},
  {path: 'bindingway', component: BindingWayComponent},
  {path: 'about', component: AboutComponent},
  {path: 'demo', component: ComponentDemoComponent},
  {path: 'pipe', component: ComponentPipeComponent},
  {path: 'routing', component: ComponentRoutingComponent},
  {path: 'if', component: ComponentIfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
