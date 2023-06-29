<script lang="ts">
    import {icons as simpleIcons} from '$lib/simple-icons.json';
    import copyLinkIcon from '$lib/images/copy-link.svg';

    export let data: LinkData;

    let {platform, username, description, address, dark} = data;

    let href = data?.address ? ('mailto:' + address) : data?.href ?? '';
    let icon = data?.icon ?? platform;
    let title = data?.title ?? capitalize(platform);

    function getIcon(): string {
        try {
            return 'https://cdn.simpleicons.org/' + icon + '/white';
        } catch (e) {
            console.error(e);
            return '';
        }
    }

    function linkColor(): string {
        try {
            return '#' + simpleIcons.find(item => item.title.replaceAll(/\s/g, '').toLowerCase() == icon.toLowerCase()).hex;
        } catch (e) {
            console.error(e);
            return '#444';
        }
    }

    function capitalize(str: string): string {
        return str[0].toUpperCase() + str.slice(1);
    }

    function className(): string {
        return 'link-item' + (dark ? ' dark' : '');
    }
</script>

<a class={className()} style="--link-color: {linkColor()}" href={href ?? ''} target={href ? "_blank" : "_self"}>
    <img class="link-icon" src={getIcon()} alt={platform}/>
    <div class="link-msg">
        <div class="link-msg-platform">
            <span class="link-title">{title}</span>
            {#if username}
                <span class="link-username">@{username}</span>
            {:else if address}
                <span class="link-address">{address}</span>
            {/if}
        </div>
        {#if description}
            <p class="link-msg-description">
                {description}
            </p>
        {/if}
    </div>
</a>


<style lang="scss">

  .link-item {
    $link-color: var(--link-color);

    --theme-color: white;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin: .5rem;
    padding: calc(.375rem - 1px) calc(.75rem - 1px);
    border: 1px solid var(--link-color);
    border-radius: .375rem;
    min-height: 3.5rem;
    background-color: color-mix(in srgb, var(--link-color) 20%, transparent);

    text-decoration: none;

    > .link-icon {
      $icon-size: 2rem;
      padding: .5rem;
      width: $icon-size;
      height: $icon-size;
      background-color: var(--link-color);
      border-radius: .75rem;
    }

    * {
      color: color-mix(in srgb, var(--link-color) 62.5%, black);
    }

    > .link-msg {
      flex-grow: 1;
      text-align: center;
      margin: 0 .375rem;

      .link-title {
        font-size: 1.2rem;
        font-family: var(--font-title);
      }

      .link-username, .link-msg-description, .link-address {
        font-size: .8rem;
      }

      .link-username, .link-address {
        font-family: var(--font-mono);
        padding: 0 .25rem;
      }

      .link-msg-description {
        margin: 0;
      }
    }
  }

  .link-item:hover {
    background-color: var(--link-color);
    * {
      color: var(--theme-color);
    }
  }

  .link-item.dark * {
    --theme-color: black;
  }

  .link-item:first-child {
    margin-top: 0;
  }

  .link-item:last-child{
    margin-bottom: 0;
  }
</style>