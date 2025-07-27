import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter, withInMemoryScrolling,  } from '@angular/router';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import {importProvidersFrom } from '@angular/core';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()   ),
   

    provideRouter(
      routes ,

    //  when the page has conenet large that have scroll i want when open page start from top for example 
    // 3 types 
    // 1- disabled default  means  لما يتحرك من روت ل التانية مش بيرجع السكرول ل فوق 
    // 2-  top  ده بقا بيرجع ل فوق بس لو عملت باك هيرجع بردو ل فوق و ده مش احسن حاج=ة 
    // 3-  enabled  ده علشان احل التوب اني لما ارجع ينزلني عند نفس الحته اللي انا كنت فيها 
    
      withInMemoryScrolling({scrollPositionRestoration:"enabled"})),
    
  
  ]
};


