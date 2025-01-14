import {ChainConfig} from "@lodestar/config";
import {mainnetChainConfig, minimalChainConfig} from "@lodestar/config/configs";
import {gnosisChainConfig} from "@lodestar/config/networks";
import {ACTIVE_PRESET, PresetName} from "@lodestar/params";

let chainConfig: ChainConfig;
switch (ACTIVE_PRESET) {
  case PresetName.mainnet:
    chainConfig = mainnetChainConfig;
    break;
  case PresetName.minimal:
    chainConfig = minimalChainConfig;
    break;
  case PresetName.gnosis:
    chainConfig = gnosisChainConfig;
    break;
  default:
    throw Error(`Preset ${ACTIVE_PRESET} not supported with dev command`);
}

export {chainConfig};

export const depositContractDeployBlock = 0;
export const genesisFileUrl = null;
export const bootnodesFileUrl = null;
export const bootEnrs = [];
