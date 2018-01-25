import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login';
import { IonicPageModule } from 'ionic-angular/module';
@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		IonicPageModule.forChild(LoginComponent)
	],
	exports: [
		LoginComponent
	]
})
export class ComponentsModule { }
