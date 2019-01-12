export class FriendsService {
  getFriends() {
    return fetch('/api/friends')
           .then(data => data.json())
           .then(data => data.friends);
  }
} 