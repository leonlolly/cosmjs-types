/* eslint-disable */
import { PageRequest, PageResponse } from "../../../../cosmos/base/query/v1beta1/pagination";
import { Any } from "../../../../google/protobuf/any";
import { Height, IdentifiedClientState, ConsensusStateWithHeight, Params } from "./client";
import { Long, isSet, DeepPartial, Exact, bytesFromBase64, base64FromBytes, Rpc } from "../../../../helpers";
import * as _m0 from "protobufjs/minimal";
export const protobufPackage = "ibc.core.client.v1";
/**
 * QueryClientStateRequest is the request type for the Query/ClientState RPC
 * method
 */
export interface QueryClientStateRequest {
  /** client state unique identifier */
  clientId: string;
}
/**
 * QueryClientStateResponse is the response type for the Query/ClientState RPC
 * method. Besides the client state, it includes a proof and the height from
 * which the proof was retrieved.
 */
export interface QueryClientStateResponse {
  /** client state associated with the request identifier */
  clientState: Any;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height;
}
/**
 * QueryClientStatesRequest is the request type for the Query/ClientStates RPC
 * method
 */
export interface QueryClientStatesRequest {
  /** pagination request */
  pagination: PageRequest;
}
/**
 * QueryClientStatesResponse is the response type for the Query/ClientStates RPC
 * method.
 */
export interface QueryClientStatesResponse {
  /** list of stored ClientStates of the chain. */
  clientStates: IdentifiedClientState[];
  /** pagination response */
  pagination: PageResponse;
}
/**
 * QueryConsensusStateRequest is the request type for the Query/ConsensusState
 * RPC method. Besides the consensus state, it includes a proof and the height
 * from which the proof was retrieved.
 */
export interface QueryConsensusStateRequest {
  /** client identifier */
  clientId: string;
  /** consensus state revision number */
  revisionNumber: Long;
  /** consensus state revision height */
  revisionHeight: Long;
  /**
   * latest_height overrrides the height field and queries the latest stored
   * ConsensusState
   */
  latestHeight: boolean;
}
/**
 * QueryConsensusStateResponse is the response type for the Query/ConsensusState
 * RPC method
 */
export interface QueryConsensusStateResponse {
  /** consensus state associated with the client identifier at the given height */
  consensusState: Any;
  /** merkle proof of existence */
  proof: Uint8Array;
  /** height at which the proof was retrieved */
  proofHeight: Height;
}
/**
 * QueryConsensusStatesRequest is the request type for the Query/ConsensusStates
 * RPC method.
 */
export interface QueryConsensusStatesRequest {
  /** client identifier */
  clientId: string;
  /** pagination request */
  pagination: PageRequest;
}
/**
 * QueryConsensusStatesResponse is the response type for the
 * Query/ConsensusStates RPC method
 */
export interface QueryConsensusStatesResponse {
  /** consensus states associated with the identifier */
  consensusStates: ConsensusStateWithHeight[];
  /** pagination response */
  pagination: PageResponse;
}
/**
 * QueryConsensusStateHeightsRequest is the request type for Query/ConsensusStateHeights
 * RPC method.
 */
export interface QueryConsensusStateHeightsRequest {
  /** client identifier */
  clientId: string;
  /** pagination request */
  pagination: PageRequest;
}
/**
 * QueryConsensusStateHeightsResponse is the response type for the
 * Query/ConsensusStateHeights RPC method
 */
export interface QueryConsensusStateHeightsResponse {
  /** consensus state heights */
  consensusStateHeights: Height[];
  /** pagination response */
  pagination: PageResponse;
}
/**
 * QueryClientStatusRequest is the request type for the Query/ClientStatus RPC
 * method
 */
export interface QueryClientStatusRequest {
  /** client unique identifier */
  clientId: string;
}
/**
 * QueryClientStatusResponse is the response type for the Query/ClientStatus RPC
 * method. It returns the current status of the IBC client.
 */
export interface QueryClientStatusResponse {
  status: string;
}
/**
 * QueryClientParamsRequest is the request type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsRequest {}
/**
 * QueryClientParamsResponse is the response type for the Query/ClientParams RPC
 * method.
 */
export interface QueryClientParamsResponse {
  /** params defines the parameters of the module. */
  params: Params;
}
/**
 * QueryUpgradedClientStateRequest is the request type for the
 * Query/UpgradedClientState RPC method
 */
export interface QueryUpgradedClientStateRequest {}
/**
 * QueryUpgradedClientStateResponse is the response type for the
 * Query/UpgradedClientState RPC method.
 */
