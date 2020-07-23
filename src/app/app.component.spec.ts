import {TestBed, async} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {browser, logging} from 'protractor';

// 测试入口，参数为测试名和方法
describe('AppComponent', () => {
  // 每个测试定义的 SetUp 方法
  beforeEach(async(() => {
    console.log('start app test');
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  // 测试用例
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'awesome-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // 断言使用
    expect(app.title).toEqual('awesome-angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    // 使用 QuerySelector 获取页面元素
    expect(compiled.querySelector('.content span').textContent).toContain('awesome-angular app is running!');
  });

  // 每个测试的 TearDown
  afterEach(async () => {
    console.log('end app test');
  });

});
