import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DirectoryComponent } from './directory.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filter.pipe';
import { HttpClientModule } from '@angular/common/http';

describe('DirectoryComponent', () => {
  let component: DirectoryComponent;
  let fixture: ComponentFixture<DirectoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ DirectoryComponent, FilterPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   // expect(component).toBeTruthy();
  // });
});
