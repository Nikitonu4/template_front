<template>
  <VnRainbow
    :word="'ASDFHGJKLQWERTYUIOP'"
    :colors="['#fff', '#DEBF40', '#5ACB3C', '#44A3F7', '#CF52EB', '#D14B3D', '#D49C3D']"
  />
  <div class="custom-invitation flex justify-between">
    <div class="custom-invitation__form flex">
      <input placeholder="Looking for a custom Pitch Deck design? Then check our" class="custom-invitation__input" />
      <div class="custom-invitation__arrow"></div>
    </div>
    <div>
      <button class="custom-invitation__button">
        <div class="flex justify-center items-center"><span class="q-mr-md"></span>Just contact to me</div>
      </button>
    </div>
  </div>
  <VnInput label="test" />
</template>
<script setup lang="ts">
import VnRainbow from 'components/atoms/VnRainbow/VnRainbow.vue';
import VnInput from 'components/atoms/VnInput/VnInput.vue';
</script>
<style scoped lang="scss">
.custom-invitation {
  display: flex;
  margin-top: 150px;
  width: 1170px;
  height: 150px;
  padding: 40px;
  border-radius: 40px 40px 40px 47px;
  background-color: #6b53fd;
  background-image: url('../../assets/img/630e5c9a867f59522f136174_custom.webp');
  background-position: 0 0;
  background-size: cover;
  background-repeat: no-repeat;

  &__input {
    border-radius: 40px;
    border: 0;
    width: 450px;
    height: 82px;
    padding: 20px;
    &:focus {
      outline: none;
    }
  }

  &__arrow {
    display: block;
    width: 80px;
    height: 80px;
    margin-left: 0;
    -webkit-box-flex: 0;
    -webkit-flex: 0 auto;
    -ms-flex: 0 auto;
    flex: 0 auto;
    border-radius: 50%;
    background-color: #121212;
    background-image: url(../../assets/img/arrow.svg);
    background-position: 50% 50%;
    background-size: 35px 35px;
    background-repeat: no-repeat;
    -webkit-transform: rotate(-180deg);
    -ms-transform: rotate(-180deg);
    transform: rotate(-180deg);
  }
  &__button {
    border-radius: 100px;
    background-color: #121212;
    font-family: Poppins, sans-serif;
    color: #fff;
    font-size: 22px;
    font-weight: 700;
    width: 372px;
    height: 82px;

    transform-style: preserve-3d;
    transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transition: 0.3s ease-out;
    &:hover {
      transform: translate3d(0px, 0px, 0px) scale3d(0.97, 0.97, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg)
        skew(0deg, 0deg);
    }

    span {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #fff;
      color: black;
      background-image: url(../../assets/img/arrowF.svg);
      background-repeat: no-repeat;
      background-position: 50% 50%;
      background-size: 20px 20px;
    }
  }
}
</style>
