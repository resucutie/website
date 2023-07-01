// function that joins class names together and ignores anything that it is not a string
export default (...classes: string[] | any[]) => {
    return classes.filter(s => typeof s == "string").join(' ')
}