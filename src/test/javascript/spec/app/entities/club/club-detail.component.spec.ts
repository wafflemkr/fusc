/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { JhiDateUtils, JhiDataUtils, JhiEventManager } from 'ng-jhipster';
import { FuscTestModule } from '../../../test.module';
import { MockActivatedRoute } from '../../../helpers/mock-route.service';
import { ClubDetailComponent } from '../../../../../../main/webapp/app/entities/club/club-detail.component';
import { ClubService } from '../../../../../../main/webapp/app/entities/club/club.service';
import { Club } from '../../../../../../main/webapp/app/entities/club/club.model';

describe('Component Tests', () => {

    describe('Club Management Detail Component', () => {
        let comp: ClubDetailComponent;
        let fixture: ComponentFixture<ClubDetailComponent>;
        let service: ClubService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [FuscTestModule],
                declarations: [ClubDetailComponent],
                providers: [
                    JhiDateUtils,
                    JhiDataUtils,
                    DatePipe,
                    {
                        provide: ActivatedRoute,
                        useValue: new MockActivatedRoute({id: 123})
                    },
                    ClubService,
                    JhiEventManager
                ]
            }).overrideTemplate(ClubDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ClubDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(ClubService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
            // GIVEN

            spyOn(service, 'find').and.returnValue(Observable.of(new Club(10)));

            // WHEN
            comp.ngOnInit();

            // THEN
            expect(service.find).toHaveBeenCalledWith(123);
            expect(comp.club).toEqual(jasmine.objectContaining({id: 10}));
            });
        });
    });

});
