import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewGoalsPage } from './new-goals.page';

describe('NewGoalsPage', () => {
  let component: NewGoalsPage;
  let fixture: ComponentFixture<NewGoalsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewGoalsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewGoalsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
