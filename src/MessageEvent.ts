import isNode from "./isNode";
import Event from "./Event";


class MessageEventPolyfill extends Event implements MessageEvent {

    public readonly data: any;
    public readonly origin: string;
    public readonly ports: any;
    public readonly source: Window;


    constructor(type: string, eventInitDict?: MessageEventInit) {
        super(type);
        this.data = eventInitDict.data;
        this.cancelable;
    }

    initMessageEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, dataArg: any, originArg: string, lastEventIdArg: string, sourceArg: Window): void {
        throw new Error("initMessageEvent is deprecated")
    }

}

export default (isNode ? MessageEventPolyfill : MessageEvent) as { new(type: string, eventInitDict?: MessageEventInit): MessageEvent };