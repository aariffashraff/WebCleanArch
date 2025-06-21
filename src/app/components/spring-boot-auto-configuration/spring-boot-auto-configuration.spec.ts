import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpringBootAutoConfiguration } from './spring-boot-auto-configuration';

describe('SpringBootAutoConfiguration', () => {
  let component: SpringBootAutoConfiguration;
  let fixture: ComponentFixture<SpringBootAutoConfiguration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpringBootAutoConfiguration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpringBootAutoConfiguration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
