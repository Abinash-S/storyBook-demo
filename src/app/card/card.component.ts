import { Component, Input } from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  imgUrl =
    "https://images.unsplash.com/photo-1638280930541-cb04fd8e1c08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
  @Input()
  title?: string;

  @Input()
  heading?: string;

  @Input()
  content?: string;
}
