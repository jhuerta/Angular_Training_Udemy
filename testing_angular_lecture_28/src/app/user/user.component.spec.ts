import { TestBed, ComponentFixture, async } from "@angular/core/testing";

import { UserComponent } from "./user.component";
import { UserService } from "./user.service";

describe("Component: User", () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  });

  it("should create the app", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it("should use the user name from the service", () => {
    let fixture = TestBed.createComponent(UserComponent);
    let app = fixture.debugElement.componentInstance;
    let userService = fixture.debugElement.injector.get(UserService);
    expect(userService.user.name).toEqual(app.user.name);
  });
});
