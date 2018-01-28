import {NgModule} from '@angular/core';
import {SharedModule} from '../shared.module';

import {CachingDemo} from './caching-demo';
import {FriendsList} from './friends-list';
import {FriendsService} from './friends-service';

@NgModule({
  imports: [SharedModule],
  providers: [FriendsService],
  declarations: [CachingDemo, FriendsList]    
})
export class RxJsCachingModule {}