import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    { path: '', redirectTo: 'userlist', pathMatch: 'full' },
    { path: 'userlist', component: UserListComponent },
    { path: 'profile', component: ProfileComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
