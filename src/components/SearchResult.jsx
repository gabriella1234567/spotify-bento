/* eslint-disable react/prop-types */
import useSearchType from "../hooks/useSearchType";
import "../styles/SearchResult.css";
const SearchResult = ({ searchQuery, type }) => {
    const results = useSearchType(searchQuery, type);
    const resultWithContent = Array.isArray(results) ? results.filter(item => item != null) : [];

    if (!searchQuery) {
        return (
            <div className="resultCard">
                <h2>{type}s</h2>
                </div>
        )
    }

    if (searchQuery && !results || results.length === 0) {
        return (
            <div className="resultCard">
                <h2>{type}s</h2>
                <h3>No {type}s matching &quot;{searchQuery}&quot; 😢</h3>
            </div>
        )
    }
    return (
        <div className="resultCard">
            <h2>{type}s</h2>
            {resultWithContent.map(item => (
                <div className="imageName" key={item.id}>
                    <h3>{item.name}</h3>
                    {item.images && item.images.length > 0 && ( 
                    <img src={item.images[0].url} alt={item.name} />
                )}</div>
            ))}
        </div>
    )
}

export default SearchResult;