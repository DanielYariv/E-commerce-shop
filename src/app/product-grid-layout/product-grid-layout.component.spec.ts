import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductGridLayoutComponent } from './product-grid-layout.component';

describe('ProductGridLayoutComponent', () => {
  let component: ProductGridLayoutComponent;
  let fixture: ComponentFixture<ProductGridLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGridLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductGridLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