export interface QueryUpgradedClientStateResponse {
  /** client state associated with the request identifier */
  upgradedClientState: Any;
}
/**
 * QueryUpgradedConsensusStateRequest is the request type for the
 * Query/UpgradedConsensusState RPC method
 */
export interface QueryUpgradedConsensusStateRequest {}
/**
 * QueryUpgradedConsensusStateResponse is the response type for the
 * Query/UpgradedConsensusState RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
  /** Consensus state associated with the request identifier */
  upgradedConsensusState: Any;
}
function createBaseQueryClientStateRequest(): QueryClientStateRequest {
  return {
    clientId: "",
  };
}
export const QueryClientStateRequest = {
  encode(message: QueryClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStateRequest {
    const obj = createBaseQueryClientStateRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  toJSON(message: QueryClientStateRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientStateRequest>, I>>(object: I): QueryClientStateRequest {
    const message = createBaseQueryClientStateRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
};
function createBaseQueryClientStateResponse(): QueryClientStateResponse {
  return {
    clientState: Any.fromPartial({}),
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
  };
}
export const QueryClientStateResponse = {
  encode(message: QueryClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientState !== undefined) {
      Any.encode(message.clientState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStateResponse {
    const obj = createBaseQueryClientStateResponse();
    if (isSet(object.clientState)) obj.clientState = Any.fromJSON(object.clientState);
    if (isSet(object.proof)) obj.proof = bytesFromBase64(object.proof);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    return obj;
  },
  toJSON(message: QueryClientStateResponse): unknown {
    const obj: any = {};
    message.clientState !== undefined &&
      (obj.clientState = message.clientState ? Any.toJSON(message.clientState) : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientStateResponse>, I>>(
    object: I,
  ): QueryClientStateResponse {
    const message = createBaseQueryClientStateResponse();
    if (object.clientState !== undefined && object.clientState !== null) {
      message.clientState = Any.fromPartial(object.clientState);
    }
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    return message;
  },
};
function createBaseQueryClientStatesRequest(): QueryClientStatesRequest {
  return {
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryClientStatesRequest = {
  encode(message: QueryClientStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatesRequest {
    const obj = createBaseQueryClientStatesRequest();
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClientStatesRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientStatesRequest>, I>>(
    object: I,
  ): QueryClientStatesRequest {
    const message = createBaseQueryClientStatesRequest();
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryClientStatesResponse(): QueryClientStatesResponse {
  return {
    clientStates: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryClientStatesResponse = {
  encode(message: QueryClientStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.clientStates) {
      IdentifiedClientState.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientStates.push(IdentifiedClientState.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatesResponse {
    const obj = createBaseQueryClientStatesResponse();
    if (Array.isArray(object?.clientStates))
      object.clientStates.map((e: any) => IdentifiedClientState.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryClientStatesResponse): unknown {
    const obj: any = {};
    if (message.clientStates) {
      obj.clientStates = message.clientStates.map((e) => (e ? IdentifiedClientState.toJSON(e) : undefined));
    } else {
      obj.clientStates = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientStatesResponse>, I>>(
    object: I,
  ): QueryClientStatesResponse {
    const message = createBaseQueryClientStatesResponse();
    message.clientStates = object.clientStates?.map((e) => IdentifiedClientState.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryConsensusStateRequest(): QueryConsensusStateRequest {
  return {
    clientId: "",
    revisionNumber: Long.UZERO,
    revisionHeight: Long.UZERO,
    latestHeight: false,
  };
}
export const QueryConsensusStateRequest = {
  encode(message: QueryConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (!message.revisionNumber.isZero()) {
      writer.uint32(16).uint64(message.revisionNumber);
    }
    if (!message.revisionHeight.isZero()) {
      writer.uint32(24).uint64(message.revisionHeight);
    }
    if (message.latestHeight === true) {
      writer.uint32(32).bool(message.latestHeight);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.revisionNumber = reader.uint64() as Long;
          break;
        case 3:
          message.revisionHeight = reader.uint64() as Long;
          break;
        case 4:
          message.latestHeight = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateRequest {
    const obj = createBaseQueryConsensusStateRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.revisionNumber)) obj.revisionNumber = Long.fromValue(object.revisionNumber);
    if (isSet(object.revisionHeight)) obj.revisionHeight = Long.fromValue(object.revisionHeight);
    if (isSet(object.latestHeight)) obj.latestHeight = Boolean(object.latestHeight);
    return obj;
  },
  toJSON(message: QueryConsensusStateRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.revisionNumber !== undefined &&
      (obj.revisionNumber = (message.revisionNumber || Long.UZERO).toString());
    message.revisionHeight !== undefined &&
      (obj.revisionHeight = (message.revisionHeight || Long.UZERO).toString());
    message.latestHeight !== undefined && (obj.latestHeight = message.latestHeight);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsensusStateRequest>, I>>(
    object: I,
  ): QueryConsensusStateRequest {
    const message = createBaseQueryConsensusStateRequest();
    message.clientId = object.clientId ?? "";
    if (object.revisionNumber !== undefined && object.revisionNumber !== null) {
      message.revisionNumber = Long.fromValue(object.revisionNumber);
    }
    if (object.revisionHeight !== undefined && object.revisionHeight !== null) {
      message.revisionHeight = Long.fromValue(object.revisionHeight);
    }
    message.latestHeight = object.latestHeight ?? false;
    return message;
  },
};
function createBaseQueryConsensusStateResponse(): QueryConsensusStateResponse {
  return {
    consensusState: Any.fromPartial({}),
    proof: new Uint8Array(),
    proofHeight: Height.fromPartial({}),
  };
}
export const QueryConsensusStateResponse = {
  encode(message: QueryConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.consensusState !== undefined) {
      Any.encode(message.consensusState, writer.uint32(10).fork()).ldelim();
    }
    if (message.proof.length !== 0) {
      writer.uint32(18).bytes(message.proof);
    }
    if (message.proofHeight !== undefined) {
      Height.encode(message.proofHeight, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusState = Any.decode(reader, reader.uint32());
          break;
        case 2:
          message.proof = reader.bytes();
          break;
        case 3:
          message.proofHeight = Height.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateResponse {
    const obj = createBaseQueryConsensusStateResponse();
    if (isSet(object.consensusState)) obj.consensusState = Any.fromJSON(object.consensusState);
    if (isSet(object.proof)) obj.proof = bytesFromBase64(object.proof);
    if (isSet(object.proofHeight)) obj.proofHeight = Height.fromJSON(object.proofHeight);
    return obj;
  },
  toJSON(message: QueryConsensusStateResponse): unknown {
    const obj: any = {};
    message.consensusState !== undefined &&
      (obj.consensusState = message.consensusState ? Any.toJSON(message.consensusState) : undefined);
    message.proof !== undefined &&
      (obj.proof = base64FromBytes(message.proof !== undefined ? message.proof : new Uint8Array()));
    message.proofHeight !== undefined &&
      (obj.proofHeight = message.proofHeight ? Height.toJSON(message.proofHeight) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsensusStateResponse>, I>>(
    object: I,
  ): QueryConsensusStateResponse {
    const message = createBaseQueryConsensusStateResponse();
    if (object.consensusState !== undefined && object.consensusState !== null) {
      message.consensusState = Any.fromPartial(object.consensusState);
    }
    message.proof = object.proof ?? new Uint8Array();
    if (object.proofHeight !== undefined && object.proofHeight !== null) {
      message.proofHeight = Height.fromPartial(object.proofHeight);
    }
    return message;
  },
};
function createBaseQueryConsensusStatesRequest(): QueryConsensusStatesRequest {
  return {
    clientId: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryConsensusStatesRequest = {
  encode(message: QueryConsensusStatesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStatesRequest {
    const obj = createBaseQueryConsensusStatesRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryConsensusStatesRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsensusStatesRequest>, I>>(
    object: I,
  ): QueryConsensusStatesRequest {
    const message = createBaseQueryConsensusStatesRequest();
    message.clientId = object.clientId ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryConsensusStatesResponse(): QueryConsensusStatesResponse {
  return {
    consensusStates: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryConsensusStatesResponse = {
  encode(message: QueryConsensusStatesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.consensusStates) {
      ConsensusStateWithHeight.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStatesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStatesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStates.push(ConsensusStateWithHeight.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStatesResponse {
    const obj = createBaseQueryConsensusStatesResponse();
    if (Array.isArray(object?.consensusStates))
      object.consensusStates.map((e: any) => ConsensusStateWithHeight.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryConsensusStatesResponse): unknown {
    const obj: any = {};
    if (message.consensusStates) {
      obj.consensusStates = message.consensusStates.map((e) =>
        e ? ConsensusStateWithHeight.toJSON(e) : undefined,
      );
    } else {
      obj.consensusStates = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsensusStatesResponse>, I>>(
    object: I,
  ): QueryConsensusStatesResponse {
    const message = createBaseQueryConsensusStatesResponse();
    message.consensusStates =
      object.consensusStates?.map((e) => ConsensusStateWithHeight.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryConsensusStateHeightsRequest(): QueryConsensusStateHeightsRequest {
  return {
    clientId: "",
    pagination: PageRequest.fromPartial({}),
  };
}
export const QueryConsensusStateHeightsRequest = {
  encode(message: QueryConsensusStateHeightsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateHeightsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateHeightsRequest {
    const obj = createBaseQueryConsensusStateHeightsRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    if (isSet(object.pagination)) obj.pagination = PageRequest.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryConsensusStateHeightsRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsensusStateHeightsRequest>, I>>(
    object: I,
  ): QueryConsensusStateHeightsRequest {
    const message = createBaseQueryConsensusStateHeightsRequest();
    message.clientId = object.clientId ?? "";
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryConsensusStateHeightsResponse(): QueryConsensusStateHeightsResponse {
  return {
    consensusStateHeights: [],
    pagination: PageResponse.fromPartial({}),
  };
}
export const QueryConsensusStateHeightsResponse = {
  encode(message: QueryConsensusStateHeightsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.consensusStateHeights) {
      Height.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryConsensusStateHeightsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryConsensusStateHeightsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.consensusStateHeights.push(Height.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryConsensusStateHeightsResponse {
    const obj = createBaseQueryConsensusStateHeightsResponse();
    if (Array.isArray(object?.consensusStateHeights))
      object.consensusStateHeights.map((e: any) => Height.fromJSON(e));
    if (isSet(object.pagination)) obj.pagination = PageResponse.fromJSON(object.pagination);
    return obj;
  },
  toJSON(message: QueryConsensusStateHeightsResponse): unknown {
    const obj: any = {};
    if (message.consensusStateHeights) {
      obj.consensusStateHeights = message.consensusStateHeights.map((e) =>
        e ? Height.toJSON(e) : undefined,
      );
    } else {
      obj.consensusStateHeights = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryConsensusStateHeightsResponse>, I>>(
    object: I,
  ): QueryConsensusStateHeightsResponse {
    const message = createBaseQueryConsensusStateHeightsResponse();
    message.consensusStateHeights = object.consensusStateHeights?.map((e) => Height.fromPartial(e)) || [];
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    }
    return message;
  },
};
function createBaseQueryClientStatusRequest(): QueryClientStatusRequest {
  return {
    clientId: "",
  };
}
export const QueryClientStatusRequest = {
  encode(message: QueryClientStatusRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.clientId !== "") {
      writer.uint32(10).string(message.clientId);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.clientId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatusRequest {
    const obj = createBaseQueryClientStatusRequest();
    if (isSet(object.clientId)) obj.clientId = String(object.clientId);
    return obj;
  },
  toJSON(message: QueryClientStatusRequest): unknown {
    const obj: any = {};
    message.clientId !== undefined && (obj.clientId = message.clientId);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientStatusRequest>, I>>(
    object: I,
  ): QueryClientStatusRequest {
    const message = createBaseQueryClientStatusRequest();
    message.clientId = object.clientId ?? "";
    return message;
  },
};
function createBaseQueryClientStatusResponse(): QueryClientStatusResponse {
  return {
    status: "",
  };
}
export const QueryClientStatusResponse = {
  encode(message: QueryClientStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientStatusResponse {
    const obj = createBaseQueryClientStatusResponse();
    if (isSet(object.status)) obj.status = String(object.status);
    return obj;
  },
  toJSON(message: QueryClientStatusResponse): unknown {
    const obj: any = {};
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientStatusResponse>, I>>(
    object: I,
  ): QueryClientStatusResponse {
    const message = createBaseQueryClientStatusResponse();
    message.status = object.status ?? "";
    return message;
  },
};
function createBaseQueryClientParamsRequest(): QueryClientParamsRequest {
  return {};
}
export const QueryClientParamsRequest = {
  encode(_: QueryClientParamsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryClientParamsRequest {
    const obj = createBaseQueryClientParamsRequest();
    return obj;
  },
  toJSON(_: QueryClientParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientParamsRequest>, I>>(_: I): QueryClientParamsRequest {
    const message = createBaseQueryClientParamsRequest();
    return message;
  },
};
function createBaseQueryClientParamsResponse(): QueryClientParamsResponse {
  return {
    params: Params.fromPartial({}),
  };
}
export const QueryClientParamsResponse = {
  encode(message: QueryClientParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryClientParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryClientParamsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryClientParamsResponse {
    const obj = createBaseQueryClientParamsResponse();
    if (isSet(object.params)) obj.params = Params.fromJSON(object.params);
    return obj;
  },
  toJSON(message: QueryClientParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryClientParamsResponse>, I>>(
    object: I,
  ): QueryClientParamsResponse {
    const message = createBaseQueryClientParamsResponse();
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    }
    return message;
  },
};
function createBaseQueryUpgradedClientStateRequest(): QueryUpgradedClientStateRequest {
  return {};
}
export const QueryUpgradedClientStateRequest = {
  encode(_: QueryUpgradedClientStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryUpgradedClientStateRequest {
    const obj = createBaseQueryUpgradedClientStateRequest();
    return obj;
  },
  toJSON(_: QueryUpgradedClientStateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUpgradedClientStateRequest>, I>>(
    _: I,
  ): QueryUpgradedClientStateRequest {
    const message = createBaseQueryUpgradedClientStateRequest();
    return message;
  },
};
function createBaseQueryUpgradedClientStateResponse(): QueryUpgradedClientStateResponse {
  return {
    upgradedClientState: Any.fromPartial({}),
  };
}
export const QueryUpgradedClientStateResponse = {
  encode(message: QueryUpgradedClientStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedClientStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedClientStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedClientState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedClientStateResponse {
    const obj = createBaseQueryUpgradedClientStateResponse();
    if (isSet(object.upgradedClientState)) obj.upgradedClientState = Any.fromJSON(object.upgradedClientState);
    return obj;
  },
  toJSON(message: QueryUpgradedClientStateResponse): unknown {
    const obj: any = {};
    message.upgradedClientState !== undefined &&
      (obj.upgradedClientState = message.upgradedClientState
        ? Any.toJSON(message.upgradedClientState)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUpgradedClientStateResponse>, I>>(
    object: I,
  ): QueryUpgradedClientStateResponse {
    const message = createBaseQueryUpgradedClientStateResponse();
    if (object.upgradedClientState !== undefined && object.upgradedClientState !== null) {
      message.upgradedClientState = Any.fromPartial(object.upgradedClientState);
    }
    return message;
  },
};
function createBaseQueryUpgradedConsensusStateRequest(): QueryUpgradedConsensusStateRequest {
  return {};
}
export const QueryUpgradedConsensusStateRequest = {
  encode(_: QueryUpgradedConsensusStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(_: any): QueryUpgradedConsensusStateRequest {
    const obj = createBaseQueryUpgradedConsensusStateRequest();
    return obj;
  },
  toJSON(_: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {};
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateRequest>, I>>(
    _: I,
  ): QueryUpgradedConsensusStateRequest {
    const message = createBaseQueryUpgradedConsensusStateRequest();
    return message;
  },
};
function createBaseQueryUpgradedConsensusStateResponse(): QueryUpgradedConsensusStateResponse {
  return {
    upgradedConsensusState: Any.fromPartial({}),
  };
}
export const QueryUpgradedConsensusStateResponse = {
  encode(message: QueryUpgradedConsensusStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.upgradedConsensusState !== undefined) {
      Any.encode(message.upgradedConsensusState, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input: _m0.Reader | Uint8Array, length?: number): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryUpgradedConsensusStateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.upgradedConsensusState = Any.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    const obj = createBaseQueryUpgradedConsensusStateResponse();
    if (isSet(object.upgradedConsensusState))
      obj.upgradedConsensusState = Any.fromJSON(object.upgradedConsensusState);
    return obj;
  },
  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {};
    message.upgradedConsensusState !== undefined &&
      (obj.upgradedConsensusState = message.upgradedConsensusState
        ? Any.toJSON(message.upgradedConsensusState)
        : undefined);
    return obj;
  },
  fromPartial<I extends Exact<DeepPartial<QueryUpgradedConsensusStateResponse>, I>>(
    object: I,
  ): QueryUpgradedConsensusStateResponse {
    const message = createBaseQueryUpgradedConsensusStateResponse();
    if (object.upgradedConsensusState !== undefined && object.upgradedConsensusState !== null) {
      message.upgradedConsensusState = Any.fromPartial(object.upgradedConsensusState);
    }
    return message;
  },
};
/** Query provides defines the gRPC querier service */
export interface Query {
  /** ClientState queries an IBC light client. */
  ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse>;
  /** ClientStates queries all the IBC light clients of a chain. */
  ClientStates(request?: QueryClientStatesRequest): Promise<QueryClientStatesResponse>;
  /**
   * ConsensusState queries a consensus state associated with a client state at
   * a given height.
   */
  ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse>;
  /**
   * ConsensusStates queries all the consensus state associated with a given
   * client.
   */
  ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse>;
  /** ConsensusStateHeights queries the height of every consensus states associated with a given client. */
  ConsensusStateHeights(
    request: QueryConsensusStateHeightsRequest,
  ): Promise<QueryConsensusStateHeightsResponse>;
  /** Status queries the status of an IBC client. */
  ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse>;
  /** ClientParams queries all parameters of the ibc client submodule. */
  ClientParams(request?: QueryClientParamsRequest): Promise<QueryClientParamsResponse>;
  /** UpgradedClientState queries an Upgraded IBC light client. */
  UpgradedClientState(request?: QueryUpgradedClientStateRequest): Promise<QueryUpgradedClientStateResponse>;
  /** UpgradedConsensusState queries an Upgraded IBC consensus state. */
  UpgradedConsensusState(
    request?: QueryUpgradedConsensusStateRequest,
  ): Promise<QueryUpgradedConsensusStateResponse>;
}
export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.ClientState = this.ClientState.bind(this);
    this.ClientStates = this.ClientStates.bind(this);
    this.ConsensusState = this.ConsensusState.bind(this);
    this.ConsensusStates = this.ConsensusStates.bind(this);
    this.ConsensusStateHeights = this.ConsensusStateHeights.bind(this);
    this.ClientStatus = this.ClientStatus.bind(this);
    this.ClientParams = this.ClientParams.bind(this);
    this.UpgradedClientState = this.UpgradedClientState.bind(this);
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this);
  }
  ClientState(request: QueryClientStateRequest): Promise<QueryClientStateResponse> {
    const data = QueryClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientState", data);
    return promise.then((data) => QueryClientStateResponse.decode(new _m0.Reader(data)));
  }
  ClientStates(
    request: QueryClientStatesRequest = {
      pagination: PageRequest.fromPartial({}),
    },
  ): Promise<QueryClientStatesResponse> {
    const data = QueryClientStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStates", data);
    return promise.then((data) => QueryClientStatesResponse.decode(new _m0.Reader(data)));
  }
  ConsensusState(request: QueryConsensusStateRequest): Promise<QueryConsensusStateResponse> {
    const data = QueryConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusState", data);
    return promise.then((data) => QueryConsensusStateResponse.decode(new _m0.Reader(data)));
  }
  ConsensusStates(request: QueryConsensusStatesRequest): Promise<QueryConsensusStatesResponse> {
    const data = QueryConsensusStatesRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStates", data);
    return promise.then((data) => QueryConsensusStatesResponse.decode(new _m0.Reader(data)));
  }
  ConsensusStateHeights(
    request: QueryConsensusStateHeightsRequest,
  ): Promise<QueryConsensusStateHeightsResponse> {
    const data = QueryConsensusStateHeightsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ConsensusStateHeights", data);
    return promise.then((data) => QueryConsensusStateHeightsResponse.decode(new _m0.Reader(data)));
  }
  ClientStatus(request: QueryClientStatusRequest): Promise<QueryClientStatusResponse> {
    const data = QueryClientStatusRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientStatus", data);
    return promise.then((data) => QueryClientStatusResponse.decode(new _m0.Reader(data)));
  }
  ClientParams(request: QueryClientParamsRequest = {}): Promise<QueryClientParamsResponse> {
    const data = QueryClientParamsRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "ClientParams", data);
    return promise.then((data) => QueryClientParamsResponse.decode(new _m0.Reader(data)));
  }
  UpgradedClientState(
    request: QueryUpgradedClientStateRequest = {},
  ): Promise<QueryUpgradedClientStateResponse> {
    const data = QueryUpgradedClientStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedClientState", data);
    return promise.then((data) => QueryUpgradedClientStateResponse.decode(new _m0.Reader(data)));
  }
  UpgradedConsensusState(
    request: QueryUpgradedConsensusStateRequest = {},
  ): Promise<QueryUpgradedConsensusStateResponse> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish();
    const promise = this.rpc.request("ibc.core.client.v1.Query", "UpgradedConsensusState", data);
    return promise.then((data) => QueryUpgradedConsensusStateResponse.decode(new _m0.Reader(data)));
  }
}
