import React from "react";

// clock hook
export default (formatter?: Intl.DateTimeFormat): string => {
    const [time, setTime] = React.useState<Date>(new Date())

    React.useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000)
        return () => clearInterval(interval)
    }, [])

    return formatter ? formatter.format(time) : time.toLocaleDateString()
}