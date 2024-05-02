import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { MembersComponent } from './members/members.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'tournaments', component: TournamentsComponent}
];
