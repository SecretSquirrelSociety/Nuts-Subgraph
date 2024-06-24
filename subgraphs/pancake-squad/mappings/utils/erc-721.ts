/* eslint-disable prefer-const */
import { BigInt, dataSource } from "@graphprotocol/graph-ts";
import { ERC404 } from "../../generated/ERC404/ERC404";

export function fetchName(): string {
  let contract = ERC404.bind(dataSource.address());

  let nameResult = contract.try_name();
  if (!nameResult.reverted) {
    return nameResult.value;
  }

  return "unknown";
}

export function fetchSymbol(): string {
  let contract = ERC404.bind(dataSource.address());

  let symbolResult = contract.try_symbol();
  if (!symbolResult.reverted) {
    return symbolResult.value;
  }

  return "unknown";
}

export function fetchTokenUri(tokenID: BigInt): string | null {
  let contract = ERC404.bind(dataSource.address());

  let uriResult = contract.try_tokenURI(tokenID);
  if (!uriResult.reverted) {
    return uriResult.value;
  }

  return null;
}
