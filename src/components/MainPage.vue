<template>
  <v-stepper v-model="step" vertical non-linear>
    <v-stepper-step step="1" editable>Member</v-stepper-step>
    <v-stepper-content step="1">
      <MemberPage v-if="step === '1'" />
    </v-stepper-content>

    <v-stepper-step step="2" editable>Goods</v-stepper-step>
    <v-stepper-content step="2">
      <GoodsPage v-if="step === '2'"/>
    </v-stepper-content>

    <v-stepper-step step="3" editable>Calculation</v-stepper-step>
    <v-stepper-content step="3">
      <v-card class="mb-5">
        <CalculatePage v-if="step === '3'"/>
      </v-card>
    </v-stepper-content>
  </v-stepper>
</template>

<script>
import MemberPage from './member/MemberPage';
import GoodsPage from './good/GoodsPage';
import CalculatePage from './calculate/CalculatePage'

export default {
  data() {
    return {
      step: '3'
    }
  },
  components: {
    MemberPage,
    GoodsPage,
    CalculatePage
  }
}
</script>

<style>

</style>
