<template>
  <div>
    <div>
  <label class="typo__label">Single select / dropdown</label>
  <multiselect v-model="value" deselect-label="Can't remove this value" track-by="name" label="name" placeholder="Select one" :options="options" :searchable="false" :allow-empty="false">
    <template slot="singleLabel" slot-scope="{ option }"><strong>{{ option.name }}</strong> is written in<strong>  {{ option.language }}</strong></template>
  </multiselect>
  <pre class="language-json"><code>{{ value  }}</code></pre>
</div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      value: null,
      options: [
        { name: 'Beer 1', language: 'coors' },
        { name: 'name', language: 'derek' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP', $isDisabled: true },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>