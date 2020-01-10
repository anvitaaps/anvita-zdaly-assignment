import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';
import { AppComponent } from './app.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatCardModule, MatTableModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { FusionChartsModule } from 'angular-fusioncharts';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load themes
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(
  FusionCharts,
  Charts,
  FusionTheme
)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
