import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestForNgrxComponent } from './test-for-ngrx.component';

describe('TestForNgrxComponent', () => {
  let component: TestForNgrxComponent;
  let fixture: ComponentFixture<TestForNgrxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestForNgrxComponent]
    });
    fixture = TestBed.createComponent(TestForNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
