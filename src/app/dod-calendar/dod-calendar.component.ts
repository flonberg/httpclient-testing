import { Component, OnInit } from '@angular/core';
import { DatePipe} from '@angular/common';
interface monthSpec {
  date?: Date,
  monthNumber?: number,
  monthName?: string,
};

@Component({
  selector: 'app-dod-calendar',
  templateUrl: './dod-calendar.component.html',
  styleUrls: ['./dod-calendar.component.css']
})
export class DodCalendarComponent implements OnInit {

  date; Date;
  monthNumber;
  datePipe: DatePipe;
  constructor() { }

  ngOnInit() {
    this.monthNumber = 0;
    this.date = new Date();
    this.datePipe = new DatePipe('en-US');
    var monthSped: monthSpec = this.makeMonth(1, this.date);
  }

   makeMonth(n : number, lDate: Date){                              // lDate is for UnitTest
    const LdatePipe = new DatePipe('en-US');                   // use specific date for UnitTest
    this.monthNumber += n;
    var monthSpec = {} as monthSpec;
    monthSpec.date = new Date(lDate.setMonth(lDate.getMonth()+ n));
    monthSpec.monthName = LdatePipe.transform(monthSpec.date, 'MMMM-yyyy');                 // used for the caption on the calendar
    return monthSpec;
   }

   goToMonday(dt: Date ){
    while  (dt.getDay()== 6 || dt.getDay() == 0 ) 
      dt.setDate(dt.getDate() + 1);
    if (dt.getDay() > 1 && dt.getDay() < 6)
      while (dt.getDay() > 1)
        dt.setDate(dt.getDate() -1 )
    return dt;
   }
}
