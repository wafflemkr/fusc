import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Field } from './field.model';
import { FieldPopupService } from './field-popup.service';
import { FieldService } from './field.service';
import { Club, ClubService } from '../club';
import { ResponseWrapper } from '../../shared';

@Component({
    selector: 'jhi-field-dialog',
    templateUrl: './field-dialog.component.html'
})
export class FieldDialogComponent implements OnInit {

    field: Field;
    isSaving: boolean;

    clubs: Club[];

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private fieldService: FieldService,
        private clubService: ClubService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
        this.clubService.query()
            .subscribe((res: ResponseWrapper) => { this.clubs = res.json; }, (res: ResponseWrapper) => this.onError(res.json));
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.field.id !== undefined) {
            this.subscribeToSaveResponse(
                this.fieldService.update(this.field));
        } else {
            this.subscribeToSaveResponse(
                this.fieldService.create(this.field));
        }
    }

    private subscribeToSaveResponse(result: Observable<Field>) {
        result.subscribe((res: Field) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Field) {
        this.eventManager.broadcast({ name: 'fieldListModification', content: 'OK'});
        this.isSaving = false;
        this.activeModal.dismiss(result);
    }

    private onSaveError(error) {
        try {
            error.json();
        } catch (exception) {
            error.message = error.text();
        }
        this.isSaving = false;
        this.onError(error);
    }

    private onError(error) {
        this.alertService.error(error.message, null, null);
    }

    trackClubById(index: number, item: Club) {
        return item.id;
    }
}

@Component({
    selector: 'jhi-field-popup',
    template: ''
})
export class FieldPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private fieldPopupService: FieldPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.fieldPopupService
                    .open(FieldDialogComponent as Component, params['id']);
            } else {
                this.fieldPopupService
                    .open(FieldDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
