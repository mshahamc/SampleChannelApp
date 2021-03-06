import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { initializeComplete, InteractionStates, setAppHeight } from '@amc-technology/davinci-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewChecked {
  title = 'SampleChannelApp';

  calls: { id: string, number: string }[] = [];
  phoneNumbers = [
    '555-123-4567',
    '555-867-5309',
    '555-000-0001',
    '555-999-9999',
  ];
  nextPhoneNumberIndex = 0;

  ngOnInit() {
    initializeComplete();
  }

  ngAfterViewChecked() {
    setAppHeight(document.body.clientHeight);
  }

  newCall() {
    this.calls = [... this.calls, {
      id: `Call-${Math.random()}`,
      number: this.getNextPhoneNumber()
    }];
  }

  private getNextPhoneNumber() {
    const result = this.phoneNumbers[this.nextPhoneNumberIndex];
    this.nextPhoneNumberIndex = (this.nextPhoneNumberIndex + 1) % this.phoneNumbers.length;
    return result;
  }

  removeCall(id: string) {
    this.calls = this.calls.filter(call => call.id !== id);
  }
}
