import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentDemoComponent } from './component-demo/component-demo.component';
import { ComponentIfComponent } from './component-if/component-if.component';
import { BindingWayComponent } from './binding-way/binding-way.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { ComponentPipeComponent } from './component-pipe/component-pipe.component';
import { ComponentRoutingComponent } from './component-routing/component-routing.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceComponent } from './service/service.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { PipeTemplateComponent } from './pipe-template/pipe-template.component';
import { ServiceTemplateComponent } from './service-template/service-template.component';
import { BoldDirective } from './Directive/bold.directive';
import { Font20pxDirective } from './Directive/font-20px.directive';
import { StudentRegistrationComponent } from './student-register/student-registration/student-registration.component';
import { StudentFormComponent } from './student-register/student-form/student-form.component';

// Như là một nơi để quản lý toàn bộ các Component, Service, Directive trong project
// Rất quan trọng
// Nếu đã khai báo Component, Service,... nhưng không định nghĩa trong đây thì có sao không?
// Nếu có định nghĩa trong đây mà không tồn tại thì có sao không?


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
    HomeComponent,
    PageNotFoundComponent,
    ServiceComponent,
    NgTemplateComponent,
    PipeTemplateComponent,
    ServiceTemplateComponent,
    BoldDirective,
    Font20pxDirective,
    StudentRegistrationComponent,
    StudentFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
