// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CirculatingSupply extends ethereum.SmartContract {
  static bind(address: Address): CirculatingSupply {
    return new CirculatingSupply("CirculatingSupply", address);
  }

  XYZ(): Address {
    let result = super.call("XYZ", "XYZ():(address)", []);

    return result[0].toAddress();
  }

  try_XYZ(): ethereum.CallResult<Address> {
    let result = super.tryCall("XYZ", "XYZ():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  XYZCirculatingSupply(): BigInt {
    let result = super.call(
      "XYZCirculatingSupply",
      "XYZCirculatingSupply():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_XYZCirculatingSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "XYZCirculatingSupply",
      "XYZCirculatingSupply():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNonCirculatingXYZ(): BigInt {
    let result = super.call(
      "getNonCirculatingXYZ",
      "getNonCirculatingXYZ():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_getNonCirculatingXYZ(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getNonCirculatingXYZ",
      "getNonCirculatingXYZ():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  initialize(_XYZ: Address): boolean {
    let result = super.call("initialize", "initialize(address):(bool)", [
      ethereum.Value.fromAddress(_XYZ)
    ]);

    return result[0].toBoolean();
  }

  try_initialize(_XYZ: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("initialize", "initialize(address):(bool)", [
      ethereum.Value.fromAddress(_XYZ)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isInitialized(): boolean {
    let result = super.call("isInitialized", "isInitialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_isInitialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isInitialized", "isInitialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  nonCirculatingXYZAddresses(param0: BigInt): Address {
    let result = super.call(
      "nonCirculatingXYZAddresses",
      "nonCirculatingXYZAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_nonCirculatingXYZAddresses(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "nonCirculatingXYZAddresses",
      "nonCirculatingXYZAddresses(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  setNonCirculatingXYZAddresses(
    _nonCirculatingAddresses: Array<Address>
  ): boolean {
    let result = super.call(
      "setNonCirculatingXYZAddresses",
      "setNonCirculatingXYZAddresses(address[]):(bool)",
      [ethereum.Value.fromAddressArray(_nonCirculatingAddresses)]
    );

    return result[0].toBoolean();
  }

  try_setNonCirculatingXYZAddresses(
    _nonCirculatingAddresses: Array<Address>
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "setNonCirculatingXYZAddresses",
      "setNonCirculatingXYZAddresses(address[]):(bool)",
      [ethereum.Value.fromAddressArray(_nonCirculatingAddresses)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  transferOwnership(_owner: Address): boolean {
    let result = super.call(
      "transferOwnership",
      "transferOwnership(address):(bool)",
      [ethereum.Value.fromAddress(_owner)]
    );

    return result[0].toBoolean();
  }

  try_transferOwnership(_owner: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "transferOwnership",
      "transferOwnership(address):(bool)",
      [ethereum.Value.fromAddress(_owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _XYZ(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class SetNonCirculatingXYZAddressesCall extends ethereum.Call {
  get inputs(): SetNonCirculatingXYZAddressesCall__Inputs {
    return new SetNonCirculatingXYZAddressesCall__Inputs(this);
  }

  get outputs(): SetNonCirculatingXYZAddressesCall__Outputs {
    return new SetNonCirculatingXYZAddressesCall__Outputs(this);
  }
}

export class SetNonCirculatingXYZAddressesCall__Inputs {
  _call: SetNonCirculatingXYZAddressesCall;

  constructor(call: SetNonCirculatingXYZAddressesCall) {
    this._call = call;
  }

  get _nonCirculatingAddresses(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class SetNonCirculatingXYZAddressesCall__Outputs {
  _call: SetNonCirculatingXYZAddressesCall;

  constructor(call: SetNonCirculatingXYZAddressesCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get _owner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get value0(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
