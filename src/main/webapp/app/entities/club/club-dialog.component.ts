import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { Club } from './club.model';
import { ClubPopupService } from './club-popup.service';
import { ClubService } from './club.service';

@Component({
    selector: 'jhi-club-dialog',
    templateUrl: './club-dialog.component.html'
})
export class ClubDialogComponent implements OnInit {

    club: Club;
    isSaving: boolean;

    constructor(
        public activeModal: NgbActiveModal,
        private alertService: JhiAlertService,
        private clubService: ClubService,
        private eventManager: JhiEventManager
    ) {
    }

    ngOnInit() {
        this.isSaving = false;
    }

    clear() {
        this.activeModal.dismiss('cancel');
    }

    save() {
        this.isSaving = true;
        if (this.club.id !== undefined) {
            this.subscribeToSaveResponse(
                this.clubService.update(this.club));
        } else {
            this.subscribeToSaveResponse(
                this.clubService.create(this.club));
        }
    }

    private subscribeToSaveResponse(result: Observable<Club>) {
        result.subscribe((res: Club) =>
            this.onSaveSuccess(res), (res: Response) => this.onSaveError(res));
    }

    private onSaveSuccess(result: Club) {
        this.eventManager.broadcast({ name: 'clubListModification', content: 'OK'});
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
}

@Component({
    selector: 'jhi-club-popup',
    template: ''
})
export class ClubPopupComponent implements OnInit, OnDestroy {

    routeSub: any;

    constructor(
        private route: ActivatedRoute,
        private clubPopupService: ClubPopupService
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe((params) => {
            if ( params['id'] ) {
                this.clubPopupService
                    .open(ClubDialogComponent as Component, params['id']);
            } else {
                this.clubPopupService
                    .open(ClubDialogComponent as Component);
            }
        });
    }

    ngOnDestroy() {
        this.routeSub.unsubscribe();
    }
}
