<script lang="ts">
    import './styles.css';
    import profilePicture from "$data/profile.png";
    import profile from "$data/profile.json";


</script>

<header>
    <div class="profile">
        <img src={profilePicture} class="profile-picture" alt={profile.name}/>
        <h1 class="name">@{profile.name}</h1>
    </div>
</header>

<main>
    <slot/>
</main>

<footer>
    <p class="copyright">
        Copyright 2023 <strong>Dowol</strong>.<br/>
        All rights reserved.
    <p class="powered-by">
        Powered by <a href="https://simpleicons.org/">Simple Icons</a>
    </p>
</footer>

<style lang="scss">
  $footer-height: 4.5rem;

  header {
    width: 100%;
    min-height: $footer-height;
    position: sticky;
    top: 0;
    left: 0;
    background-color: #8f642d;

    .profile {
      padding: .5rem 1rem;

      @media(min-width: 480px) {
        padding: .5rem 2rem;
      }

      @media(min-width: 720px) {
        padding: .5rem 3rem;
      }

      @media(min-width: 960px) {
        padding: .5rem 4rem;
      }
      @media(min-width: 1280px) {
        padding: .5rem 5rem;
      }

      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
      height: 100%;
    }

    h1.name {
      font-family: var(--font-title);
      font-size: 1.875rem;
      color: white;
    }

  }

  img.profile-picture {
    $size: 3.5rem;
    width: $size;
    height: $size;
    background-color: whitesmoke;
    border-radius: calc($size / 2);
  }

  main {
    min-height: calc(100vh - ($footer-height * 2) - 1rem);
    padding: .5rem;
  }

  footer {
    width: calc(100%);
    height: $footer-height;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;

    > p {
      margin: 0;
      text-align: center;
      font-size: 1rem;

      > br {
        display: inline-block;

        @media(min-width: 360px) {
          display: none;
        }
      }

      > a {
        color: dodgerblue;
        font-weight: bold;
      }
    }

  }
</style>
