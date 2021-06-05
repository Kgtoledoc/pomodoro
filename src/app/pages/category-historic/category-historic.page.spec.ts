import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoryHistoricPage } from './category-historic.page';

describe('CategoryHistoricPage', () => {
  let component: CategoryHistoricPage;
  let fixture: ComponentFixture<CategoryHistoricPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoryHistoricPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryHistoricPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
