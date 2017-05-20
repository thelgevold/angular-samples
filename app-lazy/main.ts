import { platformBrowser }    from '@angular/platform-browser';
import { enableProdMode } from '@angular/core';

import { AppModuleNgFactory } from './aot/app-lazy/app.module.ngfactory';

enableProdMode();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
