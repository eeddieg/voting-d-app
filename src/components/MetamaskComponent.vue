<template>
  <NavBar :isLogged="isLogged" />
  <nav class="navbar navbar-expand-lg">
    <div class="container justify-content-between">
      <h3>Welcome to Voting D-app</h3>
      <form class="d-flex">
        <button
          class="btn btn-outline-primary"
          type="button"
          @click="connectToMetaMask"
          v-show="!isLogged"
        >
          Connect to Metamask
        </button>
        <button
          class="btn btn-outline-success"
          type="button"
          @click="logout"
          v-show="isLogged"
        >
          Logout
        </button>
      </form>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import store from "@/store";
import router from "@/router";
import { ethers } from "ethers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let window: any;
// declare let web3Provider: any;

export default defineComponent({
  name: "MetamaskComponent",
  components: {
    NavBar,
  },
  data() {
    return {
      accounts: [] as string[],
      accountsNumber: 0,
      isLogged: store.getters.isLogged,
    };
  },
  methods: {
    async connectToMetaMask() {
      if (window.ethereum) {
        console.log("MetaMask is installed!");
      } else {
        console.log("Please install MetaMask");
      }
      const provider = new ethers.providers.JsonRpcProvider();

      console.log("Logged in.");
      store.dispatch("toggleConnectionStatus", true);
      this.isLogged = true;
      this.accounts = await provider.listAccounts();
      store.dispatch("storeAccounts", this.accounts);
      store.dispatch("storeNumberOfAccounts", this.accounts.length);
      this.accountsNumber = await store.getters.numberOfAccounts;
      router.push("accounts");
    },
    async logout() {
      console.log("Logged out.");
      this.isLogged = false;
      store.dispatch("toggleConnectionStatus", false);
      store.dispatch("storeProvider", null);
      store.dispatch("storeNumberOfAccounts", 0);
      this.accounts = [];
      this.accountsNumber = 0;
      router.push("/");
    },
  },
});
</script>
