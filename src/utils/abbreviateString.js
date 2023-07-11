export default function abbreviateString(str, p) {
    if (str.length > p) {
        return str.substring(0, p) + '...';
    }
    return str;
};