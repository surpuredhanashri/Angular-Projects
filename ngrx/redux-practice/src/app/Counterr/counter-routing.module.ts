import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonComponent } from "./counter-button/counter-button.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { counterReducer } from "./CounterState/counter.reducer";

const routes:Routes=[
    {
        path: '',
        component: CounterComponent,
      },
]

@NgModule({
    declarations:[
        CounterComponent,
        CounterButtonComponent,
        CounterOutputComponent,
    ],
    imports:[RouterModule.forChild(routes),CommonModule,FormsModule,StoreModule.forFeature('counter',counterReducer)],
    exports:[RouterModule],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],

})

export class CounterRoutingModule{};
