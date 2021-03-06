import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NotasComponent } from './notas/notas.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoService } from './aluno/aluno.service';
import { MonitorComponent } from './monitor/monitor.component'
import { MonitorService } from './monitor/monitor.service'

@NgModule({
  declarations: [
    AppComponent,
    AlunoComponent,
    NotasComponent,
    MonitorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'register',
        component: AlunoComponent
      },
      {
        path: 'notas',
        component: NotasComponent
      },
      {
        path: 'register',
        component: MonitorComponent
      }
    ])
  ],
  providers: [AlunoService, MonitorComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
