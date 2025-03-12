import { Component, computed, Input, input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  //decorator approach
  @Input({required: true}) avatar!: string;
  @Input({required:true}) name!: string;
  //use signals

  //alternative approch with input function
  // avatar = input.required<string>();
  // name = input.required<string>();

  //imagePath = computed(() => 'assets/users/' + this.avatar());

get imagePath() {
  return 'assets/users/' + this.avatar;
}

  onSelectUser() {
    
  }

}
