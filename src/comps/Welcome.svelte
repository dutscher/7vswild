<slot name="header" />
<div class="welcome">
    <div class="welcome__content">
        <slot />
    </div>
</div>

<style lang="scss">
  @import '../scss/variables';

  h1 {
    color: $color-primary-light;
  }

  :global([slot='header']) {
    width: 100%;
    border-radius: 20%;
  }

  .welcome {
    padding-left: $space-xl;
    text-align: center;
  }
</style>
