import {provide} from 'angular2/core';
import {describe,expect,it,xit, inject, beforeEachProviders} from 'angular2/testing';
import {Observable} from 'rxjs/Rx';

import {LogDemo} from './log-demo';
import {LogAction} from './log-action';
import {LogEntry} from './log-entry';
import {Store} from './store';
import {HTTP_PROVIDERS} from 'angular2/http';
import {LogTailService} from './log-tail-service';

export function main() {

    const mockLogEntries = {entries:[new LogEntry('error',2)]};

    describe('LogDemo', () => {

        class LogTailServiceMock{
            getLogEntries(){
                console.log('mock log returned');
                return Observable.of(mockLogEntries);
            }
        }

        beforeEachProviders(() => [
            LogDemo,
            Store,
            HTTP_PROVIDERS,
            provide(LogTailService,{useClass:LogTailServiceMock})
        ]);

        it('should initialize', inject([LogDemo], (logDemo) => {

            spyOn(logDemo.store,'dispatchAction');

            logDemo.ngOnInit();

            expect(logDemo.store.dispatchAction).toHaveBeenCalledWith(new LogAction('LOAD_ENTRIES',mockLogEntries.entries));

        }));

    });

}
