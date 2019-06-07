import Vue from "vue";

// Cards
import MXBlogCard from "./components/cards/BlogCard";
import MXFullBgCard from "./components/cards/FullBgCard";
import MXLoginCard from "./components/cards/LoginCard";
import MXNavTabsCard from "./components/cards/NavTabsCard";
import MXPricingCard from "./components/cards/PricingCard";
import MXProductCard from "./components/cards/ProductCard";
import MXProfileCard from "./components/cards/ProfileCard";
import MXRotatingCard from "./components/cards/RotatingCard";
import MXTestimonialCard from "./components/cards/TestimonialCard";

//Base
import MXBadge from "./components/Badge";
import MXCollapse from "./components/Collapse";
import MXDropdown from "./components/Dropdown";
import MXInfoAreas from "./components/InfoAreas";
import MXModal from "./components/Modal";
import MXPagination from "./components/Pagination";
import MXParallax from "./components/Parallax";
import MXSlider from "./components/Slider";
import MXTabs from "./components/Tabs";

import MaterialKit from "./material-kit";

export default {
  install(Vue) {
    // Base
    Vue.component("MXBlogCard", MXBlogCard);
    Vue.component("MXFullBgCard", MXFullBgCard);
    Vue.component("MXLoginCard", MXLoginCard);
    Vue.component("MXNavTabsCard", MXNavTabsCard);
    Vue.component("MXPricingCard", MXPricingCard);
    Vue.component("MXProductCard", MXProductCard);
    Vue.component("MXProfileCard", MXProfileCard);
    Vue.component("MXRotatingCard", MXRotatingCard);
    Vue.component("MXTestimonialCard", MXTestimonialCard);
    Vue.component("MXBadge", MXBadge);
    Vue.component("MXCollapse", MXCollapse);
    Vue.component("MXDropdown", MXDropdown);
    Vue.component("MXInfoAreas", MXInfoAreas);
    Vue.component("MXModal", MXModal);
    Vue.component("MXPagination", MXPagination);
    Vue.component("MXParallax", MXParallax);
    Vue.component("MXSlider", MXSlider);
    Vue.component("MXTabs", MXTabs);
    Vue.use(MaterialKit);
  }
};

export {
  MXBlogCard,
  MXFullBgCard,
  MXLoginCard,
  MXNavTabsCard,
  MXPricingCard,
  MXProductCard,
  MXProfileCard,
  MXRotatingCard,
  MXTestimonialCard,
  MXBadge,
  MXCollapse,
  MXDropdown,
  MXInfoAreas,
  MXModal,
  MXPagination,
  MXParallax,
  MXSlider,
  MXTabs
};
