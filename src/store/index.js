import { createStore } from "vuex";
import phones from "../data/phones";
import brands from "../data/brands";

export default createStore({
  state: {
    phones: phones,
    brands: brands,
    cart: [],
    searchQuery: "",
    clicked: "",
    selectedPhone: null,
  },
  getters: {
    getPhones(state) {
      return state.phones;
    },
    getBrands(state) {
      return state.brands;
    },
    getCartItems(state) {
      return state.cart;
    },
    getSearchQuery(state) {
      return state.searchQuery;
    },
    getClicked(state) {
      return state.clicked;
    },
    getSelectedPhone(state) {
      return state.selectedPhone;
    },
    total(state) {
      let sum = 0;
      state.cart.forEach((el) => {
        sum += el.price * el.quantity;
      });

      return sum;
    },
    getPhonesBySearchQuery(state) {
      return state.searchQuery === ""
        ? state.phones
        : state.phones.filter((el) =>
            el.name.toLowerCase().includes(state.searchQuery.toLowerCase())
          );
    },
    getFilteredPhones(state, getters) {
      if (state.clicked === "" && state.searchQuery === "") {
        return state.phones;
      }
      if (state.searchQuery !== "") {
        return getters.getPhonesBySearchQuery;
      }
      if (state.clicked !== "") {
        return state.phones.filter((el) => el.brand === state.clicked);
      }
    },
  },
  mutations: {
    addToCart(state, payload) {
      const item = state.cart.find((el) => el.id === payload.id);

      if (item) {
        item.quantity++;
      } else {
        state.cart.push({ ...payload, quantity: 1 });
      }
    },
    removeFromCart(state, payload) {
      const item = state.cart.find((item) => item.id == payload);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== item.id);
        }
      }
    },
    clearFilterBrand(state) {
      state.clicked = "";
    },
    searchWord(state, payload) {
      state.searchQuery = payload;
    },
    clickedBrand(state, payload) {
      state.clicked = payload;
    },
    selectedPhone(state, payload) {
      state.selectedPhone = payload;
    },
  },
  actions: {
    add(context, payload) {
      context.commit("addToCart", payload);
    },
    remove(context, payload) {
      context.commit("removeFromCart", payload);
    },
    search(context, payload) {
      context.commit("searchWord", payload);
    },
    clicked(context, payload) {
      context.commit("clickedBrand", payload);
    },
    selected(context, payload) {
      context.commit("selectedPhone", payload);
    },
    clear(context) {
      context.commit("clearFilterBrand");
    },
  },
  modules: {},
});
