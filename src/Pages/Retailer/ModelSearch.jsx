import React, { useState } from "react";
import "../../Css/ModelSearch.css";
import { Link } from "react-router-dom";

function ModelSearch() {
    const [searchType, setSearchType] = useState("contains");
    const [searchText, setSearchText] = useState("");
    const [selectedModel, setSelectedModel] = useState(null);

    const models = [
        { id: 1, name: "Honda CBR 150R", variants: ["Standard", "ABS"] },
        { id: 2, name: "Honda CB Shine", variants: ["Disc Brake", "Drum Brake"] },
        { id: 3, name: "Honda Activa 6G", variants: ["Deluxe", "Standard"] },
        { id: 4, name: "Honda Hornet 2.0", variants: ["BS6", "BS4"] },
        { id: 5, name: "Honda Dio", variants: ["Deluxe", "Standard"] },
        { id: 6, name: "Honda Unicorn", variants: ["Standard", "ABS"] },
    ];

    const engineFrameDetails = {
        "Honda CBR 150R": { engine: "149cc", frame: "Diamond Frame" },
        "Honda CB Shine": { engine: "125cc", frame: "Underbone Frame" },
        "Honda Activa 6G": { engine: "109.51cc", frame: "Underbone Frame" },
        "Honda Hornet 2.0": { engine: "184.4cc", frame: "Diamond Frame" },
        "Honda Dio": { engine: "109.51cc", frame: "Underbone Frame" },
        "Honda Unicorn": { engine: "162.7cc", frame: "Diamond Frame" },
    };

    const filteredModels = models.filter((model) => {
        if (!searchText) return false;
        if (searchType === "contains") return model.name.toLowerCase().includes(searchText.toLowerCase());
        if (searchType === "begins") return model.name.toLowerCase().startsWith(searchText.toLowerCase());
        if (searchType === "ends") return model.name.toLowerCase().endsWith(searchText.toLowerCase());
        return false;
    });

    const handleReset = () => {
        setSearchText("");
        setSelectedModel(null);
    };

    return (
        <div className="model-search-container">
            <div className="search-bar">
                <select value={searchType} onChange={(e) => setSearchType(e.target.value)}>
                    <option value="contains">Contains</option>
                    <option value="begins">Begins With</option>
                    <option value="ends">Ends With</option>
                </select>
                <input type="text" placeholder="Enter model name" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="search-btn">Search</button>
                <button className="reset-btn" onClick={handleReset}>Reset</button>
            </div>

            <div className="selection-container">
                <div className="model-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Model ({filteredModels.length})</th>
                                <th>Variant  ({filteredModels.reduce((acc, model) => acc + model.variants.length, 0)})</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredModels.length > 0 ? (
                                filteredModels.map((model) => (
                                    <tr key={model.id} onClick={() => setSelectedModel(model.name)}>
                                        <td>{model.name}</td>
                                        <td>{model.variants.join(", ")}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="2" className="no-data">No models found</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="variant-table">
                    <h3>Model Details</h3>
                    {selectedModel ? (
                        <>
                            <Link to={'/'}>
                                <p><strong>Engine:</strong> {engineFrameDetails[selectedModel]?.engine || "N/A"}</p>
                            </Link>
                            <Link to={'/'}>
                                <p><strong>Frame:</strong> {engineFrameDetails[selectedModel]?.frame || "N/A"}</p>
                            </Link>
                        </>
                    ) : (
                        <p className="no-details">Search for a model to view details.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ModelSearch;
