import parse from 'html-react-parser';

function HtmlComponent({ html = '' }) {
    return <div className="details__text">{parse(html)}</div>
};

export default HtmlComponent;