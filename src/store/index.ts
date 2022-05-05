import { createStore } from "vuex";
import { State } from "./interfaces";

export default createStore({
  state: {
    abi: {},
    accounts: [],
    accountsListVisible: false,
    ballot: [],
    bytecode: {},
    contract: {},
    contractAddress: "",
    contractAsSigner: {},
    electorateStatus: false,
    logged: false,
    numberOfAccounts: 0,
    pollingStations: [],
    provider: null,
    tableVisible: false,
    registeredVoters: 0,
    voterRegistry: [],
    votingStatus: State.Created,
  },
  getters: {
    ABI(state) {
      return state.abi;
    },
    Accounts(state) {
      return state.accounts;
    },
    Ballot(state) {
      return state.ballot;
    },
    Bytecode(state) {
      return state.bytecode;
    },
    Contract(state) {
      return state.contract;
    },
    ContractAddress(state) {
      return state.contractAddress;
    },
    ContractAsSigner(state) {
      return state.contractAsSigner;
    },
    ElectorateStatus(state) {
      return state.electorateStatus;
    },
    isLogged(state) {
      return state.logged;
    },
    isAccountsListVisible(state) {
      return state.accountsListVisible;
    },
    isTableVisible(state) {
      return state.tableVisible;
    },
    numberOfAccounts(state) {
      return state.numberOfAccounts;
    },
    PollingStations(state) {
      return state.pollingStations;
    },
    Provider(state) {
      return state.provider;
    },
    RegisteredVoters(state) {
      return state.registeredVoters;
    },
    VoterRegistry(state) {
      return state.voterRegistry;
    },
    VotingStatus(state) {
      return state.votingStatus;
    },
  },
  mutations: {
    setABI(state, payload) {
      state.abi = payload;
    },
    setAcounts(state, payload) {
      state.accounts = payload;
    },
    setAcountsListVisibility(state, payload) {
      state.accountsListVisible = payload;
    },
    setBallot(state, payload) {
      state.ballot = payload;
    },
    setBytecode(state, payload) {
      state.bytecode = payload;
    },
    setContract(state, payload) {
      state.contract = payload;
    },
    setContractAddress(state, payload) {
      state.contractAddress = payload;
    },
    setContractAsSigner(state, payload) {
      state.contractAsSigner = payload;
    },
    setConnectionStatus(state, payload) {
      state.logged = payload;
    },
    setElectorateStatus(state, payload) {
      state.electorateStatus = payload;
    },
    setNumberOfAccounts(state, payload) {
      state.numberOfAccounts = payload;
    },
    setPollingStations(state, payload) {
      state.pollingStations = payload;
    },
    setProvider(state, payload) {
      state.provider = payload;
    },
    setRegisteredVoters(state, payload) {
      state.registeredVoters = payload;
    },
    setTableVisibility(state, payload) {
      state.tableVisible = payload;
    },
    setVoterRegistry(state, payload) {
      state.voterRegistry = payload;
    },
    setVotingStatus(state, payload) {
      state.votingStatus = payload;
    },
  },
  actions: {
    storeABI({ commit }, payload) {
      commit("setABI", payload);
    },
    storeAccounts({ commit }, payload) {
      commit("setAcounts", payload);
    },
    toggleAccountsListVisibility({ commit }, payload) {
      commit("setAcountsListVisibility", payload);
    },
    storeBallot({ commit }, payload) {
      commit("setBallot", payload);
    },
    storeBytecode({ commit }, payload) {
      commit("setBytecode", payload);
    },
    toggleConnectionStatus({ commit }, payload) {
      commit("setConnectionStatus", payload);
    },
    storeContract({ commit }, payload) {
      commit("setContract", payload);
    },
    storeContractAddress({ commit }, payload) {
      commit("setContractAddress", payload);
    },
    storeContractAsSigner({ commit }, payload) {
      commit("setContractAsSigner", payload);
    },
    storeElectorateStatus({ commit }, payload) {
      commit("setElectorateStatus", payload);
    },
    storeNumberOfAccounts({ commit }, payload) {
      commit("setNumberOfAccounts", payload);
    },
    storePollingStations({ commit }, payload) {
      commit("setPollingStations", payload);
    },
    storeProvider({ commit }, payload) {
      commit("setProvider", payload);
    },
    storeRegisteredVoters({ commit }, payload) {
      commit("setRegisteredVoters", payload);
    },
    storeVoterRegistry({ commit }, payload) {
      commit("setVoterRegistry", payload);
    },
    storeVotingStatus({ commit }, payload) {
      commit("setVotingStatus", payload);
    },
    toggleTableVisibility({ commit }, payload) {
      commit("setTableVisibility", payload);
    },
  },
});
