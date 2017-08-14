import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes, CanActivate } from '@angular/router';

import { UserRouteAccessService } from '../../shared';
import { JhiPaginationUtil } from 'ng-jhipster';

import { FieldComponent } from './field.component';
import { FieldDetailComponent } from './field-detail.component';
import { FieldPopupComponent } from './field-dialog.component';
import { FieldDeletePopupComponent } from './field-delete-dialog.component';

@Injectable()
export class FieldResolvePagingParams implements Resolve<any> {

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

export const fieldRoute: Routes = [
    {
        path: 'field',
        component: FieldComponent,
        resolve: {
            'pagingParams': FieldResolvePagingParams
        },
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.field.home.title'
        },
        canActivate: [UserRouteAccessService]
    }, {
        path: 'field/:id',
        component: FieldDetailComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.field.home.title'
        },
        canActivate: [UserRouteAccessService]
    }
];

export const fieldPopupRoute: Routes = [
    {
        path: 'field-new',
        component: FieldPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.field.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'field/:id/edit',
        component: FieldPopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.field.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    },
    {
        path: 'field/:id/delete',
        component: FieldDeletePopupComponent,
        data: {
            authorities: ['ROLE_USER'],
            pageTitle: 'fuscApp.field.home.title'
        },
        canActivate: [UserRouteAccessService],
        outlet: 'popup'
    }
];
