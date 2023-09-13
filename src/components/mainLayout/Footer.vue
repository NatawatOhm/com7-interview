<template>
  <div class="global-padding w-full flex justify-between items-center h-[64px] font-[SukhumvitSet-Bold] relative bottom-0">
    <p class="text-[14px] text-[#808080]">Copyright © Interview. All rights reserved.</p>
    <div class="flex items-center gap-[20px]">
      <img :src="westernUnionIcon" alt="" />
      <img :src="masterCardIcon" alt="" />
      <img :src="paypalIcon" alt="" />
      <img :src="visaIcon" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
  import masterCardIcon from '../../assets/images/mastercard.png'
  import westernUnionIcon from '../../assets/images/western-union.png'
  import paypalIcon from '../../assets/images/paypal.png'
  import visaIcon from '../../assets/images/visa.png'
</script>

<style scoped></style>
