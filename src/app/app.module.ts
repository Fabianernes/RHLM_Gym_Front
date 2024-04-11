import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {ConfirmService} from "./shared/confirm/service/confirm.service";
import {SnackbarService} from "./shared/snackbar/service/snackbar.service";
import { LoginComponent } from './public/login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {SnackbarModule} from "./shared/snackbar/snackbar.module";
import {ConfirmModule} from "./shared/confirm/confirm.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatGridListModule} from "@angular/material/grid-list";
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {DatePipe} from "@angular/common";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    SnackbarModule,
    ConfirmModule,
    MatToolbarModule,
    MatDialogModule,
    MatGridListModule,
    FlexLayoutModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatButtonToggleModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
  ],
  providers: [
    SnackbarService,
    ConfirmService,
    {
      provide:MatDialogRef,
      useValue:{}
    },
    DatePipe,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
