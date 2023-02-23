import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BindingWayComponent } from './binding-way/binding-way.component';
import { ComponentDemoComponent } from './component-demo/component-demo.component';
import { ComponentIfComponent } from './component-if/component-if.component';
import { ComponentPipeComponent } from './component-pipe/component-pipe.component';
import { ComponentRoutingComponent } from './component-routing/component-routing.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipeTemplateComponent } from './pipe-template/pipe-template.component';
import { ServiceTemplateComponent } from './service-template/service-template.component';
import { StudentRegistrationComponent } from './student-register/student-registration/student-registration.component';
import { StudentFormComponent } from './student-register/student-form/student-form.component';

//student-form
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'eventbinding', component: EventBindingComponent},
  {path: 'bindingway', component: BindingWayComponent},
  {path: 'ng-template', component: NgTemplateComponent},
  {path: 'pipe', component: PipeTemplateComponent},
  {path: 'service', component: ServiceTemplateComponent},
  {path: 'student-registor', component: StudentRegistrationComponent},
  {path: 'student-form', component: StudentFormComponent},
  {path: 'demo', component: ComponentDemoComponent},
  {path: 'pipe', component: ComponentPipeComponent},
  {path: 'routing', component: ComponentRoutingComponent},
  {path: 'if', component: ComponentIfComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
