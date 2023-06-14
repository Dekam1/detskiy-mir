import parse from 'html-react-parser';

export default function HtmlComponent({ html = '' }) {
    return <div className="details__text">{parse(html)}</div>
}