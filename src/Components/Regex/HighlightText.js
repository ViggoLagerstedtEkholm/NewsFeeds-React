export const HighlightText = (text, highlight) =>{
    highlight = highlight.toString();
    const parts = text.toString().split(new RegExp(`(${highlight})`, 'gi'));
    return <span> { parts.map((part, i) =>
        <span key={i} style={part.toLowerCase() === highlight.toLowerCase() ? { 'background-color': 'rgba(255,234,0,0.59)' } : {} }>
            { part }
        </span>)
    } </span>;
}