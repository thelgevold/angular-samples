import {provide} from '@angular/core';
import {inject, TestBed} from '@angular/core/testing';
import {Observable} from 'rxjs/Observable';

import {LogDemo} from './log-demo';
import {LogAction} from './log-action';
import {LogEntry} from './log-entry';
import {Store} from './store';
import {HTTP_PROVIDERS} from '@angular/http';
import {LogTailService} from './log-tail-service';

export function main() {

    const mockLogEntries = {entries:[new LogEntry('error',2)]};

    describe('LogDemo', () => {

        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [LogDemo, Store, HTTP_PROVIDERS, {provide:LogTailService, useClass:LogTailServiceMock}]
            });
        });

        class LogTailServiceMock{
            getLogEntries(){
                console.log('mock log returned');
                return Observable.of(mockLogEntries);
            }
        }

        it('should initialize', inject([LogDemo], (logDemo) => {

            spyOn(logDemo.store,'dispatchAction');

            logDemo.ngOnInit();

            expect(logDemo.store.dispatchAction).toHaveBeenCalledWith(new LogAction('LOAD_ENTRIES',mockLogEntries.entries));

        }));

    });

}
