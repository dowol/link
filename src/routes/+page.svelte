<script lang="ts">

import LinkItem from "./LinkItem.svelte";
import linkData from "$data/links.json";



</script>

<svelte:head>
    <title>@Dowol</title>
    <meta name="description" content="Dowol's links"/>
</svelte:head>

<article id="profile">

</article>

<article id="links">
    <nav class="nav-links">
        {#each linkData as item}
            <LinkItem data="{item}" />
        {/each}
    </nav>
</article>

<style lang="scss">
    #links {
      > nav.nav-links {
        margin: 0 auto;
        width: 100%;

        @media(min-width: 480px) {
          max-width: 480px;
        }

      }
    }
</style>
