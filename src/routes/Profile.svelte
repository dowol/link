<script lang="ts">
    import profile from '$data/profile.json';
    import profilePicture from '$data/profile.png';

</script>

<div class="profile">
    <img src={profilePicture} class="profile-picture" alt={profile.name}/>
    <div class="profile-text">
        <h1 class="name">@{profile.name}</h1>
        <p class="description">{profile.description}</p>
    </div>
</div>

<style lang="scss">
  .profile {
    padding: .5rem 1rem;

    @media(min-width: 480px){
      padding: .5rem 2rem;
    }

    @media(min-width: 720px){
      padding: .5rem 3rem;
    }

    @media(min-width: 960px){
      padding: .5rem 4rem;
    }
    @media(min-width: 1280px){
      padding: .5rem 5rem;
    }

    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .profile * {
    color: white;
  }

  .profile > .profile-text {
    flex-grow: .9;
    text-align: center;

    > * {
      margin: 0;
    }

    > h1.name {
      font-family: var(--font-title);
      font-size: 1.875rem;
    }

    > p.description{
      font-size: .875rem;
    }
  }

  img.profile-picture {
    $size: 3.5rem;
    width: $size;
    height: $size;
    background-color: whitesmoke;
    border-radius: calc($size / 2);
  }
</style>