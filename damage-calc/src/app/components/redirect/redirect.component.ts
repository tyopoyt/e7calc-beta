import { Component, OnDestroy, OnInit } from '@angular/core';
import { HeaderCardComponentColorOption, HeaderCardComponentSizeOption } from '../ui-elements/header-card/header-card.component';
import { LanguageService } from 'src/app/services/language.service';
import { ActivatedRoute } from '@angular/router';
import { Languages } from 'src/app/models/languages';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss']
})
export class RedirectComponent implements OnInit, OnDestroy {
  HeaderCardComponentColorOption = HeaderCardComponentColorOption;
  HeaderCardComponentSizeOption = HeaderCardComponentSizeOption;

  header = 'No active Beta is available!';
  redirectText = 'There is not currently an active beta available for E7Calc!  You will be automatically redirected to '
  redirectURL = '';

  private subscription: Subscription = new Subscription();
  redirectTime = 10;

  constructor(private route: ActivatedRoute, public languageService: LanguageService) { }

  ngOnInit() {
    // initialize language with param from url
    let langParam = this.route.snapshot.paramMap.get('lang') || 'us';
  
    if (langParam.startsWith('zh')) {
      langParam = langParam.replace('zh', '').toLowerCase();
    } else if (langParam.startsWith('pt')) {
      langParam = langParam.replace('pt', '').toLowerCase();
    }
  
    this.languageService.setLanguage(Languages[langParam]);
    this.redirectURL = `https://e7calc.xyz/${langParam === 'us' ? '' : langParam  + '/'}`;
    this.redirectText = `${this.redirectText}${this.redirectURL}`
    this.startCountdown();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  startCountdown() {
    const source = timer(0, 1000); // Emits every second
    this.subscription = source.subscribe(() => {
      if (this.redirectTime > 0) {
        this.redirectTime--;
      }
      else {
        this.subscription.unsubscribe();
        window.location.href = this.redirectURL;
      }
    });
  }

}
