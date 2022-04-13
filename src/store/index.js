import { createStore } from 'vuex'

export default createStore({
  state: {
    flavors: [
      {id: 1, flavor: 'Vanilla', image:'vanilla.png', description: 'This vanilla cake recipe has an amazing flavor, a soft, cloud-like crumb, and is so incredibly moist.', price: 350, stock: 3},
      {id: 2, flavor: 'Chocolate', image:'chocolate.png', description: "The Most Amazing Chocolate Cake is full of moist, chocolatey perfection. This is the chocolate cake you've been dreaming of!", price: 350, stock: 5},
      {id: 3, flavor: 'Strawberry', image:'strawberry.png', description: 'This fresh strawberry cake is made from FRESH strawberry reduction! The cake is moist and tender with a beautiful pink color.', price: 300, stock: 2},
      {id: 4, flavor: 'Neapolitan', image:'neapolitan.png', description: 'Three colourful layers of soft, tender cake, combining the flavour of vanilla, strawberry and chocolate.', price: 400, stock: 10},
      {id: 5, flavor: 'Coffee', image:'coffee.png', description: 'Coffee cake is one of those magical cakes that gets away with being acceptable to eat any time of the day.', price: 500, stock: 6},
      {id: 6, flavor: 'Red Velvet', image:'red-velvet.png', description: 'This recipe produces the best red velvet cake with superior buttery, vanilla, and cocoa flavors, as well as a delicious tang from buttermilk', price: 500, stock: 1}
    ],
    decorations: [
      {id: 1, decoration: 'Fondant Flowers', image: 'fondant-flower.png', description: 'Flowers of fondant', price: 30, stock: 30},
      {id: 2, decoration: 'Fondant Characters', image: 'fondant-characters.png', description: 'characters of fondant', price: 150, stock: 15},
      {id: 3, decoration: 'Edible Paper', image: 'edible-paper.png', description: 'Print on edible paper', price: 40, stock: 4},
      {id: 4, decoration: 'Fondant', image: 'fondant.png', description: 'fondant', price: 300, stock: 1},
      {id: 5, decoration: 'Fruits', image: 'fruits.png', description: 'Fruits', price: 500, stock: 20},
      {id: 6, decoration: 'Ganache', image: 'ganache.png', description: 'Ganache', price: 200, stock: 5},
      {id: 7, decoration: 'Frosting', image: 'frosting.png', description: 'Frosting', price: 100, stock: 3}
    ],
    orders: [],
    numID: 0
  },
  getters: {
    getFlavors(state){
      return state.flavors;
    },
    getDecorations(state){
      return state.decorations;
    },
    getClient(state){
      return state.client;
    },
    getOrders(state){
      return state.orders;
    }
  },
  mutations: {
    addOrder(state, order){
      order.id = state.numID;
      state.orders.push(order);
    },
    upID(state){
      state.numID++;
    },
    addStockFlavor(state, index){
      state.flavors[index].stock++;
    },
    removeStockFlavor(state, index){
      state.flavors[index].stock--;
    },
    addStockDecoration(state, index){
      state.decorations[index].stock++;
    },
    removeStockDecoration(state, index){
      state.decorations[index].stock--;
    },
    removeOrder(state, index){
      state.orders.splice(index, 1);
    }
  },
  actions: {
    addOrder(state, order) {
      state.commit("upID");
      state.commit("addOrder", order);
    },
    addStockFlavor(state, index){
      state.commit('addStockFlavor', index);
    },
    removeStockFlavor(state, index){
      state.commit('removeStockFlavor', index);
    },
    addStockDecoration(state, index){
      state.commit('addStockDecoration', index);
    },
    removeStockDecoration(state, index){
      state.commit('removeStockDecoration', index);
    },
    removeOrder(state, index){
      state.commit('removeOrder', index);
    }
  },
  modules: {
  }
})
