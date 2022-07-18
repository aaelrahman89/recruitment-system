import Vue from 'vue';
import { ValidationProvider, ValidationObserver, extend ,configure } from 'vee-validate';
import { required, email, min, max, digits, regex, confirmed} from "vee-validate/dist/rules";

extend("required", required);
extend("email", email);
extend('min',min);
extend('max',max);
extend('digits',digits);
extend('regex', regex);
extend('confirmed', confirmed);
export default function VeeValidatePlugin({ app }) {
  configure({
    defaultMessage: (_, values) =>
      app.i18n.t(`validations.${values._rule_}`, values)
  });
}

// Add a rule.


// Register it globally
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
