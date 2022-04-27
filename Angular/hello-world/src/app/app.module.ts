import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { EventBinding1Component } from './event-binding1/event-binding1.component';
import { EventBinding2Component } from './event-binding2/event-binding2.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';
import { IfdirectiveComponent } from './ifdirective/ifdirective.component';
import { ForDirectiveComponent } from './for-directive/for-directive.component';
import { SwitchDirectivComponent } from './switch-directiv/switch-directiv.component';
import { ParentComponent } from './parent/parent.component';
import { Chlid1Component } from './chlid1/chlid1.component';
import { Chlid2Component } from './chlid2/chlid2.component';
import { InbuildPipeComponent } from './inbuild-pipe/inbuild-pipe.component';
import {  SummaryPipe } from './summery.pipe';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course.service';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { FollowerComponent } from './follower/follower.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { QueryparameterComponent } from './queryparameter/queryparameter.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DemoBootstrapComponent } from './demo-bootstrap/demo-bootstrap.component';
import { DemoTdfComponent } from './demo-tdf/demo-tdf.component';
import { SpringCComponent } from './spring-c/spring-c.component'

@NgModule({
  declarations: [
    AppComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBinding1Component,
    EventBinding2Component,
    TwoWayBindingComponent,
    IfdirectiveComponent,
    ForDirectiveComponent,
    SwitchDirectivComponent,
    ParentComponent,
    Chlid1Component,
    Chlid2Component,
    InbuildPipeComponent,
    SummaryPipe,
    CustomPipeComponent,
    CourseComponent,
    PostComponent,
    HomeComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    FollowerComponent,
    MyfollowerComponent,
    QueryparameterComponent,
    NotfoundComponent,
    DemoBootstrapComponent,
    DemoTdfComponent,
    SpringCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
