import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import localePl from '@angular/common/locales/pl';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailsComponent } from './components/products/product-details/product-details.component';
import { ProductDataComponent } from './components/products/product-data/product-data.component';
import { CartComponent } from './components/cart/cart.component';
import { FilterPanelComponent } from './components/filter-panel/filter-panel.component';
import { ProductDeleteComponent } from './components/products/product-delete.component';
import { QuantityPanelComponent } from './components/products/quantity-panel/quantity-panel.component';
import { NewOrderComponent } from './components/new-order/new-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { RouterModule } from "@angular/router";
import { MatButtonModule } from "@angular/material/button";
import { MatGridListModule } from "@angular/material/grid-list";
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarModule } from "@angular/material/snack-bar";
import { MatStepperModule } from "@angular/material/stepper";
import { MatCardModule } from "@angular/material/card";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatDialogModule } from "@angular/material/dialog";
import { MatExpansionModule } from "@angular/material/expansion";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgxPermissionsGuard, NgxPermissionsModule } from 'ngx-permissions';
import { RequestInterceptor } from "../authentication/request.interceptor";
import { AuthenticationGuard } from "../authentication/authentication.guard";
import { FlexLayoutModule } from "@angular/flex-layout";
import { registerLocaleData } from "@angular/common";
import { MatBadgeModule } from "@angular/material/badge";
import { MatRadioModule } from "@angular/material/radio";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CurrencyPLNPipe } from './pipes/currency-pln.pipe';
import { CustomDatePipe } from './pipes/custom-date.pipe';

registerLocaleData(localePl);

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        ProductsComponent,
        ProductDetailsComponent,
        CartComponent,
        ProductDataComponent,
        FilterPanelComponent,
        ProductDeleteComponent,
        QuantityPanelComponent,
        NewOrderComponent,
        OrdersComponent,
        CurrencyPLNPipe,
        CustomDatePipe
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule.forRoot([
            {
                path: "",
                component: HomeComponent,
                canActivate: [AuthenticationGuard],
                data: {canAnonymous: true}
            },
            {
                path: "login",
                component: LoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {permissions: {only: 'GUEST', redirectTo: '/'}}
            },
            {
                path: "register",
                component: RegisterComponent,
                canActivate: [NgxPermissionsGuard],
                data: {permissions: {only: 'GUEST', redirectTo: '/'}}
            },
            {
                path: "products",
                component: ProductsComponent,
                canActivate: [NgxPermissionsGuard, AuthenticationGuard],
                data: {permissions: {except: 'GUEST', redirectTo: '/login'}}
            },
            {
                path: "cart",
                component: CartComponent,
                canActivate: [NgxPermissionsGuard, AuthenticationGuard],
                data: {permissions: {except: 'GUEST', redirectTo: '/login'}}
            },
            {
                path: "newOrder",
                component: NewOrderComponent,
                canActivate: [NgxPermissionsGuard, AuthenticationGuard],
                data: {permissions: {except: 'GUEST', redirectTo: '/login'}}
            },
            {
                path: "orders",
                component: OrdersComponent,
                canActivate: [NgxPermissionsGuard, AuthenticationGuard],
                data: {permissions: {except: 'GUEST', redirectTo: '/login'}}
            }
        ]),
        NgxPermissionsModule.forRoot(),
        MatToolbarModule,
        BrowserAnimationsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        MatStepperModule,
        MatGridListModule,
        MatCardModule,
        MatPaginatorModule,
        MatDialogModule,
        FlexLayoutModule,
        MatExpansionModule,
        MatBadgeModule,
        MatRadioModule,
        MatTableModule,
        MatSortModule,
        MatProgressSpinnerModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: RequestInterceptor,
            multi: true
        },
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: {
                duration: 3000,
                horizontalPosition: "center",
                verticalPosition: "bottom"
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}