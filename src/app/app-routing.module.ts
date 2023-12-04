import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

const routes: Routes = [
  { path: 'imprint', component: ImprintComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'contact-me', component: ContactMeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: "enabled"})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
