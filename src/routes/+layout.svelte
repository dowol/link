<script>
    import Header from './Header.svelte';
    import './styles.css';
    import Profile from "./Profile.svelte";
</script>

<header>
    <Profile/>
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
