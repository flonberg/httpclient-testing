import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodCalendarComponent} from './dod-calendar.component';


describe('DodCalendarComponent', () => {
  let component: DodCalendarComponent;
  let fixture: ComponentFixture<DodCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodCalendarComponent);
    component = fixture.componentInstance;
    component.date = new Date("January 17, 2021")
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });


  describe('goForwardToMonday  ', () =>{
    let dodComp = new DodCalendarComponent();
    it('should return 1 for Sat  February 13, 2021', () =>{
      let result = dodComp.goToMonday( new Date('February 13, 2021'));
      expect(result.getDay()).toBe(1)
    })
    it('should return 1 for Sun  February 14, 2021', () =>{
      let result = dodComp.goToMonday( new Date('February 14, 2021'));
      expect(result.getDay()).toBe(1)
    })
    it('should return 1 for Wed  February 18, 2021', () =>{
      let result = dodComp.goToMonday( new Date('February 18, 2021'));
      expect(result.getDay()).toBe(1)
    })
  })
  describe('makeMontN ', () =>{
    let dodComp = new DodCalendarComponent();
    it('shouldContaint Mar for  Sat  February 13, 2021', () =>{
      let result = dodComp.makeMonth(1, new Date('February 13, 2021'));
      expect(result.monthName).toContain('March')
    })
  })
})