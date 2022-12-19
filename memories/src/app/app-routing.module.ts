import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './components/directives/directives.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { ParentComponentComponent } from './components/parent-component/parent-component.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';

const routes: Routes = [
  { path: '', component: FirstComponentComponent },
  { path: 'list', component: ListRenderComponent },
  { path: 'page1', component: ParentComponentComponent },
  { path: 'page2', component: DirectivesComponent },
  { path: 'page3', component: IfRenderComponent },
  { path: 'page4', component: EventosComponent },
  { path: 'page5', component: EmitterComponent },
  { path: 'page6', component: PipesComponent },
  { path: 'page7', component: TwoWayBindingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
