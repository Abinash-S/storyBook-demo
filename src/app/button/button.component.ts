import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input()
  primary = false;

  @Input()
  backgroundColor?: string;

  @Input()
  size: "small" | "medium" | "large" = "medium";

  @Input()
  label = "click me";

  @Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary
      ? "storybook-button--primary"
      : "storybook-button--secondary";

    return ["storybook-button", `storybook-button--${this.size}`, mode];
  }
}
