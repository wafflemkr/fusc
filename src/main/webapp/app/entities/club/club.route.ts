import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { ClubComponent } from './club.component';
import { ClubDetailComponent } from './club-detail.component';
import { ClubPopupComponent } from './club-dialog.component';
import { ClubDeletePopupComponent } from './club-delete-dialog.component';

@Injectable()
export class ClubResolvePagingParams implements Resolve<any> {

    constructor(private paginationUtil: JhiPaginationUtil) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const page = route.queryParams['page'] ? route.queryParams['page'] : '1';
        const sort = route.queryParams['sort'] ? route.queryParams['sort'] : 'id,asc';
        return {
            page: this.paginationUtil.parsePage(page),
            predicate: this.paginationUtil.parsePredicate(sort),
            ascending: this.paginationUtil.parseAscending(sort)
      };
    }
}

export const clubRoute: Routes = [
    {
        path: 'club',
        component: ClubComponent,
        resolve: {
            'pagingParams': ClubResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.club.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'club/:id',
        component: ClubDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.club.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const clubPopupRoute: Routes = [
    {
        path: 'club-new',
        component: ClubPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.club.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'club/:id/edit',
        component: ClubPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.club.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'club/:id/delete',
        component: ClubDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.club.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
