<div>
  {#each friends as f}
  <Friend friend="{f}"></Friend>
  {/each}
</div>
<script>
  import {onMount} from 'svelte';
  import {FriendsService} from './friends-service';
  import Friend from './Friend.svelte';

  let friendsService = new FriendsService();
  let friends = [];

  onMount(async () => {
    friends = await friendsService.getFriends();
  });
</script>
