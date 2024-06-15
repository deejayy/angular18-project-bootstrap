import { ApplicationInitStatus, Injectable } from '@angular/core';
import { ApiConnector } from '@deejayy/api-caller';
import { ReactiveConfigService } from '@deejayy/reactive-config';
import { Observable, of } from 'rxjs';
import { ConfigVars } from 'src/app/app.module';

@Injectable()
export class CustomApiConnector extends ApiConnector {
  public override tokenData$!: Observable<string>;

  public override defaultApiUrl = 'https://replace-this-url.com/';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public override errorHandler = (payload: any) => {
    console.warn('handling... ', payload);
  };

  constructor(private config: ReactiveConfigService<ConfigVars>, private initStatus: ApplicationInitStatus) {
    super();
    this.initStatus.donePromise.then(() => {
      this.defaultApiUrl = this.config.get('apiUrl');
      this.tokenData$ = of('here you can get the token stream from a service');
    });
  }
}
