import { Component, OnInit } from '@angular/core';
import { DatePipe} from '@angular/common';
import * as moment from 'moment';
interface monthSpec {
  date?: Date,
  monthNumber: number,
  monthName: string,
  firstDateOnCalendar: Date,
  firstDateOnCalendarString: string
};
interface dateBox { 
  isInCurrMonth?: string;
  isToday?: string;
  date: Date;
  dateString?: string
  dayLabel?: string;
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
    var tst = 4.31334;
    var monthSped: monthSpec = this.makeMonth(1, this.date);
  }
  /**
   *  create instance of monthSpec interface which spefies the first date on the calendar for that month
   *  e.g. March 29 for April 2021 
   */
   makeMonth(n : number, lDate: Date): monthSpec{                              // lDate is for UnitTest
    const LdatePipe = new DatePipe('en-US');                   // use specific date for UnitTest
    this.monthNumber += n;
    var monthSpec = {} as monthSpec;
    monthSpec.date = new Date(lDate.setMonth(lDate.getMonth()+ n));
    monthSpec.monthName = LdatePipe.transform(monthSpec.date, 'MMMM-yyyy');                 // used for the caption on the calendar
    let firstDateOfMonth = new Date(monthSpec.date.getFullYear(), monthSpec.date.getMonth(), 1);
    monthSpec.firstDateOnCalendar = this.goToMonday(firstDateOfMonth);
    monthSpec.firstDateOnCalendarString = LdatePipe.transform(monthSpec.firstDateOnCalendar, 'Y-m-d')
    return monthSpec;
   }
   goToMondayMoment(dt: moment.Moment){
    while  (dt.day()== 6 || dt.day() == 0 )           // if it is a weekend go FORWARD
      dt.add(1, 'd')
    if (dt.day() > 1 && dt.day() < 6)                 // if it is a weekday go BACKWARD
      while (dt.day() > 1)
        dt.subtract(1, 'd')
  console.log("66 goToMonday %o", dt) 
  return dt;
   }

   /**
   *  Goes forward to Monday if arg is a weekend, or back to Monday if arg is weekday other than
   */
   goToMonday (dt: Date ): Date{                                   // take a date and go to Monday 
    while  (dt.getDay()== 6 || dt.getDay() == 0 )           // if it is a weekend go FORWARD
      dt.setDate(dt.getDate() + 1);
    if (dt.getDay() > 1 && dt.getDay() < 6)                 // if it is a weekday go BACKWARD
      while (dt.getDay() > 1)
        dt.setDate(dt.getDate() -1 )
    return dt;
   }
   makeDaysOfWeek(monDate: Date) {
     const LdatePipe = new DatePipe('en-US');                   // use specific date for UnitTest
     var aDateBox = {} as dateBox;
     for (let i = 0; i < 5; i++){
      aDateBox.date = monDate;
      aDateBox.dateString =  LdatePipe.transform(monDate, 'Y-m-d');
     }
     return aDateBox;
   }
}
