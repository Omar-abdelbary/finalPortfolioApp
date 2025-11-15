import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlcssComponent } from './htmlcss.component';

describe('HtmlcssComponent', () => {
  let component: HtmlcssComponent;
  let fixture: ComponentFixture<HtmlcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlcssComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
