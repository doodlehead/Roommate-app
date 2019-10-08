<template>
  <div style="display: flex; flex-grow: 1; align-items: stretch">
    <div style="min-width: 200px;">
      <div class="rma-sidebar">
        <router-link class="rma-sidebar__link" :to="{hash: 'button'}">Button</router-link>
        <router-link class="rma-sidebar__link" :to="{hash: 'textInput'}">Text Input</router-link>
        <router-link class="rma-sidebar__link" :to="{hash: 'selectInput'}">Select Input</router-link>
      </div>
    </div>
    <div class="rma-componentsDemoLayout rma-layoutContent" style="flex-grow: 1;">
      <h1 style="margin-bottom: 12px;">Components Demo</h1>
      <p style="margin-bottom: 12px;">These components are built from scratch as Vue components which allows them to be easily re-used across the website.</p>
      <div>
        <h2 id="button">Buttons</h2>
        <p>Simple wrapper component around the <code>button</code> tag. Includes style presets and programmatic disabling.</p>
        <h3>Button style presets</h3>
        <p>Button style presets are provided and are chosen by giving the <code>stylePreset</code> prop.</p>
        <rma-button style="margin-right: 10px;">Default button</rma-button>
        <rma-button stylePreset="light" style="margin-right: 10px;">Light button</rma-button>
        <rma-button stylePreset="error" style="margin-right: 10px;">Error button</rma-button>
        <rma-button stylePreset="errorLight">Error-light button</rma-button>

        <h3>Disabled button</h3>
        <p>Buttons can be programmatically disabled with the <code>disabled</code> prop.</p>
        <rma-button disabled style="margin-right: 10px;">Disabled button</rma-button>
        <rma-button stylePreset="error" disabled>Error button</rma-button>
      </div>
      <div>
        <h2 id="textInput">Text input</h2>
        <p>Wrapper component around the <code>input</code> tag. Includes style presets, disguised inputs, and input validation.</p>

        <h3>Label</h3>
        <p>A text label can easily be supplied with the <code>label</code> prop.</p>
        <rma-input label="Text input label"/>

        <h3>Input validation</h3>
        <p>The input can be validated against the supplied rules. The validation is done using Vee-Validate.</p>
        <rma-input-validated label="Validated input" name="Email" rules="email"/>

        <h3>Disguised input</h3>
        <p>Inputs can be programmatically disguised with the <code>disguised</code> prop.</p>
        <rma-button @click="disguisedInput = !disguisedInput" style="margin-bottom: 10px;">Toggle disguised</rma-button>
        <rma-input label="Disguised input" :disguised="disguisedInput" value="Disguised value"/>
      </div>
      <div>
        <h2 id="selectInput">Select input</h2>
        <p>Simple wrapper component around the <code>select</code> tag.</p>
        <rma-select :options="selectOptions"/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ComponentsDemo',
  data: function() {
    return {
      disguisedInput: true,
      selectOptions: {
        first: 'first',
        second: 'second',
        third: 'third'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.rma-sidebar {
  display: flex;
  width: 200px;
  flex-direction: column;
  padding: 12px 18px;
  position: fixed;
  background-color: white;
  border-right: 1px solid var(--light-gray);
  top: 60px;
  left: 0;
  bottom: 0;
  z-index: 3;

  &__link {
    font-size: 20px;
    font-weight: 600;
    padding: 8px 4px;
  }
}

.rma-componentsDemoLayout {
  & > div {
    margin-bottom: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid var(--light-gray);
    & h2 {
      margin-bottom: 12px;
      margin-top: 16px;
    }
    & h3 {
      margin-top: 16px;
      margin-bottom: 8px;
    }
    & p {
      margin: 10px 0;
    }
  }
}
</style>