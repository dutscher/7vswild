<div class="snow"></div>

<style lang="scss">
  .snow,.snow::before,.snow::after {
    position: fixed;
    top: -400px;
    left: 0;
    bottom: 0;
    right: 0;
    background-image: radial-gradient(3px 3px at 156px 89px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)),radial-gradient(6px 6px at 374px 388px, rgba(255, 255, 255, 0.9) 50%, rgba(0, 0, 0, 0)),radial-gradient(4px 4px at 73px 337px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)),radial-gradient(5px 5px at 160px 367px, white 50%, rgba(0, 0, 0, 0)),radial-gradient(5px 5px at 135px 340px, white 50%, rgba(0, 0, 0, 0)),radial-gradient(5px 5px at 388px 204px, white 50%, rgba(0, 0, 0, 0)),radial-gradient(4px 4px at 53px 161px, rgba(255, 255, 255, 0.6) 50%, rgba(0, 0, 0, 0)),radial-gradient(4px 4px at 263px 277px, rgba(255, 255, 255, 0.8) 50%, rgba(0, 0, 0, 0)),radial-gradient(3px 3px at 114px 79px, rgba(255, 255, 255, 0.7) 50%, rgba(0, 0, 0, 0)),radial-gradient(3px 3px at 234px 78px, white 50%, rgba(0, 0, 0, 0));
    background-size: 400px 400px;
    -webkit-animation: snow 10s linear infinite;
    animation: snow 10s linear infinite;
    content: "";
    pointer-events: none;
    z-index: 1
  }

  .snow::before {
    -webkit-animation-duration: 30s;
    animation-duration: 30s;
    animation-direction: reverse;
    margin-left: -200px;
    opacity: .65;
    filter: blur(1.5px)
  }

  .snow::after {
    margin-left: -133.3333333333px;
    opacity: .4;
    -webkit-animation-duration: 20s;
    animation-duration: 20s;
    animation-direction: reverse;
    filter: blur(3px)
  }

  @-webkit-keyframes snow {
    to {
      transform: translateY(400px)
    }
  }

  @keyframes snow {
    to {
      transform: translateY(400px)
    }
  }
</style>
