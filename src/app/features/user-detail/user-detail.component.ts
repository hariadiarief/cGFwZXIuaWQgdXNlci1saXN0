import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router'
import { UserService } from '../../services/user.services'
import { IUser } from '../../types/user.types'
import { NgIcon, provideIcons } from '@ng-icons/core'
import { bootstrapChevronLeft } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NgIcon
  ],
  viewProviders: [provideIcons({ bootstrapChevronLeft })],
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent {
  user: IUser | undefined
  isLoading = true
  isError = false

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const userId = `${this.route.snapshot.paramMap.get('id')}`
    this.userService.getUserDetail(userId).subscribe({
      next: data => {
        this.user = data
        this.isLoading = false
      },
      error: () => {
        this.user = undefined
        this.isLoading = false
        this.isError = true
      },
    })
  }
}
