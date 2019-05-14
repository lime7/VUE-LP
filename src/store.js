import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: "Landing Page",
    user: null,
    isAuthenticated: false,
    apiRecipesUrl: "https://api.edamam.com/search",
    recipes: [],
    userRecipes: [],
    apiPostsUrl:
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=E7cYQ01ZL7AbmN7EAyH894O15zX1Husb",
    posts: []
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setRecipes(state, payload) {
      state.recipes = payload;
    },
    setUserRecipes(state, payload) {
      state.userRecipes = payload;
    },
    setPosts(state, payload) {
      state.posts = payload;
    }
  },
  actions: {
    userRegistration({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/signin");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/dashboard");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLoginGoogle({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          console.log(result);
          commit("setUser", result.user);
          commit("setIsAuthenticated", true);
          router.push("/dashboard");
        })
        .catch(err => {
          console.log(err.message);
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    async getRecipes({ state, commit }, plan) {
      try {
        let response = await axios.get(`${state.apiRecipesUrl}`, {
          params: {
            q: plan,
            app_id: "3eb87d18",
            app_key: "acb1b144190af92a35bd629b213020a5",
            from: 0,
            to: 4
          }
        });

        commit("setRecipes", response.data.hits);
      } catch (error) {
        commit("setRecipes", []);
      }
    },
    addRecipe({ state }, payload) {
      firebase
        .database()
        .ref("users")
        .child(state.user.user.uid)
        .push(payload.recipe.label);
    },
    getUserRecipes({ state, commit }) {
      return firebase
        .database()
        .ref("users/" + state.user.user.uid)
        .once("value", snapshot => {
          commit("setUserRecipes", snapshot.val());
        });
    },
    async getPosts({ state, commit }, section) {
      try {
        let response = await axios.get(`${state.apiPostsUrl}`, {});
        console.log(response.data.status);

        commit("setPosts", response.data.results);
      } catch (error) {
        commit("setPosts", []);
      }
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  }
});
