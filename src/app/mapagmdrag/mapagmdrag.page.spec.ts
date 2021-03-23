import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MapagmdragPage } from './mapagmdrag.page';

describe('MapagmdragPage', () => {
  let component: MapagmdragPage;
  let fixture: ComponentFixture<MapagmdragPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapagmdragPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MapagmdragPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
