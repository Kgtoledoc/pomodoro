import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaskHistoricPage } from './task-historic.page';

describe('TaskHistoricPage', () => {
  let component: TaskHistoricPage;
  let fixture: ComponentFixture<TaskHistoricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskHistoricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaskHistoricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
