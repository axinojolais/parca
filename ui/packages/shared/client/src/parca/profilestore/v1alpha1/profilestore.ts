// @generated by protobuf-ts 2.9.4 with parameter generate_dependencies
// @generated from protobuf file "parca/profilestore/v1alpha1/profilestore.proto" (package "parca.profilestore.v1alpha1", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Duration } from "../../../google/protobuf/duration";
import { Timestamp } from "../../../google/protobuf/timestamp";
/**
 * WriteRawRequest writes a pprof profile for a given tenant
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.WriteRawRequest
 */
export interface WriteRawRequest {
    /**
     * tenant is the given tenant to store the pprof profile under
     *
     * @deprecated
     * @generated from protobuf field: string tenant = 1 [deprecated = true];
     */
    tenant: string;
    /**
     * series is a set raw pprof profiles and accompanying labels
     *
     * @generated from protobuf field: repeated parca.profilestore.v1alpha1.RawProfileSeries series = 2;
     */
    series: RawProfileSeries[];
    /**
     * normalized is a flag indicating if the addresses in the profile is normalized for position independent code
     *
     * @generated from protobuf field: bool normalized = 3;
     */
    normalized: boolean;
}
/**
 * WriteRawResponse is the empty response
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.WriteRawResponse
 */
export interface WriteRawResponse {
}
/**
 * RawProfileSeries represents the pprof profile and its associated labels
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.RawProfileSeries
 */
export interface RawProfileSeries {
    /**
     * LabelSet is the key value pairs to identify the corresponding profile
     *
     * @generated from protobuf field: parca.profilestore.v1alpha1.LabelSet labels = 1;
     */
    labels?: LabelSet;
    /**
     * samples are the set of profile bytes
     *
     * @generated from protobuf field: repeated parca.profilestore.v1alpha1.RawSample samples = 2;
     */
    samples: RawSample[];
}
/**
 * Label is a key value pair of identifiers
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.Label
 */
export interface Label {
    /**
     * name is the label name
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * value is the value for the label name
     *
     * @generated from protobuf field: string value = 2;
     */
    value: string;
}
/**
 * LabelSet is a group of labels
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.LabelSet
 */
export interface LabelSet {
    /**
     * labels are the grouping of labels
     *
     * @generated from protobuf field: repeated parca.profilestore.v1alpha1.Label labels = 1;
     */
    labels: Label[];
}
/**
 * RawSample is the set of bytes that correspond to a pprof profile
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.RawSample
 */
export interface RawSample {
    /**
     * raw_profile is the set of bytes of the pprof profile
     *
     * @generated from protobuf field: bytes raw_profile = 1;
     */
    rawProfile: Uint8Array;
    /**
     * information about the executable and executable section for normalizaton
     * purposes.
     *
     * @generated from protobuf field: repeated parca.profilestore.v1alpha1.ExecutableInfo executable_info = 2;
     */
    executableInfo: ExecutableInfo[];
}
/**
 * ExecutableInfo is the information about the executable and executable
 * section for normalizaton purposes before symbolization.
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.ExecutableInfo
 */
export interface ExecutableInfo {
    /**
     * elf_type is the type of the elf executable. Technically the elf type is a
     * 16 bit integer, but protobuf's smallest unsigned integer is 32 bits.
     *
     * @generated from protobuf field: uint32 elf_type = 1;
     */
    elfType: number;
    /**
     * load_segment is the load segment of the executable.
     *
     * @generated from protobuf field: parca.profilestore.v1alpha1.LoadSegment load_segment = 2;
     */
    loadSegment?: LoadSegment;
}
/**
 * LoadSegment is the load segment of the executable
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.LoadSegment
 */
export interface LoadSegment {
    /**
     * The offset from the beginning of the file at which the first byte of the segment resides.
     *
     * @generated from protobuf field: uint64 offset = 1;
     */
    offset: bigint;
    /**
     * The virtual address at which the first byte of the segment resides in memory.
     *
     * @generated from protobuf field: uint64 vaddr = 2;
     */
    vaddr: bigint;
}
/**
 * AgentsRequest is the request to retrieve a list of agents
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.AgentsRequest
 */
