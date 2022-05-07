import store from "@/store";
import { Wallet, ContractFactory } from "ethers";

export class ContractInfo {
  ContractAddress = "0x9607DAC7f4aB321d188e14995A9b68c59066b0c9";
  ElectionJSON = require("../../smart_contract/contracts/artifacts/Election.json");

  getAbi() {
    return this.ElectionJSON.abi;
  }

  getBytecode() {
    return this.ElectionJSON.data.bytecode;
  }

  getContractAddress() {
    return this.ContractAddress;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async deployContract(privateKey: string, provider: any) {
    const abi = await store.getters.ABI;
    const bytecode = await store.getters.Bytecode;

    const wallet = new Wallet(privateKey, provider);

    const factory = new ContractFactory(abi, bytecode, wallet);

    const contract = await factory.deploy();

    await store.dispatch("storeContract", contract);
    await store.dispatch("storeContractAddress", contract.address);
  }
}
