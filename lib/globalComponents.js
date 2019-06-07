import { DropDown } from "./components/Dropdown";
import { Parallax } from "./components/Parallax";

/**
 * You can register global components here and use them as a plugin in your main Vue instance
 */

const GlobalComponents = {
  install(Vue) {
    Vue.component("drop-down", DropDown);
    Vue.component(Parallax.name, Parallax);
  }
};

export default GlobalComponents;
