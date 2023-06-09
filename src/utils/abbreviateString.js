export default function abbreviateString(str) {
    if (str.length > 40) {
        return str.substring(0, 40) + '...';
    }
    return str;
};