import useStyleifyMode from "../hooks/useStyleifyMode"

export default () => {
    const styleify = useStyleifyMode()

    const changeStorage = () => {
        var x = window.open("", "StorageUpdater", "width=10,height=10");
        if(x != null) {
            x.localStorage.setItem("styleify", styleify ? "false" : "true")
            x.close();
        }
    }

    return <button onClick={changeStorage} style={{
        position: "fixed",
        bottom: 8,
        right: "50%",
        transform: "translateX(50%)",
        borderStyle: styleify ? "outset" : undefined,
        cursor: "pointer",
    }}>
        Do a styleify
    </button>
}