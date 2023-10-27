import dayjs, { ConfigType } from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"

dayjs.extend(relativeTime)

export const relTime = (date: ConfigType) => dayjs().to(dayjs(date))