export interface AgentsRequest {
}
/**
 * AgentsResponse is the request to retrieve a list of agents
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.AgentsResponse
 */
export interface AgentsResponse {
    /**
     * agents is a list of agents
     *
     * @generated from protobuf field: repeated parca.profilestore.v1alpha1.Agent agents = 1;
     */
    agents: Agent[];
}
/**
 * Agent is the agent representation
 *
 * @generated from protobuf message parca.profilestore.v1alpha1.Agent
 */
export interface Agent {
    /**
     * id is the agent identity that either represent by the node name or the IP address.
     * When node name is not found, this will fallback to IP address.
     *
     * @generated from protobuf field: string id = 1;
     */
    id: string;
    /**
     * last_error is the error message most recently received from a push attempt
     *
     * @generated from protobuf field: string last_error = 2;
     */
    lastError: string;
    /**
     * last_push is the time stamp the last push request was performed
     *
     * @generated from protobuf field: google.protobuf.Timestamp last_push = 3;
     */
    lastPush?: Timestamp;
    /**
     * last_push_duration is the duration of the last push request
     *
     * @generated from protobuf field: google.protobuf.Duration last_push_duration = 4;
     */
    lastPushDuration?: Duration;
}
// @generated message type with reflection information, may provide speed optimized methods
class WriteRawRequest$Type extends MessageType<WriteRawRequest> {
    constructor() {
        super("parca.profilestore.v1alpha1.WriteRawRequest", [
            { no: 1, name: "tenant", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "series", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RawProfileSeries },
            { no: 3, name: "normalized", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<WriteRawRequest>): WriteRawRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.tenant = "";
        message.series = [];
        message.normalized = false;
        if (value !== undefined)
            reflectionMergePartial<WriteRawRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WriteRawRequest): WriteRawRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string tenant = 1 [deprecated = true];*/ 1:
                    message.tenant = reader.string();
                    break;
                case /* repeated parca.profilestore.v1alpha1.RawProfileSeries series */ 2:
                    message.series.push(RawProfileSeries.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* bool normalized */ 3:
                    message.normalized = reader.bool();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: WriteRawRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string tenant = 1 [deprecated = true]; */
        if (message.tenant !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.tenant);
        /* repeated parca.profilestore.v1alpha1.RawProfileSeries series = 2; */
        for (let i = 0; i < message.series.length; i++)
            RawProfileSeries.internalBinaryWrite(message.series[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* bool normalized = 3; */
        if (message.normalized !== false)
            writer.tag(3, WireType.Varint).bool(message.normalized);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.WriteRawRequest
 */
export const WriteRawRequest = new WriteRawRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class WriteRawResponse$Type extends MessageType<WriteRawResponse> {
    constructor() {
        super("parca.profilestore.v1alpha1.WriteRawResponse", []);
    }
    create(value?: PartialMessage<WriteRawResponse>): WriteRawResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<WriteRawResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: WriteRawResponse): WriteRawResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: WriteRawResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.WriteRawResponse
 */
export const WriteRawResponse = new WriteRawResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RawProfileSeries$Type extends MessageType<RawProfileSeries> {
    constructor() {
        super("parca.profilestore.v1alpha1.RawProfileSeries", [
            { no: 1, name: "labels", kind: "message", T: () => LabelSet },
            { no: 2, name: "samples", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => RawSample }
        ]);
    }
    create(value?: PartialMessage<RawProfileSeries>): RawProfileSeries {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.samples = [];
        if (value !== undefined)
            reflectionMergePartial<RawProfileSeries>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RawProfileSeries): RawProfileSeries {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* parca.profilestore.v1alpha1.LabelSet labels */ 1:
                    message.labels = LabelSet.internalBinaryRead(reader, reader.uint32(), options, message.labels);
                    break;
                case /* repeated parca.profilestore.v1alpha1.RawSample samples */ 2:
                    message.samples.push(RawSample.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RawProfileSeries, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* parca.profilestore.v1alpha1.LabelSet labels = 1; */
        if (message.labels)
            LabelSet.internalBinaryWrite(message.labels, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated parca.profilestore.v1alpha1.RawSample samples = 2; */
        for (let i = 0; i < message.samples.length; i++)
            RawSample.internalBinaryWrite(message.samples[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.RawProfileSeries
 */
export const RawProfileSeries = new RawProfileSeries$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Label$Type extends MessageType<Label> {
    constructor() {
        super("parca.profilestore.v1alpha1.Label", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Label>): Label {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.value = "";
        if (value !== undefined)
            reflectionMergePartial<Label>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Label): Label {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* string value */ 2:
                    message.value = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Label, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* string value = 2; */
        if (message.value !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.Label
 */
export const Label = new Label$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LabelSet$Type extends MessageType<LabelSet> {
    constructor() {
        super("parca.profilestore.v1alpha1.LabelSet", [
            { no: 1, name: "labels", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Label }
        ]);
    }
    create(value?: PartialMessage<LabelSet>): LabelSet {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.labels = [];
        if (value !== undefined)
            reflectionMergePartial<LabelSet>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LabelSet): LabelSet {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated parca.profilestore.v1alpha1.Label labels */ 1:
                    message.labels.push(Label.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LabelSet, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated parca.profilestore.v1alpha1.Label labels = 1; */
        for (let i = 0; i < message.labels.length; i++)
            Label.internalBinaryWrite(message.labels[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.LabelSet
 */
export const LabelSet = new LabelSet$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RawSample$Type extends MessageType<RawSample> {
    constructor() {
        super("parca.profilestore.v1alpha1.RawSample", [
            { no: 1, name: "raw_profile", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "executable_info", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ExecutableInfo }
        ]);
    }
    create(value?: PartialMessage<RawSample>): RawSample {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.rawProfile = new Uint8Array(0);
        message.executableInfo = [];
        if (value !== undefined)
            reflectionMergePartial<RawSample>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RawSample): RawSample {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes raw_profile */ 1:
                    message.rawProfile = reader.bytes();
                    break;
                case /* repeated parca.profilestore.v1alpha1.ExecutableInfo executable_info */ 2:
                    message.executableInfo.push(ExecutableInfo.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: RawSample, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes raw_profile = 1; */
        if (message.rawProfile.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.rawProfile);
        /* repeated parca.profilestore.v1alpha1.ExecutableInfo executable_info = 2; */
        for (let i = 0; i < message.executableInfo.length; i++)
            ExecutableInfo.internalBinaryWrite(message.executableInfo[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.RawSample
 */
export const RawSample = new RawSample$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecutableInfo$Type extends MessageType<ExecutableInfo> {
    constructor() {
        super("parca.profilestore.v1alpha1.ExecutableInfo", [
            { no: 1, name: "elf_type", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "load_segment", kind: "message", T: () => LoadSegment }
        ]);
    }
    create(value?: PartialMessage<ExecutableInfo>): ExecutableInfo {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.elfType = 0;
        if (value !== undefined)
            reflectionMergePartial<ExecutableInfo>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ExecutableInfo): ExecutableInfo {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 elf_type */ 1:
                    message.elfType = reader.uint32();
                    break;
                case /* parca.profilestore.v1alpha1.LoadSegment load_segment */ 2:
                    message.loadSegment = LoadSegment.internalBinaryRead(reader, reader.uint32(), options, message.loadSegment);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ExecutableInfo, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 elf_type = 1; */
        if (message.elfType !== 0)
            writer.tag(1, WireType.Varint).uint32(message.elfType);
        /* parca.profilestore.v1alpha1.LoadSegment load_segment = 2; */
        if (message.loadSegment)
            LoadSegment.internalBinaryWrite(message.loadSegment, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.ExecutableInfo
 */
export const ExecutableInfo = new ExecutableInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LoadSegment$Type extends MessageType<LoadSegment> {
    constructor() {
        super("parca.profilestore.v1alpha1.LoadSegment", [
            { no: 1, name: "offset", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "vaddr", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<LoadSegment>): LoadSegment {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.offset = 0n;
        message.vaddr = 0n;
        if (value !== undefined)
            reflectionMergePartial<LoadSegment>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LoadSegment): LoadSegment {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 offset */ 1:
                    message.offset = reader.uint64().toBigInt();
                    break;
                case /* uint64 vaddr */ 2:
                    message.vaddr = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: LoadSegment, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint64 offset = 1; */
        if (message.offset !== 0n)
            writer.tag(1, WireType.Varint).uint64(message.offset);
        /* uint64 vaddr = 2; */
        if (message.vaddr !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.vaddr);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.LoadSegment
 */
export const LoadSegment = new LoadSegment$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AgentsRequest$Type extends MessageType<AgentsRequest> {
    constructor() {
        super("parca.profilestore.v1alpha1.AgentsRequest", []);
    }
    create(value?: PartialMessage<AgentsRequest>): AgentsRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<AgentsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AgentsRequest): AgentsRequest {
        return target ?? this.create();
    }
    internalBinaryWrite(message: AgentsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.AgentsRequest
 */
export const AgentsRequest = new AgentsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AgentsResponse$Type extends MessageType<AgentsResponse> {
    constructor() {
        super("parca.profilestore.v1alpha1.AgentsResponse", [
            { no: 1, name: "agents", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Agent }
        ]);
    }
    create(value?: PartialMessage<AgentsResponse>): AgentsResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.agents = [];
        if (value !== undefined)
            reflectionMergePartial<AgentsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AgentsResponse): AgentsResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated parca.profilestore.v1alpha1.Agent agents */ 1:
                    message.agents.push(Agent.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: AgentsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated parca.profilestore.v1alpha1.Agent agents = 1; */
        for (let i = 0; i < message.agents.length; i++)
            Agent.internalBinaryWrite(message.agents[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.AgentsResponse
 */
export const AgentsResponse = new AgentsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Agent$Type extends MessageType<Agent> {
    constructor() {
        super("parca.profilestore.v1alpha1.Agent", [
            { no: 1, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "last_error", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "last_push", kind: "message", T: () => Timestamp },
            { no: 4, name: "last_push_duration", kind: "message", T: () => Duration }
        ]);
    }
    create(value?: PartialMessage<Agent>): Agent {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.id = "";
        message.lastError = "";
        if (value !== undefined)
            reflectionMergePartial<Agent>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Agent): Agent {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 1:
                    message.id = reader.string();
                    break;
                case /* string last_error */ 2:
                    message.lastError = reader.string();
                    break;
                case /* google.protobuf.Timestamp last_push */ 3:
                    message.lastPush = Timestamp.internalBinaryRead(reader, reader.uint32(), options, message.lastPush);
                    break;
                case /* google.protobuf.Duration last_push_duration */ 4:
                    message.lastPushDuration = Duration.internalBinaryRead(reader, reader.uint32(), options, message.lastPushDuration);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Agent, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string id = 1; */
        if (message.id !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.id);
        /* string last_error = 2; */
        if (message.lastError !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.lastError);
        /* google.protobuf.Timestamp last_push = 3; */
        if (message.lastPush)
            Timestamp.internalBinaryWrite(message.lastPush, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration last_push_duration = 4; */
        if (message.lastPushDuration)
            Duration.internalBinaryWrite(message.lastPushDuration, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message parca.profilestore.v1alpha1.Agent
 */
export const Agent = new Agent$Type();
/**
 * @generated ServiceType for protobuf service parca.profilestore.v1alpha1.ProfileStoreService
 */
export const ProfileStoreService = new ServiceType("parca.profilestore.v1alpha1.ProfileStoreService", [
    { name: "WriteRaw", options: { "google.api.http": { post: "/profiles/writeraw", body: "*" } }, I: WriteRawRequest, O: WriteRawResponse }
]);
/**
 * @generated ServiceType for protobuf service parca.profilestore.v1alpha1.AgentsService
 */
export const AgentsService = new ServiceType("parca.profilestore.v1alpha1.AgentsService", [
    { name: "Agents", options: { "google.api.http": { get: "/agents" } }, I: AgentsRequest, O: AgentsResponse }
]);
