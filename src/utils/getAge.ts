/**
 * @see {@link https://stackoverflow.com/a/50827764}
*/
export default (birthday: Date) => {
    return Math.floor((new Date() as any - birthday.getTime()) / 3.15576e+10) // and yes the "as any" is because typescript does not know that subtraction of Date is a thing
}