## Create a new subgraph

```bash
graph init \
  amoy animal-fun \
  --protocol ethereum \
  --product subgraph-studio \
  --contract-name AnimalFun \
  --from-contract 0x8208ced2932973f71eff272e7f02ddd4582e6096 \
  --network base-sepolia \
  --abi ../contract/packages/foundry/out/AnimalFun.sol/AnimalFun.json
```

## Add Subgraph

```bash
cd animal-fun
```

```bash
graph add 0x8208ced2932973f71eff272e7f02ddd4582e6096 ./subgraph.yaml \
  --abi ./abis/AnimalFun.json \
  --contract-name AnimalFunContract \
  --network-file ./network.json
```

## Build Subgraph

```bash
graph build
```

## Deploy Subgraph

```bash
graph auth --studio <DEPLOY_KEY>
graph deploy --studio <SUBGRAPH_SLUG>
```

## ReDeploy Subgraph

```bash
graph deploy --network base-sepolia
```
