

## Create a new subgraph

```bash
graph init \
  amoy mcu-dev \
  --protocol ethereum \
  --product subgraph-studio \
  --contract-name AnimalFun \
  --from-contract 0x8208ced2932973f71eff272e7f02ddd4582e6096 \
  --network base-sepolia \
  --abi ../contract/packages/foundry/out/AnimalFun.sol/AnimalFun.json
```
