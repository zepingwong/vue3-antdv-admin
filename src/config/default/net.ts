import { INetConfig } from "@/types/INetConfig"

export const defaultNet: INetConfig = {
    // 请求状态的字段名称
    statusName: "code",
    // 操作正常code，支持String、Array、int多种类型
    successCode: [200, 0, "200", "0"],
    messageName: "message"
}
